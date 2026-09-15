"use client";

import React from "react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="hero container">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">INDEPENDENT BUYER GUIDANCE</div>
          <h1>
            Buying something big?
            <br />
            Talk to us first.
          </h1>
          <p className="hero-copy">
            We sit on your side — not the seller's. Bring us your options, and we'll help
            you understand, compare, negotiate and move forward with confidence.
          </p>
          <div className="actions">
            <button
              onClick={onOpenModal}
              className="btn btn-dark cursor-pointer"
            >
              Get guidance
            </button>
            <a className="btn btn-light" href="#how">
              See how it works
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="mini-label">YOUR DECISION, MADE CLEARER</div>
          <h3>
            You choose.
            <br />
            We help you choose better.
          </h3>
          <div className="check">
            <span>✓</span> Compare the options you already have
          </div>
          <div className="check">
            <span>✓</span> Find negotiation opportunities
          </div>
          <div className="check">
            <span>✓</span> Spot what you should verify
          </div>
          <div className="check">
            <span>✓</span> Get practical guidance, online or offline
          </div>
        </div>
      </div>
    </section>
  );
}
