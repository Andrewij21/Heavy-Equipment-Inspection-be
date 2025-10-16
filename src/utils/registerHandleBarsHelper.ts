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

  handlebarsInstance.registerHelper("subtract", function (a, b) {
    return a - b;
  });
  handlebarsInstance.registerHelper("times", function (n, block) {
    let accum = "";
    for (let i = 0; i < n; ++i) accum += block.fn(i);
    return accum;
  });
}
