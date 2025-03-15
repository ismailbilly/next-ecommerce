import { Heart } from "lucide-react";
import { Button } from "../ui/button";
const WishlistButton = () => {
  return (
    <Button className="absolute left-1.5 rounded-full bg-white flex items-center justify-center w-10 h-10">
      <Heart />
    </Button>
  );
};

export default WishlistButton;
