"use client";
import { useEffect, useState } from "react";
import { useLoader } from "@/contextApi/LoaderContext";
import Loader from "@/components/Loader";

export default function Page() {
  const { isLoading, setIsLoading } = useLoader();
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      setData("This is the simulated data after 10 seconds!");
      setIsLoading(false);
    }, 10000); 

  }, [setIsLoading]);

  return (
    <div className="p-6">
      <Loader />
      <h1 className="text-2xl font-bold">This is Home Page with setTimeout 10 sec </h1>
      {isLoading ? <p>Loading...</p> : <p>Data: {data}</p>}
    </div>
  );
}
