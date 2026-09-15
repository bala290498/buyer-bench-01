"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="container relative z-40">
      <nav>
        <a className="brand inline-flex items-center gap-2.5" href="#">
          <span className="underline decoration-[#84976a] decoration-2 underline-offset-4">BuyerBench</span>
          <span className="text-xs font-bold text-[#686b64] bg-[#edf1e6] px-2.5 py-0.5 rounded-full border border-[#84976a]/20">
            for buyers
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

        {/* Mobile menu hamburger toggle */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenModal}
            className="nav-cta text-xs py-2 px-3.5 cursor-pointer"
          >
            Talk to us
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#151614] hover:bg-[#e7e7df] rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#ffffff] border-b border-black/10 p-6 shadow-xl space-y-4 rounded-b-2xl">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#444740] hover:text-[#151614]"
          >
            Services
          </a>
          <a
            href="#how"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#444740] hover:text-[#151614]"
          >
            How it works
          </a>
          <a
            href="#why"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-semibold text-[#444740] hover:text-[#151614]"
          >
            Why us
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenModal();
              }}
              className="w-full btn-dark py-3 cursor-pointer"
            >
              Talk to us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
