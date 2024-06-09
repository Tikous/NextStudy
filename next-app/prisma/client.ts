import { PrismaClient } from "@prisma/client";

/**
 * Because there is a fast refresh in nextjs
 * anytime we change our source code
 * nextjs refresh some of modules
 * in this case, there may have too many Prisma clients.
 * This only happens in development.
 * So this code using global namespace to store a single instance of Prisma.
 */
const prismaClientSingleton = () => {
  // This object have access to the models we have defined in our schema
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;
