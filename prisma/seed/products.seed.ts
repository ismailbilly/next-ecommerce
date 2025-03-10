import { faker } from "@faker-js/faker";
import { Prisma, PrismaClient, Product } from "@prisma/client";

const subCategories = [
  {
    description: "Gadgets and devices",
    subcategories: ["TV", "Laptop", "Smartphone", "Headphones"],
  },
  {
    description: "Men and Women apparel",
    subcategories: ["T-Shirt", "Jeans", "Jacket", "Shoes"],
  },
  {
    description: "Household essentials",
    subcategories: ["Furniture", "Cookware", "Decor", "Lighting"],
  },
  {
    description: "Skincare and wellness products",
    subcategories: ["Makeup", "Skincare", "Supplements", "Perfume"],
  },
  {
    description: "Sporting goods and outdoor gear",
    subcategories: ["Running Shoes", "Bicycle", "Camping Gear", "Dumbbells"],
  },
];
const categories = [
  { name: "Electronics" },
  { name: "Clothing" },
  { name: "Home & Kitchen" },
  { name: "Beauty & Health" },
  { name: "Sports & Outdoors" },
  { name: "Books" },
  { name: "Toys" },
  { name: "Automotive" },
  { name: "Tools" },
  { name: "Music" },
  { name: "Movies" },
  { name: "Games" },
];
// 📌 Generate products for each category and subcategory
let products: Omit<Product, "id">[] = [];
const generateSlug = (name: string) => {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
};
export async function seedProducts(prisma: PrismaClient) {
  const getCategories = await prisma.category.findMany();
 
    if (getCategories.length === 0) {
        await prisma.category.createMany({
            data: categories,
        });
    }
//   } else {
      getCategories.forEach((category) => {
    
        
          subCategories.forEach((subcategory) => {
        
        for (let i = 0; i < 5; i++) {
          // Generate 5 products per subcategory
          products.push({
            //id: faker.string.uuid(),
            name: `${subcategory} - ${faker.commerce.productName()}`,
            description: subcategory.description,
            price: Number(faker.commerce.price({ min: 10, max: 1000, dec: 2 })),
            stock: faker.number.int({ min: 0, max: 100 }),
            categoryId: category.id,
            sellerId: faker.string.uuid(),
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
            sku: faker.string.alphanumeric(10).toUpperCase(), // 10-char alphanumeric SKU
            slug: generateSlug(category.name), // Generate slug from name
            weight: faker.number.float({
              min: 0.1,
              max: 50,
              fractionDigits: 2,
            }) as number,
            //   images: faker.image.urlLoremFlickr({
            //     category: `${category}`,
            //   }),
          });
        }
      });
      });
    
    await prisma.product.createMany({
      data: products,
    });
//   }
}
