import React from 'react';
const ProjectManagementSection = () => {
  return (
    <>

      <div className="w-full py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 pr-0 md:pr-10 m-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Project
                <span className="relative inline-block px-1">
                  <span className="relative z-10">Management</span>
                  <span className="absolute inset-x-0 -bottom-3 h-3 bg-yellow-300"></span>
                </span>
              </h1>

              <div className="relative mb-6">
                <div className="absolute -bottom-3 left-0 w-64 h-4 bg-yellow-200 -z-10"></div>
              </div>
              <p className="text-gray-700 text-lg mb-8">
                Images, videos, PDFs and audio files are supported. Create math expressions
                and diagrams directly from the app. Take photos with the mobile app and save
                them to a note.
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-md flex items-center font-medium transition-colors">
                Get Started
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

            <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-[280px] h-[280px]">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="w-16 h-16 bg-white shadow-md rounded flex items-center justify-center">
                <div className="text-blue-500 text-3xl">↑</div>
              </div>
            </div>
            <div className="absolute inset-0">
              <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M140 30L230 85L230 195L140 250L50 195L50 85L140 30Z" stroke="#BAD7FF" strokeWidth="2" strokeDasharray="6 4" fill="none" />
              </svg>
            </div>
            <div className="absolute top-[20%] left-[32%]">
              <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 7C16.1046 7 17 7.89543 17 9C17 10.1046 16.1046 11 15 11C13.8954 11 13 10.1046 13 9C13 7.89543 13.8954 7 15 7Z" stroke="#3B82F6" strokeWidth="2"/>
                  <path d="M13 9H3M7 9V13M3 9V13" stroke="#3B82F6" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <div className="absolute top-[50%] left-[12%]">
              <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#FFC107" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <div className="absolute top-[20%] right-[32%]">
              <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#FFD54F" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <div className="absolute bottom-[20%] right-[20%]">
              <div className="w-10 h-10 bg-white shadow-sm rounded-full flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" y="11" width="14" height="10" rx="2" stroke="#3B82F6" strokeWidth="2"/>
                  <path d="M8 11V7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7V11" stroke="#3B82F6" strokeWidth="2"/>
                </svg>
              </div>
            </div>
            <div className="absolute top-[8%] left-[50%] transform -translate-x-1/2">
              <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
            </div>
            <div className="absolute top-[40%] right-[12%]">
              <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
            </div>
            <div className="absolute bottom-[40%] left-[30%]">
              <div className="w-4 h-4 bg-blue-200 rounded-full"></div>
            </div>
          </div>
        </div>

            <div className="w-full md:w-1/2 pr-0 md:px-8 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Work 
                <span className="ml-3 relative inline-block px-1">
                  <span className="relative z-10">together</span>
                  <span className="absolute inset-x-0 -bottom-3 h-3 bg-yellow-300"></span>
                </span>
              </h1>
              <div className="relative mb-6">
                <div className="absolute -bottom-3 left-0 w-64 h-4 bg-yellow-200 -z-10"></div>
              </div>
              <p className="text-gray-700 text-lg mb-8">
              With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.

              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-4 px-8 rounded-md flex items-center font-medium transition-colors">
                  Try it now
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

export default ProjectManagementSection;