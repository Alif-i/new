import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaAddressBook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const navigate = useNavigate();
  const openInsta = () => {
    window.open("https://www.instagram.com/life.finder_/", "_blank");
  };

  return (
    <footer className="bg-clr1 text-white mt-5">
      <div className="container w-full mx-auto py-8">
        {/* Company Info */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="mb-4">
              <img
                src="/logoWhite.png" // Update this path to the correct location of your logo
                loading="lazy"
                alt="LifeFinder Logo"
                className="cursor-pointer w-48 h-auto mx-auto md:mx-0" // Adjust the width as needed
                onClick={() => navigate("/")}
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex justify-center">
            <div className="flex items-center text-center md:items-start justify-center flex-col md:text-left mb-6 md:mb-0">
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-gray-300 hover:text-gray-100 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/clinics/sub/treatments"
                    className="text-gray-300 hover:text-gray-100 hover:underline"
                  >
                    Find Clinics
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-gray-100 hover:underline"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className="text-gray-300 hover:text-gray-100 hover:underline"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div className="justify-center flex">
            <div className="flex items-center justify-center md:items-start md:justify-start flex-col text-left md:text-left">
              <h3 className="text-xl font-semibold mb-4 flex justify-start items-start text-start">
                Contact Us
              </h3>
              <ul className="space-y-4 flex text-center flex-col">
                <li className="flex items-center justify-center md:justify-center">
                  <MdEmail className="text-white text-2xl" />
                  <a
                    href="mailto:info@lifefinder.com"
                    className="text-gray-300 hover:text-gray-100 text-l3g font-medium ml-2 hover:underline"
                  >
                    info@lifefinder.com
                  </a>
                </li>

                <li className="flex items-center justify-center md:justify-start">
                  <FaPhone className="text-white text-2xl" />
                  <a
                    href="tel:+1234567890"
                    className="text-gray-300 hover:text-gray-100 text-lg font-medium ml-2 hover:underline"
                  >
                    +1 (234) 567-890
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start">
                  <FaAddressBook className="text-white text-2xl" />
                  <span className="text-gray-300 hover:text-gray-100 text-lg font-medium ml-2 hover:underline">
                    123 Health St
                  </span>
                </li>
                <li
                  className="flex items-center justify-center md:justify-start"
                  onClick={openInsta}
                >
                  {/* <FaInstagram className="text-white text-2xl" /> */}
                  <button className="group transition-all duration-500p">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 93 92"
                      fill="none"
                    >
                      <rect
                        x="1.13867"
                        width="91.5618"
                        height="91.5618"
                        rx="15"
                        fill="url(#paint0_linear_7092_54439)"
                      />
                      <path
                        d="M38.3762 45.7808C38.3762 41.1786 42.1083 37.4468 46.7132 37.4468C51.3182 37.4468 55.0522 41.1786 55.0522 45.7808C55.0522 50.383 51.3182 54.1148 46.7132 54.1148C42.1083 54.1148 38.3762 50.383 38.3762 45.7808ZM33.8683 45.7808C33.8683 52.8708 39.619 58.618 46.7132 58.618C53.8075 58.618 59.5581 52.8708 59.5581 45.7808C59.5581 38.6908 53.8075 32.9436 46.7132 32.9436C39.619 32.9436 33.8683 38.6908 33.8683 45.7808ZM57.0648 32.4346C57.0646 33.0279 57.2404 33.608 57.5701 34.1015C57.8997 34.595 58.3684 34.9797 58.9168 35.2069C59.4652 35.4342 60.0688 35.4939 60.6511 35.3784C61.2334 35.2628 61.7684 34.9773 62.1884 34.5579C62.6084 34.1385 62.8945 33.6041 63.0105 33.0222C63.1266 32.4403 63.0674 31.8371 62.8404 31.2888C62.6134 30.7406 62.2289 30.2719 61.7354 29.942C61.2418 29.6122 60.6615 29.436 60.0679 29.4358H60.0667C59.2708 29.4361 58.5077 29.7522 57.9449 30.3144C57.3821 30.8767 57.0655 31.6392 57.0648 32.4346ZM36.6072 66.1302C34.1683 66.0192 32.8427 65.6132 31.9618 65.2702C30.7939 64.8158 29.9606 64.2746 29.0845 63.4002C28.2083 62.5258 27.666 61.6938 27.2133 60.5266C26.8699 59.6466 26.4637 58.3214 26.3528 55.884C26.2316 53.2488 26.2073 52.4572 26.2073 45.781C26.2073 39.1048 26.2336 38.3154 26.3528 35.678C26.4639 33.2406 26.8731 31.918 27.2133 31.0354C27.668 29.8682 28.2095 29.0354 29.0845 28.1598C29.9594 27.2842 30.7919 26.7422 31.9618 26.2898C32.8423 25.9466 34.1683 25.5406 36.6072 25.4298C39.244 25.3086 40.036 25.2844 46.7132 25.2844C53.3904 25.2844 54.1833 25.3106 56.8223 25.4298C59.2612 25.5408 60.5846 25.9498 61.4677 26.2898C62.6356 26.7422 63.4689 27.2854 64.345 28.1598C65.2211 29.0342 65.7615 29.8682 66.2161 31.0354C66.5595 31.9154 66.9658 33.2406 67.0767 35.678C67.1979 38.3154 67.2221 39.1048 67.2221 45.781C67.2221 52.4572 67.1979 53.2466 67.0767 55.884C66.9656 58.3214 66.5573 59.6462 66.2161 60.5266C65.7615 61.6938 65.2199 62.5266 64.345 63.4002C63.4701 64.2738 62.6356 64.8158 61.4677 65.2702C60.5872 65.6134 59.2612 66.0194 56.8223 66.1302C54.1855 66.2514 53.3934 66.2756 46.7132 66.2756C40.033 66.2756 39.2432 66.2514 36.6072 66.1302ZM36.4001 20.9322C33.7371 21.0534 31.9174 21.4754 30.3282 22.0934C28.6824 22.7316 27.2892 23.5878 25.897 24.977C24.5047 26.3662 23.6502 27.7608 23.0116 29.4056C22.3933 30.9948 21.971 32.8124 21.8497 35.4738C21.7265 38.1394 21.6982 38.9916 21.6982 45.7808C21.6982 52.57 21.7265 53.4222 21.8497 56.0878C21.971 58.7494 22.3933 60.5668 23.0116 62.156C23.6502 63.7998 24.5049 65.196 25.897 66.5846C27.289 67.9732 28.6824 68.8282 30.3282 69.4682C31.9204 70.0862 33.7371 70.5082 36.4001 70.6294C39.0687 70.7506 39.92 70.7808 46.7132 70.7808C53.5065 70.7808 54.3592 70.7526 57.0264 70.6294C59.6896 70.5082 61.5081 70.0862 63.0983 69.4682C64.7431 68.8282 66.1373 67.9738 67.5295 66.5846C68.9218 65.1954 69.7745 63.7998 70.4149 62.156C71.0332 60.5668 71.4575 58.7492 71.5768 56.0878C71.698 53.4202 71.7262 52.57 71.7262 45.7808C71.7262 38.9916 71.698 38.1394 71.5768 35.4738C71.4555 32.8122 71.0332 30.9938 70.4149 29.4056C69.7745 27.7618 68.9196 26.3684 67.5295 24.977C66.1395 23.5856 64.7431 22.7316 63.1003 22.0934C61.5081 21.4754 59.6894 21.0514 57.0284 20.9322C54.3612 20.811 53.5085 20.7808 46.7152 20.7808C39.922 20.7808 39.0687 20.809 36.4001 20.9322Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_7092_54439"
                          x1="90.9407"
                          y1="91.5618"
                          x2="-0.621143"
                          y2="-2.46459e-06"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FBE18A" />
                          <stop offset="0.21" stop-color="#FCBB45" />
                          <stop offset="0.38" stop-color="#F75274" />
                          <stop offset="0.52" stop-color="#D53692" />
                          <stop offset="0.74" stop-color="#8F39CE" />
                          <stop offset="1" stop-color="#5B4FE9" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </button>
                  <span className="text-gray-300 hover:text-gray-100 text-lg font-medium ml-2 cursor-pointer hover:underline">
                    LIFEFINDER
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-400 text-sm py-4 border-t border-gray-700">
          &#169; 2024 LifeFinder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
