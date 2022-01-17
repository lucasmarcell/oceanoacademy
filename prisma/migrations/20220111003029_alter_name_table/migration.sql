/*
  Warnings:

  - You are about to drop the `classes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "classes" DROP CONSTRAINT "classes_id_student_fkey";

-- DropForeignKey
ALTER TABLE "classes" DROP CONSTRAINT "classes_id_teacher_fkey";

-- DropTable
DROP TABLE "classes";

-- CreateTable
CREATE TABLE "aulas" (
    "id" TEXT NOT NULL,
    "id_student" TEXT,
    "id_teacher" TEXT NOT NULL,
    "lesson" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aulas_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "aulas" ADD CONSTRAINT "aulas_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aulas" ADD CONSTRAINT "aulas_id_teacher_fkey" FOREIGN KEY ("id_teacher") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
