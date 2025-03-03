"use client";
import { useReducer, useState } from "react";
import dummyProducts from "@/data/dummyProducts.json"
import { productsReducer } from "@/Reducer/ProductReducer";
import { handleProductsActionAdd, handleProductsActionGet } from "@/action/ProductsAction";
import Display from "@/components/Display";


const ProductInputCard = () => {


    const [state, dispatch] = useReducer(productsReducer, {
        items: dummyProducts.products
    })
    const [id_value, setId_value] = useState(11);
    const [product, setProduct] = useState({
        id: id_value,
        title: "",
        category: "",
        price: "",
    });

    const [display, setDisplay] = useState(false)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newProduct = { id: id_value, ...product };

        console.log("Product Data:", newProduct);
        alert(`Product Added: ${newProduct.title}, ${newProduct.category}, $${newProduct.price}`);

        handleProductsActionAdd(dispatch, newProduct);

        setId_value(prev => prev + 1);

        setProduct({ id: id_value + 1, title: "", category: "", price: "" });
    };


    function showItemsFunc() {
        handleProductsActionGet(dispatch);
        setDisplay(true);
    }

    return (
        display ? <Display state={state} dispatch={dispatch} setDisplay={setDisplay} /> :
            <div className="max-w-md p-6 bg-white shadow-md rounded-lg">
                <h2 className="text-xl font-semibold mb-4">Add Product</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="number"
                        name="id"
                        value={id_value}
                        className="w-full p-2 border rounded"
                        readOnly

                    />
                    <input
                        type="text"
                        name="title"
                        value={product.title}
                        onChange={handleChange}
                        placeholder="Product Title"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="text"
                        name="category"
                        value={product.category}
                        onChange={handleChange}
                        placeholder="Category"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        placeholder="Price"
                        className="w-full p-2 border rounded"
                        required
                    />
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                        Add Product
                    </button>

                </form>
                <button className="w-full bg-green-400 text-white p-2 mt-4 rounded hover:bg-green-600" onClick={showItemsFunc}>
                    Show items
                </button>
            </div>
    );
};

export default ProductInputCard;
