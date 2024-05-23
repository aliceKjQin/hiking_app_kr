import { useState, useEffect } from "react";
import TrailListing from "./TrailListing";
import Spinner from "./Spinner";

const TrailListings = ({ isHome = false }) => {
  const [trails, setTrails] = useState([]);
  // Show a spinner when it's fetching data
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrails = async () => {
      // Fetch 3 trails only on the home page, /api is defined in vite.config.js
      const apiUrl = isHome ? "/api/trails?_limit=3" : "/api/trails";
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setTrails(data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    // Remember to call fetchTrails() inside useEffect!
    fetchTrails();
  }, []);

  return (
    <section className="bg-green-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-emerald-500 mb-6 text-center">
          Browse Trails
        </h2>

        {loading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trails.map((trail) => (
              <TrailListing key={trail.id} trail={trail} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrailListings;
