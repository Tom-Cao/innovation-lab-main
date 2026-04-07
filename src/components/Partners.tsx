"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  {
    name: "AgriTech Research Institute",
    initials: "ARI",
    description: "Soil science and sensor calibration research partner.",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Regional Farmers Cooperative",
    initials: "RFC",
    description: "Community-driven farmer network for field testing and deployment.",
    color: "bg-lime-100 text-lime-700",
  },
  {
    name: "SoilHealth Foundation",
    initials: "SHF",
    description: "Non-profit focused on regenerative practices and soil restoration.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    name: "FarmOS Community",
    initials: "FOS",
    description: "Open-source farm management platform for data integration.",
    color: "bg-teal-100 text-teal-700",
  },
  {
    name: "GreenTech Prototyping Lab",
    initials: "GPL",
    description: "Rapid prototyping and 3D printing for hardware development.",
    color: "bg-green-100 text-green-700",
  },
  {
    name: "Sustainable Agriculture Network",
    initials: "SAN",
    description: "Regional network connecting farmers with sustainable technology.",
    color: "bg-lime-100 text-lime-700",
  },
];

export default function Partners() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="section-shell section-muted" ref={ref}>
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="kicker">Our Partners</span>
          <h2 className="section-title">Trusted by research and farm networks.</h2>
          <p className="section-copy mx-auto max-w-2xl">
            We collaborate with institutions and producer groups to validate and
            scale practical solutions.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div
                className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl ${partner.color} text-sm font-bold transition-transform group-hover:scale-105`}
              >
                {partner.initials}
              </div>

              <div>
                <h3 className="text-base font-bold text-slate-900">
                  {partner.name}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {partner.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-slate-500">
            Interested in partnering with us?{" "}
            <a
              href="#contact"
              className="font-semibold text-[var(--brand-700)] transition-colors hover:text-[var(--brand-600)]"
            >
              Get in touch &rarr;
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
