/*
  Warnings:

  - You are about to drop the `_AulaToStudents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_AulaToStudents" DROP CONSTRAINT "_AulaToStudents_A_fkey";

-- DropForeignKey
ALTER TABLE "_AulaToStudents" DROP CONSTRAINT "_AulaToStudents_B_fkey";

-- DropForeignKey
ALTER TABLE "aula" DROP CONSTRAINT "aula_id_students_fkey";

-- DropForeignKey
ALTER TABLE "aula" DROP CONSTRAINT "aula_id_teacher_fkey";

-- AlterTable
ALTER TABLE "aula" ALTER COLUMN "id_students" DROP NOT NULL,
ALTER COLUMN "id_teacher" DROP NOT NULL,
ALTER COLUMN "lesson" DROP NOT NULL,
ALTER COLUMN "presence" DROP NOT NULL;

-- DropTable
DROP TABLE "_AulaToStudents";

-- AddForeignKey
ALTER TABLE "aula" ADD CONSTRAINT "aula_id_students_fkey" FOREIGN KEY ("id_students") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aula" ADD CONSTRAINT "aula_id_teacher_fkey" FOREIGN KEY ("id_teacher") REFERENCES "teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
