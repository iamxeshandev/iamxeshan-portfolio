"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import SectionHeading from "./SectionHeading";
import { Mail, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="snap-section px-4">
            <SectionHeading
                title="Get In Touch"
                subtitle="Have a project in mind or just want to say hi? I'm always open to discussing new opportunities."
            />

            <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-3xl w-full glass rounded-[3rem] p-12 text-center border border-white/5 shadow-2xl relative overflow-hidden"
            >
                {/* Decorative Background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-violet/10 blur-[100px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-blue/10 blur-[100px] rounded-full" />

                <div className="relative z-10">
                    <div className="w-20 h-20 bg-brand-blue/10 rounded-3xl flex items-center justify-center text-brand-blue mx-auto mb-8">
                        <MessageSquare size={40} />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">Let&apos;s build something together</h3>
                    <p className="text-zinc-400 mb-10 max-w-md mx-auto leading-relaxed">
                        I am currently available for freelance projects and full-time opportunities. Drop me an email or find me on social media.
                    </p>

                    <motion.a
                        href="mailto:iamxeshan@gmail.com"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 40 }}
                        className="inline-block px-10 py-5 bg-white text-black font-bold rounded-full hover:bg-zinc-200 text-xl mb-12"
                    >
                        Say Hello
                    </motion.a>

                    <div className="flex items-center justify-center gap-6">
                        {[
                            { icon: Github, href: "#", color: "hover:text-white" },
                            { icon: Linkedin, href: "#", color: "hover:text-brand-blue" },
                            { icon: Twitter, href: "#", color: "hover:text-blue-400" },
                            { icon: Mail, href: "mailto:iamxeshan@gmail.com", color: "hover:text-red-400" },
                        ].map((social, i) => (
                            <motion.a
                                key={i}
                                href={social.href}
                                whileHover={{ y: -5, scale: 1.1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 40 }}
                                className={cn("p-4 glass rounded-full transition-colors", social.color)}
                            >
                                <social.icon size={24} />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.div>

            <footer className="mt-20 text-zinc-600 text-sm">
                &copy; {new Date().getFullYear()} Zeshan Mehmood. All rights reserved.
            </footer>
        </section>
    );
}
