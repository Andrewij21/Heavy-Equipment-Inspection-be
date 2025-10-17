// src/services/track.service.ts
import { prisma } from "../lib/prisma";
import type { TrackInspection } from "../schemas/inspection.schema";
import { NotFoundError } from "../utils/customeErrors";

// CRITICAL: Ensure this import is correct and up-to-date
import { Prisma, InspectionStatus } from "@prisma/client";

// Define the required Prisma type alias correctly
type InspectionCreateInput = Prisma.InspectionCreateInput;

// Helper to remove all properties that are 'undefined' from an object.
const removeUndefined = <T extends Record<string, any>>(obj: T): Partial<T> => {
  return Object.fromEntries(
    Object.entries(obj).filter(([, value]) => value !== undefined)
  ) as Partial<T>;
};

// Modified helper function to separate and clean data
const separateTrackData = (
  data: TrackInspection | Partial<TrackInspection>
) => {
  const cleanedInput = removeUndefined(data as Record<string, any>);

  const {
    equipmentId,
    modelUnit,
    location,
    operatorName,
    mechanicName,
    inspectionDate,
    inspectionTime,
    workingHours,
    smr,
    timeDown,
    timeOut,
    shift,
    notes,
    groupLeaderName,
    equipmentType,
    equipmentGeneralType,
    status,
    approverId,
    approvalDate, // These fields are now handled correctly as optional base fields
    mechanicId,
    timeStop,
    ...trackDetails
  } = cleanedInput;

  const baseData = {
    equipmentId,
    modelUnit,
    location,
    operatorName,
    mechanicName,
    inspectionDate,
    inspectionTime,
    workingHours,
    smr,
    timeDown,
    timeOut,
    shift,
    notes,
    groupLeaderName,
    equipmentType,
    equipmentGeneralType,
    status,
    approverId,
    approvalDate,
    mechanicId,
    timeStop,
  };

  const cleanedBaseData = removeUndefined(baseData);

  return { baseData: cleanedBaseData, trackDetails: trackDetails };
};

// Define the standard selection for the approver
const approverSelection = {
  select: {
    id: true,
    username: true,
    email: true,
  },
};

class TrackService {
  /**
   * Fetches all Inspections, filtered by track type, including approver name.
   */
  async getAll(params: {
    page?: number;
    limit?: number;
    q?: string;
    modelUnit?: string;
  }) {
    const { page = 1, limit = 10, modelUnit, q } = params;
    const skip = (page - 1) * limit;

    const where: any = {
      equipmentType: "track",
    };

    if (modelUnit) where.modelUnit = modelUnit;
    if (q) {
      where.OR = [
        { equipmentId: { contains: q, mode: "insensitive" } },
        { location: { contains: q, mode: "insensitive" } },
      ];
    }

    const [inspections, count] = await prisma.$transaction([
      prisma.inspection.findMany({
        where,
        skip,
        take: limit,
        include: {
          trackDetails: true,
          approver: approverSelection, // Now correctly included
        },
      }),
      prisma.inspection.count({ where }),
    ]);
    return { inspections, count };
  }

  /**
   * Fetches a single Inspection by ID, including details and approver name.
   */
  async getById(id: string) {
    const inspection = await prisma.inspection.findFirst({
      where: { id, equipmentType: "track" },
      include: {
        trackDetails: true,
        approver: approverSelection,
      },
    });
    if (!inspection) throw new NotFoundError("Track Inspection not found");
    return inspection;
  }

  /**
   * Creates a new Inspection. Status defaults to PENDING.
   */
  // async create(data: TrackInspection) {
  //   const { baseData, trackDetails } = separateTrackData(data);
  //   const mechanicId = baseData.mechanicId; // Ambil mechanicId secara terpisah
  //   delete baseData.mechanicId; // Hapus mechanicId dari baseData agar tidak konflik saat spread

  //   if (!mechanicId) {
  //     throw new Error("Mechanic ID is required for inspection creation.");
  //   }
  //   return prisma.inspection.create({
  //     data: {
  //       ...(baseData as any),
  //       mechanic: {
  //         connect: {
  //           id: mechanicId,
  //         },
  //       },

