"use client";

import React from "react";

export default function WhyUsSection() {
  return (
    <section id="why" className="container">
      <div className="section-head">
        <div className="eyebrow">WHY BUYERBENCH</div>
        <h2>We're not the seller. We're on your side.</h2>
        <p>Our role is to make the customer's decision clearer — not to make it for them.</p>
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
