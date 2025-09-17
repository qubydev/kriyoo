"use client";

import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from "motion/react";

export default function AutoShadow() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 0);
    });

    return (
        <div className={`fixed left-0 top-0 h-14 w-full z-9 ${isScrolled ? 'shadow-md' : ''}`}></div>
    )
}