import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function run() {
  try {
    // This inserts a test user into your PostgreSQL database
    const newUser = await prisma.user.create({
      data: {
        email: "abu_test@gmail.com",
        name: "Abu Dream",
      },
    });
    console.log("🔥 SUCCESS! Data saved to PostgreSQL:", newUser);
  } catch (error) {
    console.error("❌ Error saving data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

run();
