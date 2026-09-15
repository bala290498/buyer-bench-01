"use client";

import React from "react";
import Image from "next/image";

interface FooterProps {
  onOpenModal?: () => void;
}

export default function Footer({ onOpenModal }: FooterProps) {
  return (
    <footer className="bg-[#151614] text-[#f5f5f0] pt-14 pb-8 border-t border-black/10">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-1 space-y-4">
            <a className="flex items-center gap-2.5 leading-none group w-fit" href="#">
              <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-[#dce7c9] shadow-xs group-hover:scale-105 transition-transform overflow-hidden shrink-0 border border-white/10">
                <Image
                  src="/favicon.png"
                  alt="BuyerBench Icon"
                  width={36}
                  height={36}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col items-stretch">
                <span className="underline decoration-[#84976a] decoration-2 underline-offset-4 font-extrabold text-2xl tracking-tight text-[#f5f5f0]">
                  BuyerBench
                </span>
                <div className="flex justify-between w-full text-[9px] font-black text-[#dce7c9] uppercase mt-1 select-none px-0.5">
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
            <p className="text-xs text-[#a1a499] leading-relaxed max-w-xs">
              Built for Buyers. You Decide. We Guide. Independent advisory desk for high-value decisions.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#dce7c9] mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-xs text-[#b8bba8]">
              <li>
                <a href="#" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#how" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#why" className="hover:text-white transition-colors">Why Us</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#dce7c9] mb-4">
              LEGAL
            </h4>
            <ul className="space-y-2.5 text-xs text-[#b8bba8]">
              <li>
                <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">Buyer Advisory Terms</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Need Help? */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#dce7c9] mb-4">
              NEED HELP?
            </h4>
            <ul className="space-y-2.5 text-xs text-[#b8bba8]">
              <li>
                <button
                  type="button"
                  onClick={onOpenModal}
                  className="hover:text-white transition-colors text-left cursor-pointer"
                >
                  Report an issue
                </button>
              </li>
              <li>
                <a href="mailto:contact@buyerbench.in" className="hover:text-white transition-colors">
                  contact@buyerbench.in
                </a>
              </li>

            </ul>
          </div>

          {/* Col 5: Follow Us */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-widest text-[#dce7c9] mb-4">
              FOLLOW US
            </h4>
            <div className="flex items-center gap-3">
              {/* YouTube SVG */}
              <a
                href="#"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#dce7c9] hover:text-[#151614] flex items-center justify-center transition-colors text-[#f5f5f0]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* Instagram SVG */}
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#dce7c9] hover:text-[#151614] flex items-center justify-center transition-colors text-[#f5f5f0]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* LinkedIn SVG */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#dce7c9] hover:text-[#151614] flex items-center justify-center transition-colors text-[#f5f5f0]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* WhatsApp SVG */}
              <a
                href="https://api.whatsapp.com/send?phone=919677691237"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors text-[#f5f5f0]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l.299.474-1.056 3.856 3.947-1.035.463.276z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-[11px] text-[#8c8f82] gap-4">
          <div>
            © {new Date().getFullYear()} BuyerBench. All rights reserved.
          </div>
          <div>
            Independent guidance for buyers. Final decisions remain with the customer.
          </div>
        </div>
      </div>
    </footer>
  );
}
