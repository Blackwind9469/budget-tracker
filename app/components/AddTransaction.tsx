"use client";
import { useRef } from "react";
import { toast } from "react-toastify";
import addTransaction from "../actions/AddTransaction";

const AddTransaction = () => {
    const formRef = useRef<HTMLFormElement>(null);

    const clientAction = async (formData: FormData) => {
        const { data, error } = await addTransaction(formData);
        if (error) {
            toast.error(error);
        } else {
            toast.success("Transaction Succeeded!");
            formRef.current?.reset();
        }
    };
    return (
        <div className="mt-4">
            <h3 className="text-lg font-bold">Add Transaction</h3>
            <form
                ref={formRef}
                action={clientAction}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="text">
                        Explanation
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="text"
                        type="text"
                        name="text"
                        placeholder="Text"
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="amount">
                        Amount
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="amount"
                        type="number"
                        name="amount"
                        placeholder="Amount / First, put a (-) for expense"
                        step="0.01"
                    />
                    <p className="expin">
                        <span className="positive-income">positive income </span>
                        / <span className="negative-expense">negative expense </span>
                    </p>

                </div>
                <div className="flex items-center justify-between">
                    <button className="at-4">
                        Add Transaction
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddTransaction;
