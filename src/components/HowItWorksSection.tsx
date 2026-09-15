"use client";

import React, { useState } from "react";

const processDetails = [
  {
    num: "01",
    title: "Understand",
    desc: "Your needs, budget, priorities and constraints.",
    expanded: "We start by listening to what you want to achieve, your timeline, financial boundaries, and absolute non-negotiables.",
  },
  {
    num: "02",
    title: "Analyze",
    desc: "The options you already have and the details that matter.",
    expanded: "We dissect builder floor plans, dealer discount sheets, contractor bills of quantities (BOQ), and fine print.",
  },
  {
    num: "03",
    title: "Guide",
    desc: "Trade-offs, questions, risks and opportunities to consider.",
    expanded: "We highlight critical legal risks, hidden costs, negotiation leverage points, and practical alternatives.",
  },
  {
    num: "04",
    title: "Support",
    desc: "Negotiation and the process, online or face-to-face.",
    expanded: "Whether on video call or accompanying you to site visits and negotiation tables, we back your decisions every step of the way.",
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="how" className="dark-section">
      <div className="container">
        <div className="section-head">
          <div className="eyebrow">HOW IT WORKS</div>
          <h2>A second opinion before a major decision.</h2>
          <p>
            You don't have to start from scratch. Bring the properties, vehicles, contractors or quotations you've already found.
          </p>
        </div>

        <div className="process">
          {processDetails.map((step, idx) => (
            <div
              key={step.num}
              onClick={() => setActiveStep(activeStep === idx ? null : idx)}
              className={`step cursor-pointer transition-all duration-200 ${
                activeStep === idx
                  ? "bg-white/10 border-white/40 shadow-lg scale-[1.02]"
                  : "hover:bg-white/5 hover:border-white/20"
              }`}
            >
              <div className="num font-extrabold tracking-widest">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              
              {activeStep === idx && (
                <div className="mt-3 pt-3 border-t border-white/10 text-xs text-[#dce7c9] leading-relaxed animate-fadeIn">
                  {step.expanded}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
