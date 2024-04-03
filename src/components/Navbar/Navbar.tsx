"use client";

const Navbar = () => {
  const handleSmoothScroll = (e: any) => {
    const targetId = e.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-full bg-black">
      <div className="flex w-full justify-between items-center px-4 py-4">
        <div className="flex items-center">
          <img src="/vercel.svg" className="h-8 w-30" alt="logo" />
          <h1 className="text-white text-2xl font-bold"></h1>
        </div>
        <div className="flex items-center space-x-16">
          <a
            href="#collections"
            className="text-white font-poppins text-xl"
            onClick={handleSmoothScroll}
          >
            Collections
          </a>
          <a
            href="#features"
            className="text-white font-poppins text-xl"
            onClick={handleSmoothScroll}
          >
            Features
          </a>
          <a
            href="#footer"
            className="text-white font-poppins text-xl"
            onClick={handleSmoothScroll}
          >
            Developer Contact
          </a>
        </div>
        <div className="flex items-center">
          <button className="text-white px-4 py-2 rounded-md">Sign In</button>
          <button className="text-white px-4 py-2 rounded-md">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
