import Header from "@/components/home/header";

import ProductList from "@/components/home/product-list";
import prisma from "@/lib/prisma";

//get the list of products
const getProducts = async () => { 
  return await prisma.product.findMany({
    include: {
      images: true, 
    }
  });
}
// pass it as props to the product list
export default async function Home() {
  const products = await getProducts();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Header/>
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <ProductList products={products}/>
        </main>
    </div>
  );
}
