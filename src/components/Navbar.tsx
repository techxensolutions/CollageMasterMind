'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-50 shadow-lg">
      <div className="max-w-[1250] mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <div className="flex items-center py-4 px-2 cursor-pointer">
                <Image src="/images/logo.png" width={200} height={60} alt="College Mastermind" />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/about">
              <div className="py-4 px-2 text-black font-semibold transition duration-300 text-lg flex items-center gap-2 cursor-pointer">
                About
                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.19141 1L6.19141 6L11.1914 1" stroke="#475467" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
            <Link href="/services">
              <div className="py-4 px-2 text-black font-semibold transition duration-300 text-lg flex items-center gap-2 cursor-pointer">
                Services
                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.19141 1L6.19141 6L11.1914 1" stroke="#475467" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
            <Link href="/countries">
              <div className="py-4 px-2 text-black font-semibold transition duration-300 text-lg flex items-center gap-2 cursor-pointer">
                Countries
                <svg width="13" height="7" viewBox="0 0 13 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.19141 1L6.19141 6L11.1914 1" stroke="#475467" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </Link>
            <Link href="/partnership">
              <div className="py-4 px-2 text-black font-semibold transition duration-300 text-lg cursor-pointer">
                Partnership
              </div>
            </Link>
            <Link href="/events">
              <div className="py-4 px-2 text-black font-semibold transition duration-300 text-lg cursor-pointer">
                Events
              </div>
            </Link>
            <Link href="/contact">
              <div className="py-4 px-2 text-black font-semibold transition duration-300 text-lg cursor-pointer">
                Contact
              </div>
            </Link>
            <Link href="/register">
              <div className="py-4 px-2 text-black font-semibold transition duration-300 text-lg cursor-pointer">
                Register
              </div>
            </Link>
            <Link href="/login">
              <div className="py-3 px-4 text-white font-semibold transition duration-300 bg-secondary rounded-md shadow-md cursor-pointer">
                Log In
              </div>
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleSidebar} className="text-2xl text-black">
              {isOpen ? "" : <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
<path d="M 5 9 L 5 11 L 45 11 L 45 9 L 5 9 z M 5 24 L 5 26 L 45 26 L 45 24 L 5 24 z M 5 39 L 5 41 L 45 41 L 45 39 L 5 39 z"></path>
</svg>}
            </button>
          </div>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={toggleSidebar}></div>
        <div className="fixed inset-y-0 left-0 w-64 bg-white z-50 p-4 overflow-y-auto">
          <div className="flex justify-between items-center mb-4">
            <Link href="/">
              <div className="flex items-center py-4 px-2 cursor-pointer">
                <Image src="/images/logo.png" width={200} height={60} alt="College Mastermind" />
              </div>
            </Link>
          </div>
          <nav>
            <Link href="/about">
              <div className="block py-2 px-4 text-black font-semibold transition duration-300 cursor-pointer">About</div>
            </Link>
            <Link href="/services">
              <div className="block py-2 px-4 text-black font-semibold transition duration-300 cursor-pointer">Services</div>
            </Link>
            <Link href="/countries">
              <div className="block py-2 px-4 text-black font-semibold transition duration-300 cursor-pointer">Countries</div>
            </Link>
            <Link href="/partnership">
              <div className="block py-2 px-4 text-black font-semibold transition duration-300 cursor-pointer">Partnership</div>
            </Link>
            <Link href="/events">
              <div className="block py-2 px-4 text-black font-semibold transition duration-300 cursor-pointer">Events</div>
            </Link>
            <Link href="/contact">
              <div className="block py-2 px-4 text-black font-semibold transition duration-300 cursor-pointer">Contact</div>
            </Link>
            <Link href="/register">
              <div className="block py-2 px-4 text-black font-semibold transition duration-300 cursor-pointer">Register</div>
            </Link>
            <Link href="/login">
              <div className="block py-2 px-4 text-white font-semibold transition duration-300 bg-secondary rounded-md shadow-md mt-4 cursor-pointer">
                Log In
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
