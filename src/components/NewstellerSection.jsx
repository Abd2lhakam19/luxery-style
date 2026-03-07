function NewstellerSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-row justify-between items-center">
                <div className="relative max-w-md">
                    <h3 className="text-3xl font-black text-slate-900 capitalize mb-2">stay inspired</h3>
                    <p className=" text-slate-500  leading-relaxed ">Subscribe to receive curated style guides, new product alerts, and exclusive invitations to Luxe events.</p>
                </div>
                <div className="flex flex-col gap-4 w-full max-w-md">
                    <div className="flex gap-2">
                        <input type="email" placeholder="Your email address" className="flex-1 bg-white px-4 py-4 rounded-2xl text-slate-900 focus:outline-none focus:ring-0 focus:border-blue-500 border border-slate-200 " />
                        <button className="bg-slate-900 px-8 hover:opacity-90 transition-opacity cursor-pointer font-bold capitalize py-4 rounded-2xl text-white">subscribe</button>
                    </div>
                    <p className="text-[10px] text-slate-400">By subscribing, you agree to our Privacy Policy and consent to receive marketing emails.</p>
                </div>
            </div>
        </section>
    );
}
export default NewstellerSection;