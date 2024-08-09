import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { IoCheckmark } from "react-icons/io5";
import { TbBrandFacebook } from "react-icons/tb";
import GooglePlayImg from "../assets/images/footerImages/google-playstore.webp";
import AppStoreImg from "../assets/images/footerImages/appstore.webp";

function Footer() {
  return (
    <div className="text-white p-5 px-8 md:px-16 mt-[96px]">
      <div className="flex flex-col md:flex-row justify-between mb-6 md:mb-12">
        <div className="mb-8 md:mb-0">
          <h4 className="text-sm font-medium mb-3">Company</h4>
          <ul className="space-y-1 text-xs">
            <li>
              <a
                href="https://www.hotstar.com/about-us/in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-400"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="https://careers.hotstar.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-400"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h4 className="text-sm font-medium mb-3">View Website in</h4>
          <ul className="space-y-1 text-xs">
            <li className="flex items-center">
              <IoCheckmark className="mr-2" size={20} />
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-400"
              >
                English
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h4 className="text-sm font-medium mb-3">Need Help?</h4>
          <ul className="space-y-1 text-xs">
            <li>
              <a
                href="https://help.hotstar.com/in/en/support/home"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-400"
              >
                Visit Help Center
              </a>
            </li>
            <li>
              <a
                href="https://help.hotstar.com/in/en/support/tickets/feedback"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-400"
              >
                Share Feedback
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-8 md:mb-0">
          <h4 className="text-sm font-medium mb-3">Connect with Us</h4>
          <ul className="space-y-1 text-xs flex">
            <li className="mr-6 flex items-center">
              {" "}
              <a
                href="https://www.facebook.com/DisneyPlusHotstar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <TbBrandFacebook size={25} />
              </a>
            </li>
            <li className="flex items-center">
              <a
                href="https://x.com/DisneyPlusHS"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <BsTwitterX size={17} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footerBottom flex flex-col md:flex-row justify-between">
        <div className=" text-sm text-gray-400 mb-8 md:mb-0">
          <p className="mb-2">&copy; 2024 STAR. All rights reserved.</p>
          <p>
            <a
              href="https://www.hotstar.com/tnc/in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-400 mr-2"
            >
              <span>Terms of Use</span>
            </a>
            <a
              href="https://www.hotstar.com/privacy-policy/in"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2 text-gray-400 hover:text-gray-400"
            >
              <span>Privacy Policy</span>
            </a>{" "}
            <a
              href="https://help.hotstar.com/in/en/support/home"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-400"
            >
              <span>FAQ</span>
            </a>
          </p>
        </div>
        <div className="FooterImages flex flex-row">
          <a
            href="https://play.google.com/store/apps/details?id=in.startv.hotstar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-400 mb-4 md:mb-0"
          >
            <img
              src={GooglePlayImg}
              alt="Google Play Store"
              className="w-[120px] h-[40px]"
            />
          </a>
          <a
            href="https://apps.apple.com/in/app/hotstar-movies-live-cricket/id934459219"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-400"
          >
            <img
              src={AppStoreImg}
              alt="Appstore"
              className="w-[120px] h-[40px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
