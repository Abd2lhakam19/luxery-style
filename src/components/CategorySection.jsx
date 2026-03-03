import CategoryItem from "./CategoryItem";
import Icon from "./Icon";

function CategorySection() {
    return (
        <section className="relative max-w-7xl mx-auto px-6 pb-20 ">
            <div>
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h3 className="text-3xl font-black text-slate-900 capitalize">Shop by category</h3>
                        <p className="text-slate-500 mt-2">Find exactly what you're looking for</p>
                    </div>
                    <a className="text-blue-700 font-bold text-sm flex items-center gap-1" href="#">
                        Explore All
                        <Icon name="arrow_forward" className="text-sm" />
                    </a>

                </div>
                <div className="grid grid-cols-3 gap-6">
                    <CategoryItem img='/cloths.png' categoryName="apparel" des="timeless essential" />
                    <CategoryItem img='/bag.png' categoryName="Accessories" des="Handcrafted details" />
                    <CategoryItem img='/home.png' categoryName="Home" des="Modern aesthetics" />

                </div>

            </div>

        </section>
    );
}

export default CategorySection;