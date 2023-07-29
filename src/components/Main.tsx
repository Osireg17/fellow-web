import React, { useState } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Image from 'next/image'
import { SlSocialLinkedin } from 'react-icons/sl'
import Osi from '../pages/Photos/Osi-Headshot.jpeg'
import Precious from '../pages/Photos/Precious-Headshot.jpeg'
import Ayo from '../pages/Photos/Ayo-Headshot.jpeg'
import Timi from '../pages/Photos/Timi-Headshot.jpeg'

interface MainProps {
  text: string
}

const Main = ({ text }: MainProps) => {

  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };
  return (
    <>
      <div className="relative">
        <div className="absolute inset-[0] bg-black/60 z-[-1]" />
        <h1 className="z-[] text-5xl font-bold text-center py-10 text-white">{text}</h1>
        <div className="z-[3] max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg leading-7 text-white text-justify">
            As a Christian social media company, Fellow exists to provide a platform for believers to come together, share their personal insights on the Bible, ask questions about their faith, and connect with other Christians. At Fellow, we believe that community is essential to the growth and development of one's faith, and we strive to create a welcoming and inclusive space where individuals can feel comfortable sharing their thoughts and experiences with others who share their beliefs. Ultimately, we are a community of people who are united by our love for God and our desire to deepen our understanding of His Word.
          </p>
          <h3 className="text-3xl font-bold mt-8 mb-4 text-white text-center">Mission Statement:</h3>
          <p className="text-xl leading-7 text-white mb-8 text-justify">
            At Fellow, we are building a platform to explore and deepen your faith by asking questions and sharing insights. We empower you to grow and connect with grace.
            <em> Acts 2:42 They devoted themselves to the apostles’ teaching and to fellowship, to the breaking of bread and to prayer</em>
          </p>

          <h3 className="text-3xl font-bold mt-8 mb-4 text-white text-center">Our Vision:</h3>
          <p className="text-xl leading-7 text-white mb-8 text-justify">
            Christian community is meant to be so much deeper than interactions on social media, or even a shared interest. The old-fashioned word often used to describe Christian community is "fellowship". At its core, fellowship speaks of a shared, common life. It's the practice of making real friends! Fellowship invloves genuine connections, deep relationships
            sacrificial giving and open-handed receiving. It's a safe space for laughter and tears. Making good friends is key for dealing with life's challenges. It's not a "nice to have", but a "must have"
          </p>
          <section className=''>
            <div className="hs-accordion-group px-16">
              <div className="hs-accordion border-b border-white mb-10" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                <h1 className='text-4xl text-center mt-5 text-white'>Our Values</h1>
                <button onClick={() => toggleAccordion(1)} className={`hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-white transition hover:text-slate-50 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 ${activeAccordion === 1 ? 'hs-accordion-active' : ''}`} aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                  Fellowship
                  {activeAccordion === 1 ? (
                    // Open icon
                    <svg className="block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  ) : (
                    // Closed icon
                    <svg className="block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  )}
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className={`hs-accordion-content ${activeAccordion === 1 ? 'w-full overflow-hidden transition-[height] duration-300' : 'hidden'}`} aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                  <p className="text-white dark:text-gray-200">
                    At Fellow, our aim is to cultivate a warm and nurturing community where Christians from every corner of the world can unite to delve into and deepen their grasp of the Scriptures. Our mission revolves around fostering an inclusive space that encourages open dialogue and collaborative exploration, empowering members to fortify their faith and uplift one another in their spiritual odysseys. We invite you to join us and discover the transformative impact of fellowship today!
                    <em><b> Acts 2:42 encapsulates our ethos: "They devoted themselves to the apostles' teaching and fellowship, to the breaking of bread and to prayer."
                    </b></em>
                  </p>
                </div>
              </div>

              <div className="hs-accordion border-b border-white mb-10" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                <button onClick={() => toggleAccordion(2)} className={`hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-white transition hover:text-slate-50 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 ${activeAccordion === 1 ? 'hs-accordion-active' : ''}`} aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                  Patience
                  {activeAccordion === 2 ? (
                    // Open icon
                    <svg className="block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  ) : (
                    // Closed icon
                    <svg className="block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  )}
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className={`hs-accordion-content ${activeAccordion === 2 ? 'w-full overflow-hidden transition-[height] duration-300' : 'hidden'}`} aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                  <p className="text-white dark:text-gray-200">
                    At Fellow, our core conviction is that embracing the divine timing of God is not only an essential aspect of our journey but also a vital element for our business success. By depending on His wisdom and support, we have made pivotal decisions with assurance and fortitude, recognizing that His timing is impeccable. This perspective has not only deepened our faith but also fostered growth and flourishing within our team, ultimately generating increased value and significance for our customers and partners.
                    <em><b> As stated in James 5:8, "You too, be patient and stand firm, because the Lord's coming is near."</b></em>
                  </p>
                </div>
              </div>


              <div className="hs-accordion border-b border-white mb-10" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                <button onClick={() => toggleAccordion(3)} className={`hs-accordion-toggle hs-accordion-active:text-blue-600 group py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-left text-white transition hover:text-slate-50 dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 ${activeAccordion === 1 ? 'hs-accordion-active' : ''}`} aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
                  Perseverance
                  {activeAccordion === 3 ? (
                    // Open icon
                    <svg className="block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  ) : (
                    // Closed icon
                    <svg className="block w-3 h-3 text-white group-hover:text-white dark:text-white" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
                    </svg>
                  )}
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className={`hs-accordion-content ${activeAccordion === 3 ? 'w-full overflow-hidden transition-[height] duration-300' : 'hidden'}`} aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                  <p className="text-white dark:text-gray-200">
                    At Fellow, we are committed to transcending limitations and venturing into the unknown as we pursue success. Recognizing that challenges are an inevitable part of our journey, we embrace them with resilience and determination, confident that we will surmount any obstacles that stand in our way. Our steadfast faith in God instils in us the courage and reassurance to confront difficulties head-on, emerging stronger than before.
                    <em><b> As expressed in Isaiah 48:10, "See, I have refined you, though not as silver; I have tested you in the furnace of affliction."</b></em>
                  </p>
                </div>
              </div>
            </div>
          </section>

          <br></br>
        </div>
      </div>
    </>
  )
}

export default Main


