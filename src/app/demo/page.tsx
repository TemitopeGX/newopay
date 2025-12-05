"use client";

import { Navbar } from "@/components/Navbar";

export default function DemoPage() {
    return (
        <main className="min-h-screen bg-white text-black">
            <Navbar />
            <div className="container mx-auto px-6 pt-32 pb-20 flex flex-col items-center justify-center min-h-screen">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-black mb-4">See OPay in Action</h1>
                    <p className="text-xl text-gray-600">Experience the future of payments and finance.</p>
                </div>

                <div className="relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-50">
                    <video
                        src="/VIDEO/downloadtheOPayapp.mp4"
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                </div>
            </div>
        </main>
    );
}
