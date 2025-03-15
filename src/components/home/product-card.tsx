import { ProductsWithImages } from '@/config/types';
import { HTMLParser } from '@/shared/html-parser';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Button } from '../ui/button';
import WishlistButton from './wishlist-button';
interface ProductCardProps{
  product: ProductsWithImages;
}
const ProductCard = (props: ProductCardProps) => {
  const {product} = props;
 
  return (
    <div>
      <div className="aspect-3/2 relative">
        <Link href={`/product/${product.slug}`}>
          <Image
            placeholder="blur"
            blurDataURL={product?.images[0]?.blurhash}
            src={product?.images[0]?.src}
            alt={product?.images[0]?.alt}
            className="object-cover rounded-t-md"
            fill={true}
            quality={25}
          />
        </Link>
        <WishlistButton  />
      </div>

      <div>
        <Link href={`/product/${product.slug}`}>{product.name}</Link>
        {product?.description && (
          <div className="text-xs md:text-sm xl:text-base text-gray-500 line-clamp-2">
            <HTMLParser html={product.description} />
            &nbsp; {/* Used for equal spacing across each card in the grid */}
          </div>
        )}
      </div>
      <div>{product.price}</div>
      <div>rating and reviews</div>
      <div>
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
}

export default ProductCard;