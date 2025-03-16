// src/App.tsx
import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [dynamicWordIndex, setDynamicWordIndex] = useState(0);
  const dynamicWords = [
    "Influencer Strategy",
    "Collaborative Marketing",
    "Social Media Strategy",
    "Content Production",
    "Talent Management",
    "Creative Campaigns",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setDynamicWordIndex((prevIndex) => (prevIndex + 1) % dynamicWords.length);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [dynamicWords.length]);


  return (
    <>
      <Nav />
      <main id="home" className="w-full">
        {/* #### HERO SECTION #### */}
        <section className="pt-20 md:pt-0 bg-white dark:bg-black">
          <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-32 lg:grid-cols-12 relative z-10">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1
                className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white"
              >
                Amplify Your Brand with <br />
                <span className="text-green-500 font-bold">
                  {dynamicWords[dynamicWordIndex]}
                </span>
              </h1>

              <p className="max-w-2xl mb-6 font-bold text-gray-500 lg:mb-8 text-3xl dark:text-gray-400">
                Connect with your target audience through authentic influencer
                collaborations. We drive engagement, build brand awareness, and
                deliver measurable results.
              </p>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text:3xl text-center text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 dark:focus:ring-green-900"
              >
                Learn More
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-5 py-4 text-base font-medium text:3xl text-center text-gray-900 border-4 border-green-300  hover:bg-green-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-green-700 dark:hover:bg-green-700 dark:focus:ring-gray-800"
              >
                Get a Proposal
              </a>
            </div>
            <div
              className="lg:mt-0 lg:col-span-5 lg:flex relative z-10"
              style={{ opacity: 1 }}
            >
              <img
                src="./assets/images/influencer-marketing.png" // Replace with a relevant image!
                alt="Influencer Marketing Illustration"
              />
            </div>
          </div>
        </section>

        {/* #### WHY IT WORKS SECTION (ACCOLADES REPLACEMENT) #### */}
        <section className="bg-white dark:bg-black ">
          <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6 border-4 border-solid border-green-700 bg-white dark:bg-black relative z-20">
            <h2 className="mb-8 text-4xl font-extrabold tracking-tight leading-none text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
              Why Influencer Marketing Works
            </h2>
            <div className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-2 dark:text-white lg:grid-cols-4">
              <div className="flex flex-col items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="#359350" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4"/><path d="M29 15L19 25L29 33"/></g></svg>
                <p className="mt-2 text-lg font-medium">
                  Drives Higher ROI
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="#359350" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M4 9a2 2 0 0 1 2-2h36a2 2 0 0 1 2 2v34a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M4 16h40M18 7v34M30 7v34"/></g></svg>
                <p className="mt-2 text-lg font-medium">
                  Builds Brand Trust
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="#359350" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M44 40.834V7.166a3.166 3.166 0 0 0-3.167-3.166H7.167A3.166 3.166 0 0 0 4 7.166v33.668A3.166 3.166 0 0 0 7.167 44h33.666A3.166 3.166 0 0 0 44 40.834Z"/><path d="M14.73 20.797v6.868l5.478 3.444 5.479-3.444v-6.868L20.208 24.24L14.73 20.797ZM32 15h4v18h-4z"/></g></svg>
                <p className="mt-2 text-lg font-medium">
                  Expands Your Reach
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="#359350" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"/><path d="M24.049 12v12.083L31 31"/></g></svg>
                <p className="mt-2 text-lg font-medium">
                 Boosts Engagement
                </p>
              </div>
            </div>
             <p className="mt-8 text-md leading-relaxed text-gray-700 dark:text-gray-300">
             Today's consumers crave authenticity. Influencer marketing taps into this desire by connecting your brand with trusted voices.
              </p>
          </div>
        </section>

        {/* #### SERVICES SECTION #### */}
        <section
          id="services"
          className="pt-8 pb-12 bg-white dark:bg-black flex justify-center items-center"
        >
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 text-center">
            <div className="max-w-screen-md mb-8 lg:mb-12 mx-auto">
              <h2 className="mb-4 text-4xl md:text-5xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                Our Influencer Marketing Services
              </h2>
              <p className="text-gray-500 text-2xl dark:text-gray-400">
                We offer a comprehensive suite of services designed to maximize
                your brand's impact.
              </p>
            </div>

            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div className="transform transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                   <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="m2.75 9.25 5.5 5.5 8.75-8.75M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Campaign Strategy
                </h3>
                <p className="text-gray-500 text-xl dark:text-gray-400">
                  Data-driven strategies tailored to your goals.
                </p>
              </div>

              <div className="transform transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 9a3 3 0 0 1 3-3m-2.3 9.1c.2.3.4.6.7.8l.5.3.5-.3a3 3 0 0 0 2.6-1.2L15 12m0 0 1-1.7c.4-.7.2-1.5-.5-2L15 7m0 0H6m15 6c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8h1"/>
                  </svg>
                </div>
                <h3 className="mb-2 text-3xl font-bold dark:text-white">
                  Influencer Identification
                </h3>
                <p className="text-gray-500 text-xl dark:text-gray-400">
                  Perfect influencers for authentic collaborations.
                </p>
              </div>
              <div className="transform transition-all duration-300 hover:scale-105 group">
                <div className="flex justify-center mx-auto items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <svg
                    className="w-[48px] h-[48px] text-gray-800 dark:text-white transition-colors duration-300 group-hover:text-green-500 group-hover:scale-125"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.006 15.497h5.933m-5.933 0a3.03 3.03 0 0 1-3.031-3.03c0-1.255.766-2.352 1.883-2.806M9.006 15.497v-5.933m5.933 5.933a2.996 2.996 0 0 1 1.883-2.806c.317-.11.648-.167.984-.167m2.832 0c1.669 0 3.031 1.362 3.031 3.03 0 .968-.458 1.822-1.187 2.387M14.94 9.564c1.116-.454 2.39-1.22 3.014-2.807a3.03 3.03 0 0 0-3.03-3.03 3.03 3.03 0 0 0-3.031 3.03c0 1.255.766 2.35
