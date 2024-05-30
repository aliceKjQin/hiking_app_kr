import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user } = useAuth();

  // the linkClass will be used to highlight the active link
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-emerald-500 hover:bg-emerald-600 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-emerald-600 hover:text-white rounded-md px-3 py-2";
  return (
    <nav className="bg-emerald-400 border-b border-emerald-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
            {/* <!-- Logo --> */}
            <NavLink className="flex flex-shrink-0 items-center mr-4" to="/">
              <img
                className="h-10 w-auto"
                src="images/logo.png"
                alt="Hiking in Korea logo"
              />
              <span className="hidden md:block text-white text-2xl font-bold ml-2">
                Trails in Korea
              </span>
            </NavLink>
            <div className="md:ml-auto">
              <div className="flex space-x-2">
                <NavLink to="/" className={linkClass}>
                  Home
                </NavLink>
                <NavLink to="/trails" className={linkClass}>
                  Trails
                </NavLink>
                {user ? (
                  <>
                    <NavLink to="/wishlist" className={linkClass}>
                      My Wishlist
                    </NavLink>
                    <NavLink to="/signout" className={linkClass}>
                      Sign out
                    </NavLink>
                  </>
                ) : (
                  <NavLink to="/login" className={linkClass}>
                    Login
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
