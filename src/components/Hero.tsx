"use client";

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
        <section className="relative min-h-screen bg-white overflow-hidden flex items-center pt-40 pb-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-xl lg:pr-8"
                    >
                        {/* Trust Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-3 mb-6 px-5 py-2.5 rounded-full bg-gray-50 border border-gray-100"
                        >
                            <div className="flex -space-x-3">
                                {[1, 5, 8].map((i) => (
                                    <div key={i} className="relative w-8 h-8 rounded-full border-2 border-white overflow-hidden">
                                        <Image
                                            src={`https://i.pravatar.cc/100?img=${i}`}
                                            alt="User"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm font-semibold text-gray-700">Trusted by 35M+ Users</span>
                        </motion.div>

                        {/* Main Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl lg:text-6xl font-medium text-black mb-6 leading-tight tracking-tight"
                        >
                            One App for <span className="font-black">Everything</span> <br />
                            <span className="text-primary font-black">Payment & Finance</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-lg text-gray-600 mb-8 leading-relaxed"
                        >
                            Pay bills, transfer money, save, and get loans instantly.
                            Experience the future of banking with OPay.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row gap-4 mb-10"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 rounded-full bg-black text-white font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                            >
                                <Download className="w-5 h-5" />
                                Download App
                            </motion.button>
                            <Link href="/demo">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="px-8 py-4 rounded-full bg-white text-black font-bold text-base border-2 border-gray-200 hover:border-black flex items-center justify-center gap-2 transition-all w-full sm:w-auto"
                                >
                                    <Play className="w-5 h-5" />
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
                        className="relative flex items-center justify-center"
                    >
                        {/* Glowing Rings Background */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                            {/* Outer Ring */}
                            <div className="w-[650px] h-[650px] rounded-full border border-primary/10 animate-[spin_60s_linear_infinite]" />
                            {/* Middle Ring */}
                            <div className="absolute inset-0 m-auto w-[500px] h-[500px] rounded-full border border-primary/20 animate-[spin_40s_linear_infinite_reverse]" />
                            {/* Inner Ring */}
                            <div className="absolute inset-0 m-auto w-[350px] h-[350px] rounded-full border border-primary/30 bg-primary/5 blur-3xl" />
                        </div>

                        {/* Orbiting Icons */}
                        <div className="absolute inset-0 pointer-events-none">
                            {orbitingIcons.map((item, index) => {
                                // Calculate position on a circle - Increased radius to 280
                                const radius = 280;
                                const radian = (item.angle * Math.PI) / 180;
                                const x = Math.cos(radian) * radius;
                                const y = Math.sin(radian) * radius;

                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.8 + index * 0.1 }}
                                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            x,
                                            y,
                                        }}
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.2, y: -5 }}
                                            className={`flex flex-col items-center gap-2 cursor-pointer pointer-events-auto`}
                                        >
                                            <div className={`w-12 h-12 rounded-2xl ${item.color} flex items-center justify-center shadow-lg border-2 border-white`}>
                                                <item.Icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-xs font-bold text-gray-600 bg-white/80 backdrop-blur-sm px-2 py-1 rounded-full shadow-sm">
                                                {item.label}
                                            </span>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* iPhone Mockup - Dynamic Island Style */}
                        <div className="relative w-[270px] z-10">
                            {/* iPhone Frame */}
                            <div className="relative bg-black rounded-[55px] p-2 shadow-2xl border-[6px] border-gray-800">
                                {/* Screen */}
                                <div className="relative bg-white rounded-[46px] overflow-hidden">
                                    {/* Dynamic Island */}
                                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20 flex items-center justify-end pr-2 gap-1">
                                        <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
                                    </div>

                                    {/* App Screenshot */}
                                    <div className="relative w-full h-[500px]">
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
                                <div className="absolute -left-[8px] top-[100px] w-[5px] h-[40px] bg-gray-800 rounded-l-md" />
                                <div className="absolute -left-[8px] top-[150px] w-[5px] h-[40px] bg-gray-800 rounded-l-md" />
                                <div className="absolute -left-[8px] top-[200px] w-[5px] h-[40px] bg-gray-800 rounded-l-md" />
                                <div className="absolute -right-[8px] top-[150px] w-[5px] h-[70px] bg-gray-800 rounded-r-md" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
