"use client";

import React, { useState } from "react";
import {
  CheckSquare,
  AlertTriangle,
  FileCheck,
  Mail,
  Copy,
  Check,
  ChevronRight,
  ShieldAlert,
  Sparkles,
  X,
  FileText,
  HelpCircle,
} from "lucide-react";

// Email Templates Data
const EMAIL_TEMPLATES = [
  {
    id: "price-breakup",
    category: "Negotiation & Pricing",
    title: "Request for Itemized All-Inclusive Price Breakup",
    subject: "Request for Itemized Quotation & Price Breakup – [Property / Vehicle Ref / Unit No.]",
    body: `Dear [Seller / Dealer / Builder Name],

Thank you for sharing the initial proposal for [Property Unit No. / Vehicle Model].

Before we proceed with further discussions, please provide a complete, itemized all-inclusive price breakup detailing:

1. Base price / cost per sq ft
2. Mandatory vs. optional add-ons (parking, club membership, accessories, documentation fees)
3. Statutory taxes (GST, stamp duty, registration estimation)
4. Preferred payment plan milestones and applicable cash discounts

Please share this in writing so our buyer advisory team at BuyerBench can review the complete breakdown.

Looking forward to your prompt response.

Best regards,
[Your Name]
[Your Phone Number]`,
  },
  {
    id: "legal-docs",
    category: "Legal & Compliance",
    title: "Demand for Legal Title & RERA Approvals",
    subject: "Request for Copy of Title Documents & Statutory Approvals – [Project Name / Unit No.]",
    body: `Dear [Builder / Seller Name],

We are currently conducting standard due diligence for [Unit / Property Details].

Kindly share copies of the following documents for legal verification by our advisory counsel:

1. Title Search Report & Mother Deed (last 30 years ownership chain)
2. RERA Registration Certificate & Approved Floor Plan layout
3. Encumbrance Certificate (EC) for the past 15-30 years
4. Commencement Certificate (CC) and NOCs (Fire, Environmental, Airport Authority if applicable)

We request you to email digital copies at your earliest convenience prior to token payment.

Regards,
[Your Name]
[Your Phone Number]`,
  },
  {
    id: "vehicle-pdi",
    category: "Vehicles",
    title: "Pre-Delivery Inspection (PDI) Clearance Request",
    subject: "Request for Pre-Delivery Inspection (PDI) Access – Booking ID: [Booking Ref]",
    body: `Dear [Dealer Name / Sales Manager],

Regarding my booking for [Vehicle Model & Variant, Color] (Booking Ref: [Booking Ref]):

Please note that payment of the final balance/loan disbursement is contingent upon a successful Pre-Delivery Inspection (PDI) of the allotted vehicle at your stockyard/showroom.

Kindly notify me 48 hours prior to invoicing with the assigned Chassis/VIN number so we can conduct our technical inspection.

Thank you for your cooperation.

Sincerely,
[Your Name]
[Your Phone Number]`,
  },
  {
    id: "final-discount",
    category: "Negotiation",
    title: "Formal Price Match & Final Discount Inquiry",
    subject: "Final Counter-Offer & Commitment Terms – [Ref / Unit No.]",
    body: `Dear [Sales Representative / Manager],

We have thoroughly evaluated your offer for [Property / Vehicle Details]. Based on current market benchmarks and comparable transactions in the area, we are prepared to finalize the deal subject to the following terms:

1. All-inclusive price cap of [₹ Amount / $ Amount]
2. Inclusion of [Key Add-on / Complimentary Service / Extended Warranty]
3. Standard payment schedule tied to verified completion milestones

If this counter-proposal is agreeable, we can sign the booking agreement within 48 hours.

Best regards,
[Your Name]
[Your Phone Number]`,
  },
];

// Checklists Data
const CHECKLIST_DATA = [
  {
    category: "Property",
    items: [
      { title: "RERA Registration", desc: "Verify project status and carpet area definition on the official state RERA portal." },
      { title: "Clear Title & Ownership", desc: "Ensure seller has unencumbered title deeds with no pending litigation or mortgage." },
      { title: "Carpet Area vs Super Built-up", desc: "Confirm exact usable carpet area rather than inflated super built-up metrics." },
      { title: "Hidden Maintenance & Corpus Fund", desc: "Ask for lifetime maintenance deposit rules and club membership recurring fees." },
      { title: "Bank APF Number", desc: "Check if major nationalized banks have pre-approved the project for home loans." },
    ],
  },
  {
    category: "Vehicles (Car / Bike)",
    items: [
      { title: "VIN & Manufacturing Month", desc: "Check 17-digit Chassis VIN to ensure the car isn't an old stockyard model." },
      { title: "Odometer & Stockyard PDI", desc: "Inspect test drive miles vs actual meter reading before full registration." },
      { title: "Insurance Breakup", desc: "Compare dealer insurance quotes with external zero-depreciation insurance online." },
      { title: "Handling Charge Removal", desc: "Dealers cannot legally force mandatory handling or logistics charges." },
    ],
  },
  {
    category: "Construction & Interiors",
    items: [
      { title: "Material Specification Sheet", desc: "Get brand-name commitments for plywood, hardware, switches, and sanitaryware." },
      { title: "Milestone-Linked Payment", desc: "Never pay more than 15-20% advance; tie remaining payments strictly to stage completion." },
      { title: "Penalty Clause for Delay", desc: "Include explicit per-day penalty terms if the project exceeds agreed handover date." },
    ],
  },
];

