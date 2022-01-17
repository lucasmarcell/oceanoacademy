-- CreateTable
CREATE TABLE "class" (
    "id" TEXT NOT NULL,
    "id_student" TEXT NOT NULL,
    "id_teacher" TEXT NOT NULL,
    "lesson" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "class_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "class" ADD CONSTRAINT "class_id_student_fkey" FOREIGN KEY ("id_student") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class" ADD CONSTRAINT "class_id_teacher_fkey" FOREIGN KEY ("id_teacher") REFERENCES "teacher"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
