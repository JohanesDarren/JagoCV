-- AlterTable
ALTER TABLE "Document" ADD COLUMN     "fontFamily" TEXT DEFAULT 'Inter',
ADD COLUMN     "templateId" TEXT DEFAULT 'standard',
ADD COLUMN     "themeColor" TEXT DEFAULT 'blue';
