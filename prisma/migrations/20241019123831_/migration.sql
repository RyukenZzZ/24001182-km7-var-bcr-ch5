/*
  Warnings:

  - You are about to drop the column `manufacture_id` on the `models` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "models" DROP CONSTRAINT "models_manufacture_id_fkey";

-- AlterTable
ALTER TABLE "models" DROP COLUMN "manufacture_id";
