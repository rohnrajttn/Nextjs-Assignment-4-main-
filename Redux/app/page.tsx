"use client";

import { useDispatch, useSelector } from "react-redux";
import { fetchQuotesAction } from "@/actions/fetchAction";
import { useEffect } from "react";
import { RootState } from "@/store/store";

export default function Home() {
  const { loading, quotes, error } = useSelector((state:RootState) => state.fetchQuote);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchQuotesAction(dispatch);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Quotes List</h1>
      <ul className="mt-4 space-y-4">
        {quotes && quotes.length > 0 ? (
          quotes.map((quote: { id: number; quote: string; author: string }) => (
            <li key={quote.id} className="p-4 bg-gray-100 rounded-lg shadow">
              <p className="text-lg font-medium">&quot;{quote.quote}&quot;</p>
              <p className="text-right text-sm text-gray-600">- {quote.author}</p>
            </li>
          ))
        ) : (
          <li className="p-4 bg-gray-100 rounded-lg shadow">No quotes found</li>
        )}
      </ul>
    </div>
  );
}