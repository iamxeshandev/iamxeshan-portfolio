"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Home, User, Layers, Briefcase, Mail } from "lucide-react";

const navItems = [
    { name: "Home", href: "#home", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Projects", href: "#projects", icon: Layers },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
    const activeSection = useActiveSection(navItems.map(i => i.href.replace("#", "")));

    return (
        <>
            {/* Desktop Vertical Navbar (Left) */}
            <motion.aside
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                className="fixed left-4 top-1/2 z-50 -translate-y-1/2 hidden lg:flex flex-col gap-6"
            >
                <div className="glass-dark rounded-full py-8 px-4 flex flex-col items-center gap-8 shadow-2xl border-white/10">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.href.replace("#", "");
                        return (
                            <a
                                key={item.name}
                                href={item.href}
                                className="group relative flex items-center justify-center p-3"
                            >
                                <item.icon
                                    size={24}
                                    className={cn(
                                        "transition-all duration-300",
                                        isActive ? "text-brand-blue scale-110" : "text-zinc-500 group-hover:text-white"
                                    )}
                                />

                                {/* Visual Indicator */}
                                {isActive && (
                                    <motion.div
                                        layoutId="active-desktop"
                                        className="absolute -left-1 w-1 h-6 bg-brand-blue rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                                    />
                                )}

                                {/* Tooltip */}
                                <span className="absolute left-16 px-4 py-2 rounded-xl bg-zinc-900 text-white text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10">
                                    {item.name}
                                </span>
                            </a>
                        );
                    })}
                </div>
            </motion.aside>
        </>
    );
}
