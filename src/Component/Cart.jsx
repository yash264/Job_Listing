import React from "react";
import search from "../assets/Image/Margin.png";
import contact from '../assets/Image/Overlay.png'
import image3 from '../assets/Image/Margin1.png'
import image4 from '../assets/Image/image4.png'
import image5 from '../assets/Image/image5.png'
import image6 from '../assets/Image/image6.png'

function Cart() {

  const cards = [
    {
      icon: search,
      title: "AI-Powered Search",
      desc: "Find the perfect candidates with our intelligent matching algorithm."
    },
    {
      icon: contact,
      title: "Talent Pool",
      desc: "Access a curated pool of pre-vetted candidates ready to join your team."
    },
    {
      icon: image3,
      title: "Fast Hiring",
      desc: "Reduce time-to-hire by 60% with automated workflows and instant scheduling."
    },
    {
      icon: image4,
      title: "Verified Profiles",
      desc: "Every candidate profile is verified to ensure authenticity and save your time."
    },
    {
      icon: image5,
      title: "Analytics Dashboard",
      desc: "Track your hiring metrics and get insights to improve your recruitment process."
    },
    {
      icon: image6,
      title: "Easy Integration",
      desc: "Connect with your existing HR tools and ATS systems seamlessly."
    }
  ];

  return (
    <section className="bg-black py-16 px-4">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {cards.map((card, index) => (

          <div
            key={index}
            className="border border-gray-700 rounded-xl p-6 text-white flex flex-col gap-4"
          >

            <img src={card.icon} alt="icon" className="w-10 h-10" />

            <h3 className="text-lg font-semibold">
              {card.title}
            </h3>

            <p className="text-gray-400 text-sm">
              {card.desc}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Cart;