// Red Flags Data
const RED_FLAGS = [
  {
    severity: "High Danger",
    title: "Pressure Sales Tactics",
    desc: "'Price increases by 10% tomorrow' or 'Last unit remaining' are classic tactics to bypass your legal check.",
  },
  {
    severity: "High Danger",
    title: "Unregistered or Draft RERA",
    desc: "Accepting booking tokens before official RERA allocation leaves buyers with zero regulatory protection.",
  },
  {
    severity: "Medium Warning",
    title: "Forced Dealer Accessories & Insurance",
    desc: "Mandatory accessory packages or overpriced dealer insurance added without explicit buyer opt-in.",
  },
  {
    severity: "Medium Warning",
    title: "Vague Interior Material Names",
    desc: "Using terms like 'Commercial Plywood' instead of 'BWP Grade IS:710' or unspecified hardware brands.",
  },
];

// Verifications Data
const VERIFICATIONS = [
  {
    step: "01",
    title: "Encumbrance Certificate (EC)",
    desc: "Form 15/16 EC from sub-registrar office confirming property has no active bank liens or legal disputes.",
  },
  {
    step: "02",
    title: "Form 22 & Road Tax Slip",
    desc: "Roadworthiness certificate from vehicle manufacturer and RTO tax receipt matching chassis number.",
  },
  {
    step: "03",
    title: "Structural & Warranty Certificates",
    desc: "Soil test reports, structural stability certificate from chartered engineer, and hardware manufacturer warranties.",
  },
  {
    step: "04",
    title: "NOC & Occupancy Certificate (OC)",
    desc: "Official local authority OC confirming building is safe and constructed according to sanctioned plans.",
  },
];

