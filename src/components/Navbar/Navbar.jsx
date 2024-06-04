import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";


const Navbar = () => {
     return (
          <nav className="flex justify-between px-10 shadow-lg py-4 bg-slate-400 sticky top-0  ">
               <Link to='/' className="text-3xl font-bold text-red-500">Amazon</Link>
               <ul className="flex gap-8 text-xl font-medium ">
                    <NavLink to="/" className={({ isActive, isPending }) =>
                         isPending ? "pending" : isActive ? "bg-sky-400  p-2 rounded-lg text-white font-medium" : ""
                    }>Home</NavLink>
                    <NavLink
                         to="/products"
                         className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "bg-sky-400  p-2 rounded-lg text-white font-medium" : ""
                         }
                    >
                         Products
                    </NavLink>
                    <NavLink
                         to="/dashboard"
                         className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "bg-sky-400  p-2 rounded-lg text-white font-medium" : ""
                         }
                    >
                         Dashboard
                    </NavLink>


               </ul>
          </nav >
     );
};

export default Navbar;