import React from "react";

function Footer() {
  return (
    <div className="bg-black text-white p-5 px-8 md:px-16 mt-[96px]">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div>
          <h4 className="text-xs font-medium mb-2">Company</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-sm ">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm ">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="text-sm ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-sm ">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium mb-2">View Website in</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-sm ">
                English
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium mb-2">Need Help?</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-sm ">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="text-sm ">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="text-sm ">
                Support
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium mb-2">Connect with Us</h4>
          <ul className="space-y-1">
            <li>
              <a href="#" className="text-sm ">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="text-sm ">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="text-sm ">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="text-sm ">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8  text-xs text-gray-400">
        <p className="mb-2">&copy; 2024 STAR. All rights reserved.</p>
        <p>
          <span className="mr-2">Terms of Use</span>{" "}
          <span className="mr-2">Privacy Policy</span> <span>FAQ</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
