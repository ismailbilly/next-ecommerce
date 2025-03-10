import { PrismaClient } from '@prisma/client'
import { seedProducts } from './products.seed';
import { seedImages } from './images.seed';
const prisma = new PrismaClient()
async function main() {
    //await seedProducts(prisma)
    await seedImages(prisma)
}
main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });