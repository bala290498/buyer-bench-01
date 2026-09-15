"use client";

import React from "react";

interface ContactSectionProps {
  onOpenModal: () => void;
}

export default function ContactSection({ onOpenModal }: ContactSectionProps) {
  return (
    <section className="quote" id="contact">
      <h2>
        Before you buy,
        <br />
        talk to us.
      </h2>
      <p>
        Property, vehicles, construction and interiors. Online or offline support
        for the decisions that matter.
      </p>
      <div className="actions">
        <button
          onClick={onOpenModal}
          className="btn btn-dark cursor-pointer"
        >
          Start a conversation
        </button>
      </div>
    </section>
  );
}
