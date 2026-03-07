function PromotionBanner() {
    return (
        <section className="max-w-7xl mx-auto">
            <div className=" px-6 py-20">
                <div className="relative flex flex-col items-center text-center p-24 bg-slate-900 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-center bg-cover opacity-40" style={{
                        backgroundImage: "url('/wallpaper.png')"
                    }}>

                    </div>
                    <div className="relative max-w-2xl ">
                        <h3 className="text-white text-6xl font-black mb-6">the private sale</h3>
                        <p className="text-white/70 text-lg leading-relaxed mb-10">Join our inner circle for exclusive early access to the Winter preview and save up to 30% on current collections.</p>
                        <button className="bg-white px-12 py-4 text-sm uppercase font-black tracking-widest cursor-pointer hover:bg-slate-100 transition-colors duration-200 rounded-xl">
                            join the circle
                        </button>
                    </div>
                </div>
            </div>
            <div >

                <div className="h-0.5   bg-slate-200 " >
                </div>

            </div>

        </section>
    );
}

export default PromotionBanner;