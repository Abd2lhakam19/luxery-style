import BestSellerItem from "./BestSellerItem";
import Icon from "./Icon";

function BestSellers() {
    return (
        <section className="bg-white w-full ">
            <div className="max-w-7xl mx-auto flex flex-col items-center text-center px-6 py-20">
                <div className="flex  flex-col gap-3 mb-10">
                    <h1 className="font-black text-3xl capitalize">
                        best sellers
                    </h1>
                    <p className=" text-slate-500">
                        Most loved pieces by our community across the globe.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4 w-full">
                    <BestSellerItem />
                    <BestSellerItem />
                    <BestSellerItem />
                    <BestSellerItem />
                </div>
            </div>
        </section>
    );
}

export default BestSellers;