import {PrismaClient} from "../generated/prisma/index.js"


const globleForPrisma = globalThis;


export const db = globleForPrisma.prisma || new PrismaClient();

if(process.env.NODE_ENV !== "production ") globleForPrisma.prisma = db