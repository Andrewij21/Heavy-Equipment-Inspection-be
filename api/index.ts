// api/index.ts
import { app } from "../src/app";

// Vercel akan menggunakan 'app' yang diekspor ini
// untuk membuat serverless function.
export default app;
