"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Cyberlytics Dashboard",
        description: "A high-performance SaaS dashboard for data visualization and analytics.",
        image: "/project_dashboard_mockup_1767034938741.png",
        tags: ["Next.js", "TypeScript", "D3.js", "Tailwind"],
        github: "#",
        link: "#",
    },
    {
        title: "LuxWatch E-commerce",
        description: "Premium e-commerce mobile experience with smooth transitions and glassmorphism.",
        image: "/ecommerce_mobile_mockup_1767034956139.png",
        tags: ["React Native", "Expo", "Reanimated", "Stripe"],
        github: "#",
        link: "#",
    },
    {
        title: "VibeSocial App",
        description: "Modern social media platform with real-time interactions and glass UI.",
        image: "/social_media_app_mockup_1767034971966.png",
        tags: ["Next.js", "Firebase", "Framer Motion", "Tailwind"],
        github: "#",
        link: "#",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="snap-section px-4">
            <SectionHeading
                title="Featured Projects"
                subtitle="Some of my recent work that showcases my technical skills and design sense."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.title}
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
                        className="group relative glass rounded-[2rem] overflow-hidden border border-white/5 hover:border-brand-blue/30 transition-all shadow-2xl hover:shadow-brand-blue/20"
                    >
                        <div className="relative h-64 w-full overflow-hidden">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                <a href={project.github} className="p-3 bg-white/10 blur-sm-0 rounded-full hover:bg-white/20 transition-colors">
                                    <Github size={20} />
                                </a>
                                <a href={project.link} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                                    <ExternalLink size={20} />
                                </a>
                            </div>
                        </div>

                        <div className="p-8">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-blue transition-colors">{project.title}</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm">{project.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
