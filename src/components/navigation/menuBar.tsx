import { Link, NavLink, useLocation } from "react-router";
import Images from "../../constants/images.constants";
import { RiMenu3Line } from "react-icons/ri";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from "../ui/sheet";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
  export const MENUITEMS = [
    {
      item: "Home",
      route: "/",
    },
    {
      item: "About Us",
      route: "/aboutus",
    },
    {
      item: "Vision",
      route: "/vision",
    },
    {
      item: "Games",
      route: "/games",
    },
    {
      item: "Partners",
      route: "/partners",
    },
    {
      item: "Store",
      route: "/gamestore",
    },
    {
      item: "Teams",
      route: "/teams",
    },
    {
      item: "Careers",
      route: "/careers",
    },
    // {
    //   item: "Contact",
    //   route: "/contactus",
    // },
  ];
  export const FooterMENUITEMS = [
    {
      item: "Home",
      route: "/",
    },
    {
      item: "About Us",
      route: "/aboutus",
    },
    
    {
      item: "Games",
      route: "/games",
    },
    {
      item: "Partners",
      route: "/partners",
    },
    {
      item: "Store",
      route: "/gamestore",
    },
    
    // {
    //   item: "Contact",
    //   route: "/contactus",
    // },
  ];

const MenuBar = () => {
  const [isOpen,setIsOpen]=useState(false)
  const [activeMenu,setActiveMenu]=useState<any>()
  const {pathname} = useLocation()
  useEffect(()=>{
    if(pathname){
     const itemMenu = MENUITEMS.find(item=>pathname.toLocaleLowerCase()==item.route.toLowerCase())
     setActiveMenu(itemMenu)
    }
  },[pathname])
  return (
    <nav className="flex items-center px-[5vw] py-4 md:px-[9vw] bg-black">
      <Link to={"/"} className="mr-auto cursor-pointer imgPosition">
        <img src={Images.gudulogo} className="h-8" alt="" />
      </Link>
      <div className="mx-auto menuPosition">
        <ul className="flex gap-10 desktopmenu">
           <li>
                    <span className="text-[#F8E930]">{activeMenu?.item}</span>
            </li>
        </ul>

      </div>
        {/* mobile menu */}
        <div className="flex gap-4 ml-auto">
          {/* <button className="text-white"><IoSearch /></button> */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className='ml-auto  menuPosition text-white' asChild><button><RiMenu3Line /></button></SheetTrigger>
        <SheetContent side='right' className="bg-[#DECD00]">
          <SheetHeader>
            <SheetDescription>
            <ul className='mt-[8vh] flex flex-col w-full gap-5 px-6 py-1'>
            {FooterMENUITEMS.map((item,id) => (
            <li key={id} className="text-center">
              <NavLink
                to={item?.route}
                onClick={()=>setIsOpen(false)}
                className={({ isActive }) => (isActive ? "link-active" : "text-black hover:text-white")}
                >
                {item?.item}
              </NavLink>
            </li>
          )) || <li>No menu available</li>}
          <li className="text-center my-5">
              <a href="http://" target="_blank" rel="noopener noreferrer" className="px-12 py-3 rounded-full border bg-black text-white ">Log In</a>
            </li>
          <li className="text-center">
             <div className="flex justify-center">
                <li className=" p-2 mx-2 my-2">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF color="blue"/>
                    </a>
                </li>

                <li className=" p-2 mx-2 my-2">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaTwitter color="blue"/>
                    </a>
                </li>
                
                <li className=" p-2 mx-2 my-2">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                    <FaYoutube color="red"/>
                    </a>
                </li>
            </div>
          </li>
          </ul>   
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
        </div>
    </nav>
  );
};

export default MenuBar;
