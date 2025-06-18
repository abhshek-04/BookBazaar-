-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_createdById_fkey";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "createdById" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
