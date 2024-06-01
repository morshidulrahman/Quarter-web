import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import Container from "../../shared/Container";
const Footer = () => {
  return (
    <footer className="bg-[#171b2a]  py-5">
      <Container>
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Company
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 hover:underline hover:text-[#ff5a3c]">
                About
              </li>
              <li className="mb-4 hover:underline hover:text-[#ff5a3c]">
                Blog
              </li>
              <li className="mb-4 hover:underline hover:text-[#ff5a3c]">
                All Product
              </li>
              <li className="mb-4 hover:underline hover:text-[#ff5a3c]">
                Location map
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Service
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 hover:underline hover:text-[#ff5a3c]">
                Order tracking
              </li>
              <li className="mb-4 hover:underline hover:text-[#ff5a3c]">
                Wish List
              </li>
              <li className="mb-4 hover:underline hover:text-[#ff5a3c]">
                My account
              </li>
              <li className="mb-4 hover:underline hover:text-[#ff5a3c]">
                Login
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              Customer Care
            </h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4 hover:underline hover:text-[#ff5a3c]">
                Login
              </li>
              <li className="mb-4 hover:underline hover:text-[#ff5a3c]">
                My account
              </li>
              <li className="mb-4 hover:underline hover:text-[#ff5a3c]">FAQ</li>
              <li className="mb-4 hover:underline hover:text-[#ff5a3c]">
                Contact Us
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
              NewsLetter
            </h2>
            <p className="text-gray-500 dark:text-gray-400 font-medium">
              Subscribe to our weekly Newsletter and receive updates via email.
            </p>
            <div className="relative mt-4 overflow-hidden">
              <input
                type="email"
                placeholder="Email"
                className="bg-white py-3 px-2 w-full outline-none"
              />
              <div className="absolute bg-[#ff5a3c] px-5 py-4 top-0 right-0 flex items-center justify-center">
                <FaPaperPlane size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto text-center">
          <p className="text-gray-500 dark:text-gray-400 font-medium">
            © 2024 Morshidul. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
