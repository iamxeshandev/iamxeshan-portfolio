import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
}

export default function SectionHeading({ title, subtitle, className }: SectionHeadingProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={cn("text-center mb-16", className)}
        >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                {title}
            </h2>
            <div className="w-20 h-1.5 bg-brand-blue rounded-full mx-auto mb-6 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg leading-relaxed">
                {subtitle}
            </p>
        </motion.div>
    );
}
