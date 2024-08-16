
const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className="flex p-4 ">
            <img className="w-[150px]  m-3" src={image} alt="" />
            <div>
                <div className="flex justify-between items-center">
                    <h3 className="lg:text-xl py-2">{name}  ..............</h3>
                    <p className="font-bold text-yellow-600" >${price}</p>
                </div>
                <p>{recipe}</p>
            </div>

        </div>
    );
};

export default MenuItem;