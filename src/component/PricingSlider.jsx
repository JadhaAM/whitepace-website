import React from 'react';
import { Check } from 'lucide-react';

const PricingPlans = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Capture ideas and find them quickly",
      highlighted: false,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks"
      ]
    },
    {
      name: "Personal",
      price: "$11.99",
      description: "Keep home and family on track",
      highlighted: true,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks"
      ]
    },
    {
      name: "Organization",
      price: "$49.99",
      description: "Capture ideas and find them quickly",
      highlighted: false,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates, reminders, and notifications to your tasks"
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
          Choose  <span className='relative inline-block '>

          Your Plan
          <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 -z-10"></span>
          </span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base">
          Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`border rounded-lg overflow-hidden flex flex-col ${
              plan.highlighted 
                ? 'bg-blue-900 text-white border-blue-900' 
                : 'bg-white text-gray-800 border-gray-200'
            }`}
          >
            <div className="p-6 sm:p-8">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-2 text-3xl font-bold">{plan.price}</div>
              <p className="mt-2 text-sm">
                {plan.description}
              </p>
            </div>

            <div className="flex-grow px-6 sm:px-8 pb-6">
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="px-6 sm:px-8 pb-8">
              <button 
                className={`w-full py-2 px-4 rounded font-medium ${
                  plan.highlighted 
                    ? 'bg-blue-500 hover:bg-blue-600 text-white' 
                    : 'bg-white hover:bg-gray-100 text-gray-800 border border-gray-300'
                }`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPlans;