"use client";

import { motion } from "framer-motion";
import { UserPlus, LayoutDashboard, ArrowRightLeft, CreditCard, Check } from "lucide-react";
import Image from "next/image";

const features = [
    {
        icon: UserPlus,
        title: "Easy account creation",
        description: "Get started in minutes with our simple and secure account creation process. No complicated paperwork required.",
        features: [
            "Quick verification",
            "Secure registration",
            "No hidden fees",
            "Instant activation"
        ],
        mockupImage: "/service/easy-create-acct.svg"
    },
    {
        icon: LayoutDashboard,
        title: "Manageable dashboard",
        description: "Track all your transactions, manage your finances, and access powerful tools from one beautiful dashboard.",
        features: [
            "Real-time updates",
            "Transaction history",
            "Financial insights",
            "Easy navigation"
        ],
        mockupImage: "/service/easy-manage-dashboard.svg"
    },
    {
        icon: ArrowRightLeft,
        title: "Easy transfer to OPay account or other bank",
        description: "Send money instantly to any OPay user or transfer to any Nigerian bank account with zero fees.",
        features: [
            "Instant transfers",
            "Zero transfer fees",
            "All banks supported",
            "24/7 availability"
        ],
        mockupImage: "/service/easy-transfer.svg"
    },
    {
        icon: CreditCard,
        title: "Instant debit card",
        description: "Get your virtual debit card instantly and start making online payments right away. Physical card delivered to you.",
        features: [
            "Virtual card instantly",
            "Physical card delivery",
            "Global acceptance",
            "Secure payments"
        ],
        mockupImage: "/service/instant-debit-card.svg"
    }
];

export function Services() {
    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
                        What the App <span className="text-primary">Can Do</span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Discover powerful features designed to make your financial life easier
                    </p>
                </div>

                {/* Feature Cards - Horizontal Scroll on Mobile, 2x2 Grid on Desktop */}
                <div className="overflow-x-auto pb-6 -mx-6 px-6 md:overflow-visible">
                    <div className="flex md:grid md:grid-cols-2 gap-6 min-w-max md:min-w-0 md:max-w-6xl md:mx-auto">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="flex-shrink-0 w-[85vw] md:w-auto bg-gray-50 rounded-3xl p-6 md:p-8 pb-0 border border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 group"
                            >
                                {/* Icon */}
                                <motion.div
                                    whileHover={{ rotate: 5, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-black flex items-center justify-center mb-6"
                                >
                                    <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                                </motion.div>

                                {/* Title */}
                                <h3 className="text-lg md:text-xl font-bold text-black mb-3 leading-tight group-hover:text-primary transition-colors">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                                    {feature.description}
                                </p>

                                {/* Features List - 2 columns */}
                                <div className="grid grid-cols-2 gap-2 mb-6">
                                    {feature.features.map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            className="flex items-start gap-2"
                                        >
                                            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-0.5 border border-gray-200">
                                                <Check className="w-2.5 h-2.5 text-black" strokeWidth={3} />
                                            </div>
                                            <span className="text-xs text-gray-700 font-medium leading-tight">{item}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Phone Mockup - Scroll Transition Only */}
                                <div className="relative flex items-center justify-center overflow-hidden">
                                    <motion.div
                                        className="relative w-full max-w-[240px] mx-auto"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        whileHover={{ scale: 1.05 }}
                                    >
                                        <Image
                                            src={feature.mockupImage}
                                            alt={feature.title}
                                            width={240}
                                            height={320}
                                            className="w-full h-auto drop-shadow-2xl"
                                        />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Scroll Indicator for Mobile */}
                <div className="md:hidden text-center mt-4">
                    <p className="text-xs text-gray-400">← Swipe to see more →</p>
                </div>
            </div>
        </section>
    );
}
