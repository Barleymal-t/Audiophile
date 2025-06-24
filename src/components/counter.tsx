"use client";
import React, { useEffect, useState } from "react";

const Counter = ({
    id,
    onCountChange,
}: {
    id: number;
    onCountChange: (id: number, count: number) => void;
}) => {
    const [count, setCount] = useState(1);

    useEffect(() => {
        onCountChange(id, count);
        console.log("count changed to",count);
    }, [id,count]);

    return (
        <div className="w-22 bg-gray flex items-center justify-between py-1.5">
            <button
                className="w-full cursor-pointer text-sm"
                onClick={() => count>1?setCount((c) => c - 1):null}>
                -
            </button>
            <div className="font-semibold text-sm">{count}</div>
            <button
                className="w-full cursor-pointer text-sm"
                onClick={() => setCount((c) => c + 1)}>
                +
            </button>
        </div>
    );
};

export default Counter;
