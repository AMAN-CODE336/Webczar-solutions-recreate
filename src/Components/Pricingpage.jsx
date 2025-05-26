
import React from 'react';

const plans = [
  {
    name: 'Basic',
    price: '₹9,999/mo',
    description: 'Perfect for individuals or freelancers starting out.',
    features: [
      'single page website',
      'Domestic Bulk Messages 1 lakh Credits',
      'Domestic Bulk Whatsapp 25000 Credits',
      'Social Media Optimization 100 EDM',
      'Social Media Optimization 100 EDM'
    ]
  },
  {
    name: 'Pro',
    price: '₹19,999/mo',
    description: 'Best for growing teams and startups.',
    features: [
      'single page website',
      'Domestic Bulk Messages 1 lakh Credits',
      'Domestic Bulk Whatsapp 25000 Credits',
      'Social Media Optimization 100 EDM',
      'Social Media Optimization 100 EDM'
    ],
    highlighted: true
  },
  {
    name: 'Enterprise',
    price: '₹29,999/mo',
    description: 'Custom solutions for large organizations.',
    features: [
      'single page website',
      'Domestic Bulk Messages 1 lakh Credits',
      'Domestic Bulk Whatsapp 25000 Credits',
      'Social Media Optimization 100 EDM',
      'Social Media Optimization 100 EDM'

    ]
  }
];

export default function PricingPage() {
  return (
   <>  
    <div className="  flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-4xl text-white md:text-5xl font-bold mb-4">
        Pricing that scales with you         </h1>
        <p className="text-lg font-semibold md:text-xl text-gray-300 mb-6 max-w-2xl">
        Whether you’re just starting out or running a large team, our pricing is designed to be simple, transparent, and flexible.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
        Reach Out 
        </button>
      </div>
   
     <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 text-center mb-20">
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-2 text-[#29b6f6]">No Hidden Fees</h3>
      <p className="text-gray-600">Transparent pricing with everything clearly included—no surprises.</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-2 text-[#29b6f6]">Scalable Plans</h3>
      <p className="text-gray-600">From solo creators to large enterprises, we have a plan that fits you.</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <h3 className="text-xl font-semibold mb-2 text-[#29b6f6]">Cancel Anytime</h3>
      <p className="text-gray-600">Flexible monthly billing — upgrade, downgrade, or cancel anytime.</p>
    </div>
  </div>
   
   
   
   <div className=" min-h-screen py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl text-white font-bold mb-4">Simple Pricing for Everyone</h1>
        <p className="text-gray-600 text-lg">Choose a plan that fits your needs and grow with us.</p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl p-8 shadow-lg ${
              plan.highlighted ? 'bg-white border-3 border-[#29b6f6]' : 'bg-white'
            }`}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{plan.name}</h2>
            <p className="text-3xl font-bold text-[#29b6f6] mb-4">{plan.price}</p>
            <p className="text-gray-500 mb-6">{plan.description}</p>
            <ul className="space-y-2 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="text-gray-700 flex items-center">
                  <span className="text-[#29b6f6] font-bold mr-2">✓</span> {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-medium transition ${
                plan.highlighted
                  ? 'bg-[#29b6f6] text-white '
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Choose Plan'}
            </button>
          </div>
        ))}
      </div>
    </div>
    </>

  );
}
