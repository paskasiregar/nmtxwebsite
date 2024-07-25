import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import {
  AltArrowDown,
  RefreshSquare,
  Laptop3,
  HandStars,
  Database,
} from "solar-icon-set";

export const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isHovered) {
      clearTimeout(timerRef.current);
    } else {
      timerRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 2000);
    }

    return () => clearTimeout(timerRef.current);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timerRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 2000);
  };

  const handleClick = (link) => {
    setActiveLink(link);
    setIsHovered(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="p-4 flex justify-between items-center relative">
      <div className="flex space-x-4">
        <Link href="/">
          <img
            className="object-cover h-8 w-20"
            src="https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1492536550/pxtryqfjih9jttqovjbh.png"
            width={"24%"}
          />
        </Link>
      </div>
      <div className="hidden md:flex justify-between items-center space-x-8 relative">
        <div
          className="flex flex-row items-center gap-2 relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Innovation Engineering
          <AltArrowDown color="black" size={24} iconStyle="Linear" />
          {isHovered && (
            <div
              className="absolute top-full left-0 mt-2 p-4 bg-white border border-gray-300 rounded-xl shadow-lg z-20"
              style={{ width: "320px" }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-left">
                <div className="font-bold text-md mb-2">
                  Our Innovation Engineering Services
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Link href="/IEStrategy">
                    <div
                      className={`flex items-center gap-2 py-1 text-sm cursor-pointer p-4 rounded-lg text-black ${
                        activeLink === "/IEStrategy"
                          ? "bg-orange-100"
                          : "hover:bg-orange-50"
                      }`}
                      onClick={() => handleClick("/IEStrategy")}
                    >
                      <RefreshSquare iconStyle="Bold" size={40} />
                      Strategy & Transformation Services
                    </div>
                  </Link>
                  <Link href="/IEIPD">
                    <div
                      className={`flex items-center gap-2 py-1 text-sm cursor-pointer p-4 rounded-lg text-black ${
                        activeLink === "/IEIPD"
                          ? "bg-orange-100"
                          : "hover:bg-orange-50"
                      }`}
                      onClick={() => handleClick("/IEIPD")}
                    >
                      <Laptop3 iconStyle="Bold" size={40} />
                      Innovation & Product Development
                    </div>
                  </Link>
                  <Link href="/IEAAS">
                    <div
                      className={`flex items-center gap-2 py-1 text-sm cursor-pointer p-4 rounded-lg text-black ${
                        activeLink === "/IEAAS"
                          ? "bg-orange-100"
                          : "hover:bg-orange-50"
                      }`}
                      onClick={() => handleClick("/IEAAS")}
                    >
                      <HandStars iconStyle="Bold" size={40} />
                      Expertise as A Service
                    </div>
                  </Link>
                  <Link href="/IEData">
                    <div
                      className={`flex items-center gap-2 py-1 text-sm cursor-pointer p-4 rounded-lg text-black ${
                        activeLink === "/IEData"
                          ? "bg-orange-100"
                          : "hover:bg-orange-50"
                      }`}
                      onClick={() => handleClick("/IEData")}
                    >
                      <Database iconStyle="Bold" size={40} />
                      Data Intelligence Services
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link href="/company">
          <div>Company</div>
        </Link>
        <Link href="/contact">
          <div>Contact</div>
        </Link>
      </div>
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="bg-white p-2 stroke-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        {isMenuOpen && (
          <div className="absolute top-full left-0 mt-2 p-4 bg-white border border-gray-300 rounded-xl shadow-lg z-20 w-full">
            <div className="text-left">
              <div className="font-semibold text-md mt-4">
                Innovation Engineering
              </div>
              <div className="grid grid-cols-1 gap-2">
                <Link href="/IEStrategy">
                  <div
                    className={`flex items-center gap-2 py-1 text-sm cursor-pointer p-4 rounded-lg text-black ${
                      activeLink === "/IEStrategy"
                        ? "bg-orange-100"
                        : "hover:bg-orange-50"
                    }`}
                    onClick={() => handleClick("/IEStrategy")}
                  >
                    <RefreshSquare iconStyle="Bold" size={20} />
                    Strategy & Transformation Services
                  </div>
                </Link>
                <Link href="/IEIPD">
                  <div
                    className={`flex items-center gap-2 py-1 text-sm cursor-pointer p-4 rounded-lg text-black ${
                      activeLink === "/IEIPD"
                        ? "bg-orange-100"
                        : "hover:bg-orange-50"
                    }`}
                    onClick={() => handleClick("/IEIPD")}
                  >
                    <Laptop3 iconStyle="Bold" size={20} />
                    Innovation & Product Development
                  </div>
                </Link>
                <Link href="/IEAAS">
                  <div
                    className={`flex items-center gap-2 py-1 text-sm cursor-pointer p-4 rounded-lg text-black ${
                      activeLink === "/IEAAS"
                        ? "bg-orange-100"
                        : "hover:bg-orange-50"
                    }`}
                    onClick={() => handleClick("/IEAAS")}
                  >
                    <HandStars iconStyle="Bold" size={20} />
                    Expertise as A Service
                  </div>
                </Link>
                <Link href="/IEData">
                  <div
                    className={`flex items-center gap-2 py-1 text-sm cursor-pointer p-4 rounded-lg text-black ${
                      activeLink === "/IEData"
                        ? "bg-orange-100"
                        : "hover:bg-orange-50"
                    }`}
                    onClick={() => handleClick("/IEData")}
                  >
                    <Database iconStyle="Bold" size={20} />
                    Data Intelligence Services
                  </div>
                </Link>
              </div>
              <div className="font-semibold text-md mt-4">Company</div>
              <Link href="/company">
                <div className="py-1 text-sm cursor-pointer p-4 rounded-lg text-black hover:bg-orange-50"></div>
              </Link>
              <div className="font-bold text-md mt-4">Contact</div>
              <Link href="/contact">
                <div className="py-1 text-sm cursor-pointer p-4 rounded-lg text-black hover:bg-orange-50"></div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
