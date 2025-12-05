"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Platform logos with actual URLs
const platforms = [
    {
        name: "Netflix",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        angle: 0
    },
    {
        name: "Spotify",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2024_Spotify_Logo.svg/2560px-2024_Spotify_Logo.svg.png",
        angle: 45
    },
    {
        name: "Showmax",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/45/Showmax_Logo.png",
        angle: 90
    },
    {
        name: "Alibaba",
        logo: "https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Alibaba-Group-Logo.svg/2560px-Alibaba-Group-Logo.svg.png",
        angle: 135
    },
    {
        name: "AliExpress",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/AliExpress_2024.svg/2560px-AliExpress_2024.svg.png",
        angle: 180
    },
    {
        name: "inDrive",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/InDrive_Logo.svg/2560px-InDrive_Logo.svg.png",
        angle: 225
    },
];

const secondRing = [
    {
        name: "Google Play",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Google_Play_2022_logo.svg/2560px-Google_Play_2022_logo.svg.png",
        angle: 60
    },
    {
        name: "Paystack",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Paystack_Logo.svg/2560px-Paystack_Logo.svg.png",
        angle: 180
    },
    {
        name: "Flutterwave",
        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flutterwave_Logo.png/2560px-Flutterwave_Logo.png",
        angle: 300
    },
];

export function DebitCard() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-black mb-6"
                    >
                        Accepted on <span className="text-primary">Porpular Daily</span> Use Platforms
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Shop online, subscribe to services, and pay for your favorite platforms
                        with your OPay debit card—accepted worldwide at millions of merchants
                    </motion.p>
                </div>

                {/* Orbital Platform Display */}
                <div className="relative max-w-6xl mx-auto">
                    <div className="relative h-[800px] flex items-center justify-center">
                        {/* Orbital Rings */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {/* Outer Ring */}
                            <div className="absolute w-[700px] h-[700px] rounded-full border-2 border-dashed border-gray-200" />
                            {/* Inner Ring */}
                            <div className="absolute w-[480px] h-[480px] rounded-full border-2 border-dashed border-gray-300" />
                        </div>

                        {/* Center OPay Debit Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
                            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="relative w-[280px] md:w-[350px] h-[180px] md:h-[220px] rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/OPAY-CARD.png"
                                    alt="OPay Debit Card"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Outer Ring Platforms */}
                        {platforms.map((platform, index) => {
                            const radius = 350; // Outer orbit radius - ADJUSTED
                            const radian = (platform.angle * Math.PI) / 180;
                            const x = Math.cos(radian) * radius;
                            const y = Math.sin(radian) * radius;

                            return (
                                <motion.div
                                    key={platform.name}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="absolute z-20"
                                    style={{
                                        left: `calc(50% + ${x}px)`,
                                        top: `calc(50% + ${y}px)`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center p-3 cursor-pointer"
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={platform.logo}
                                                alt={platform.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}

                        {/* Inner Ring Platforms */}
                        {secondRing.map((platform, index) => {
                            const radius = 240; // Inner orbit radius - ADJUSTED
                            const radian = (platform.angle * Math.PI) / 180;
                            const x = Math.cos(radian) * radius;
                            const y = Math.sin(radian) * radius;

                            return (
                                <motion.div
                                    key={platform.name}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.9 + index * 0.1 }}
                                    className="absolute z-20"
                                    style={{
                                        left: `calc(50% + ${x}px)`,
                                        top: `calc(50% + ${y}px)`,
                                        transform: 'translate(-50%, -50%)',
                                    }}
                                >
                                    <motion.div
                                        whileHover={{ scale: 1.2, y: -5 }}
                                        className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-white border-2 border-gray-200 shadow-lg flex items-center justify-center p-2 cursor-pointer"
                                    >
                                        <div className="relative w-full h-full">
                                            <Image
                                                src={platform.logo}
                                                alt={platform.name}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Bottom Text */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.5 }}
                        className="text-center mt-8 text-gray-600"
                    >

                    </motion.p>
                </div>
            </div>
        </section>
    );
}
