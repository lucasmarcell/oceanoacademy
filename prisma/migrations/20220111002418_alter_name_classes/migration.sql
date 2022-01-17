/*
  Warnings:

  - You are about to drop the `class` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "class" DROP CONSTRAINT "class_id_student_fkey";

-- DropForeignKey
ALTER TABLE "class" DROP CONSTRAINT "class_id_teacher_fkey";

-- DropTable
DROP TABLE "class";

-- CreateTable
CREATE TABLE "classes" (
    "id" TEXT NOT NULL,
    "id_student" TEXT,
    "id_teacher" TEXT NOT NULL,
    "lesson" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_id_teacher_fkey" FOREIGN KEY ("id_teacher") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
