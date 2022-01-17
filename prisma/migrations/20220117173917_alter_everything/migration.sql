/*
  Warnings:

  - You are about to drop the `Aula` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Aula" DROP CONSTRAINT "Aula_id_students_fkey";

-- DropForeignKey
ALTER TABLE "Aula" DROP CONSTRAINT "Aula_id_teacher_fkey";

-- DropTable
DROP TABLE "Aula";

-- CreateTable
CREATE TABLE "aula" (
    "id" TEXT NOT NULL,
    "id_students" TEXT,
    "id_teacher" TEXT,
    "lesson" TEXT,
    "presence" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "aula_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_AulaToStudents" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_AulaToStudents_AB_unique" ON "_AulaToStudents"("A", "B");

-- CreateIndex
CREATE INDEX "_AulaToStudents_B_index" ON "_AulaToStudents"("B");

-- AddForeignKey
ALTER TABLE "aula" ADD FOREIGN KEY ("id_students") REFERENCES "students"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aula" ADD CONSTRAINT "aula_id_teacher_fkey" FOREIGN KEY ("id_teacher") REFERENCES "teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AulaToStudents" ADD FOREIGN KEY ("A") REFERENCES "aula"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AulaToStudents" ADD FOREIGN KEY ("B") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
