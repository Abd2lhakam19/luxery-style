import Icon from "./Icon";
function BestSellerItem({}) {
    return (
        <div>
            <div className=" group relative  h-100 rounded-2xl overflow-hidden mb-3   ">
                <div className=" absolute inset-0 bg-center bg-cover group-hover:scale-105 transition-transform duration-700 " style={{
                    backgroundImage: "url('/cloths.png')",
                    display: 'block'

                }}>
                </div>
                <button className="absolute top-4 right-4 bg-white px-2 py-2 rounded-full cursor-pointer opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Icon name="favorite " />
                </button>
                <button className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer bg-blue-700 px-10 py-3 rounded-full text-white capitalize font-bold text-sm"> add to cart</button>
            </div>
            <div className="flex flex-col text-start gap-0.5">
                <h3 className="font-bold text-slate-900 capitalize">Midnight Wool Blazer</h3>
                <p className="text-sm text-slate-500">$495.00</p>
            </div>
        </div>
    );
}

export default BestSellerItem;