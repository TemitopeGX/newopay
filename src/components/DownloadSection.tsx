"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function DownloadSection() {
    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/5" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="bg-foreground rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] p-8 sm:p-12 md:p-16 lg:p-24 border border-white/10 overflow-hidden relative">
                    {/* Decorative Circles */}
                    <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-primary/20 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
                        <div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                                Ready to start <br />
                                <span className="text-primary">your journey?</span>
                            </h2>
                            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8 md:mb-10 max-w-md">
                                Download the OPay app today and take control of your financial future. Available on iOS and Android.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                {/* App Store Button */}
                                <a
                                    href="#"
                                    className="inline-block transition-transform hover:scale-105"
                                >
                                    <Image
                                        src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Apple-badge%402x.png"
                                        alt="Download on the App Store"
                                        width={160}
                                        height={53}
                                        className="h-[48px] sm:h-[53px] md:h-[60px] w-auto mx-auto sm:mx-0"
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
                                        width={180}
                                        height={53}
                                        className="h-[48px] sm:h-[53px] md:h-[60px] w-auto mx-auto sm:mx-0"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* iPhone Mockup with CTA Screenshot */}
                        <div className="relative hidden lg:block h-[400px] md:h-[450px] lg:h-[500px]">
                            <motion.div
                                initial={{ y: 100, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="absolute right-0 lg:right-12 top-0"
                            >
                                {/* iPhone 16 Frame */}
                                <div className="relative w-[240px] md:w-[280px] lg:w-[320px]">
                                    <div className="relative bg-black rounded-[45px] sm:rounded-[50px] md:rounded-[55px] p-1.5 sm:p-2 shadow-2xl border-[4px] sm:border-[5px] md:border-[6px] border-gray-800">
                                        {/* Screen */}
                                        <div className="relative bg-white rounded-[38px] sm:rounded-[42px] md:rounded-[46px] overflow-hidden">
                                            {/* Dynamic Island */}
                                            <div className="absolute top-2 sm:top-2.5 md:top-3 left-1/2 -translate-x-1/2 w-[75px] sm:w-[82px] md:w-[90px] h-[24px] sm:h-[26px] md:h-[28px] bg-black rounded-full z-20 flex items-center justify-end pr-1.5 sm:pr-1.75 md:pr-2 gap-1">
                                                <div className="w-1.5 sm:w-1.75 md:w-2 h-1.5 sm:h-1.75 md:h-2 rounded-full bg-[#1a1a1a]" />
                                                <div className="w-1 sm:w-1.25 md:w-1.5 h-1 sm:h-1.25 md:h-1.5 rounded-full bg-[#1a1a1a]" />
                                            </div>

                                            {/* App Screenshot */}
                                            <div className="relative w-full h-[450px] md:h-[520px] lg:h-[600px]">
                                                <Image
                                                    src="/cta.png"
                                                    alt="OPay App"
                                                    fill
                                                    className="object-cover object-top"
                                                />
                                            </div>
                                        </div>

                                        {/* Side buttons */}
                                        <div className="absolute -left-[6px] sm:-left-[7px] md:-left-[8px] top-[80px] sm:top-[90px] md:top-[100px] w-[4px] sm:w-[4.5px] md:w-[5px] h-[32px] sm:h-[36px] md:h-[40px] bg-gray-800 rounded-l-md" />
                                        <div className="absolute -left-[6px] sm:-left-[7px] md:-left-[8px] top-[120px] sm:top-[135px] md:top-[150px] w-[4px] sm:w-[4.5px] md:w-[5px] h-[32px] sm:h-[36px] md:h-[40px] bg-gray-800 rounded-l-md" />
                                        <div className="absolute -left-[6px] sm:-left-[7px] md:-left-[8px] top-[160px] sm:top-[180px] md:top-[200px] w-[4px] sm:w-[4.5px] md:w-[5px] h-[32px] sm:h-[36px] md:h-[40px] bg-gray-800 rounded-l-md" />
                                        <div className="absolute -right-[6px] sm:-right-[7px] md:-right-[8px] top-[120px] sm:top-[135px] md:top-[150px] w-[4px] sm:w-[4.5px] md:w-[5px] h-[56px] sm:h-[63px] md:h-[70px] bg-gray-800 rounded-r-md" />
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
