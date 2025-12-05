"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function TrustSection() {
    return (
        <section className="relative py-12 bg-white">
            <div className="w-full">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10 px-6"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
                        Regulated & <span className="text-primary">Trusted</span>
                    </h2>
                    <p className="text-gray-600">Your money is safe with us</p>
                </motion.div>

                {/* Logo Cards - Edge to Edge */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-y border-gray-200">
                    {/* CBN Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-6 px-6 md:px-12 py-8 border-r border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                        {/* Logo */}
                        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 relative">
                            <Image
                                src="/logo/central-bank-of-nigeria-cbn-seeklogo.png"
                                alt="Central Bank of Nigeria"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Licensed by</p>
                            <h3 className="text-base md:text-lg font-bold text-gray-900">Central Bank of Nigeria</h3>
                        </div>
                    </motion.div>

                    {/* NDIC Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center gap-6 px-6 md:px-12 py-8 hover:bg-gray-50 transition-colors"
                    >
                        {/* Logo */}
                        <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 relative">
                            <Image
                                src="/logo/ndic.png"
                                alt="Nigeria Deposit Insurance Corporation"
                                fill
                                className="object-contain"
                            />
                        </div>

                        {/* Text */}
                        <div className="flex-1">
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Insured by</p>
                            <h3 className="text-base md:text-lg font-bold text-gray-900">NDIC</h3>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
