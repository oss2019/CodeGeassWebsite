-- AlterEnum
ALTER TYPE "Wing" ADD VALUE 'WEB_DEV';

-- CreateTable
CREATE TABLE "WebDev" (
    "id" SERIAL NOT NULL,
    "github_uname" TEXT NOT NULL,
    "member_id" TEXT NOT NULL,

    CONSTRAINT "WebDev_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WebDev_github_uname_key" ON "WebDev"("github_uname");

-- CreateIndex
CREATE UNIQUE INDEX "WebDev_member_id_key" ON "WebDev"("member_id");

-- AddForeignKey
ALTER TABLE "WebDev" ADD CONSTRAINT "WebDev_member_id_fkey" FOREIGN KEY ("member_id") REFERENCES "Members"("id") ON DELETE CASCADE ON UPDATE CASCADE;
