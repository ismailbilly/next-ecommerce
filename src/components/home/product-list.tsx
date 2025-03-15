import React from "react";
import ProductCard from "./product-card";
import { ProductsWithImages } from "@/config/types";

interface ProductListProps {
  products: ProductsWithImages[];
}

const ProductList = (props: ProductListProps) => {
  const { products } = props;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
