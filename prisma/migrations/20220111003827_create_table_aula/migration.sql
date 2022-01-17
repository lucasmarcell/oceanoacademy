/*
  Warnings:

  - You are about to drop the `aulas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "aulas" DROP CONSTRAINT "aulas_id_student_fkey";

-- DropForeignKey
ALTER TABLE "aulas" DROP CONSTRAINT "aulas_id_teacher_fkey";

-- DropTable
DROP TABLE "aulas";

-- CreateTable
CREATE TABLE "Aula" (
    "id" TEXT NOT NULL,
    "id_students" TEXT,
    "id_teacher" TEXT NOT NULL,
    "lesson" TEXT,
    "presence" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Aula_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Aula" ADD CONSTRAINT "Aula_id_students_fkey" FOREIGN KEY ("id_students") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aula" ADD CONSTRAINT "Aula_id_teacher_fkey" FOREIGN KEY ("id_teacher") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