export default function ThingsToKnowSection() {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="things-to-know" className="container relative z-10 scroll-mt-10">
      {/* Section Header */}
      <div className="section-head max-w-3xl">
        <div className="eyebrow">BUYER ADVISORY TOOLKIT</div>
        <h2>Things to know before buy.</h2>
        <p className="text-base sm:text-lg text-[#555950] mt-2">
          Make informed decisions. Equip yourself with verification standards, red flag alerts, and professional buyer templates before signing any deal.
        </p>
      </div>

      {/* Short 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        
        {/* CARD 1: Detailed Checklist */}
        <div 
          onClick={() => setActiveModal("checklist")}
          className="bg-white rounded-2xl p-5 border border-black/10 shadow-xs hover:shadow-md hover:border-[#84976a]/50 transition-all flex flex-col justify-between group cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#edf1e6] text-[#4d5c39] flex items-center justify-center group-hover:scale-105 transition-transform">
                <CheckSquare className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 bg-[#151614] text-[#dce7c9] rounded-full">
                Checklist
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#151614] tracking-tight group-hover:text-[#4d5c39] transition-colors">
              Detailed Checklist
            </h3>
            <p className="text-xs text-[#686b64] mt-1.5 leading-relaxed line-clamp-2">
              Property, vehicle & interior inspection points before signing.
            </p>
          </div>
        </div>

        {/* CARD 2: Red Flags */}
        <div 
          onClick={() => setActiveModal("redflags")}
          className="bg-white rounded-2xl p-5 border border-black/10 shadow-xs hover:shadow-md hover:border-amber-400/50 transition-all flex flex-col justify-between group cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 bg-amber-100 text-amber-900 rounded-full">
                Red Flags
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#151614] tracking-tight group-hover:text-amber-700 transition-colors">
              Red Flags
            </h3>
            <p className="text-xs text-[#686b64] mt-1.5 leading-relaxed line-clamp-2">
              Pressure tactics, hidden charges & unverified compliance traps.
            </p>
          </div>
        </div>

        {/* CARD 3: Things to Verify / Confirm */}
        <div 
          onClick={() => setActiveModal("verify")}
          className="bg-white rounded-2xl p-5 border border-black/10 shadow-xs hover:shadow-md hover:border-[#84976a]/50 transition-all flex flex-col justify-between group cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#edf1e6] text-[#4d5c39] flex items-center justify-center group-hover:scale-105 transition-transform">
                <FileCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 bg-[#151614] text-[#dce7c9] rounded-full">
                Verification
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#151614] tracking-tight group-hover:text-[#4d5c39] transition-colors">
              Things to Verify
            </h3>
            <p className="text-xs text-[#686b64] mt-1.5 leading-relaxed line-clamp-2">
              Encumbrance certificates, VIN codes & legal title documents.
            </p>
          </div>
        </div>

        {/* CARD 4: Custom Mail Templates */}
        <div 
          onClick={() => setActiveModal("templates")}
          className="bg-white rounded-2xl p-5 border border-black/10 shadow-xs hover:shadow-md hover:border-[#84976a]/50 transition-all flex flex-col justify-between group cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-[#151614] text-[#dce7c9] flex items-center justify-center group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-black tracking-wider uppercase px-2.5 py-0.5 bg-[#84976a] text-white rounded-full">
                Templates
              </span>
            </div>
            <h3 className="text-lg font-bold text-[#151614] tracking-tight group-hover:text-[#84976a] transition-colors">
              Mail Templates
            </h3>
            <p className="text-xs text-[#686b64] mt-1.5 leading-relaxed line-clamp-2">
              Ready-to-send email drafts for price breakup & legal demands.
            </p>
          </div>
        </div>

      </div>

      {/* MODAL DIALOGS */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-[#f5f5f0] border border-black/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
            
            {/* Modal Header */}
            <div className="p-6 bg-[#151614] text-white flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 text-[#dce7c9]">
                  {activeModal === "checklist" && <CheckSquare className="w-5 h-5" />}
                  {activeModal === "redflags" && <ShieldAlert className="w-5 h-5" />}
                  {activeModal === "verify" && <FileCheck className="w-5 h-5" />}
                  {activeModal === "templates" && <Mail className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold">
                    {activeModal === "checklist" && "Detailed Buyer Checklist"}
                    {activeModal === "redflags" && "Red Flag Warning Guide"}
                    {activeModal === "verify" && "Mandatory Verifications"}
                    {activeModal === "templates" && "Custom Mail Templates"}
                  </h3>
                  <p className="text-xs text-[#a1a499]">BuyerBench Advisory Resource</p>
                </div>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              
              {/* Checklist View */}
              {activeModal === "checklist" && (
                <div className="space-y-6">
                  {CHECKLIST_DATA.map((cat, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-5 border border-black/10">
                      <h4 className="text-xs font-black uppercase tracking-wider text-[#84976a] mb-3">
                        {cat.category}
                      </h4>
                      <div className="space-y-3">
                        {cat.items.map((item, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm">
                            <div className="w-5 h-5 rounded-full bg-[#edf1e6] text-[#4d5c39] flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                              ✓
                            </div>
                            <div>
                              <div className="font-bold text-[#151614]">{item.title}</div>
                              <div className="text-xs text-[#555950] mt-0.5">{item.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Red Flags View */}
              {activeModal === "redflags" && (
                <div className="space-y-4">
                  {RED_FLAGS.map((rf, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-5 border border-amber-200/60 shadow-xs">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900">
                          {rf.severity}
                        </span>
                        <h4 className="font-bold text-sm text-[#151614]">{rf.title}</h4>
                      </div>
                      <p className="text-xs text-[#555950] leading-relaxed">{rf.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Verify View */}
              {activeModal === "verify" && (
                <div className="space-y-4">
                  {VERIFICATIONS.map((v, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-5 border border-black/10 flex items-start gap-4">
                      <div className="text-lg font-black text-[#84976a] shrink-0 pt-0.5">{v.step}</div>
                      <div>
                        <h4 className="font-bold text-sm text-[#151614]">{v.title}</h4>
                        <p className="text-xs text-[#555950] mt-1 leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Templates View */}
              {activeModal === "templates" && (
                <div className="space-y-6">
                  {EMAIL_TEMPLATES.map((tmpl) => (
                    <div key={tmpl.id} className="bg-white rounded-2xl p-5 border border-black/10 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#edf1e6] text-[#4d5c39]">
                          {tmpl.category}
                        </span>
                        <button
                          onClick={() => handleCopy(`${tmpl.subject}\n\n${tmpl.body}`, tmpl.id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#151614] text-white hover:bg-[#84976a] hover:text-[#151614] text-xs font-bold transition-all cursor-pointer"
                        >
                          {copiedId === tmpl.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy Template</span>
                            </>
                          )}
                        </button>
                      </div>
                      
                      <h4 className="font-bold text-sm text-[#151614]">{tmpl.title}</h4>
                      
                      <div className="bg-[#f8f8f5] p-3 rounded-xl border border-black/5 text-xs text-[#444740] font-mono whitespace-pre-wrap">
                        <div className="font-bold text-[#151614] mb-2 font-sans">
                          Subject: {tmpl.subject}
                        </div>
                        {tmpl.body}
                      </div>
                    </div>
                  ))}
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-white border-t border-black/10 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2 text-xs text-[#686b64]">
                <Sparkles className="w-4 h-4 text-[#84976a]" />
                <span>BuyerBench Independent Verification Desk</span>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-xl bg-[#151614] text-white text-xs font-bold hover:bg-black transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
