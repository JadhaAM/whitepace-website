import React from 'react';

const CtaSection = () => {
    return (
        <div className="bg-blue-900 text-white text-center flex flex-col items-center justify-center px-4 py-16 md:py-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Try Whitepace today
          </h2>

          <div className="max-w-xl mb-12">
            <p className="text-lg md:text-xl lg:text-2xl mb-2">
              Get started for free.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl">
              Add your whole team as your needs grow.
            </p>
          </div>

          <a 
            href="#" 
            className="bg-blue-400 hover:bg-blue-500 transition-colors duration-300 text-white py-3 px-6 rounded-lg flex items-center justify-center mb-12 text-lg"
          >
            Try Taskey free <span className="ml-2">→</span>
          </a>

          <p className="text-lg md:text-xl mb-10">
            On a big team? Contact sales
          </p>
   
          <div className="flex justify-center space-x-8">
            <div className="w-10 h-10">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <div className="w-10 h-10">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 12V6.75l6-1.32v6.48L3 12m17-9v8.75l-10 .15V5.21L20 3M3 13l6 .09v6.81l-6-1.15V13m17 .25V22l-10-1.91V13.1l10 .15z" />
              </svg>
            </div>
            <div className="w-10 h-10">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M7.2,16.8H6.3v-8h0.9V16.8z M12.7,16.8h-0.9v-8h0.9V16.8z M16.5,16.8h-0.9v-8h0.9V16.8z M17.8,10.5 h0.9V17c0,0.5-0.4,0.9-0.9,0.9h-0.9v1.3c0,0.5-0.4,0.9-0.9,0.9s-0.9-0.4-0.9-0.9v-1.3H8.9v1.3c0,0.5-0.4,0.9-0.9,0.9 s-0.9-0.4-0.9-0.9v-1.3H6.3C5.8,17.9,5.4,17.5,5.4,17v-6.5h12.4V10.5z M6.1,9.5c-0.5,0-0.9-0.4-0.9-0.9S5.6,7.7,6.1,7.7 S7,8.1,7,8.6S6.6,9.5,6.1,9.5z M17.9,9.5c-0.5,0-0.9-0.4-0.9-0.9s0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9S18.4,9.5,17.9,9.5z M4.9,8.9 c0-2.3,1.3-4.2,3.3-5.1L7.2,2.3C7.1,2.2,7.1,2,7.3,1.9C7.4,1.8,7.6,1.8,7.7,2l1.1,1.6c0.8-0.2,1.6-0.4,2.4-0.4 c0.8,0,1.6,0.1,2.4,0.4L14.7,2c0.1-0.1,0.3-0.1,0.4,0c0.1,0.1,0.1,0.3,0,0.4l-1,1.5c1.9,0.9,3.3,2.9,3.3,5.1v0.6H4.9V8.9z"/>
              </svg>
            </div>
          </div>
        </div>
      );
};

export default CtaSection;