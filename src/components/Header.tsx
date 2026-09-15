"use client";

import React from "react";
import Image from "next/image";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className="container relative z-40">
      <nav>
        <a className="brand flex items-center gap-2.5 group leading-none w-fit" href="#">
          <div className="w-9 h-9 rounded-xl bg-[#151614] flex items-center justify-center text-[#dce7c9] shadow-xs group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <Image
              src="/favicon.png"
              alt="BuyerBench Icon"
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-stretch">
            <span className="underline decoration-[#84976a] decoration-2 underline-offset-4 font-extrabold text-2xl tracking-tight text-[#151614] text-center">
              BuyerBench
            </span>
            <div className="flex justify-between w-full text-[9px] font-black text-[#686b64] uppercase mt-1 select-none px-0.5">
              <span>F</span>
              <span>O</span>
              <span>R</span>
              <span>&nbsp;</span>
              <span>B</span>
              <span>U</span>
              <span>Y</span>
              <span>E</span>
              <span>R</span>
              <span>S</span>
            </div>
          </div>
        </a>

        {/* Desktop nav links */}
        <div className="navlinks">
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
          <a href="#things-to-know">Things to know</a>
          <a href="#team">Our team</a>
          <a href="#why">Why us</a>
          <button
            onClick={onOpenModal}
            className="nav-cta cursor-pointer"
          >
            Talk to us
          </button>
        </div>

        {/* Mobile CTA */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenModal}
            className="nav-cta text-xs py-2 px-3.5 cursor-pointer"
          >
            Talk to us
          </button>
        </div>
      </nav>
    </header>
  );
}
