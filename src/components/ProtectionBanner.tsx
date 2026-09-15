"use client";

import React from "react";
import { ShieldAlert, Home, Car, Hammer, CheckCircle2 } from "lucide-react";

interface ProtectionBannerProps {
  onOpenModal?: (category: string) => void;
}

export default function ProtectionBanner({ onOpenModal }: ProtectionBannerProps) {
  return (
    <section className="bg-[#171916] text-white py-14 border-y border-white/10 my-4 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Text */}
          <div className="max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-extrabold tracking-widest text-[#a9ba8e] uppercase mb-2">
              <ShieldAlert className="w-4 h-4 text-[#dce7c9]" />
              INDEPENDENT BUYER PROTECTION
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
              One step expert advisory to avoid scam or losing money.
            </h2>
          </div>

          {/* Right 3 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
            {/* 01: Property. Plot / Flat */}
            <div
              onClick={() => onOpenModal && onOpenModal("Property")}
              className="bg-white/5 border border-white/10 p-5 rounded-3xl text-center hover:bg-white/10 hover:border-[#dce7c9]/40 transition-all cursor-pointer group min-w-[170px]"
            >
              <Home className="w-6 h-6 text-[#dce7c9] mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-lg font-extrabold text-white">Property.</div>
              <div className="text-xs font-bold text-[#dce7c9] mt-0.5">Plot / Flat</div>
              <div className="text-[11px] text-transparent mt-0.5">Placeholder</div>
            </div>

            {/* 02: Vehicles. Car / Bike */}
            <div
              onClick={() => onOpenModal && onOpenModal("Vehicles")}
              className="bg-white/5 border border-white/10 p-5 rounded-3xl text-center hover:bg-white/10 hover:border-[#dce7c9]/40 transition-all cursor-pointer group min-w-[170px]"
            >
              <Car className="w-6 h-6 text-[#dce7c9] mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-lg font-extrabold text-white">Vehicles.</div>
              <div className="text-xs font-bold text-[#dce7c9] mt-0.5">Car / Bike</div>
              <div className="text-[11px] text-transparent mt-0.5">Placeholder</div>
            </div>

            {/* 03: Home. Construction & Interior */}
            <div
              onClick={() => onOpenModal && onOpenModal("Home")}
              className="bg-white/5 border border-white/10 p-5 rounded-3xl text-center hover:bg-white/10 hover:border-[#dce7c9]/40 transition-all cursor-pointer group min-w-[170px]"
            >
              <Hammer className="w-6 h-6 text-[#dce7c9] mx-auto mb-2 group-hover:scale-110 transition-transform" />
              <div className="text-lg font-extrabold text-white">Home.</div>
              <div className="text-xs font-bold text-[#dce7c9] mt-0.5">Construction & Interior</div>
              <div className="text-[11px] text-transparent mt-0.5">Placeholder</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-[#b7bbb2]">
          <CheckCircle2 className="w-4 h-4 text-[#a9ba8e] shrink-0" />
          <span>Spotting hidden charges, contract traps, and bad deals before you pay or sign.</span>
        </div>
      </div>
    </section>
  );
}
