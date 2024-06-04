

const Footer = () => {
     return (
          <div>


               <footer className="bg-white rounded-lg shadow dark:bg-slate-300 m-4 mt-16">
                    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                         <div className="sm:flex sm:items-center sm:justify-between">


                              <span className="self-center text-2xl font-semibold whitespace-nowrap ">Amazon</span>

                              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium  sm:mb-0 ">
                                   <li>
                                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                                   </li>
                                   <li>
                                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                                   </li>
                                   <li>
                                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                                   </li>
                                   <li>
                                        <a href="#" className="hover:underline">Contact</a>
                                   </li>
                              </ul>
                         </div>
                         <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
                         <span className="block text-sm sm:text-center ">© 2023  <a className="hover:underline"> Amazon™</a>. All Rights Reserved.</span>
                    </div>
               </footer>


          </div>
     );
};

export default Footer;