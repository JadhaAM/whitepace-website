import React from 'react';

const SubSection = () => {
  return (
    <div className="bg-blue-900 text-white p-6 md:p-12 lg:p-16 min-h-[400px] flex flex-col justify-center">
      <div className="max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
          Your work,
          <div className=" relative inline-block">
           <span className="relative z-10">everywhere  you are</span>
            <div className="absolute h-3 bg-blue-500 w-full -bottom-1 z-0 right-0"></div>
          </div>
        </h1> 
       
        
        <p className="mt-6 mb-8 text-sm md:text-base lg:text-lg max-w-3xl">
          Access your notes from your computer, phone or tablet by synchronising with
          various services, including whitepace, Dropbox and OneDrive. The app is
          available on Windows, macOS, Linux, Android and iOS. A terminal app is also
          available!
        </p>
        
        <div className="mt-6">
          <button className="bg-blue-400 hover:bg-blue-500 transition-colors text-white font-medium py-3 px-6 rounded-md flex items-center mx-auto md:mx-0">
            Try Taskey
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubSection;