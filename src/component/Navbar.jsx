import React, { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const isMobile = windowWidth < 1151;

  const dropdownContents = {
    products: [
      { title: 'Product 1', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
      { title: 'Product 2', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
      { title: 'Product 3', icon: 'M12 6v6m0 0v6m0-6h6m-6 0H6' },
    ],
    solutions: [
      { title: 'Solution 1', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
      { title: 'Solution 2', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    ],
    resources: [
      { title: 'Blog',  icon: 'M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z' },
      { title: 'Documentation', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
    ],
    pricing: [
      { title: 'Basic Plan', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
      { title: 'Pro Plan', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
      { title: 'Enterprise', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
    ],
  };

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
            <div className="flex space-x-8 relative" ref={dropdownRef}>
              <button 
                className={`hover:text-gray-300 flex items-center ${activeDropdown === 'products' ? 'text-yellow-300' : ''}`}
                onClick={() => toggleDropdown('products')}
              >
                Products
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'products' ? 'transform rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button 
                className={`hover:text-gray-300 flex items-center ${activeDropdown === 'solutions' ? 'text-yellow-300' : ''}`}
                onClick={() => toggleDropdown('solutions')}
              >
                Solutions
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'transform rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button 
                className={`hover:text-gray-300 flex items-center ${activeDropdown === 'resources' ? 'text-yellow-300' : ''}`}
                onClick={() => toggleDropdown('resources')}
              >
                Resources
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'resources' ? 'transform rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <button 
                className={`hover:text-gray-300 flex items-center ${activeDropdown === 'pricing' ? 'text-yellow-300' : ''}`}
                onClick={() => toggleDropdown('pricing')}
              >
                Pricing
                <svg 
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${activeDropdown === 'pricing' ? 'transform rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
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
            <div>
              <button 
                className="hover:bg-blue-700 py-2 px-3 rounded-md text-left w-full flex justify-between items-center"
                onClick={() => toggleDropdown('products')}
              >
                Products
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'products' ? 'transform rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'products' && (
                <div className="pl-4 py-2 space-y-2 bg-blue-700 rounded-md mt-1">
                  {dropdownContents.products.map((item, index) => (
                    <a key={index} href="#" className="block p-2 hover:bg-blue-600 rounded">
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <button 
                className="hover:bg-blue-700 py-2 px-3 rounded-md text-left w-full flex justify-between items-center"
                onClick={() => toggleDropdown('solutions')}
              >
                Solutions
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'transform rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'solutions' && (
                <div className="pl-4 py-2 space-y-2 bg-blue-700 rounded-md mt-1">
                  {dropdownContents.solutions.map((item, index) => (
                    <a key={index} href="#" className="block p-2 hover:bg-blue-600 rounded">
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <button 
                className="hover:bg-blue-700 py-2 px-3 rounded-md text-left w-full flex justify-between items-center"
                onClick={() => toggleDropdown('resources')}
              >
                Resources
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'transform rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'resources' && (
                <div className="pl-4 py-2 space-y-2 bg-blue-700 rounded-md mt-1">
                  {dropdownContents.resources.map((item, index) => (
                    <a key={index} href="#" className="block p-2 hover:bg-blue-600 rounded">
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <button 
                className="hover:bg-blue-700 py-2 px-3 rounded-md text-left w-full flex justify-between items-center"
                onClick={() => toggleDropdown('pricing')}
              >
                Pricing
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'pricing' ? 'transform rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'pricing' && (
                <div className="pl-4 py-2 space-y-2 bg-blue-700 rounded-md mt-1">
                  {dropdownContents.pricing.map((item, index) => (
                    <a key={index} href="#" className="block p-2 hover:bg-blue-600 rounded">
                      {item.title}
                    </a>
                  ))}
                </div>
              )}
            </div>
            
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
      
      {!isMobile && activeDropdown && (
        <div className="absolute bg-white text-gray-800 shadow-lg rounded-lg mt-1 z-50 p-4 max-w-2xl" style={{ top: '4rem', left: '50%', transform: 'translateX(-50%)' }}>
          <div className="grid grid-cols-1 gap-4">
            {dropdownContents[activeDropdown].map((item, index) => (
              <a key={index} href="#" className="flex items-start p-3 rounded-md hover:bg-gray-100">
                <div className="flex-shrink-0 bg-blue-100 p-2 rounded-md mr-3">
                  <svg className="w-6 h-6 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;