"use client";
import ButtonAddItem from "@/components/ButtonAddItem";
import React, { useState, useReducer } from "react";

interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
}

interface DisplayProps {
  state: { items: [] }
  dispatch: React.Dispatch<any>;
  setDisplay: React.FunctionComponent
}
export default function Display({ state, dispatch, setDisplay }: DisplayProps) {



  return (
    <div className="p-4">

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {state.items.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white">
            <h3 className="text-lg font-semibold">Title: {product.title}</h3>
            <p className="text-gray-600">Category: {product.category}</p>
            <p className="text-green-500 font-bold">Price: ${product.price}</p>
            <ButtonAddItem name="Remove item" id={product.id} dispatch={dispatch} />
          </div>
        ))}
      </div>

      <button className="w-full bg-green-400 text-white p-2 mt-4 rounded hover:bg-green-600" onClick={() => { setDisplay(false) }}>
        Go to Add Page
      </button>
    </div>
  );
}
