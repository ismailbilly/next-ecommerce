import Link from 'next/link'
import React from 'react'
import { ShoppingCart, Heart, CircleUserRound } from "lucide-react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
      <div>Searchbar</div>
              <div>
                  <Link href={'/wishlist'}><Heart/>My Items</Link>
          <Link href={"/cart"}>
            <ShoppingCart /> Cart
                  </Link>

<Link href={'/login'}><CircleUserRound/> Sign in Account </Link>                  
        </div>
      </div>
    </nav>
  );
}

export default Navbar