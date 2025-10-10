// export interface ChecklistItem {
//   label: string;
//   field: string; // Nama field di object trackDetails
//   type: "result" | "temp" | "topup"; // Tipe item
// }
// Interface untuk item checklist biasa (result, topup, select)
export interface SimpleChecklistItem {
  label: string;
  field: string; // Hanya punya satu 'field'
  type: "result" | "topup" | "select";
}

// Interface KHUSUS untuk grup data temperatur
export interface TemperatureGroupItem {
  label: string;
  type: "temperatureGroup"; // 'type' ini menjadi pembeda
  fieldNames: {
    // Tidak punya 'field', tapi punya 'fieldNames'
    result: string;
    rh: string;
    lh: string;
    deltaT: string;
  };
}

// Discriminated Union: Sebuah ChecklistItem bisa berupa salah satu dari dua tipe di atas
export type ChecklistItem = SimpleChecklistItem | TemperatureGroupItem;

// Interface ChecklistSection sekarang menggunakan tipe ChecklistItem yang baru
export interface ChecklistSection {
  title: string;
  fields: ChecklistItem[];
}
