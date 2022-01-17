-- DropForeignKey
ALTER TABLE "class" DROP CONSTRAINT "class_id_student_fkey";

-- AlterTable
ALTER TABLE "class" ALTER COLUMN "id_student" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "class" ADD CONSTRAINT "class_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE;
