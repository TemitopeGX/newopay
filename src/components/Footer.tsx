"use client";

import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand & Description */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="relative w-10 h-10">
                                <Image
                                    src="/opay-logo.png"
                                    alt="OPay Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold tracking-tight text-black">
                                OPay
                            </span>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-sm">
                            OPay is a one-stop mobile-based platform for payment, transportation, food & grocery delivery, and other important services in your everyday life.
                        </p>

                        {/* Download Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#" className="inline-block transition-transform hover:scale-105">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Apple-badge%402x.png"
                                    alt="Download on the App Store"
                                    width={140}
                                    height={45}
                                    className="h-[45px] w-auto"
                                />
                            </a>
                            <a href="#" className="inline-block transition-transform hover:scale-105">
                                <Image
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                                    alt="Get it on Google Play"
                                    width={155}
                                    height={45}
                                    className="h-[45px] w-auto"
                                />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="text-black font-bold mb-6 text-lg">Company</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Press & Media</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black font-bold mb-6 text-lg">Products</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li><a href="#" className="hover:text-primary transition-colors">Personal</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Business</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Debit Cards</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Savings</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Loans</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-black font-bold mb-6 text-lg">Support</h4>
                        <ul className="space-y-4 text-gray-600">
                            <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Safety & Security</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Merchant Terms</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} OPay Digital Services Limited. All rights reserved.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Regulatory Text */}
                <div className="mt-8 text-center md:text-left">
                    <p className="text-xs text-gray-400 leading-relaxed max-w-4xl">
                        OPay Digital Services Limited is a company licensed by the Central Bank of Nigeria. All deposits are insured by the Nigeria Deposit Insurance Corporation (NDIC).
                    </p>
                </div>
            </div>
        </footer>
    );
}
