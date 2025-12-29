"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="snap-section px-4">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
                className="z-10 text-center"
            >
                <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase glass rounded-full text-brand-blue border-brand-blue/20">
                    Full Stack Developer
                </span>

                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6">
                    I&apos;m <span className="text-gradient">Zeshan Mehmood</span>
                </h1>

                <p className="max-w-2xl text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed capitalize">
                    Building high-performance, responsive, and visually stunning web applications with modern technologies.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.a
                        href="#projects"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors"
                    >
                        View Projects <ArrowRight size={18} />
                    </motion.a>

                    <div className="flex items-center gap-3">
                        {[
                            { icon: Github, href: "#" },
                            { icon: Linkedin, href: "#" },
                            { icon: Mail, href: "#" }
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                whileHover={{ y: -5 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                className="p-4 glass rounded-full text-zinc-400 hover:text-white transition-colors"
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
