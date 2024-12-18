"use client";

import React, { useState } from "react";
import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ShoppingCart, User } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const Header = ({ showLogoOnly = false }) => {
  const [isAdmin] = useState(true);

  const { data: session }: any = useSession();

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
                    href="/client/cart"
                    className="btn btn-ghost rounded-btn flex items-center p-2"
                  >
                    <ShoppingCart size={24} />
                    <span className="sr-only">Cart</span>
                  </Link>
                </li>
                <li className="relative group">
                  <button
                    className="btn btn-ghost rounded-btn flex items-center p-2"
                    type="button"
                  >
                    <User size={24} />
                    <span className="sr-only">Account</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    {/* dropdown when no account is logged in */}
                    {!session ? (
                      <>
                        <Link
                          href="/login"
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                        >
                          Login
                        </Link>
                        <Link
                          href="/register"
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                        >
                          Register
                        </Link>
                      </>
                    ) : (
                      <>
                        <Link
                          href="./client/orders"
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                        >
                          My Orders
                        </Link>
                        <Link
                          href="/client/settings"
                          className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                        >
                          Account Settings
                        </Link>
                        <button
                          onClick={() => signOut({ callbackUrl: "/" })}
                          className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-100"
                        >
                          Logout
                        </button>
                      </>
                    )}
                  </div>
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
