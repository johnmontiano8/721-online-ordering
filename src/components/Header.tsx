// Header.tsx

"use client";

import React, { useState } from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ShoppingCart, User } from "lucide-react";

const Header = ({ showLogoOnly = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(true);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <nav className="flex h-14 items-center justify-between border-b border-zinc-200">
          {/* Logo */}
          <Link href="/" className="flex z-40 font-semibold text-xl">
            721 &nbsp; <span className="text-orange-500">Sportswear</span>
          </Link>

          {/* Render navigation only if showLogoOnly is false */}
          {!showLogoOnly && (
            <div>
              <ul className="flex items-stretch space-x-2">
                {isAdmin && (
                  <li>
                    <Link
                      href="/admin/dashboard"
                      className="btn btn-ghost rounded-btn flex items-center p-2"
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
                <li>
                  <Link
                    href="/cart"
                    className="btn btn-ghost rounded-btn flex items-center p-2"
                  >
                    <ShoppingCart size={24} />
                    <span className="sr-only">Cart</span>
                  </Link>
                </li>
                <li className="relative">
                  <button
                    className="btn btn-ghost rounded-btn flex items-center p-2"
                    type="button"
                    onClick={toggleDropdown}
                  >
                    <User size={24} />
                    <span className="sr-only">Account</span>
                  </button>
                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                      <Link
                        href="/login"
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                      >
                        Login
                      </Link>
                      <Link
                        href="/myorders"
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                      >
                        My Orders
                      </Link>
                      <Link
                        href="/settings"
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                      >
                        Account Settings
                      </Link>
                      <Link
                        href="/api/auth/logout"
                        className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                      >
                        Logout
                      </Link>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </nav>
      </MaxWidthWrapper>
    </header>
  );
};

export default Header;
