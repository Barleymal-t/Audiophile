"use client";
import React, { useEffect, useState } from "react";

const Counter = ({
    id,
    initialCount,
    onCountChange,
}: {
    id: number;
    initialCount?: number;
    onCountChange: (id: number, count: number) => void;
}) => {
    const [count, setCount] = useState(initialCount ?? 1);

    useEffect(() => {
        onCountChange(id, count);
    }, [id, count]);

    return (
        <div className="w-22 bg-gray flex items-center justify-between py-1.5">
            <button
                className="w-full cursor-pointer text-sm hover:text-orange font-bold"
                onClick={() => {
                    if (count > 1) {
                        setCount((c) => c - 1);
                    } else {
                        onCountChange(id, 0);
                    }
                }}>
                -
            </button>
            <div className="font-semibold text-sm">{count}</div>
            <button
                className="w-full cursor-pointer text-sm hover:text-orange font-bold"
                onClick={() => setCount((c) => c + 1)}>
                +
            </button>
        </div>
    );
};

export default Counter;
