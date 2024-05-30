import { useContext } from "react";
import { WishlistContext } from "../contexts/WishlistContext";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const WishlistCart = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSaveWishlist = () => {
    if (user) {
        navigate("/wishlist")
    }  else {
        navigate("/login")
        alert("Please login to save your wishlist");
    }
    
  };
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 bg-red-50">
      {wishlist.map((trail) => (
        <div
          className="flex flex-col lg:flex-row justify-between mb-1"
          key={trail.id}
        >
          <h3>
            {trail.name} <span className="ml-6"></span>
            {trail.difficulty}
          </h3>
          <button onClick={() => removeFromWishlist(trail.id)}>Remove</button>
        </div>
      ))}
      {/* Hide the Save button if wishlist is empty */}
      <div className="flex justify-end">
        {wishlist.length === 0 ? null : (
          <button
            className="h-[36px] bg-red-400 hover:bg-red-500 text-white px-4 py-2 rounded-lg mb-3"
            onClick={() => handleSaveWishlist()}
          >
            Save
          </button>
        )}
      </div>
    </div>
  );
};

export default WishlistCart;
