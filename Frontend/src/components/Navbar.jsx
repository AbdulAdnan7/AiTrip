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
        <NavLink to='/login' >
        <button className='bg-purple-500 px-3 text-white py-1'>Login</button>
        </NavLink>
        <NavLink to='/signin' >
            <button className='border px-3 py-1 border-purple-500 text-purple-500 font-semibold'>Sign-up</button>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
