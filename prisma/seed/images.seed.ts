import { faker } from "@faker-js/faker";
import type { Prisma, PrismaClient } from "@prisma/client";
import { createPngDataUri } from "unlazy/thumbhash";

export async function seedImages(prisma: PrismaClient) {
  const products = await prisma.product.findMany();

    const productNamesAndIds = products.map((product) => {
        return { id:product.id, name:product.name }
    });

  for (const productNameAndId of productNamesAndIds) {
    const image: Prisma.ImageCreateInput = {
        src: faker.image.urlLoremFlickr({category: "product",
                  }),
      alt: faker.lorem.words(2),
      product: { connect: { id: productNameAndId.id } },
      blurhash: createPngDataUri("jPcJDYCndnZwl4h6Z2eYhWZ/c/VI"),
    };

    await prisma.image.create({ data: image });
  }
}
