import React, { useEffect, useState, useMemo, useRef } from "react";
import { Minus, Plus, Send, SendHorizontal } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import cardImg from '../../assets/tourists.jpg'



const EventDetail = () => {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);

  const fullNameRef = useRef(null);
  const submitBtn = useRef(null);

  // Inputga fokus beruvchi funksiya
  const handleRef = () => {
    if (fullNameRef.current) fullNameRef.current.focus();
  };

  // Tugmani faollashtirish yoki o'chirish uchun `useEffect`
  useEffect(() => {
    setIsDisabled(adults + children + infants === 0);
  }, [adults, children, infants]);

  // Formani yuborish funksiyasi
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidPhoneNumber(phone)) {
      alert("Please enter your phone number correctly!");
      return;
    }
    alert("Form submitted successfully!");
  };

  // Mehmonlar sonini oshirish yoki kamaytirish
  const handleDecrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  const handleIncrement = (setter, value) => {
    setter(value + 1);
  };

  // Mehmonlar uchun qator
  const guestRow = (label, ageRange, price, value, setter) => (
    <div className="flex flex-col md:flex-row items-center justify-between border-b py-3">
      <div className="flex flex-row items-center gap-2 md:flex-col">
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-gray-500">Age {ageRange}</p>
        <p className="text-md text-green-700 font-mono font-medium">${price}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button onClick={() => handleDecrement(setter, value)}>
          <Minus size={22} strokeWidth={0.75} />
        </Button>
        <span className="w-8 text-center">{value}</span>
        <Button onClick={() => handleIncrement(setter, value)}>
          <Plus size={22} strokeWidth={0.75} />
        </Button>
      </div>
    </div>
  );

  

  // Telefon raqamini boshqarish
  const handleChange = (value) => {
    setPhone(value);
    setIsValid(isValidPhoneNumber(value || ""));
  };

  return (
    <div className="bg-green-200 mt-[3rem] mb-[-1.5rem] py-5">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-4/6">
          <img src={cardImg} className='img-fluid w-full' alt="..." />

            <div className="tourcard mt-3 p-4 border rounded shadow-sm bg-white">
              <h4 className="text-xl md:text-2xl xl:text-3xl text-amber-700 font-medium">
                One-day Tour to Samarkand from Tashkent
              </h4>
              <p className="text-sm md:text-lg">
                One of the most convenient Samarkand tours, this high-speed day trip.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam laboriosam tempora modi quas culpa reprehenderit, maxime dolorem deleniti natus ab. Voluptates iusto, labore vel cum quod unde et a recusandae?
              </p>
              
              
              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="flex my-3 items-center">
                  <div className="shadow-2xl bg-green-700 rounded-full flex items-center justify-center w-20 h-20 text-[35px] z-10 text-white">
                    <p>4.69</p>
                  </div>
                  <Rating name="half-rating" className="shadow rounded-2xl pt-1 px-4 ml-[-20px]" size="large" defaultValue={5} precision={0.5} />
                </div>
                <Button variant="contained" onClick={handleRef} className="p-2 md:p-4" endIcon={<Send size={15} />}>
                  Request for More Info
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/6">
            <form onSubmit={handleSubmit} className="bg-white p-4 border shadow-sm">
              <h1 className="font-semibold text-md md:text-xl lg:text-2xl text-yellow-600 font-mono">From $59.00</h1>
              <p className="text-sm text-yellow-800 mt-[-7px]">per adult</p>
              <h1 className="font-medium mt-2 text-md md:text-xl lg:text-2xl">Enter your information</h1>
              <TextField id="fullName" inputRef={fullNameRef} label="Fullname" variant="outlined" type="text" className="w-full mt-2" required />
              <TextField id="email" label="Email" variant="outlined" type="email" className="w-full mt-3" required />
              <PhoneInput
                international
                defaultCountry="UZ"
                value={phone}
                onChange={handleChange}
                className="border p-3 rounded w-full mt-3"
                required
              />
              {!isValid && <p className="text-red-500 text-sm mt-2">❌ Invalid phone number</p>}
              {isValid && phone && <p className="text-green-600 text-sm mt-2">✅ Correct phone number</p>}
              <h1 className="mt-2 border-t border-amber-950 pt-2 text-md md:text-xl lg:text-2xl">Select date and guests</h1>
              <div className="w-full mt-2 mx-auto">
                <label className="block text-gray-700 font-medium mb-1">Choose a date</label>
                <div className="relative">
                  <input
                    required
                    type="date"
                    className="w-full appearance-none border border-gray-300 rounded-xl py-3 px-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  />
                </div>
              </div>
              <div className="mt-3 w-full bg-white shadow-xl rounded-xl p-4">
                <h2 className="text-lg font-bold text-gray-800">Select Guests</h2>
                {guestRow("Adults", "8 - 80", 59, adults, setAdults)}
                {guestRow("Children", "3 - 7", 59, children, setChildren)}
                {guestRow("Infants", "0 - 2", 43, infants, setInfants)}
                <div className="pt-4 flex flex-col md:flex-row justify-between font-semibold">
                  <div>
                    <span>Total Guests: </span>
                    <span className="text-red-500">{adults + children + infants}</span>
                  </div>
                  <div>
                    <span>Total Price: </span>
                    <span className="text-amber-700">${adults * 59 + children * 59 + infants * 43}</span>
                  </div>
                </div>
                <div className="w-full flex items-center">
                  <Button
                    variant="contained"
                    ref={submitBtn}
                    disabled={isDisabled}
                    type="submit"
                    className="mt-4 w-1/2 mx-auto"
                    endIcon={<SendHorizontal />}
                  >
                    Send
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;