  //       // 3. Buat Track Details
  //       trackDetails: {
  //         create: trackDetails,
  //       },
  //     },
  //     include: {
  //       trackDetails: true,
  //       approver: approverSelection,
  //       mechanic: true,
  //     },
  //   });
  // }
  async create(data: any) {
    // 1. Definisikan secara KETAT SEMUA field header yang ada di model Inspection
    //    Ini adalah cara paling aman untuk memastikan detail tidak bocor.
    const {
      equipmentId,
      modelUnit,
      location,
      operatorName,
      mechanicName,
      inspectionDate,
      inspectionTime,
      workingHours,
      smr,
      timeDown,
      timeOut,
      shift,
      notes,
      groupLeaderName,
      equipmentType,
      equipmentGeneralType,
      mechanicId,
      approverId,
      approvalDate,
      status,
      timeStop,
      // Semua field yang TIDAK di-destructure di sini akan masuk ke 'wheelDetailsPayload'
      ...trackDetailsPayload
    } = data;

    // 2. Kumpulkan field header yang aman
    const baseData = {
      equipmentId,
      modelUnit,
      location,
      operatorName,
      mechanicName,
      inspectionDate,
      inspectionTime,
      workingHours,
      smr,
      timeDown,
      timeOut,
      shift,
      notes,
      groupLeaderName,
      equipmentType,
      equipmentGeneralType,
      approverId,
      approvalDate,
      status,
      timeStop,
    };

    // 3. Ambil findings dan hapus dari detail, lalu masukkan kembali.
    const findings = trackDetailsPayload.findings;
    delete trackDetailsPayload.findings;

    // ... (Validasi mechanicId) ...
    if (!mechanicId) {
      throw new Error("Mechanic ID is required for inspection creation.");
    }

    // Pastikan field EquipmentType disetel ke 'wheel'
    // (Field ini sudah ada di baseData, jadi ini hanya double check)
    baseData.equipmentType = "track";

    return prisma.inspection.create({
      data: {
        // Sebarkan data header yang aman
        ...(baseData as any),

        // Hubungkan (Connect) ke model User
        mechanic: {
          connect: {
            id: mechanicId,
          },
        },

        // Buat Wheel Details (Menggunakan detail yang sudah bersih)
        trackDetails: {
          create: {
            ...trackDetailsPayload, // Semua field checklist (reverseCamera, engineVisualCheck, dll.)
            findings: findings, // Findings (array of objects)
          },
        },
      },
      include: {
        trackDetails: true,
        approver: { select: { id: true, username: true, email: true } },
        mechanic: true,
      },
    });
  }
  /**
   * Updates an Inspection (base fields and details).
   */
  async update(id: string, data: Partial<TrackInspection>) {
    const { baseData, trackDetails } = separateTrackData(data);

    // 1. Update the base Inspection data
    const updatedInspection = await prisma.inspection.update({
      where: { id },
      data: baseData, // 'data: baseData' is correct for update
      include: { trackDetails: true, approver: approverSelection },
    });

    // 2. Update details if the record exists and if there are detail fields to update
    if (
      updatedInspection.trackDetails &&
      Object.keys(trackDetails).length > 0
    ) {
      await prisma.trackInspectionDetails.update({
        where: { inspectionId: id },
        data: trackDetails,
      });
    }

    return updatedInspection;
  }

  /**
   * Updates the status and records the approver's audit trail.
   */
  async updateStatus(
    id: string,
    newStatus: InspectionStatus,
    approverId: string
  ) {
    const updated = await prisma.inspection.update({
      where: { id, equipmentType: "track" },
      data: {
        status: newStatus,
        approverId: approverId,
        approvalDate: new Date(),
      },
      include: {
        trackDetails: true,
        approver: approverSelection,
      },
    });

    if (!updated) {
      throw new NotFoundError("Inspection not found or not a track type.");
    }

    return updated;
  }

  /**
   * Deletes the Inspection and cascades the deletion to the TrackInspectionDetails.
   */
  async delete(id: string) {
    return prisma.inspection.delete({ where: { id, equipmentType: "track" } });
  }
}

// Export a singleton
export const trackService = new TrackService();
