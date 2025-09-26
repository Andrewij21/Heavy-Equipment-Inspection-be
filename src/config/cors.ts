import type { CorsOptions } from "cors";

const whiteLists = [
  "http://localhost:3000",
  "https://heavy-equipment-inspection.vercel.app",
];

export const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (whiteLists.indexOf(origin as string) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
