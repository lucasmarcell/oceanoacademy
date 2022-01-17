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
ALTER TABLE "_AulaToStudents" ADD FOREIGN KEY ("A") REFERENCES "aula"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_AulaToStudents" ADD FOREIGN KEY ("B") REFERENCES "students"("id") ON DELETE CASCADE ON UPDATE CASCADE;
