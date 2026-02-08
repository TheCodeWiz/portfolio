import React from 'react'
import ContactForm from './ContactForm'
import { socialMedia } from '../data'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="relative w-full min-h-screen flex flex-col justify-between pt-32 md:pt-20 pb-40 md:pb-10" id="contact">
      {/* Decorative grid background */}
      <Image
        src="/footer-grid.svg"
        alt="grid"
        fill
        className="absolute inset-0 w-full h-full opacity-65 pointer-events-none z-0"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center w-full px-4 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight max-w-4xl mt-10">
          Ready to take <span className="text-purple-300">your</span> digital presence
          <br className="hidden sm:block" />
          to the next level?
        </h1>
        <p className="text-gray-300 text-base md:text-lg text-center mt-4 md:mt-6 mb-8 max-w-2xl">
          Reach out to me today and let&apos;s see how I can help you achieve your goals.
        </p>
        <div className="w-full max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-16 mt-10 md:mt-16 gap-6 md:gap-0">
        <p className="text-xs md:text-base font-light text-gray-200 text-center md:text-left">
          Copyright © Manav
        </p>
        <div className="flex items-center gap-5 md:gap-7">
          {socialMedia.map((profile) => (
            <Link
              href={profile.link}
              key={profile.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 flex justify-center items-center  bg-opacity-10 hover:bg-opacity-30 border border-gray-500 transition-colors duration-200 hover:bg-gray-600">
                <Image src={profile.img} alt={String(profile.id)} width={24} height={24} className="object-contain" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
