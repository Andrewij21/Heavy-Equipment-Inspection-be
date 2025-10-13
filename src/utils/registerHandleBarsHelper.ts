// Impor 'Handlebars' hanya untuk mendapatkan tipenya
import type Handlebars from "handlebars";

// 1. Terima instance Handlebars sebagai argumen
export function registerHandlebarsHelpers(
  handlebarsInstance: typeof Handlebars
) {
  // 2. Gunakan instance yang diberikan, bukan yang diimpor secara global
  handlebarsInstance.registerHelper("eq", function (a, b) {
    return a === b;
  });

  handlebarsInstance.registerHelper("addOne", function (value) {
    if (typeof value === "number") {
      return value + 1;
    }
    return value;
  });
}
