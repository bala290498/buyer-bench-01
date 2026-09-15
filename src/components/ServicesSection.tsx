"use client";

import React, { useState } from "react";
import { ChevronDown, ChevronUp, ShieldCheck, Check } from "lucide-react";

interface ServicesSectionProps {
  onOpenModal: (category: string) => void;
}

const serviceChecklists = {
  property: [
    { title: "RERA & Legal Approvals Audit", desc: "Cross-checking title deed, RERA registration, land-use classification, and sanction plans." },
    { title: "Price per Sq. Ft. Market Check", desc: "Comparing recent registered sale prices in the exact locality versus builder asking price." },
    { title: "Hidden Charges Spotter", desc: "Uncovering club house, maintenance deposit, preferred location (PLC), and GST markups." },
    { title: "Second Opinion Review", desc: "Unbiased technical analysis of floor plans, carpet area ratio, and builder track record." },
  ],
  vehicles: [
    { title: "Dealer Quotation De-construction", desc: "Separating ex-showroom, RTO tax, insurance, handling charges, and essential accessories." },
    { title: "Insurance Direct Comparison", desc: "Finding zero-dep, engine-protect policies direct from insurance providers to eliminate dealer margin." },
    { title: "PDI (Pre-Delivery Inspection)", desc: "Comprehensive 50-point checklist before making the final payment to the dealership." },
    { title: "Variant & Fuel-Type Tradeoff", desc: "Calculating 5-year total cost of ownership (TCO) between EV, Petrol, Diesel, and Hybrid." },
  ],
  home: [
    { title: "Contractor Scope Verification", desc: "Ensuring itemized unit rates, material grades (plywood thickness, hardware brands) in writing." },
    { title: "Milestone Payment Structuring", desc: "Tying payouts strictly to verified completion stages to avoid front-loading vendor fees." },
    { title: "Material & Quotation Audit", desc: "Comparing vendor rate cards against direct market rates for tiles, sanitaryware, and timber." },
    { title: "Execution Progress Support", desc: "On-demand guidance during site visits to spot defects before final sign-off." },
  ],
};

export default function ServicesSection({ onOpenModal }: ServicesSectionProps) {
  const [activeTab, setActiveTab] = useState<"property" | "vehicles" | "home" | null>(null);

  const toggleTab = (tab: "property" | "vehicles" | "home") => {
    setActiveTab(activeTab === tab ? null : tab);
  };

  return (
    <section id="services" className="container">
      <div className="section-head">
        <div className="eyebrow">WHAT WE HELP WITH</div>
        <h2>Three places where decision gets complicated.</h2>
        <p>Focused on high-value decisions where experience, analysis and human guidance can make a meaningful difference.</p>
      </div>

      <div className="cards">
        {/* CARD 01 / PROPERTY */}
        <article className="card flex flex-col justify-between group relative">
          <div>
            <div className="num">01 / PROPERTY</div>
            <h3>Plot / Flat</h3>
            <p>Make sense of the property before you commit.</p>
            <ul>
              <li>Area and option analysis</li>
              <li>Price and negotiation guidance</li>
              <li>Step-by-step purchase support</li>
              <li>Second opinion on shortlisted options</li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-black/5">
            <button
              onClick={() => toggleTab("property")}
              className="text-xs font-extrabold text-[#7b806f] hover:text-[#151614] flex items-center justify-between w-full py-1.5 cursor-pointer transition-colors"
            >
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#84976a]" />
                {activeTab === "property" ? "Hide Audit Checklist" : "Explore Audit Checklist"}
              </span>
              {activeTab === "property" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {activeTab === "property" && (
              <div className="mt-3 space-y-2.5 bg-[#f5f5f0] p-3.5 rounded-xl border border-black/5 text-xs animate-fadeIn">
                {serviceChecklists.property.map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-bold text-[#151614] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#84976a]"></span>
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#686b64] pl-3">{item.desc}</div>
                  </div>
                ))}
                <button
                  onClick={() => onOpenModal("Property")}
                  className="w-full mt-2 py-2 bg-[#171916] text-white rounded-full text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Get Property Guidance
                </button>
              </div>
            )}
          </div>
        </article>

        {/* CARD 02 / VEHICLES */}
        <article className="card flex flex-col justify-between group relative">
          <div>
            <div className="num">02 / VEHICLES</div>
            <h3>Car / Bike</h3>
            <p>Choose the right vehicle and understand the deal.</p>
            <ul>
              <li>Budget-based recommendations</li>
              <li>Quotation and discount analysis</li>
              <li>Insurance and accessory guidance</li>
              <li>PDI and delivery support</li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-black/5">
            <button
              onClick={() => toggleTab("vehicles")}
              className="text-xs font-extrabold text-[#7b806f] hover:text-[#151614] flex items-center justify-between w-full py-1.5 cursor-pointer transition-colors"
            >
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#84976a]" />
                {activeTab === "vehicles" ? "Hide Audit Checklist" : "Explore Audit Checklist"}
              </span>
              {activeTab === "vehicles" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {activeTab === "vehicles" && (
              <div className="mt-3 space-y-2.5 bg-[#f5f5f0] p-3.5 rounded-xl border border-black/5 text-xs animate-fadeIn">
                {serviceChecklists.vehicles.map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-bold text-[#151614] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#84976a]"></span>
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#686b64] pl-3">{item.desc}</div>
                  </div>
                ))}
                <button
                  onClick={() => onOpenModal("Vehicles")}
                  className="w-full mt-2 py-2 bg-[#171916] text-white rounded-full text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Get Vehicle Guidance
                </button>
              </div>
            )}
          </div>
        </article>

        {/* CARD 03 / HOME */}
        <article className="card flex flex-col justify-between group relative">
          <div>
            <div className="num">03 / HOME</div>
            <h3>Construction / Interior</h3>
            <p>Make better choices when building or furnishing your home.</p>
            <ul>
              <li>Contractor and vendor comparison</li>
              <li>Quotation and budget analysis</li>
              <li>Material and scope guidance</li>
              <li>Execution support</li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-black/5">
            <button
              onClick={() => toggleTab("home")}
              className="text-xs font-extrabold text-[#7b806f] hover:text-[#151614] flex items-center justify-between w-full py-1.5 cursor-pointer transition-colors"
            >
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#84976a]" />
                {activeTab === "home" ? "Hide Audit Checklist" : "Explore Audit Checklist"}
              </span>
              {activeTab === "home" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {activeTab === "home" && (
              <div className="mt-3 space-y-2.5 bg-[#f5f5f0] p-3.5 rounded-xl border border-black/5 text-xs animate-fadeIn">
                {serviceChecklists.home.map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <div className="font-bold text-[#151614] flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#84976a]"></span>
                      {item.title}
                    </div>
                    <div className="text-[11px] text-[#686b64] pl-3">{item.desc}</div>
                  </div>
                ))}
                <button
                  onClick={() => onOpenModal("Home")}
                  className="w-full mt-2 py-2 bg-[#171916] text-white rounded-full text-xs font-bold hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Get Home & Interior Guidance
                </button>
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
