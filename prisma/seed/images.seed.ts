import { imageSources } from "@/config/constants";
import { faker } from "@faker-js/faker";
import type { Prisma, PrismaClient } from "@prisma/client";
import { createPngDataUri } from "unlazy/thumbhash";

export async function seedImages(prisma: PrismaClient) {
  await prisma.image.deleteMany();
  const products = await prisma.product.findMany();

    const productNamesAndIds = products.map((product) => {
        return { id:product.id, name:product.name }
    });

  for (const productNameAndId of productNamesAndIds) {
    const image: Prisma.ImageCreateInput = {
      src: imageSources.productsPlaceholder,
      alt: faker.lorem.words(2),
      product: { connect: { id: productNameAndId.id } },
      blurhash: createPngDataUri("odcJFQT1nG2G+Gh2aYp1eDGGIHMI"),
    };

    await prisma.image.create({ data: image });
  }
}
