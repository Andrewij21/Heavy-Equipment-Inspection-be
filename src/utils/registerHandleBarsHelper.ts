import Handlebars from "handlebars";

export function registerHandlebarsHelpers() {
  // Helper untuk membandingkan dua nilai (equals)
  Handlebars.registerHelper("eq", function (a, b) {
    return a === b;
  });

  // Helper untuk menambahkan 1 ke sebuah angka (untuk @index)
  Handlebars.registerHelper("addOne", function (value) {
    // Pastikan value adalah angka sebelum menambahkannya
    if (typeof value === "number") {
      return value + 1;
    }
    return value;
  });

  // Anda bisa menambahkan helper lain di sini di masa depan
}
