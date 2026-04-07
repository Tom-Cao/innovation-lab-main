"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const values = [
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
    title: "Regeneration First",
    description:
      "We lead with soil health and ecosystem restoration, using the latest technology and regenerative science to solve real farming challenges.",
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
      </svg>
    ),
    title: "Community Centered",
    description:
      "Our work strengthens local food systems and communities. We train teams and share knowledge so results outlast our involvement.",
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
    title: "Designed to Endure",
    description:
      "Our hardware and software are engineered for harsh agricultural environments and long-term reliability in the field.",
  },
  {
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M20.893 13.393l-1.135-1.135a2.252 2.252 0 01-.421-.585l-1.08-2.16a.414.414 0 00-.663-.107.827.827 0 01-.812.21l-1.273-.363a.89.89 0 00-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 01-1.81 1.025 1.055 1.055 0 01-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 01-1.383-2.46l.007-.042a2.25 2.25 0 01.29-.787l.09-.15a2.25 2.25 0 012.37-1.048l1.178.236a1.125 1.125 0 001.302-.795l.208-.73a1.125 1.125 0 00-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 01-1.591.659h-.18a.94.94 0 00-.662.274.931.931 0 01-1.458-1.137l1.411-2.353a2.25 2.25 0 00.286-.76m11.928 9.869A9 9 0 008.965 3.525m11.928 9.868A9 9 0 118.965 3.525"
        />
      </svg>
    ),
    title: "Local Expertise",
    description:
      "We understand local soils, climates, and growing conditions because we operate in them every day.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-shell section-light" ref={ref}>
      <div className="container-shell">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
              {/* Abstract tech visualization */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-green-900">
                {/* Circuit-like pattern */}
                <div className="absolute inset-0 p-8">
                  <div className="flex h-full flex-col justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                      <div className="h-px flex-1 bg-green-400/30" />
                      <div className="h-3 w-3 rounded-full bg-lime-400" />
                      <div className="h-px w-16 bg-lime-400/30" />
                    </div>

                    <div className="flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-4">
                        {[...Array(9)].map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{ opacity: [0.3, 1, 0.3] }}
                            transition={{
                              duration: 2,
                              delay: i * 0.2,
                              repeat: Infinity,
                            }}
                            className={`h-8 w-8 rounded-lg ${
                              i % 3 === 0
                                ? "bg-green-500/30"
                                : i % 3 === 1
                                  ? "bg-lime-500/30"
                                  : "bg-amber-500/30"
                            }`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="h-px w-24 bg-amber-400/30" />
                      <div className="h-3 w-3 rounded-full bg-amber-400" />
                      <div className="h-px flex-1 bg-green-400/30" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>
                  </div>
                </div>

                {/* Center logo - leaf/seedling SVG */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-2xl border border-green-500/30 bg-green-600/10 p-6 backdrop-blur-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-12 w-12 text-green-400"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 20.25h.008v.008H6v-.008zm0 0c3-6.75 7.5-10.5 13.5-13.5 0 0-1.5 6-6 10.5M6 20.25c1.5-1.5 3-3.75 3.75-5.25M18 4.5v.008h.008V4.5H18zm-3 7.5a3 3 0 11-6 0c0-3 3-6 3-6s3 3 3 6z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat card */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:-right-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-50">
                  <svg
                    className="h-5 w-5 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">5+ Years</p>
                  <p className="text-xs text-slate-500">Building AgTech Solutions</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <span className="kicker">About Us</span>
            <h2 className="section-title max-w-xl">
              Engineers and agronomists building practical farm systems.
            </h2>
            <p className="section-copy max-w-xl">
              AgriPulse was founded by engineers and agronomists who saw the gap
              between complex technology and day-to-day farm operations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              We work with farmers, estate managers, and landowners who want to
              use technology to work more efficiently but don&apos;t want to
              become IT experts. Our job is to make smart agricultural technology
              simple, reliable, and accessible.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6">
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-green-50 text-green-600">
                    {value.icon}
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-slate-900">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
