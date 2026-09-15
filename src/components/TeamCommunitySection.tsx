"use client";

import React from "react";
import { UserCheck, Users, ShieldCheck, Sparkles } from "lucide-react";

export default function TeamCommunitySection() {
  return (
    <section id="bench" className="container">
      <div className="section-head">
        <div className="eyebrow">OUR BENCH</div>
        <h2>Who we have on our end?</h2>
        <p>Combining deep domain expertise with collective buyer intelligence so you never buy alone.</p>
      </div>

      <div className="split">
        {/* Card 1: Domain experts! */}
        <article className="feature flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="num">01 / INDEPENDENT ADVISORS</span>
              <UserCheck className="w-6 h-6 text-[#84976a]" />
            </div>
            <h3>Domain experts!</h3>
            <p className="text-sm sm:text-base text-[#555950] leading-relaxed mt-3">
              Independent property analysts, automotive technical consultants, RERA legal advisors, and interior quantity surveyors who evaluate your deals with zero seller commission bias.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-black/10 flex items-center gap-2 text-xs font-bold text-[#686b64]">
            <ShieldCheck className="w-4 h-4 text-[#84976a]" />
            <span>Dedicated technical & legal audit for your options</span>
          </div>
        </article>

        {/* Card 2: Customers like you! */}
        <article className="feature flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="num">02 / BUYER COMMUNITY</span>
              <Users className="w-6 h-6 text-[#84976a]" />
            </div>
            <h3>Customers like you!</h3>
            <p className="text-sm sm:text-base text-[#555950] leading-relaxed mt-3">
              Smart, real-world buyers sharing verified transaction insights, builder track records, hidden dealer quotation traps, and contractor checklists — making every future decision safer for everyone.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-black/10 flex items-center gap-2 text-xs font-bold text-[#686b64]">
            <Sparkles className="w-4 h-4 text-[#84976a]" />
            <span>Collective buyer bargaining power & shared market wisdom</span>
          </div>
        </article>
      </div>
    </section>
  );
}
