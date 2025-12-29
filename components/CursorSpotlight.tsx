"use client";

import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue, useMotionTemplate } from "framer-motion";

export default function CursorSpotlight() {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Higher damping for a more premium, industrial feel (no jitter)
    const springConfig = { damping: 45, stiffness: 250 };
    const springX = useSpring(cursorX, springConfig);
    const springY = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveHandler = (e: MouseEvent | TouchEvent) => {
            if ("clientX" in e) {
                cursorX.set(e.clientX);
                cursorY.set(e.clientY);
            } else if (e.touches && e.touches[0]) {
                cursorX.set(e.touches[0].clientX);
                cursorY.set(e.touches[0].clientY);
            }
        };

        window.addEventListener("mousemove", moveHandler);
        window.addEventListener("touchmove", moveHandler, { passive: true });
        window.addEventListener("touchstart", moveHandler, { passive: true });

        return () => {
            window.removeEventListener("mousemove", moveHandler);
            window.removeEventListener("touchmove", moveHandler);
            window.removeEventListener("touchstart", moveHandler);
        };
    }, [cursorX, cursorY]);

    const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(59, 130, 246, 0.1), transparent 80%)`;

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-[100] hidden md:block"
            style={{ background }}
        />
    );
}
