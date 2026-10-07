import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import fire from "../assets/fire.png";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logOut();

      toast.success("Logout successful!", {
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
      });

      setMenuOpen(false);
    } catch (error) {
      toast.error(error.message || "Logout failed!", {
        position: "top-right",
        autoClose: 2500,
        theme: "colored",
      });
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="w-full py-3">

      {/* ================= DESKTOP NAVBAR ================= */}
      <div className="hidden md:flex items-center justify-between gap-5">

        {/* User Info */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          {user ? (
            <div className="flex items-center gap-3 min-w-0">

              {/* Profile Image */}
              <div className="avatar shrink-0">
                <div className="w-10 h-10 rounded-full ring-2 ring-secondary ring-offset-2">
                  <img
                    src={user.photoURL || userIcon}
                    alt={user.displayName || "User"}
                    onError={(e) => {
                      e.currentTarget.src = userIcon;
                    }}
                  />
                </div>
              </div>

              {/* Name + Email */}
              <div className="min-w-0">
                <p className="font-semibold text-base-content truncate max-w-40">
                  {user.displayName || "User"}
                </p>

                <p className="text-xs text-gray-500 truncate max-w-45">
                  {user.email}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-10 object-contain"
                src={fire}
                alt="Fire"
              />

              <p className="font-semibold text-black">
                Welcome to Dragon News
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center text-accent">
          <NavLink
            to="/"
            className="hover:bg-gray-200 px-4 py-2 rounded-md transition"
          >
            Home
          </NavLink>

          <NavLink
            to="/About"
            className="hover:bg-gray-200 px-4 py-2 rounded-md transition"
          >
            About
          </NavLink>

          <NavLink
            to="/Career"
            className="hover:bg-gray-200 px-4 py-2 rounded-md transition"
          >
            Career
          </NavLink>
        </div>

        {/* Login / Logout */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-primary px-6 sm:px-10"
            >
              Log Out
            </button>
          ) : (
            <Link
              to="/auth/login"
              className="btn btn-primary px-6 sm:px-10"
            >
              Login
            </Link>
          )}
        </div>
      </div>


      {/* ================= MOBILE NAVBAR ================= */}
      <div className="md:hidden">

        {/* Top Row */}
        <div className="flex items-center justify-between gap-3">

          {/* User Info */}
          <div className="flex items-center gap-2 min-w-0 flex-1">

            {user ? (
              <>
                {/* Profile Image */}
                <div className="avatar shrink-0">
                  <div className="w-10 h-10 rounded-full ring-2 ring-secondary ring-offset-2">
                    <img
                      src={user.photoURL || userIcon}
                      alt={user.displayName || "User"}
                      onError={(e) => {
                        e.currentTarget.src = userIcon;
                      }}
                    />
                  </div>
                </div>

                {/* Mobile Name + Email */}
                <div className="min-w-0">
                  <p className="font-semibold text-sm truncate max-w-45">
                    {user.displayName || "User"}
                  </p>

                  <p className="text-xs text-gray-500 truncate max-w-45">
                    {user.email}
                  </p>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2 min-w-0">

                {/* Fire Icon */}
                <img
                  className="w-7 h-9 object-contain shrink-0"
                  src={fire}
                  alt="Fire"
                />

                {/* Welcome Text */}
                <p className="font-semibold text-black text-sm truncate">
                  Welcome to Dragon News
                </p>
              </div>
            )}
          </div>

          {/* Hamburger Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-circle shrink-0"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              /* Close Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Hamburger Icon */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 bg-base-100 rounded-xl shadow-lg border border-base-200 p-3">

            {/* Navigation Links */}
            <div className="flex flex-col gap-1">

              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-medium transition ${isActive
                    ? "bg-secondary text-white"
                    : "text-accent hover:bg-gray-100"
                  }`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/About"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-medium transition ${isActive
                    ? "bg-secondary text-white"
                    : "text-accent hover:bg-gray-100"
                  }`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/Career"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-lg font-medium transition ${isActive
                    ? "bg-secondary text-white"
                    : "text-accent hover:bg-gray-100"
                  }`
                }
              >
                Career
              </NavLink>
            </div>

            {/* Divider */}
            <div className="divider my-2"></div>

            {/* Login / Logout */}
            {user ? (
              <button
                onClick={handleLogout}
                className="btn btn-primary w-full"
              >
                Log Out
              </button>
            ) : (
              <Link
                to="/auth/login"
                onClick={closeMenu}
                className="btn btn-primary w-full"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;