"use client";

import { motion } from "framer-motion";

export function Timeline() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                    {/* Left - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Section Title */}
                        <h2 className="text-3xl md:text-5xl font-bold text-black mb-6 leading-tight">
                            Our <span className="text-primary">Story</span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            We established in 2018 with license from CBN and insured by NDIC with thes same insurance coverage like other commercial banks, committed to deepening financial inclusion through technology and enabling shared prosperity. OPay is a one-stop financial service platform for payments,transfers, savings, loans and other essential services for users, provides the best POS service for agents and acquiring service for merchant currently OPay boasts of over tens of millions of users, agents and merchants in Nigeria.
                        </p>

                        {/* Timeline Milestones */}
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">2018</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-1">The Beginning</h3>
                                    <p className="text-gray-600">OPay was founded with a vision to transform digital payments in Nigeria</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">2020</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-1">Rapid Growth</h3>
                                    <p className="text-gray-600">Reached 10 million users and expanded our services nationwide</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                        <span className="text-white font-bold text-sm">2024</span>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-black mb-1">Leading the Way</h3>
                                    <p className="text-gray-600">35+ million users trust OPay for their daily financial needs</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden border border-gray-200">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto"
                            >
                                <source src="/VIDEO/timeline1127.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
