"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Send, MessageSquare, PhoneCall, ShieldCheck } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

const resolveInitialCategory = (catStr?: string) => {
  if (!catStr) return "Plot / flat";
  const lower = catStr.toLowerCase();
  if (lower.includes("vehicle") || lower.includes("car")) return "Car / bike";
  if (lower.includes("home") || lower.includes("construction") || lower.includes("interior")) return "Construction / interior";
  return "Plot / flat";
};

export default function ConsultationModal({ isOpen, onClose }: ModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [meetOption, setMeetOption] = useState<string>("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [meetOptionError, setMeetOptionError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [waLink, setWaLink] = useState("");

  useEffect(() => {
    if (isOpen) {
      setSelectedCategory("");
      setMeetOption("");
      setPhoneError("");
      setCategoryError("");
      setMeetOptionError("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "").slice(0, 10);
    setPhone(digitsOnly);
    if (digitsOnly.length === 10) {
      setPhoneError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    let hasError = false;

    if (!selectedCategory) {
      setCategoryError("Please select what you need help with.");
      hasError = true;
    } else {
      setCategoryError("");
    }

    if (!meetOption) {
      setMeetOptionError("Please select how you would like to meet.");
      hasError = true;
    } else {
      setMeetOptionError("");
    }

    if (phone.length !== 10) {
      setPhoneError("Please enter a valid 10-digit mobile number.");
      hasError = true;
    } else {
      setPhoneError("");
    }

    if (hasError) return;

    const formattedText = `*BuyerBench Request*
Name: ${name}
WhatsApp / Phone: ${phone}
Category: ${selectedCategory}
Meeting Preference: ${meetOption}
Details: ${notes}`;

    const url = `https://api.whatsapp.com/send?phone=919677691237&text=${encodeURIComponent(formattedText)}`;
    setWaLink(url);
    setSubmitted(true);

    // Open WhatsApp directly in a new tab
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setPhone("");
    setNotes("");
    setSelectedCategory("");
    setMeetOption("");
    setPhoneError("");
    setCategoryError("");
    setMeetOptionError("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs transition-opacity duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-black/10 text-[#151614] overflow-hidden max-h-[90vh] overflow-y-auto">
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
              <h3 className="text-2xl font-extrabold tracking-tight text-[#151614]">
                One step to validate your decision.
              </h3>
              <p className="text-sm text-[#686b64] mt-1">
                Share what you are planning to buy. We will review your shortlisted options, find hidden terms, and guide your next move.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#686b64] mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="w-full p-3 bg-[#f5f5f0] border border-black/10 rounded-2xl text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#84976a] text-[#151614]"
                />
              </div>

              {/* WhatsApp / phone */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#686b64] mb-1">
                  WhatsApp / phone (10 Digits) *
                </label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  maxLength={10}
                  minLength={10}
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="10-digit mobile number"
                  className={`w-full p-3 bg-[#f5f5f0] border rounded-2xl text-[16px] sm:text-sm focus:outline-none focus:ring-2 text-[#151614] ${
                    phoneError ? "border-red-500 focus:ring-red-500" : "border-black/10 focus:ring-[#84976a]"
                  }`}
                />
                {phoneError && (
                  <p className="text-xs text-red-500 mt-1 font-medium">{phoneError}</p>
                )}
              </div>

              {/* I need help with */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#686b64] mb-2">
                  I need help with *
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "Plot / flat", label: "Plot / flat" },
                    { id: "Car / bike", label: "Car / bike" },
                    { id: "Construction / interior", label: "Construction / interior" },
                  ].map((cat) => {
                    const isSelected = selectedCategory === cat.id;

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setCategoryError("");
                        }}
                        className={`p-3 text-center rounded-2xl border transition-all text-xs font-bold cursor-pointer ${
                          isSelected
                            ? "border-[#151614] bg-[#dce7c9] text-[#151614] shadow-xs"
                            : categoryError
                            ? "border-red-400 bg-[#f5f5f0] text-[#686b64] hover:border-black/30"
                            : "border-black/10 bg-[#f5f5f0] text-[#686b64] hover:border-black/30"
                        }`}
                      >
                        {cat.label}
                      </button>
                    );
                  })}
                </div>
                {categoryError && (
                  <p className="text-xs text-red-500 mt-1.5 font-medium">{categoryError}</p>
                )}
              </div>

              {/* How should we meet */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#686b64] mb-2">
                  How should we meet *
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { id: "Online", icon: MessageSquare },
                    { id: "In-person", icon: PhoneCall },
                  ].map((opt) => {
                    const Icon = opt.icon;
                    const isSelected = meetOption === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setMeetOption(opt.id);
                          setMeetOptionError("");
                        }}
                        className={`flex items-center justify-center gap-2 p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#151614] bg-[#dce7c9] text-[#151614] shadow-xs"
                            : meetOptionError
                            ? "border-red-400 bg-[#f5f5f0] text-[#686b64] hover:border-black/30"
                            : "border-black/10 bg-[#f5f5f0] text-[#686b64] hover:border-black/30"
                        }`}
                      >
                        <Icon className="w-4 h-4 text-[#84976a]" />
                        <span>{opt.id}</span>
                      </button>
                    );
                  })}
                </div>
                {meetOptionError && (
                  <p className="text-xs text-red-500 mt-1.5 font-medium">{meetOptionError}</p>
                )}
              </div>

              {/* What do you already have? */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#686b64] mb-1">
                  What do you already have? *
                </label>
                <textarea
                  required
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Budget, locality or model, quotes, contractor names if any"
                  rows={3}
                  className="w-full p-3 bg-[#f5f5f0] border border-black/10 rounded-2xl text-[16px] sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#84976a] text-[#151614]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-full bg-[#151614] text-white font-bold text-sm hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#dce7c9]" />
                  <span>Send request</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-4 space-y-4">
            <div className="w-14 h-14 bg-[#dce7c9] text-[#151614] rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#151614] tracking-tight">
              Request Sent to WhatsApp!
            </h3>
            <p className="text-sm text-[#686b64] max-w-sm mx-auto leading-relaxed">
              Thank you, <span className="font-bold text-[#151614]">{name}</span>. Your response has been forwarded to our WhatsApp Desk.
              <br />
              Team will reach you shortly.
            </p>

            <div className="bg-[#f5f5f0] p-4 rounded-2xl text-left border border-black/10 space-y-2">
              <div className="text-xs font-extrabold tracking-wider uppercase text-[#777a72] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#84976a]" />
                Summary of Your Request:
              </div>
              <ul className="text-xs text-[#555950] space-y-1 pl-1">
                <li>• <strong>Category:</strong> {selectedCategory}</li>
                <li>• <strong>Meeting:</strong> {meetOption}</li>
                <li>• <strong>Contact:</strong> {phone}</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-6 rounded-full bg-[#25D366] text-[#ffffff] font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Open WhatsApp Desk</span>
              </a>

              <button
                onClick={handleReset}
                className="w-full py-2.5 px-6 rounded-full bg-[#151614] text-white font-bold text-sm hover:opacity-90 transition-all cursor-pointer"
              >
                Done & Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

