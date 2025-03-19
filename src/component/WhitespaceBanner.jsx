import React from 'react';

const WhitespaceBanner = () => {
  return (

    <div className="w-full bg-blue-900 min-h-[400px] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="w-[800px] h-[800px] rounded-full border border-blue-300 absolute -top-1/4 -right-1/4"></div>
        <div className="w-[600px] h-[600px] rounded-full border border-blue-300 absolute -bottom-1/4 -left-1/4"></div>
        <div className="w-[700px] h-[700px] rounded-full border border-blue-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between">
        <div className="relative w-full md:w-2/5 h-[250px] mb-8 md:mb-0">
          <div className="absolute w-full h-full">
            <div className="w-[220px] h-[220px] rounded-full border-2 border-dashed border-blue-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <span className="text-red-500 text-xl font-bold">M</span>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <div className="w-6 h-6 bg-blue-500"></div>
              </div>
            </div>
          
            <div className="absolute top-1/4 right-1/4 transform translate-x-1/4 -translate-y-1/4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-purple-500 text-xl">⊞</span>
                </div>
              </div>
            </div>
         
            <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/4 translate-y-1/4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-green-500 text-xl">▲</span>
                </div>
              </div>
            </div>
         
            <div className="absolute bottom-0 left-1/3 transform -translate-x-1/3 translate-y-1/2">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-blue-500 text-xl">✉</span>
                </div>
              </div>
            </div>
      
            <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/4 translate-y-1/4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <div className="w-8 h-8 flex items-center justify-center">
                  <span className="text-blue-500 text-xl">31</span>
                </div>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-10 h-10 flex items-center justify-center">
                  <span className="text-blue-500 text-2xl font-bold">W</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="w-full md:w-3/5 text-center md:text-left md:pl-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Work with Your Favorite Apps Using whitepace
          </h1>
          <p className="text-blue-100 text-base md:text-lg mb-8">
            Whitepace teams up with your favorite software. Integrate with over 1000+ apps 
            with Zapier to have all the tools you need for your project success.
          </p>
          <button className="bg-blue-400 hover:bg-blue-500 text-white py-2 px-6 rounded-md transition duration-300 flex items-center mx-auto md:mx-0">
            Read more
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhitespaceBanner;