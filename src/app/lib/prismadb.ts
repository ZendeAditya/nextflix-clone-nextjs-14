import { PrismaClient } from "@prisma/client";

const globalPrisma = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV !== "production") global.prismadb = globalPrisma;

export default globalPrisma;
