import React from "react";
import { Link } from "react-router-dom";
import section from "../assets/Image/Section.png";
import Cart from "../Component/Cart";
import Footer from "./Footer";

function Hero() {

    const Carts = [
        {
            title: "AI-Powered Search",
            desc: "Find the perfect candidates with our intelligent matching algorithm."
        },
        {
            title: "Talent Pool",
            desc: "Access a curated pool of pre-vetted candidates ready to join your team."
        },
        {
            title: "Fast Hiring",
            desc: "Reduce time-to-hire by 60% with automated workflows and instant scheduling."
        },
    ];

    return (
        <>

            <section className="bg-black text-white text-center px-4 py-20">

                <p className="text-xs sm:text-sm">
                    Trusted by 10,000+ companies worldwide
                </p>

                <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-4">
                    The complete platform to
                    <span className="text-[#00D091] block">
                        hire smarter
                    </span>
                </h1>

                <p className="text-gray-300 mt-6 max-w-2xl mx-auto text-sm sm:text-base">
                    Streamline your hiring process with AI-powered matching,
                    automated workflows, and a seamless experience.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

                    <button className="bg-[#00D091] text-black px-6 py-3 rounded-xl">
                        Start Free Hiring
                    </button>

                    <Link
                        to="/job"
                        className="border border-gray-600 px-6 py-3 rounded-xl"
                    >
                        Browse Jobs
                    </Link>

                </div>

            </section>

            <section className="bg-black border-t border-b border-gray-700 py-12 px-4 text-center">

                <img
                    src={section}
                    alt="section"
                    className="w-full max-w-5xl mx-auto h-auto"
                />

                <h2 className="text-white text-2xl md:text-3xl font-bold mt-10">
                    Everything you need to hire the best
                </h2>

                <p className="text-gray-400 mt-4 max-w-xl mx-auto">
                    Powerful tools designed to help you find and hire top talent faster.
                </p>

            </section>


            <Cart />

            <section className="bg-black text-white py-16 px-4 text-center">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    Loved by hiring teams
                </h2>

                <p className="text-gray-400 mt-4">
                    See what our customers have to say about their experience.
                </p>

            </section>
            <section className="bg-black py-16 px-4">

                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {Carts.map((card, index) => (

                        <div
                            key={index}
                            className="border border-gray-700 rounded-xl p-6 text-white flex flex-col gap-4 hover:bg-gray-900 transition"
                        >

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
            <section className="bg-black text-white text-center px-4 py-16">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    Ready to transform your hiring?
                </h2>

                <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                    Join thousands of companies already using HireSathi to build their dream teams.
                </p>

                <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">

                    <button className="bg-emerald-400 text-black px-6 py-3 rounded-xl font-medium hover:bg-emerald-300 transition">
                        Start Free Trial →
                    </button>

                    <button className="border border-gray-600 px-6 py-3 rounded-xl hover:bg-gray-900 transition">
                        View Demo
                    </button>

                </div>

            </section>
                <Footer/>    
        </>
    );
}

export default Hero;