function CategoryItem({ img, categoryName, des }) {
    return (
        <div className="group relative h-150 rounded-2xl overflow-hidden cursor-pointer">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{
                backgroundImage: `url(${img})`

            }}>

            </div>
            <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/40 transition-colors">

            </div>

            <div className="absolute bottom-8 left-8">
                <h4 className="text-2xl font-bold text-white mb-2 capitalize">{categoryName}</h4>
                <p className=" text-white/80 text-sm mb-4 capitalize">{des}</p>
                <span className="inline-block bg-white text-slate-900 font-bold opacity-0 group-hover:opacity-100 transition-opacity text-sm px-6 py-2 rounded-lg">
                    Explore
                </span>
            </div>
        </div >
    );
}

export default CategoryItem;