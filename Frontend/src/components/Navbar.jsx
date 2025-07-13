import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 flex items-center justify-between px-6">
      {/* Logo Section */}
      <h1 className="text-xl font-semibold">
        Book<span className="text-purple-500">Nest</span>
      </h1>

      {/* Navigation Links */}
      <div className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'text-purple-600 font-medium'
              : 'text-gray-600 hover:text-purple-500'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/planner"
          className={({ isActive }) =>
            isActive
              ? 'text-purple-600 font-medium'
              : 'text-gray-600 hover:text-purple-500'
          }
        >
          Plan Trip
        </NavLink>
       
      </div>
    </nav>
  );
};

export default Navbar;
