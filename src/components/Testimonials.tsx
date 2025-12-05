"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Chioma Okafor",
        role: "Small Business Owner",
        avatar: "https://i.pravatar.cc/150?img=5",
        rating: 5,
        text: "OPay has transformed how I manage my business finances. The instant transfers and zero fees have saved me so much money and time. Highly recommended!"
    },
    {
        name: "Tunde Adeyemi",
        role: "Freelance Designer",
        avatar: "https://i.pravatar.cc/150?img=12",
        rating: 5,
        text: "I love the virtual card feature! I can shop online anywhere in the world without any hassle. The app is so easy to use and very reliable."
    },
    {
        name: "Amaka Nwosu",
        role: "Student",
        avatar: "https://i.pravatar.cc/150?img=9",
        rating: 5,
        text: "As a student, OPay has been a lifesaver. I can receive money from my parents instantly and pay for everything with just my phone. No more bank queues!"
    },
    {
        name: "Ibrahim Musa",
        role: "Entrepreneur",
        avatar: "https://i.pravatar.cc/150?img=14",
        rating: 5,
        text: "The POS service is excellent! My customers can pay easily, and I get my money instantly. OPay has helped grow my business significantly."
    },
    {
        name: "Blessing Okoro",
        role: "Teacher",
        avatar: "https://i.pravatar.cc/150?img=45",
        rating: 5,
        text: "I've been using OPay for over a year now. The savings feature helps me save money effortlessly, and the interest rate is amazing. Best financial app ever!"
    },
    {
        name: "Emeka Obi",
        role: "Ride-share Driver",
        avatar: "https://i.pravatar.cc/150?img=33",
        rating: 5,
        text: "OPay makes it so easy to receive payments from passengers. The app is fast, secure, and I can transfer money to my family instantly. Five stars!"
    },
];

export function Testimonials() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-black mb-4"
                    >
                        What Our <span className="text-primary">Users Say</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-600"
                    >
                        Join millions of satisfied users who trust OPay for their daily financial needs
                    </motion.p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Rating Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-gray-700 mb-6 leading-relaxed">
                                "{testimonial.text}"
                            </p>

                            {/* User Info */}
                            <div className="flex items-center gap-3">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-black">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
                >
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-black text-black mb-2">35M+</p>
                        <p className="text-gray-600 font-medium">Happy Users</p>
                    </div>
                    <div className="hidden md:block w-px h-16 bg-gray-200" />
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-black text-black mb-2">4.8/5</p>
                        <p className="text-gray-600 font-medium">Average Rating</p>
                    </div>
                    <div className="hidden md:block w-px h-16 bg-gray-200" />
                    <div className="text-center">
                        <p className="text-4xl md:text-5xl font-black text-black mb-2">1M+</p>
                        <p className="text-gray-600 font-medium">5-Star Reviews</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
