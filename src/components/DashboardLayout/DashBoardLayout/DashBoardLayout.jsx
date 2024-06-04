import { Link, Outlet } from "react-router-dom";


const DashBoardLayout = () => {
     return (
          <div className="flex gap-5 items-center">
               <div className="w-[20%]">
                    <ul className="text-xl font-semibold  rounded-lg px-4 py-6 my-10 bg-slate-400">
                         <li>
                              <Link to="/dashboard">Dash Board</Link>
                         </li>
                         <li >
                              <Link to='/dashboard/about'>About</Link>
                         </li>
                         <li >
                              <Link to='/dashboard/profile'>ProFile</Link>
                         </li>
                         <li >
                              <Link to='/dashboard/addtocart'>Add To Cart</Link>
                         </li>
                    </ul>
               </div>
               <div className="w-[80%]">
                    <Outlet></Outlet>
               </div>
          </div>
     );
};

export default DashBoardLayout;