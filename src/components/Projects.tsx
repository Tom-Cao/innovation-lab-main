"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Water Level Sensor System",
    location: "Field Deployment",
    image: "/images/dsc00209.jpg",
    description:
      "Custom-built IoT water level sensor housed in a rugged Pelican case. Designed for remote deployment with solar power and LoRa connectivity to monitor irrigation tanks and water sources in real time.",
    metrics: [
      { label: "Uptime", value: "99.5%" },
      { label: "Range", value: "2km+" },
      { label: "Battery", value: "6 months" },
    ],
    tags: ["IoT", "Sensors", "Water Management"],
    color: "green",
  },
  {
    title: "Smart Farm Monitoring Architecture",
    location: "System Design",
    image: "/images/dsc00208.jpg",
    description:
      "End-to-end sensor network architecture integrating ESP32 microcontrollers with FarmOS for real-time data collection, visualization, and automated alerts across multiple farm zones.",
    metrics: [
      { label: "Sensors", value: "12+" },
      { label: "Data Points", value: "50k/day" },
      { label: "Zones", value: "8" },
    ],
    tags: ["ESP32", "FarmOS", "Architecture"],
    color: "lime",
  },
  {
    title: "Livestock Management System",
    location: "Pastoral Farm",
    image: "/images/dscf9199.jpg",
    description:
      "Integrated monitoring solution for cattle operations including environmental sensors, feed tracking, and pasture rotation scheduling to optimize herd health and land regeneration.",
    metrics: [
      { label: "Herd Size", value: "150+" },
      { label: "Pastures", value: "6" },
      { label: "Efficiency", value: "+35%" },
    ],
    tags: ["Livestock", "Monitoring", "Pasture"],
    color: "amber",
  },
  {
    title: "Poultry Habitat Monitoring",
    location: "Free-Range Operation",
    image: "/images/dscf9233.jpg",
    description:
      "Environmental monitoring for free-range poultry operations. Temperature, humidity, and air quality sensors ensure optimal conditions for bird welfare while tracking productivity metrics.",
    metrics: [
      { label: "Birds", value: "500+" },
      { label: "Temp Accuracy", value: "\u00b10.5\u00b0C" },
      { label: "Alert Time", value: "<30s" },
    ],
    tags: ["Poultry", "Environment", "Welfare"],
    color: "teal",
  },
];

const colorMap: Record<string, { bg: string; text: string; border: string; tag: string }> = {
  green: {
    bg: "bg-green-50",
    text: "text-green-600",
    border: "border-green-200",
    tag: "bg-green-100 text-green-700",
  },
  lime: {
    bg: "bg-green-50",
    text: "text-lime-600",
    border: "border-lime-200",
    tag: "bg-lime-100 text-lime-700",
  },
  amber: {
    bg: "bg-amber-50",
    text: "text-amber-600",
    border: "border-amber-200",
    tag: "bg-amber-100 text-amber-700",
  },
  teal: {
    bg: "bg-teal-50",
    text: "text-teal-600",
    border: "border-teal-200",
    tag: "bg-teal-100 text-teal-700",
  },
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-shell section-light" ref={ref}>
      <div className="container-shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="kicker">Case Studies</span>
          <h2 className="section-title">Recent deployments and outcomes.</h2>
          <p className="section-copy mx-auto max-w-2xl">
            Examples of real systems delivered in production farm environments.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => {
            const colors = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1 }}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  {/* Location tag */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-slate-700 backdrop-blur-sm">
                      <svg
                        className="h-3 w-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      {project.location}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${colors.tag}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {project.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className={`rounded-lg ${colors.bg} p-3 text-center`}
                      >
                        <p
                          className={`text-lg font-bold ${colors.text}`}
                        >
                          {metric.value}
                        </p>
                        <p className="mt-0.5 text-[10px] font-medium text-slate-500 uppercase tracking-wider">
                          {metric.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
