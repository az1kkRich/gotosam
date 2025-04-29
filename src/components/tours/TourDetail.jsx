import { Car, Coffee, Minus, Plus, Send, SendHorizontal, ShowerHead, Tv, Users, UsersRound, Wifi } from "lucide-react";
import TourCardImg from "./TourImgSlick";
import { useEffect, useState, useMemo, useRef } from "react";

import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";


// mui
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { TextField } from "@mui/material";

const TourDetail = () => {
  const [iconSize, setIconSize] = useState(24);

  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  // bu yerda ref yaratamiz va inputga focus
  const fullNameRef = useRef(null)
  const handleRef = () => {
    fullNameRef.current.focus()
  }

  // bu yerda nomer va guestlarni olish uchun useRef
  const submitBtn = useRef(null)
  const isDisabled = (adults + children + infants === 0)

  useEffect(() => {
    if (submitBtn.current) {
      if (isDisabled) {
        submitBtn.current.disabled = true;
      } else {
        submitBtn.current.disabled = false;
      }
    }
  }, [isValid, adults, children, infants]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phone) {
      alert("Please enter your phone number");
      return;
    }
  }
  



  // bu yerda minus va plus tugmachalari uchun funksiya

  const handleDecrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  const handleIncrement = (setter, value) => {
    setter(value + 1);
  };

  // bu person nomer olish uchuun funksiya
  const guestRow = (label, ageRange, price, value, setter) => (
    <div className="flex flex-col md:flex-row  items-center justify-between border-b py-3">
      <div className="flex flex-row items-center gap-2 md:flex-col! ">
        <p className="font-semibold">{label}</p>
        <p className="text-sm text-gray-500 ">Age {ageRange}</p>
        <p className="text-md text-green-700 font-mono font-medium">${price}</p>
      </div>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => handleDecrement(setter, value)}
        >
          <Minus size={22} strokeWidth={0.75} />
        </Button>
        <span className="w-8 text-center">{value}</span>
        <Button
          onClick={() => handleIncrement(setter, value)}
        >
          <Plus size={22} strokeWidth={0.75} />
        </Button>
      </div>
    </div>
  );

  // Bu yerga kelganida iconlar o'lchamini o'zgartirish
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setIconSize(13);
      } else {
        setIconSize(27);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  // BU useMemo Content
  const facilities = useMemo(() => (
    <div className="qulayliklar mt-4 flex flex-wrap gap-3">
      <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
        <Coffee size={iconSize} strokeWidth={0.75} />
        <h4>Breakfast</h4>
      </div>
      <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
        <Car size={iconSize} strokeWidth={0.75} />
        <h4>On-site parking</h4>
      </div>
      <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
        <Wifi size={iconSize} strokeWidth={0.75} />
        <h4>Free WiFi</h4>
      </div>
      <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
        <ShowerHead size={iconSize} strokeWidth={0.75} />
        <h4>Private bathroom</h4>
      </div>
      <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
        <UsersRound size={iconSize} strokeWidth={0.75} />
        <h4>Family rooms</h4>
      </div>
      <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
        <Tv size={iconSize} strokeWidth={0.75} />
        <h4>Flat-screen TV</h4>
      </div>
    </div>
  ), [iconSize]);



  // bu phone number input
 

  const handleChange = (value) => {
    setPhone(value);
    setIsValid(isValidPhoneNumber(value || ""));
  };


  return (
    <div  className="bg-green-50 mt-[3rem] mb-[-1.5rem] py-5">
      <div className="max-w-[90rem] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="w-full md:w-4/6">
            <TourCardImg />
            <div className="tourcard mt-3 p-4 border rounded shadow-sm bg-white">
              <h4 className="text-xl md:text-2xl xl:text-3xl text-amber-700 font-medium">
                One-day Tour to Samarkand from Tashkent
              </h4>
              <p className="text-sm md:text-lg">
                One of the most convenient Samarkand tours, this high-speed day trip.
              </p>
              <div className="locationdiv mt-3 flex items-center justify-between gap-2 xl:gap-4 w-full">
                <span className="ms-2 font-bold">Tashkent</span>
                <hr className="w-[80%]" />
                <span className="ms-2 font-bold">Samarqand</span>
              </div>

              {/* Memoized facilities */}
              {facilities}

              <p className="mainDes mt-4 mb-3">
                Featuring free WiFi throughout the property, HotelF1 Paris Saint Ouen Marché Aux Puces Rénové offers rooms with a flat-screen TV. The hotel is just a few steps from the flea market and a 10-minute walk from Garibaldi Metro Station.
                <br />
                Guests have access to a shared bathroom. A buffet breakfast can be found every morning and vending machines are at your disposal in the lobby.
              </p>

              <hr />

              <div className="my-3">
                <h1 className="text-xl text-red-500 font-semibold">In Tour: </h1>
                <ul className="ml-3 list-disc list-inside">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <li key={i}>All transfers: 1-2 pax by Sedan type car, 3-7 pax on minivan/van, 8-16 pax by 20 seat bus;</li>
                  ))}
                </ul>
              </div>

              <hr />

              <div className="flex flex-col lg:flex-row justify-between items-center">
                <div className="flex my-3 items-center">
                  <div className="shadow-2xl bg-blue-700 rounded-full flex items-center justify-center w-20 h-20 text-[35px] z-10 text-white">
                    <p>4.86</p>
                  </div>
                  <Rating name="half-rating" className="shadow rounded-2xl pt-1 px-4 ml-[-20px]" size="large" defaultValue={5} precision={0.5} />
                </div>

                <Button variant="contained" onClick={handleRef} className="p-2 md:p-4!" endIcon={<Send size={15} />}>
                  Request for More Info
                </Button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/6 ">
            <form  onSubmit={handleSubmit} className="bg-white p-4 border shadow-sm" >
              <h1 className="font-semibold  text-md md:text-xl lg:text-2xl  text-yellow-600 font-mono">From $59.00  </h1>
              <p className=" text-sm text-yellow-800 mt-[-7px]">per adult </p>

              <h1 className="font-medium mt-2 text-md md:text-xl lg:text-2xl ">Enter your information  </h1>

              <TextField id="fullName" inputRef={fullNameRef} label="Fullname" variant="outlined" type="text" className="w-full mt-2" required/>

              <TextField id="email" label="Email" variant="outlined" type="email" className="w-full mt-3" required/>


              <PhoneInput
                international
                defaultCountry="UZ"
                value={phone}
                onChange={handleChange}
                className="border p-3 rounded w-full mt-3"
                required
              />
              {!isValid && (
                <p className="text-red-500 text-sm mt-2">❌ Invalid phone number</p>
              )}
              {isValid && phone && (
                <p className="text-green-600 text-sm mt-2">✅ Correct phone number</p>
              )}


              <h1 className="mt-2 border-t border-amber-950 pt-2 text-md md:text-xl lg:text-2xl">Select date and guests</h1>

              <div className="w-full mt-2  mx-auto">
                <label className="block text-gray-700 font-medium mb-1">Choose a date</label>
                <div className="relative">
                  <input
                    required
                    label="date"
                    type="date"
                    className="w-full appearance-none border border-gray-300 rounded-xl py-3 px-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                  />
                </div>
              </div>

              <div className="mt-3 w-full bg-white shadow-xl rounded-xl p-4 ">
                <h2 className="text-lg font-bold text-gray-800 ">Select Guests</h2>

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
                    <span className="text-amber-700">${(adults * 59) + (children * 59) + (infants * 43)}</span>

                  </div>
                </div>

                <div className="w-full flex items-center">
                  <Button variant="contained" ref={submitBtn} disabled={isDisabled} type="submit" className="mt-4 w-1/2 mx-auto" endIcon={<SendHorizontal />}>
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

export default TourDetail;
