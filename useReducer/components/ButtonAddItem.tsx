"use client";
import { handleProductsActionDelete } from "@/action/ProductsAction";

interface ButtonProps {
  name: string;
  id: number;
  dispatch: React.Dispatch<any>;
}

export default function ButtonAddItem({ name, id, dispatch }: ButtonProps) {
  function deleteFunc() {
    handleProductsActionDelete(dispatch, { id });
  }

  return (
    <button
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      onClick={deleteFunc}
    >
      {name}
    </button>
  );
}
