"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import {
    Code2,
    Database,
    Layout,
    Smartphone,
    Settings,
    Globe
} from "lucide-react";

const skills = [
    { name: "Frontend", icon: Layout, tech: "React, Next.js, Tailwind, TypeScript" },
    { name: "Backend", icon: Database, tech: "Node.js, Python, PostgreSQL, MongoDB" },
    { name: "Mobile", icon: Smartphone, tech: "React Native, Expo" },
    { name: "DevOps", icon: Settings, tech: "Docker, AWS, Vercel, CI/CD" },
    { name: "Languages", icon: Code2, tech: "JavaScript, Python, SQL, C++" },
    { name: "Web API", icon: Globe, tech: "REST, GraphQL, WebSocket" },
];

export default function About() {
    return (
        <section id="about" className="snap-section px-4">
            <SectionHeading
                title="About Me"
                subtitle="I am a passionate Full Stack Developer with a focus on creating modern, scalable web applications."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
                {skills.map((skill, i) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                        whileHover={{ y: -8, transition: { type: "spring", stiffness: 400, damping: 10 } }}
                        className="p-8 glass rounded-3xl border border-transparent transition-all hover:bg-white/[0.03] hover:border-brand-blue/30 shadow-xl"
                    >
                        <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue mb-6">
                            <skill.icon size={26} />
                        </div>
                        <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
                        <p className="text-zinc-400 leading-relaxed text-sm">{skill.tech}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
