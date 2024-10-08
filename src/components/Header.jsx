import { HiDotsVertical, HiHome, HiPlus, HiStar } from "react-icons/hi";
import logo from "../assets/images/DisneyLogo.png";
import { HiMagnifyingGlass, HiTv } from "react-icons/hi2";
import HeaderItems from "./HeaderItems";
import Profile from "../assets/images/profile2.png";
import { BiCameraMovie } from "react-icons/bi";
import { useState } from "react";

function Header() {
  const [toggle, setToggle] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: BiCameraMovie,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-between p-5 cursor-pointer">
      <div className="flex gap-8 items-center">
        <img
          src={logo}
          alt="Disney Logo"
          className="w-[80px] md:w-[115px] object-cover"
        />
        <div className="hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItems key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="md:hidden flex gap-5">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItems key={item.name} name={""} Icon={item.icon} />
              )
          )}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setToggle(!toggle)}
          >
            <HeaderItems name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute mt-3 bg-[#121212] border-[1px] border-gray-700 px-5 py-4 p-3">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItems
                        key={item.name}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <img src={Profile} alt="Profile" className="w-[40px] rounded-full" />
    </div>
  );
}

export default Header;
