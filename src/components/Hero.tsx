"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
    Play,
    ArrowRightLeft,
    Smartphone,
    Wifi,
    Receipt,
    PiggyBank,
    CreditCard,
    QrCode,
    Terminal,
    Download
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    const [orbitRadius, setOrbitRadius] = useState(280);

    useEffect(() => {
        const updateRadius = () => {
            if (window.innerWidth < 640) {
                setOrbitRadius(160);
            } else if (window.innerWidth < 768) {
                setOrbitRadius(200);
            } else {
                setOrbitRadius(280);
            }
        };

        updateRadius();
        window.addEventListener('resize', updateRadius);
        return () => window.removeEventListener('resize', updateRadius);
    }, []);

    // Orbiting icons data
    const orbitingIcons = [
        { Icon: ArrowRightLeft, color: "bg-green-100 text-green-600", label: "Transfer", angle: 0 },
        { Icon: Smartphone, color: "bg-blue-100 text-blue-600", label: "Airtime", angle: 45 },
        { Icon: Wifi, color: "bg-purple-100 text-purple-600", label: "Data", angle: 90 },
        { Icon: Receipt, color: "bg-orange-100 text-orange-600", label: "Bills", angle: 135 },
        { Icon: PiggyBank, color: "bg-pink-100 text-pink-600", label: "Savings", angle: 180 },
        { Icon: CreditCard, color: "bg-indigo-100 text-indigo-600", label: "Cards", angle: 225 },
        { Icon: Terminal, color: "bg-cyan-100 text-cyan-600", label: "POS", angle: 315 },
    ];

    return (
        <section className="relative min-h-screen bg-white overflow-hidden flex items-center pt-28 md:pt-32 lg:pt-40 pb-12 md:pb-16 lg:pb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary/5 rounded-full blur-[80px] md:blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-blue-500/5 rounded-full blur-[80px] md:blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl lg:pr-8 text-center lg:text-left"
                    >
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gray-50 border border-gray-100"
                        >
                            <div className="flex -space-x-2 sm:-space-x-3">
                                {[1, 5, 8].map((i) => (
                                    <div key={i} className="relative w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-white overflow-hidden">
                                        <Image
                                            src={`https://i.pravatar.cc/100?img=${i}`}
                                            alt="User"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <span className="text-xs sm:text-sm font-semibold text-gray-700">Trusted by 35M+ Users</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-black mb-4 sm:mb-6 leading-tight tracking-tight"
                        >
                            One App for <span className="font-black">Everything</span> <br />
                            <span className="text-primary font-black">Payment & Finance</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed"
                        >
                            Pay bills, transfer money, save, and get loans instantly.
                            Experience the future of banking with OPay.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                            >
                                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                                Download App
                            </motion.button>
                            <Link href="/demo" className="w-full sm:w-auto">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-white text-black font-bold text-sm sm:text-base border-2 border-gray-200 hover:border-black flex items-center justify-center gap-2 transition-all w-full"
                                >
                                    <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                                    Demo Video
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Right - iPhone Mockup with Orbiting Icons */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative flex items-center justify-center min-h-[500px] sm:min-h-[600px]"
                    >
                        {/* Glowing Rings Background */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            {/* Outer Ring */}
                            <div className="w-[400px] sm:w-[500px] md:w-[650px] h-[400px] sm:h-[500px] md:h-[650px] rounded-full border border-primary/10 animate-[spin_60s_linear_infinite]" />
                            {/* Middle Ring */}
                            <div className="absolute inset-0 m-auto w-[300px] sm:w-[380px] md:w-[500px] h-[300px] sm:h-[380px] md:h-[500px] rounded-full border border-primary/20 animate-[spin_40s_linear_infinite_reverse]" />
                            {/* Inner Ring */}
                            <div className="absolute inset-0 m-auto w-[220px] sm:w-[280px] md:w-[350px] h-[220px] sm:h-[280px] md:h-[350px] rounded-full border border-primary/30 bg-primary/5 blur-3xl" />
                        </div>

                        {/* Orbiting Icons */}
                        <div className="absolute inset-0 pointer-events-none">
                            {orbitingIcons.map((item, index) => {
                                // Calculate position on a circle - Responsive radius
                                const radius = orbitRadius;
                                const radian = (item.angle * Math.PI) / 180;
                                const x = Math.cos(radian) * radius;
                                const y = Math.sin(radian) * radius;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:block"
                                        style={{
                                            x,
                                            y,
                                        }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            className={`flex flex-col items-center gap-1 sm:gap-2 cursor-pointer pointer-events-auto`}
                                        >
                                            <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl ${item.color} flex items-center justify-center shadow-lg border-2 border-white`}>
                                                <item.Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                                            </div>
                                            <span className="text-[10px] sm:text-xs font-bold text-gray-600 bg-white/80 backdrop-blur-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full shadow-sm">
                                                {item.label}
                                            </span>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* iPhone Mockup - Dynamic Island Style */}
                        <div className="relative w-[220px] sm:w-[250px] md:w-[270px] z-10">
                            {/* iPhone Frame */}
                            <div className="relative bg-black rounded-[45px] sm:rounded-[55px] p-1.5 sm:p-2 shadow-2xl border-[4px] sm:border-[6px] border-gray-800">
                                {/* Screen */}
                                <div className="relative bg-white rounded-[38px] sm:rounded-[46px] overflow-hidden">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-[75px] sm:w-[90px] h-[24px] sm:h-[28px] bg-black rounded-full z-20 flex items-center justify-end pr-1.5 sm:pr-2 gap-1">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#1a1a1a]" />
                                        <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-[#1a1a1a]" />
                                    </div>

                                    {/* App Screenshot */}
                                    <div className="relative w-full h-[410px] sm:h-[470px] md:h-[500px]">
                                        <Image
                                            src="/Screenshot_20251203-131924.png"
                                            alt="OPay App Interface"
                                            fill
                                            className="object-cover object-top"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Side buttons */}
                                <div className="absolute -left-[6px] sm:-left-[8px] top-[80px] sm:top-[100px] w-[4px] sm:w-[5px] h-[32px] sm:h-[40px] bg-gray-800 rounded-l-md" />
                                <div className="absolute -left-[6px] sm:-left-[8px] top-[120px] sm:top-[150px] w-[4px] sm:w-[5px] h-[32px] sm:h-[40px] bg-gray-800 rounded-l-md" />
                                <div className="absolute -left-[6px] sm:-left-[8px] top-[160px] sm:top-[200px] w-[4px] sm:w-[5px] h-[32px] sm:h-[40px] bg-gray-800 rounded-l-md" />
                                <div className="absolute -right-[6px] sm:-right-[8px] top-[120px] sm:top-[150px] w-[4px] sm:w-[5px] h-[56px] sm:h-[70px] bg-gray-800 rounded-r-md" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
