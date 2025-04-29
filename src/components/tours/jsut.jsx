import { useState } from "react";

const GuestCounter = () => {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);

    const handleDecrement = (setter, value) => {
        if (value > 0) setter(value - 1);
    };

    const handleIncrement = (setter, value) => {
        setter(value + 1);
    };

    const guestRow = (label, ageRange, price, value, setter) => (
        <div className="flex items-center justify-between border-b py-3">
            <div>
                <p className="font-semibold">{label}</p>
                <p className="text-sm text-gray-500">Age {ageRange}</p>
                <p className="text-sm text-green-700 font-medium">${price}</p>
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => handleDecrement(setter, value)}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xl hover:bg-gray-300"
                >
                    –
                </button>
                <span className="w-8 text-center">{value}</span>
                <button
                    onClick={() => handleIncrement(setter, value)}
                    className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xl hover:bg-gray-300"
                >
                    +
                </button>
            </div>
        </div>
    );

    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-5 space-y-4">
            <h2 className="text-lg font-bold text-gray-800">Select Guests</h2>
            {guestRow("Adults", "8 - 80", 89, adults, setAdults)}
            {guestRow("Children", "3 - 7", 89, children, setChildren)}
            {guestRow("Infants", "0 - 2", 43, infants, setInfants)}

            <div className="pt-4 border-t mt-4 flex justify-between font-semibold">
                <span>Total Guests:</span>
                <span>{adults + children + infants}</span>
            </div>
        </div>
    );
};

export default GuestCounter;
