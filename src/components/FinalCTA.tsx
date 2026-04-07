"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-shell section-muted" ref={ref}>
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="wire-card mx-auto max-w-4xl p-8 text-center sm:p-12"
        >
          <span className="kicker">Ready to Get Started?</span>

          <h2 className="section-title mx-auto mt-5 max-w-2xl">
            Let&apos;s plan your smart farming rollout.
          </h2>

          <p className="section-copy mx-auto max-w-2xl">
            Share your site goals and constraints. We&apos;ll propose a practical
            implementation plan with timeline, devices, and expected outcomes.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href="mailto:hello@innovationlab.io" className="btn-primary">
              Start a Conversation
            </a>
            <a href="#projects" className="btn-outline">
              View Our Projects
            </a>
          </div>

          <p className="mt-5 text-xs text-slate-500">
            Free initial consultation • No obligation • Tailored proposal
          </p>
        </motion.div>
      </div>
    </section>
  );
}
