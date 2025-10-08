export interface ChecklistItem {
  label: string;
  field: string; // Nama field di object trackDetails
  type: "result" | "temp" | "topup"; // Tipe item
}

export interface ChecklistSection {
  title: string;
  fields: ChecklistItem[];
}
