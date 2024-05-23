import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    // Try to get the wishlist from localStorage when initializing state
    const savedWishlist = localStorage.getItem('wishlist'); 
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(()=> {
    // Save the wishlist to localStorage whenever it changes
    localStorage.setItem('wishlist', JSON.stringify(wishlist)); 
  }, [wishlist])

  const addToWishlist = (trail) => {
    setWishlist((preWishlist) => {
      // Checking if the trail already exists in the wishlist before adding it
      if (preWishlist.find((item) => item.id === trail.id)) {
        alert("Trail already exists in the wishlist");
        return preWishlist;
      }
      return [...preWishlist, trail];
    });
  };

  const removeFromWishlist = (trailId) => {
    setWishlist((preWishlist) =>
      preWishlist.filter((trail) => trail.id !== trailId)
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
