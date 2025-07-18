"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search } from 'lucide-react';
import Banneratas from "../Banneratas"
const Navbar = () => {
  return (
    <nav className="bg-[url(/hero.jpg)] ...  h-100 bg-cover">
      <div className="mx-auto max-w-9xl px-2 sm:px-6 lg:px-8 bg-blue-800 h-100 opacity-75">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden"></div>
          <div className="flex flex-1  sm:items-stretcht">
            <div className="flex shrink-0 items-center gap-2">
              <Image
                className=" "
                src="/vectortwo.png"
                width={20}
                height={20}
                alt="Pictures of the author"
              />
              <h1 className="text-white">Logoipsum</h1>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="relative ml-3">
              <div>
                <h1 className="text-white">name</h1>
              </div>
            </div>
          </div>
        </div>
        <Banneratas />
      </div>
      
    </nav>
  );
};

export default Navbar;
