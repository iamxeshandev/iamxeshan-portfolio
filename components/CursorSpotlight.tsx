"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

export default function CursorSpotlight() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 40, stiffness: 200 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        window.addEventListener("mousemove", moveCursor);
        return () => window.removeEventListener("mousemove", moveCursor);
    }, [cursorX, cursorY]);

    const background = useMotionTemplate`radial-gradient(800px circle at ${springX}px ${springY}px, rgba(59, 130, 246, 0.15), transparent 80%)`;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-[100]"
            style={{ background }}
        />
    );
}
