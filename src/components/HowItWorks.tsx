"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Assess & Understand",
    description:
      "We visit your land, conduct soil tests, assess current conditions, and listen to your goals. We map out exactly what needs to be monitored, improved, or maintained.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Design & Plan",
    description:
      "Our team designs a custom solution tailored to your soil, climate, and objectives. We select the right sensors, monitoring systems, and regenerative strategies for your specific conditions.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.42 15.17l-5.645 3.18a.75.75 0 01-1.12-.86l1.49-6.573L1.91 7.022a.75.75 0 01.428-1.317l6.633-.615L11.766.98a.75.75 0 011.468 0l2.795 5.11 6.633.615a.75.75 0 01.428 1.317l-4.235 3.895 1.49 6.573a.75.75 0 01-1.12.86l-5.645-3.18a.75.75 0 00-.822 0z"
        />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Implement & Deploy",
    description:
      "We handle everything from hardware installation to system configuration. Sensor deployment, monitoring setup, and land management implementation. We set it up and make sure it works.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811V8.69zM12.75 8.689c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061a1.125 1.125 0 01-1.683-.977V8.69z"
        />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Monitor & Grow",
    description:
      "Your system goes live with real-time monitoring and adaptive management. We provide ongoing support, seasonal check-ins, and adjustment recommendations as your land transforms.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="section-shell section-light" ref={ref}>
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="kicker">Our Process</span>
          <h2 className="section-title">A clear 4-step implementation path.</h2>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 + i * 0.08 }}
                className="wire-card p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50 text-green-700">
                    {step.icon}
                  </div>
                  <span className="text-sm font-extrabold text-green-700">
                    {step.number}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {step.description}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
