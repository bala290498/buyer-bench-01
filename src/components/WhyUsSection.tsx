"use client";

import React from "react";
import { ShieldAlert, Home, Car, Hammer, CheckCircle2 } from "lucide-react";

export default function WhyUsSection() {
  return (
    <section id="why" className="container">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
        {/* Left column: Headings */}
        <div className="lg:col-span-6">
          <div className="eyebrow">WHY BUYERBENCH</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#151614] my-3 leading-[1.02]">
            We're not the seller. We're on your side.
          </h2>
          <p className="text-base sm:text-lg text-[#686b64] max-w-xl">
            Our role is to make the customer's decision clearer — not to make it for them.
          </p>
        </div>

        {/* Right column: Scam & Risk Protection Banner */}
        <div className="lg:col-span-6">
          <div className="bg-[#171916] text-white p-6 sm:p-7 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-widest text-[#a9ba8e] uppercase">
                <ShieldAlert className="w-4 h-4 text-[#dce7c9]" />
                PROTECT YOUR MONEY
              </span>
              <span className="text-[11px] bg-white/10 text-[#dce7c9] px-2.5 py-0.5 rounded-full font-semibold">
                Independent Audit
              </span>
            </div>

            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white mb-2">
              Three places where the decision is complicated — scam or losing money:
            </h3>

            {/* 3 Categories: Home. Wheels. Build. */}
            <div className="grid grid-cols-3 gap-2.5 my-4">
              <div className="bg-white/5 border border-white/10 p-3 rounded-2xl text-center hover:bg-white/10 transition-colors">
                <Home className="w-5 h-5 text-[#dce7c9] mx-auto mb-1" />
                <div className="text-sm font-extrabold text-white">Home.</div>
                <div className="text-[10px] text-[#b7bbb2] mt-0.5">Property / Plot</div>
              </div>

              <div className="bg-white/5 border border-white/10 p-3 rounded-2xl text-center hover:bg-white/10 transition-colors">
                <Car className="w-5 h-5 text-[#dce7c9] mx-auto mb-1" />
                <div className="text-sm font-extrabold text-white">Wheels.</div>
                <div className="text-[10px] text-[#b7bbb2] mt-0.5">Car / Bike</div>
              </div>

              <div className="bg-white/5 border border-white/10 p-3 rounded-2xl text-center hover:bg-white/10 transition-colors">
                <Hammer className="w-5 h-5 text-[#dce7c9] mx-auto mb-1" />
                <div className="text-sm font-extrabold text-white">Build.</div>
                <div className="text-[10px] text-[#b7bbb2] mt-0.5">Construction & Interior</div>
              </div>
            </div>

            <p className="text-xs text-[#b7bbb2] flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#a9ba8e] shrink-0" />
              <span>Spotting hidden traps, inflated quotes, and bad deals before you commit.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="split">
        <article className="feature">
          <div className="num">COLLECTIVE BARGAINING</div>
          <h3>Your buying power can be bigger together.</h3>
          <p>
            When genuine buyer demand aligns, we can aggregate interest and explore
            better commercial terms with sellers or providers. Any outcome depends on
            the specific situation and provider.
          </p>
        </article>

        <article className="feature">
          <div className="num">FEEDBACK LOOP</div>
          <h3>Every customer makes the next decision better.</h3>
          <p>
            We learn from real customer experiences — what worked, what didn't and what
            they wish they had known — then improve our checklists and guidance.
          </p>
        </article>
      </div>
    </section>
  );
}
