import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.info("seeding database...");
  console.log("Resetting the database...");

  // Get all model names from Prisma's DMMF
  // This is a dynamic way to avoid hardcoding model names
  const modelNames = Object.keys(prisma).filter(
    (key) => !key.startsWith("_") && key !== "$extends"
  );

  for (const modelName of modelNames) {
    // The type assertion is needed because we're accessing models dynamically
    const model = prisma[modelName as keyof PrismaClient];
    if (model && typeof (model as any).deleteMany === "function") {
      await (model as any).deleteMany({});
      console.log(`- Cleared all records from ${modelName}`);
    }
  }

  const hashedPassword = await bcrypt.hash("password", 10);
  // Use upsert to create or update users
  const user = await prisma.user.upsert({
    where: { email: "mechanic@gmail.com" },
    update: { password: hashedPassword, role: "mechanic" },
    create: {
      username: "mechanic",
      contact: "1234567890",
      email: "mechanic@gmail.com",
      password: hashedPassword,
      role: "mechanic",
    },
  });
  const leader = await prisma.user.upsert({
    where: { email: "leader@gmail.com" },
    update: { password: hashedPassword, role: "leader" },
    create: {
      username: "leader",
      contact: "1234567890",
      email: "leader@gmail.com",
      password: hashedPassword,
      role: "leader",
    },
  });

  const admin = await prisma.user.upsert({
    where: { email: "admin@gmail.com" },
    update: { password: hashedPassword, role: "admin" },
    create: {
      username: "admin",
      contact: "1234567890",
      email: "admin@gmail.com",
      password: hashedPassword,
      role: "admin",
    },
  });

  console.info(`Upserted user with ID: ${user.id}`);
  console.info(`Upserted admin with ID: ${admin.id}`);
  console.info(`Upserted leader with ID: ${leader.id}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
