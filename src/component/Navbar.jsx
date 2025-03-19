import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const isMobile = windowWidth < 1151;

  return (
    <div className="bg-blue-900 text-white">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center border-b border-opacity-40 border-white">
        <div className="flex items-center">
          <div className="text-white text-2xl font-bold flex items-center">
            <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            whitepace
          </div>
        </div>

        {!isMobile && (
          <div className="flex items-center space-x-4">
            <div className="flex space-x-8">
              <button className="hover:text-gray-300 flex items-center">
                Products
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="hover:text-gray-300 flex items-center">
                Solutions
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="hover:text-gray-300 flex items-center">
                Resources
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button className="hover:text-gray-300 flex items-center">
                Pricing
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-4 ml-8">
              <button className="bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-medium px-6 py-2 rounded-md">
                Login
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md flex items-center">
                Try Whitepace free
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {isMobile && (
          <div className="flex items-center space-x-2">
            {windowWidth > 768 && (
              <>
                <button className="bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-medium px-6 py-2 rounded-md">
                  Login
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-md flex items-center">
                  Try Whitepace free
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
            <button className="p-2" onClick={toggleMenu}>
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        )}
      </nav>
      
      {isMobile && isMenuOpen && (
        <div className="bg-blue-800 px-4 py-2">
          <div className="flex flex-col space-y-2">
            <button className="hover:bg-blue-700 py-2 px-3 rounded-md text-left">Products</button>
            <button className="hover:bg-blue-700 py-2 px-3 rounded-md text-left">Solutions</button>
            <button className="hover:bg-blue-700 py-2 px-3 rounded-md text-left">Resources</button>
            <button className="hover:bg-blue-700 py-2 px-3 rounded-md text-left">Pricing</button>
            {windowWidth <= 768 && (
              <>
                <button className="bg-yellow-300 hover:bg-yellow-400 text-blue-900 font-medium py-2 px-3 rounded-md text-center">
                  Login
                </button>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-3 rounded-md text-center">
                  Try Whitepace free
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;