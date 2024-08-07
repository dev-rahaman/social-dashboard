"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const items = [
  { name: "প্রোফাইল", href: "/dashboard" },
  { name: "ব্লগ", href: "/dashboard" },
  { name: "নোটিশঃ", href: "/dashboard" },
  { name: "ক্লাস", href: "/dashboard" },
  { name: "ইভেন্ট", href: "/dashboard" },
  { name: "ভিডিও ", href: "/dashboard" },
  { name: "ফটো", href: "/dashboard" },
  { name: "গ্রুপ", href: "/dashboard" },
  { name: "ফিডব্যাক", href: "/dashboard" },
  { name: "ডোনেশন", href: "/dashboard" },
  { name: "মেসেজ", href: "/dashboard" },
  { name: "নোটিফিকেশন", href: "/dashboard" },
];

const DashboardHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 fixed w-full -top-[0] custom-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 ">
              <Link href={"/dashboard"}>
                <Image
                  src="https://seeklogo.com/images/O/of-markajululum-mahila-madrasa-logo-44BAC337AA-seeklogo.com.png"
                  alt="Jamia Rashidia Feni"
                  width={50}
                  height={50}
                ></Image>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <div className="flex gap-8">
                  {items.map((item, idx) => (
                    <div key={idx}>
                      <Link href={`${item.href}`} className="custom-text">
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="block gap-8">
            {items.map((item, idx) => (
              <div key={idx}>
                <Link
                  href={`${item.href}`}
                  className="custom-text block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default DashboardHeader;
