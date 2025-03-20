import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

  const testimonials = [
    {
      id: 1,
      quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      author: "Oberon Shaw, MCH",
      position: "Head of Talent Acquisition, North America",
      avatarColor: "bg-orange-100",
      bgColor: "bg-white",
      avatarImg: "/Avater.png"
    },
    {
      id: 2,
      quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      author: "Oberon Shaw, MCH",
      position: "Head of Talent Acquisition, North America",
      avatarColor: "bg-blue-100",
      bgColor: "bg-blue-400",
      avatarImg: "/Avater-2.png"
    },
    {
      id: 3,
      quote: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
      author: "Oberon Shaw, MCH",
      position: "Head of Talent Acquisition, North America",
      avatarColor: "bg-pink-200",
      bgColor: "bg-blue-400",
      avatarImg: "/Avater-3.png"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const getVisibleCount = () => {
    if (windowWidth < 640) return 1;
    return 3;
  };

  const visibleCount = getVisibleCount();
  const startIndex = activeIndex;
  const visibleTestimonials = [];

  for (let i = 0; i < visibleCount; i++) {
    const index = (startIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        What Our  <span className="relative inline-block ">
          Clients Says
          <span className=" absolute -bottom-3 left-0 w-full h-3 bg-yellow-300 -z-10"></span>
        </span>
      </h2>

      <div className="flex flex-col md:flex-row gap-6 mb-8">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className={`rounded-lg shadow-md p-6 flex-1 transition-all duration-300 ${testimonial.bgColor} ${testimonial.bgColor !== 'bg-white' ? 'text-white' : 'text-gray-800'}`}
          >
            <div className="text-5xl font-serif mb-4" style={{ color: 'rgba(14, 56, 153, 1)' }}>"</div>
            <p className="text-lg mb-6">{testimonial.quote}</p>
            <div className="w-full h-px bg-gray-200 opacity-30 mb-6"></div>
            <div className="flex items-center">
              <div className={`w-16 h-16 rounded-full overflow-hidden mr-4 ${testimonial.avatarColor}`}>
                <img
                  src={testimonial.avatarImg}
                  alt={`${testimonial.author} avatar`}
                  className="w-full h-full object-cover"

                />
              </div>
              <div>
                <h4 className="font-bold text-lg">{testimonial.author}</h4>
                <p className={`${testimonial.bgColor !== 'bg-white' ? 'text-blue-100' : 'text-gray-600'}`}>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === activeIndex ? 'bg-blue-500 w-6' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;