import React from 'react'

const Main = () => {
  return (
    <div className="mx:min-h-screen bg-blue-900 text-white">
      <div className="container  mx-auto px-4 py-12 md:py-24">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Get More Done with whitepace
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-md flex items-center">
                {window.innerWidth < 768 ? 'Try TasKey Free' : 'Try Whitepace free'}
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="bg-blue-200 rounded-lg h-64 md:h-96 w-full"></div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default Main;