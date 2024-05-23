import { useState, useEffect } from "react";
import TrailListing from "../components/TrailListing";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const TrailPage = () => {
  const { id } = useParams();
  const [trail, setTrail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrail = async () => {
      try {
        const res = await fetch(`/api/trails/${id}`);
        const data = await res.json();
        setTrail(data);
      } catch (error) {
        console.log("error fetching data: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchTrail();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <a
            href="/jobs.html"
            className="text-emerald-500 hover:text-emerald-600 flex items-center"
          >
            <i className="fas fa-arrow-left mr-2"></i> Back to Trails Listings
          </a>
        </div>
      </section>

      <section className="bg-emerald-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{trail.difficulty}</div>
                <h1 className="text-3xl font-bold mb-4">{trail.name}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <i className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"></i>
                  <p className="text-orange-700">{trail.district}</p>
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1 rounded-lg ml-auto">
                    Add to wishlist
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-emerald-800 text-lg font-bold mb-6">
                  Description
                </h3>

                <p className="mb-4">{trail.description}</p>

                <h3 className="text-emerald-800 text-lg font-bold mb-2">
                  Length
                </h3>

                <p className="mb-4">{trail.length} miles</p>
              </div>
            </main>
            {/* // Placeholder to display three images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {trail.images.map(image => {
                    return (
                        <img
                        key={image.id}
                        src={image.url}
                        alt={trail.name}
                        className="w-full rounded-lg shadow-md"
                        />
                    );
                    
                })}
              </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default TrailPage;
