const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-800">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        
        {/* Logo */}
        <a
          href="/"
          className="flex flex-col justify-center items-center gap-1 text-white"
        >
        <div className="group">

          <span className="text-red-900 font-bold text-3xl">&lt;</span>
          <span className="font-bold text-3xl">Pass</span>
          <span className="text-red-900 font-bold text-3xl">Box</span>
          <span className="text-red-900 font-bold mx-1 text-3xl">/&gt;</span>
        </div>
        <div className="Author">
            <p className="text-xs  font-mono text-white">Created By Abdul Kareem</p>
        </div>
        </a>

        {/* Author Info  */}
        {/* GitHub */}
         <a href="https://github.com/abdulkareem204" target="_blank" className="flex items-center px-3.5 py-1.5 gap-2 font-medium max-sm:text-xs  hover:text-gray-500  justify-center bg-slate-800 hover:bg-slate-700 shadow-2xs shadow-black rounded-full cursor-pointer text-white  transition duration-700 ease-out">
      <img className="invert" src="./icons/github.svg" width={30} alt="github" />
      <span>Github</span>
    </a>

      </div>
    </footer>
  );
};

export default Footer;
