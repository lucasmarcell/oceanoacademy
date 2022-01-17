-- DropForeignKey
ALTER TABLE "Aula" DROP CONSTRAINT "Aula_id_teacher_fkey";

-- AlterTable
ALTER TABLE "Aula" ALTER COLUMN "id_teacher" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Aula" ADD CONSTRAINT "Aula_id_teacher_fkey" FOREIGN KEY ("id_teacher") REFERENCES "teacher"("id") ON DELETE SET NULL ON UPDATE CASCADE;
