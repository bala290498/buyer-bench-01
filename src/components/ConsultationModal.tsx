"use client";

import React, { useState } from "react";
import { X, CheckCircle2, ArrowRight, ShieldCheck, MessageSquare, PhoneCall } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export default function ConsultationModal({ isOpen, onClose, defaultCategory = "Property" }: ModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(defaultCategory);
  const [mode, setMode] = useState<"online" | "offline">("online");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-200">
      <div className="relative w-full max-w-lg bg-white dark:bg-[#171916] rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 text-[#151614] dark:text-[#f5f5f0] overflow-hidden max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#686b64] hover:text-[#151614] hover:bg-[#e7e7df] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <div className="eyebrow mb-2">BUYERBENCH CONSULTATION</div>
              <h3 className="text-2xl font-bold tracking-tight text-[#151614] dark:text-[#f5f5f0]">
                Talk to an independent buyer guide
              </h3>
              <p className="text-sm text-[#686b64] mt-1">
                Share what you are planning to buy. We will review your shortlisted options, find hidden terms, and guide your next move.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Category Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#686b64] mb-2">
                  Select Decision Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "Property", label: "01 / Property", desc: "Plot or Flat" },
                    { id: "Vehicles", label: "02 / Vehicles", desc: "Car or Bike" },
                    { id: "Home", label: "03 / Home", desc: "Construction & Interior" },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`p-3 text-left rounded-2xl border transition-all text-xs cursor-pointer ${
                        selectedCategory === cat.id
                          ? "border-[#171916] bg-[#dce7c9] text-[#151614] font-bold shadow-xs"
                          : "border-black/10 bg-[#f5f5f0] text-[#686b64] hover:border-black/30"
                      }`}
                    >
                      <div className="font-extrabold">{cat.label}</div>
                      <div className="text-[11px] opacity-80 mt-0.5">{cat.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guidance Mode */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#686b64] mb-2">
                  Support Preference
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setMode("online")}
                    className={`flex items-center gap-2 p-3 rounded-2xl border text-xs font-medium transition-all cursor-pointer ${
                      mode === "online"
                        ? "border-[#171916] bg-[#171916] text-white"
                        : "border-black/10 bg-[#f5f5f0] text-[#151614]"
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 text-[#84976a]" />
                    <span>Online Video / Chat</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode("offline")}
                    className={`flex items-center gap-2 p-3 rounded-2xl border text-xs font-medium transition-all cursor-pointer ${
                      mode === "offline"
                        ? "border-[#171916] bg-[#171916] text-white"
                        : "border-black/10 bg-[#f5f5f0] text-[#151614]"
                    }`}
                  >
                    <PhoneCall className="w-4 h-4 text-[#84976a]" />
                    <span>In-Person / Call</span>
                  </button>
                </div>
              </div>

              {/* Shortlisted options / notes */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#686b64] mb-1">
                  Options You Have Found (Optional)
                </label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. 3BHK flat in Whitefield, Dealer quotation for EV SUV, or Interior contractor quote..."
                  rows={3}
                  className="w-full p-3 bg-[#f5f5f0] border border-black/10 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#84976a]"
                />
              </div>

              {/* User Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#686b64] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Jane Doe"
                    className="w-full p-3 bg-[#f5f5f0] border border-black/10 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#84976a]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#686b64] mb-1">
                    Email / Phone *
                  </label>
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full p-3 bg-[#f5f5f0] border border-black/10 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-[#84976a]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#171916] text-white font-bold text-sm hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <span>Request Independent Guidance</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 bg-[#dce7c9] text-[#171916] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#151614] tracking-tight">
              Guidance Brief Created!
            </h3>
            <p className="text-sm text-[#686b64] max-w-sm mx-auto">
              Thank you, <span className="font-bold text-[#151614]">{name}</span>. We have logged your request for{" "}
              <span className="font-bold text-[#151614]">{selectedCategory}</span> guidance ({mode} support).
            </p>

            <div className="bg-[#f5f5f0] p-4 rounded-2xl text-left border border-black/10 space-y-2">
              <div className="text-xs font-extrabold tracking-wider uppercase text-[#777a72] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#84976a]" />
                What Happens Next:
              </div>
              <ul className="text-xs text-[#555950] space-y-1.5 list-disc list-inside pl-1">
                <li>We analyze your options with zero commercial bias.</li>
                <li>We generate a personalized negotiation & verification checklist.</li>
                <li>Our expert guide contacts you directly at {email}.</li>
              </ul>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 px-6 rounded-full bg-[#171916] text-white font-bold text-sm hover:opacity-90 transition-all cursor-pointer"
            >
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
