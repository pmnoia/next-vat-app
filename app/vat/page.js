"use client";

import { useState, useEffect } from "react";

export default function Vat() {
    const [rate, setRate] = useState(0);
    const [price, setPrice] = useState(0);
    const [vat, setVat] = useState(null);
    const [total, setTotal] = useState(null);
    
    useEffect(() => {
        fetchVatRate();
    }, []);

    async function fetchVatRate() {
        const response = await fetch('/api/vat/rate');
        const data = await response.json();
        console.log('Vat Rate: ', data.rate);
        setRate(data.rate);
    }

    function handleSubmit(e) {
        e.preventDefault();
        const numPrice = parseFloat(price);
        if (!isNaN(numPrice)) {
            const calculatedVat = (numPrice * rate) / 100;
            setVat(calculatedVat);
            setTotal(numPrice + calculatedVat)
        } else {
            setVat(null);
            setTotal(null);
        }
    }

    return (
        <div className="max-w-md mx-auto mt-10 p-6 border border-grey-200 rounded-xl shadow bg-white dark:bg-gray-900 dark:border-gray-800">
            <h1 className="text-2xl font-bold text-center mb-6">VAT Calculator</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="font-semibold">
                    VAT RATE = {rate}%
                </label>
                <br />
                <label className="flex items-center gap-2">
                    Price: THB {" "}
                <input type="number" placeholder="Enter price" value={price} onChange={e => setPrice(e.target.value)} 
                className="px-3 py-2 rounded border border-grey-300 focus:outline-none focus:ring focus:ring-blue-200 w-32"/>  
                </label>
                <br />
                <button type="submit" 
                className="py-2 px-4 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition">Calculate</button>
            </form>

            {
                vat !== null && (
                    <div className="mt-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow">
                        <h2 className="text-lg font-bold mb-2">Total Amount</h2>
                        <p>VAT: THB {vat.toFixed(2)}</p>
                        <p>Total: (Price + VAT): THB {total.toFixed(2)}</p>
                    </div>
                )
            }
        </div>
    )
}