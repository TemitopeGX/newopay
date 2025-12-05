"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function DownloadSection() {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="bg-foreground rounded-[3rem] p-12 md:p-24 border border-white/10 overflow-hidden relative">
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                                Ready to start <br />
                                <span className="text-primary">your journey?</span>
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 max-w-md">
                                Download the OPay app today and take control of your financial future. Available on iOS and Android.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                {/* App Store Button */}
                                <a
                                    href="#"
                                    className="inline-block transition-transform hover:scale-105"
                                >
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Apple-badge%402x.png"
                                        alt="Download on the App Store"
                                        width={180}
                                        height={60}
                                        className="h-[60px] w-auto"
                                    />
                                </a>

                                {/* Google Play Button */}
                                <a
                                    href="#"
                                    className="inline-block transition-transform hover:scale-105"
                                >
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                                        alt="Get it on Google Play"
                                        width={200}
                                        height={60}
                                        className="h-[60px] w-auto"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* iPhone Mockup with CTA Screenshot */}
                        <div className="relative hidden lg:block h-[500px]">
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="absolute right-12 top-0"
                            >
                                {/* iPhone 16 Frame */}
                                <div className="relative w-[280px] md:w-[320px]">
                                    <div className="relative bg-black rounded-[55px] p-2 shadow-2xl border-[6px] border-gray-800">
                                        {/* Screen */}
                                        <div className="relative bg-white rounded-[46px] overflow-hidden">
                                            {/* Dynamic Island */}
                                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20 flex items-center justify-end pr-2 gap-1">
                                                <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                                                <div className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]" />
                                            </div>

                                            {/* App Screenshot */}
                                            <div className="relative w-full h-[520px] md:h-[600px]">
                                                <Image
                                                    src="/cta.png"
                                                    alt="OPay App"
                                                    fill
                                                    className="object-cover object-top"
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
                </div>
            </div>
        </section>
    );
}
