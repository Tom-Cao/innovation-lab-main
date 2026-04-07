"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="section-shell relative overflow-hidden pt-28 sm:pt-32">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="kicker">Smart Agriculture Platform</span>
            <h1 className="section-title max-w-xl">
              Monitor your land in real time and make better field decisions.
            </h1>
            <p className="section-copy max-w-xl">
              AgriPulse combines rugged sensors, farm dashboards, and expert
              implementation so teams can reduce risk and improve yield.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Request Demo
              </a>
              <a href="#projects" className="btn-outline">
                See Case Studies
              </a>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
              {[
                { value: "150+", label: "Sensors Deployed" },
                { value: "98%", label: "System Uptime" },
                { value: "35%", label: "Labor Time Saved" },
              ].map((item) => (
                <div key={item.label} className="wire-card p-3 text-center">
                  <p className="text-xl font-bold text-slate-900">{item.value}</p>
                  <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-slate-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="wire-card overflow-hidden"
          >
            <div className="grid gap-0 sm:grid-cols-[1.2fr_1fr]">
              <div className="relative min-h-72">
                <Image
                  src="/images/dscf9235.jpg"
                  alt="Field deployment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="bg-white p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--brand-700)]">
                  Live Monitoring
                </p>
                <h3 className="mt-2 text-lg font-bold text-slate-900">
                  Farm Pulse Dashboard
                </h3>
                <div className="mt-5 space-y-3">
                  {[
                    ["Soil Moisture", "72%"],
                    ["Tank Level", "84%"],
                    ["Temperature", "24.5°C"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2"
                    >
                      <span className="text-sm text-slate-500">{k}</span>
                      <span className="text-sm font-semibold text-slate-900">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
