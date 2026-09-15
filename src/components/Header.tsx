"use client";

import React from "react";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className="container relative z-40">
      <nav>
        <a className="brand inline-flex flex-col items-stretch group leading-none w-fit" href="#">
          <span className="underline decoration-[#84976a] decoration-2 underline-offset-4 font-extrabold text-2xl tracking-tight text-[#151614] text-center">
            BuyerBench
          </span>
          <span className="text-[10px] font-extrabold text-[#686b64] uppercase tracking-[0.38em] text-center w-full mt-1.5 pl-[0.38em]">
            FOR BUYERS
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="navlinks">
          <a href="#services">Services</a>
          <a href="#how">How it works</a>
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
