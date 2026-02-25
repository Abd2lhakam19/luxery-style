function HeroSection() {
    return (
        <section className="relative  max-w-7xl  mx-auto px-6 py-20">
            <div className="grid grid-cols-2 gap-12 bg-white rounded-3xl border border-slate-100 " >
                <div className="flex flex-col items-start p-20  gap-8">
                    <span className="uppercase text-xs tracking-widest font-bold text-blue-800">new release</span>
                    <h2 className="text-slate-900 font-black text-7xl capitalize  max-w-100">The autumn collection</h2>
                    <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                        Discover timeless pieces crafted with the finest materials. Elevate your everyday wardrobe with our seasonal curated selection.
                    </p>
                    <div className="flex gap-5">

                        <button className="bg-blue-700 text-white font-bold px-10 py-4 rounded-3xl hover:bg-blue-600 transition-colors">Shop Now</button>
                        <button className="px-10 py-4 border border-slate-200 rounded-3xl font-bold hover:bg-slate-50">View Lookbook</button>
                    </div>


                </div>

                <div className="relative  flex flex-col justify-end">
                    <img className="bg-cover bg-center w-full h-full rounded-tr-3xl rounded-br-3xl " src="./src/assets/woman.png" alt="" />
                </div>
            </div>
        </section>
    );
}

export default HeroSection;