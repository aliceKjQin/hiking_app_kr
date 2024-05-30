import { useState, useContext } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { WishlistContext } from "../contexts/WishlistContext";

const TrailListing = ({ trail, isHome }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const { addToWishlist } = useContext(WishlistContext);
  const location = useLocation();

  let description = trail.description;

  if (!showFullDescription) {
    description = trail.description.substring(0, 90) + "...";
  }
  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{trail.name}</div>
          <h3 className="text-xl font-bold">{trail.name}</h3>
        </div>

        <div className="mb-5">{description}</div>

        {/* use below approach instead of onClick={()=>setShowFullDescription(!showFullDescription)} can avoid the potential issues with asynchronous state updates in react.*/}
        <button
          onClick={() => setShowFullDescription((preState) => !preState)}
          className="text-emerald-500 mb-5 hover:text-emerald-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-emerald-500 mb-2">
          {trail.length} miles <span className="ml-2">{trail.difficulty}</span>
        </h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-2" />
            {trail.district}
          </div>
          <Link
            to={`/trails/${trail.id}`}
            className="h-[36px] bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
        <div className="flex justify-end">
          {/* Don't show Add to wishlist button on homepage*/}
          {location.pathname !== "/" && (
            <button
              className="h-[36px] bg-emerald-700 hover:bg-emerald-800 text-white px-4 py-2 rounded-lg"
              onClick={() => addToWishlist(trail)}
            >
              Add to wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrailListing;
