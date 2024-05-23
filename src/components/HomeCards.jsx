import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">Adventurous</h2>
            <p className="mt-2 mb-4">Trail difficulty range from moderate to hard</p>
            <Link
              to="/trails/adventurous"
              className="inline-block bg-teal-500 text-white rounded-lg px-4 py-2 hover:bg-teal-600"
            >
              Explore
            </Link>
          </Card>
          <Card>
          <h2 className="text-2xl font-bold">Family Friendly</h2>
            <p className="mt-2 mb-4">
            Trail difficulty is easy and suitable for family outings
            </p>
            <Link
              to="/trails/family-friendly"
              className="inline-block bg-teal-500 text-white rounded-lg px-4 py-2 hover:bg-teal-600"
            >
              Explore
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
