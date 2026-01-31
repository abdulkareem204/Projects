


const Navbar = () => {
  return (
   <nav className="w-full flex justify-center py-6  ">
  <div className="flex items-center gap-10 max-sm:gap-6 max-sm:px-3 max-sm:py-1.5 px-6 py-3 mx-auto bg-gray-800 rounded-full shadow-md">
    
    {/* Active link */}
<a
  href="/"
  className="
    inline-flex items-center
    px-3.5 py-1.5 rounded-full text-md   text-white

   text-2xl
  "
>
  
  <span className="text-red-900 font-bold  max-sm:text-xl text-3xl">&lt;</span>
  <span className="font-bold text-3xl max-sm:text-xl">Pass</span>
  <span className="text-red-900 font-bold max-sm:text-xl  text-3xl">Box</span>
  <span className="text-red-900 font-bold  max-sm:text-xl mx-1 text-3xl">/&gt;</span>
</a>



    {/* Github Link */}
  
    <a href="https://github.com/abdulkareem204" target="_blank" className="flex items-center px-3.5 py-1.5 gap-2  font-medium max-sm:text-xs  hover:text-gray-500  justify-center bg-slate-800 hover:bg-slate-700 shadow-2xs shadow-black rounded-full cursor-pointer text-white  transition duration-700 ease-out">
      <img className="invert" src="./icons/github.svg" width={30} alt="github" />
      <span className="max-sm:text-xs">Github</span>
    </a>
 

  </div>
</nav>

  );
};

export default Navbar;
