import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWidthWrapper>
        <div className="border-t border-gray-200" />
        <div className="h-full flex flex-col md:flex-row md:justify-between justify-center items-center">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">
              &copy; 2023 All rights reserved
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="flex space-x-8">
              <Link
                href="https://www.facebook.com/p/721-Sportswear-Bacoor-Branch-61551806890268/"
                className="text-sm text-muted-foreground hover:text-gray-600 flex items-center space-x-2"
              >
                <i className="fab fa-facebook"></i>
                <span>Facebook</span>
              </Link>
              <Link
                href="https://www.instagram.com/721sportswear/?hl=en"
                className="text-sm text-muted-foreground hover:text-gray-600 flex items-center space-x-2"
              >
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </Link>
              <Link
                href="https://www.tiktok.com/@721sportswear"
                className="text-sm text-muted-foreground hover:text-gray-600 flex items-center space-x-2"
              >
                <i className="fab fa-tiktok"></i>
                <span>TikTok</span>
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default Footer;
