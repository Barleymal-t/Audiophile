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
    }, [id, count, onCountChange]);

    return (
        <div className="w-30 bg-gray flex items-center justify-between">
            <button
                className="w-full cursor-pointer"
                onClick={() => setCount((c) => c - 1)}>
                -
            </button>
            {count}
            <button
                className="w-full cursor-pointer"
                onClick={() => setCount((c) => c + 1)}>
                +
            </button>
        </div>
    );
};

export default Counter;
