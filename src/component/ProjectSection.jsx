import React from 'react';

const ProjectSection = () => {
  return (
    <>

      <div className="w-full py-16 px-4 md:px-8 bg-blue-900">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Use as 
                <span className="ml-3 relative inline-block px-1">
                  <span className="relative z-10">Extension</span>
                  <span className="absolute inset-x-0 -bottom-3 h-3 bg-yellow-300"></span>
                </span>
              </h1>

              <div className="relative mb-6">
                <div className="absolute -bottom-3 left-0 w-64 h-4 bg-yellow-200 -z-10"></div>
              </div>
              <p className="text-white text-lg mb-8 ">
              Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.

              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-md flex items-center font-medium transition-colors">
                Let's go
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>

            <div className="w-full md:w-1/2">
              <div className="bg-blue-100 rounded-lg w-full h-96"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto md:flex-col-reverse">
          <div className="flex flex-col md:flex-row flex-col-reverse items-center">

            <div className="w-full md:w-1/2">
              <div className="bg-blue-100 rounded-lg w-full h-96"></div>
            </div>

            <div className="w-full md:w-1/2 pr-0 md:px-8 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Customise it
              to 
                <span className="ml-3 relative inline-block px-1">
                  <span className="relative z-10">your needs</span>
                  <span className="absolute inset-x-0 -bottom-3 h-3 bg-yellow-300"></span>
                </span>
              </h1>
              <div className="relative mb-6">
                <div className="absolute -bottom-3 left-0 w-64 h-4 bg-yellow-200 -z-10"></div>
              </div>
              <p className="text-gray-700 text-lg mb-8">
              Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-md flex items-center font-medium transition-colors">
               Let's go
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectSection;