import React from 'react';
import 'boxicons/css/boxicons.min.css';

export default function WhyUs() {
  const features = [
    {
      icon: 'bx bxs-heart',
      title: 'We Are Passionate',
      description: 'We love what we do'
    },
    {
      icon: 'bx bxs-zap',
      title: 'We Are Bold',
      description: 'We believe it\'s either good marketing, or no marketing at all!'
    },
    {
      icon: 'bx bxs-message-alt',
      title: 'We Are Clear',
      description: 'To us, communication is key'
    },
    {
      icon: 'bx bxs-compass',
      title: 'We Are Curious',
      description: 'We enjoy exploring new territories, learning new things and experimenting with new ways'
    },
    {
      icon: 'bx bxs-palette',
      title: 'We Are Creative',
      description: 'Our team is a creative machine fueled by imagination. We strive for greatness, and fun follows us around!'
    },
    {
      icon: 'bx bxs-adjust-alt',
      title: 'We Are Flexible',
      description: 'We change to keep you ahead of the competition'
    }
  ];

  return (
    <section id='why-us' className="py-16 px-4 sm:px-6 bg-darkgreen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Why Choose <span className="text-lightgreen">Mtokoent ?</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 hover:shadow-md border border-gray-200"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start space-x-4">
                <div className="text-lightgreen text-3xl">
                  <i className={feature.icon}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-darkgreen mb-2">{feature.title}</h3>
                  <p className="text-gray-700">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
