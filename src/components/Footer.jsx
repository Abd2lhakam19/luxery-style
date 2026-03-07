import Icon from "./Icon";
function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">

                    <div className="lg:col-span-2">

                        <div className="relative max-w-sm flex flex-col gap-8">
                            <div className="flex">
                                <a href="/" className="flex items-center gap-2">
                                    <Icon name="diamond" className="text-blue-600 text-3xl!" />
                                    <span className="uppercase font-black text-2xl tracking-tighter">Luxe</span>
                                </a>
                            </div>
                            <p className="leading-relaxed text-slate-500">Redefining modern luxury through minimalist design and exceptional craftsmanship. We create timeless pieces that are made to last. </p>
                            <div className="flex gap-4">
                                <a className="group w-10 h-10 px-2 py-2 bg-slate-100 rounded-full" href="">
                                    <Icon name="public" className="group-hover:text-blue-600 transition-colors" />

                                </a>
                                <a className="group w-10 h-10 px-2 py-2 bg-slate-100 rounded-full" href="">
                                    <Icon name="alternate_email" className="group-hover:text-blue-600 transition-colors" />
                                </a>
                                <a className="group w-10 h-10 px-2 py-2 bg-slate-100 rounded-full" href="">
                                    <Icon name="camera" className="group-hover:text-blue-600 transition-colors" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-black text-xs text-slate-900 tracking-widest uppercase mb-6">collections</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li> <a href="" className="capitalize hover:text-blue-600">new arriavls </a> </li>
                            <li> <a className="capitalize hover:text-blue-600" href="">men's edit</a></li>
                            <li> <a className="capitalize hover:text-blue-600" href="">women's edit</a></li>
                            <li> <a className="capitalize hover:text-blue-600" href="">accessories</a> </li>

                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black text-xs text-slate-900 tracking-widest uppercase mb-6">Customer Care</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li> <a href="" className="capitalize hover:text-blue-600">Shipping & Returns </a> </li>
                            <li> <a className="capitalize hover:text-blue-600" href="">Size Guide</a></li>
                            <li> <a className="capitalize hover:text-blue-600" href="">Track Order</a></li>
                            <li> <a className="capitalize hover:text-blue-600" href="">Contact Us</a> </li>

                        </ul>
                    </div>
                    <div>
                        <h4 className="font-black text-xs text-slate-900 tracking-widest uppercase mb-6">About</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li> <a href="" className="capitalize hover:text-blue-600">Our Story </a> </li>
                            <li> <a className="capitalize hover:text-blue-600" href="">Sustainability</a></li>
                            <li> <a className="capitalize hover:text-blue-600" href="">Stores</a></li>
                            <li> <a className="capitalize hover:text-blue-600" href="">Careers</a> </li>

                        </ul>
                    </div>

                </div>
                <div className="w-full border-t border-slate-200 pt-6 text-slate-400 text-xs ">
                    <div className="flex items-center justify-between">

                        <div>
                            <p className="uppercase">© 2026 LUXE ATELIER INC. ALL RIGHTS RESERVED.</p>
                        </div>
                        <div className="flex gap-6 capitalize">
                            <a className="hover:text-slate-600" href="">privacy policy</a>
                            <a className="hover:text-slate-600" href="">terms of service</a>
                            <a className="hover:text-slate-600" href="">accessibillity</a>

                        </div>
                    </div>

                </div>

            </div>

        </footer >
    )
}

export default Footer;