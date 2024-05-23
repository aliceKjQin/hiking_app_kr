import { Link } from "react-router-dom"


const ViewAllTrails = () => {
  return (
    <section className="m-auto max-w-lg my-10 px-6">
    <Link
      to="/trails"
      className="block bg-emerald-600 text-white text-center py-4 px-6 rounded-xl hover:bg-emerald-700"
    >
      View All Trails
    </Link>
  </section>
  )
}

export default ViewAllTrails