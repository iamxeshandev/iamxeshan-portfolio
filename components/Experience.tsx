"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        company: "TechNova Solutions",
        role: "Senior Full Stack Developer",
        period: "2022 - Present",
        desc: "Leading the development of enterprise-scale web applications using Next.js and AWS.",
    },
    {
        company: "PixelPerfect Agency",
        role: "Frontend Specialist",
        period: "2020 - 2022",
        desc: "Built highly interactive user interfaces for international clients with a focus on animations.",
    },
    {
        company: "Startup Hub",
        role: "Full Stack Web Developer",
        period: "2018 - 2020",
        desc: "Worked on various MVP projects, handling everything from database design to UI implementation.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="snap-section px-4">
            <SectionHeading
                title="Experience"
                subtitle="My professional journey and the companies I've helped grow."
            />

            <div className="relative max-w-4xl w-full">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

                <div className="space-y-12">
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 }}
                            whileInView={{ opacity: 1, x: 0, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                            className={`relative flex items-center justify-between w-full ${i % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
                        >
                            <div className="hidden md:block w-5/12" />

                            <div className="absolute left-4 md:left-1/2 w-10 h-10 bg-black border border-white/20 rounded-full -translate-x-1/2 flex items-center justify-center z-10 transition-colors group-hover:border-brand-blue/50">
                                <Briefcase size={16} className="text-brand-blue" />
                            </div>

                            <div className="w-full md:w-5/12 ml-14 md:ml-0 p-8 glass rounded-[2rem] border border-white/5 hover:border-brand-blue/30 transition-all hover:bg-white/[0.03] shadow-xl">
                                <span className="text-sm font-semibold text-brand-blue uppercase tracking-wider">{exp.period}</span>
                                <h3 className="text-2xl font-bold mt-2">{exp.company}</h3>
                                <p className="text-zinc-300 font-medium mt-1">{exp.role}</p>
                                <p className="text-zinc-500 mt-4 leading-relaxed text-sm">{exp.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
