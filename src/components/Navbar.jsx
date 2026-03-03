import Icon from "./Icon";

function Navbar() {
    return (
        <nav className="w-full border-b border-gray-100 bg-white sticky top-0 z-50">
            <div className="container max-w-7xl mx-auto  px-6 h-20 flex items-center justify-between">
                <div className="flex gap-10">
                    <div className="flex">
                        <a href="/" className="flex items-center gap-2">
                            <Icon name="diamond" className="text-blue-600 text-3xl!" />
                            <span className="uppercase font-black text-2xl tracking-tighter">Luxe</span>
                        </a>
                    </div>
                    <div className=" flex justify-center">
                        <ul className="flex items-center gap-8 text-sm font-semibold text-gray-700 capitalize">
                            <li>

                                <a className="hover:text-blue-500 transition-colors duration-200" href="#">shop</a>
                            </li>
                            <li>

                                <a className="hover:text-blue-500 transition-colors duration-200" href="#">Collections</a>
                            </li>
                            <li>

                                <a className="hover:text-blue-500 transition-colors duration-200" href="#">About</a>
                            </li>
                            <li>

                                <a className="hover:text-blue-500 transition-colors duration-200" href="#">Journal</a>
                            </li>


                        </ul>
                    </div>
                </div>
                <div className="flex items-center justify-end gap-4">
                    <div className="bg-slate-100 rounded-full  focus:border-none active:border-none w-64 relative flex items-center">
                        <Icon name="search" className="absolute left-3 text-gray-400 text-[20px] pointer-events-none" />
                        <input type="text" placeholder="Search Products..." className="placeholder:text-slate-500 outline-none w-full text-sm bg-transparent p-3   pl-10 " />
                    </div>
                    <button className="p-2 rounded-full hover:bg-slate-100 hover:cursor-pointer">
                        <Icon name="shopping_bag" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-slate-100 hover:cursor-pointer">
                        <Icon name="person" />
                    </button>
                </div>





            </div>
        </nav>
    );
}

export default Navbar;