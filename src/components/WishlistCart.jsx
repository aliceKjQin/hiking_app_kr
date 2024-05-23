import { useContext } from "react";
import { WishlistContext } from "../WishlistContext";

const WishlistCart = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="container-lg lg:container m-auto">
      {wishlist.map((trail) => (
        <div className="flex flex-col lg:flex-row justify-between mb-1" key={trail.id}>
          <h3>{trail.name} <span className="ml-6"></span>{trail.difficulty}</h3>
          <button onClick={() => removeFromWishlist(trail.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default WishlistCart;
