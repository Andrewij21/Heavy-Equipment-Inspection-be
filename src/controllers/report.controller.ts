// src/controllers/report.controller.ts
import { Request, Response } from "express";
import { reportService } from "../services/report.service";
import { z } from "zod";

// Zod schema for the export payload validation (using query types)
const exportSchema = z.object({
  // The query sends a string, which we split into an array of strings
  inspectionIds: z
    .string()
    .min(1, "Inspection IDs are required")
    .transform((val) => val.split(",")),
  format: z.enum(["pdf", "excel", "csv"]),
});

export class ReportController {
  exportData = async (req: Request, res: Response) => {
    // CRITICAL: Get data from req.query and assert the required types.
    // We combine the necessary query parameters and validate.
    const { inspectionIds: idsString, format } = req.query;

    const payload = exportSchema.parse({
      inspectionIds: idsString as string, // Cast for Zod parsing (which splits the string)
      format: format as "pdf" | "excel" | "csv",
    });

    // Process export through service
    const { fileBuffer, mimeType, fileName } =
      await reportService.exportInspections(payload);

    // Set headers and send the file
    res.setHeader("Content-Type", mimeType);
    res.setHeader("Content-Disposition", `attachment; filename="${fileName}"`);
    res.status(200).send(fileBuffer);
  };
}

export const reportController = new ReportController();
