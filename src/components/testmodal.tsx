"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TestModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const TestModal: React.FC<TestModalProps> = ({ isOpen, onClose, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    onClick={() => onClose()}
                    className="fixed inset-0 z-1 flex items-center justify-center bg-[rgba(0,0,0,0.5)] cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                    <motion.div
                        className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl relative"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}>
                        {/* <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button> */}
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TestModal;
