'use client'

import { BsGithub } from "react-icons/bs";
import React, { useState } from "react";
import { Button  } from "./buttonVariants";
import { SearchBar } from "./Searchbar";
import { AnimatePresence, motion } from "framer-motion";
import {PricingContent} from "./PricingContent"

// const navitems =[
//      {'id':"1" , 'title': 'Products'},
//      {"id": "2", 'title': "Solutions"},
//      {"id": "3", 'title': "Resources"},
//      {"id": "4", 'title': "Open Source"},
//      {"id": "5", 'title': "Enterprise"},
//      {"id": "6", 'title': "Pricing"},
// ]

 function Navbar(){
    return (
        <div className=" flex py-2 md:py-6 px-1  md:max-w-[1480px] m-auto  justify-between items-center">
            <div className=" flex px-2 items-center justify-evenly  gap-8 ">
              <BsGithub className="text-3xl cursor-pointer"/>
                <span  className="text-[16px] hidden md:flex px-2 items-center justify-evenly  gap-8   cursor-pointer font-md "> 
                <FlyoutLink href="#" FlyoutContent={PricingContent} > Products </FlyoutLink>
                <FlyoutLink href="#" FlyoutContent={PricingContent} > Solutions </FlyoutLink>
                <FlyoutLink href="#" FlyoutContent={PricingContent} > Resources </FlyoutLink>
                <FlyoutLink href="#" FlyoutContent={PricingContent} > Open Source </FlyoutLink>
                <FlyoutLink href="#" FlyoutContent={PricingContent} > Enterprise </FlyoutLink>
                <FlyoutLink href="#" FlyoutContent={PricingContent} > Pricing </FlyoutLink>
                </span>
            </div> 
            <div className="flex px-2 items-center justify-evenly  gap-8 ">
                <SearchBar  title="Search or jump to ...  "/>
                <button className="hidden md:block cursor-pointer">signin</button>
                <Button title={'Sign Up'} size="sm" variant="secondary" />
            </div> 
        </div>
    )
}

interface FlyoutInterface {
  children : any,
  FlyoutContent : any,
  href : any
}

const FlyoutLink = ({ children, href, FlyoutContent}:FlyoutInterface) => {
  const [open, setOpen] = useState(false);
  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative w-fit h-fit  ">
      <a href={href} className=" rounded relative text-white">
        {children}
        {/* <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out"
        /> */}
      </a>

      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black"
          >
            <div className="absolute -top-12 left-0 right-0 h-6  bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-transparent rounded-lg" />
            <FlyoutContent  />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default Navbar;