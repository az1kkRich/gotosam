import React, { useState, useMemo, useRef, useEffect } from "react";
import { ArrowDownIcon as CalendarArrowDown, CalendarIcon , CalendarIcon as CalendarArrowUp, Clock3, Minus, Plus, Send, SendHorizontal } from 'lucide-react';
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";




const EventDetail = () => {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fullNameRef = useRef(null);
  const submitBtn = useRef(null);

  const navigate = useNavigate()





  // Fetch api

  const [event, setEvent] = useState({})
  const [loading, setLoading] = useState(true)

  const currentLang = localStorage.getItem("selectedGotosamLanguage")

  const { id } = useParams()





  const envUrl = import.meta.env.VITE_API_URL


  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${envUrl}/events/${id}`)
        setEvent(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);

      }
    }

    fetchEvents()

  }, [id])









  // react i18next 
  const { t } = useTranslation();

  // Inputga fokus beruvchi funksiya
  const handleRef = () => {
    if (fullNameRef.current) fullNameRef.current.focus();
  };



  // Tugmani faollashtirish yoki o'chirish uchun `useEffect`
  useMemo(() => {
    setIsDisabled(adults + children + infants === 0);
  }, [adults, children, infants]);






  // Formani yuborish funksiyasi
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!isValidPhoneNumber(phone)) {
      alert("Please enter your phone number correctly!");
      setIsSubmitting(false);
      return;
    }

    const totalPrice = adults * event.price

    const formData = {
      event_name: e.target.event_name.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      fullName: fullNameRef.current?.value,
      email: e.target.email.value,
      phone: phone,
      guest: adults,
      total: totalPrice
    };

    try {
      await axios.post(`${envUrl}/send-event`, formData);
      alert("✅ Your request has been sent!");
      navigate('/')
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("❌ Failed to send request. Try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };














  // Mehmonlar sonini oshirish yoki kamaytirish
  const handleDecrement = (setter, value) => {
    if (value > 0) setter(value - 1);
  };

  const handleIncrement = (setter, value) => {
    setter(value + 1);
  };

  // Mehmonlar uchun qator
  const guestRow = (label, price, value, setter) => (
    <div className="flex flex-col md:flex-row md:justify-center md:flex-wrap xl:justify-between text-center items-center justify-between border-b py-3">
      <div className="block">
        <p className="font-semibold">{label}</p>
        <p className="text-md text-green-700 font-mono font-medium">${price}</p>
      </div>

      <div className="flex items-center gap-1">
        <Button style={{
          borderRadius: "50%",
          width: "2.5rem", // Ikona hajmiga teng
          height: "2.5rem", // Ikona hajmiga teng
          minWidth: "unset", // Material-UI tugmaning standart kattaligini bekor qilish
          padding: "0",
        }} onClick={() => handleDecrement(setter, value)} className="p-0">
          <Minus size={22} strokeWidth={0.75} className="p-0" />
        </Button>
        <span className="w-8 text-center">{value}</span>
        <Button style={{
          borderRadius: "50%",
          width: "2.5rem", // Ikona hajmiga teng
          height: "2.5rem", // Ikona hajmiga teng
          minWidth: "unset", // Material-UI tugmaning standart kattaligini bekor qilish
          padding: "0",
        }}
          onClick={() => handleIncrement(setter, value)}>
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

    <>

      {loading && (
        <div className="flex items-center justify-center w-[100vw] h-[70vh] border border-gray-200 rounded-lg bg-gray-50 ">
          <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}


      {!loading && (
        <div className="bg-gray-100 mt-[1rem] mb-[-1.5rem] py-5">

          <div className="container px-2 md:px-20!">
            <img src={event.imagePath || "/placeholder.svg"} alt="Event image" className="w-full h-[15rem] md:h-[35rem]" />

          </div>


          <div className="max-w-[90rem] mx-auto flex flex-col items-center mt-[-4rem] px-4">



            <div className="w-full md:w-5/6 xl:w-4/6 rounded-xl shadow bg-white ">

              <div className="p-4">
                <h1 className="font-semibold text-md md:text-xl lg:text-4xl">{event.title[currentLang]}</h1>
                <div className="ml-3 mt-3 flex items-center gap-2">
                  <CalendarArrowDown size={22} color="#ff0000" strokeWidth={2.5} />
                  <span className="text-red-600">{t("datetime")}</span>
                </div>
                <h3 className="ml-5 my-1 font-black font-mono">
                  {new Date(event.startDate).toLocaleDateString(currentLang, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'

                  })};

                </h3>

                <div className="ml-3 flex items-center gap-2">
                  <CalendarArrowUp size={22} color="#ff0000" strokeWidth={2.5} />
                  <span className="text-red-600">{t("enddatetime")}</span>
                </div>
                <h3 className="ml-5 my-1 font-black font-mono">
                  {new Date(event.endDate).toLocaleDateString(currentLang, {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'

                  })};

                </h3>
                <h3 className="text-sm md:text-md lg:text-xl">{event.description[currentLang]}</h3>
              </div>





              <form onSubmit={handleSubmit} className=" p-4 border  flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 pr-0 md:pr-10">

                  {/* <h1 className="font-semibold text-md md:text-xl lg:text-2xl text-yellow-600 font-mono">{t("tourCard.from")} ${event.price}</h1> */}
                  <p className="text-sm text-yellow-800 mt-[-7px]">{t("tourCard.ReqForMore")}</p>
                  <h1 className="font-medium mt-2 text-md md:text-xl lg:text-2xl">{t("tourCard.Enteryour_information")}</h1>
                  <input type="text" name="event_name" defaultValue={event.title.uz} className="hidden" />
                  <input type="text" name="startDate" defaultValue={event.startDate} className="hidden" />
                  <input type="text" name="endDate" defaultValue={event.endDate} className="hidden" />
                  <TextField id="fullName" inputRef={fullNameRef} label="Fullname" variant="outlined" type="text" className="w-full mt-2" required />
                  <TextField id="email" label="Email" variant="outlined" type="email" className="w-full mt-3" required />
                  <PhoneInput
                    international
                    defaultCountry="UZ"
                    value={phone}
                    onChange={handleChange}
                    className="border p-3 text-lg  rounded w-full mt-3"
                    required
                  />
                  {!isValid && <p className="text-red-500 text-sm mt-2">❌ Invalid phone number</p>}
                  {isValid && phone && <p className="text-green-600 text-sm mt-2">✅ Correct phone number</p>}
                </div>

                <div className="w-full md:w-1/2 mt-3  bg-white shadow-md rounded-xl p-4">
                  <h2 className="text-lg font-bold text-gray-800">{t("tourCard.Select guests")}</h2>
                  {guestRow(t("cardInPrice"), event.price, adults, setAdults)}
                  <div className="pt-4 flex flex-col md:flex-row justify-between font-semibold">
                    <div>
                      <span>{t("tourCard.Total Guests")}: </span>
                      <span className="text-red-500">{adults}</span>
                    </div>
                    <div>
                      <span>{t("tourCard.Total Price")}: </span>
                      <span className="text-amber-700">${adults * event.price}</span>
                    </div>
                  </div>
                  <div className="w-full flex items-center">
                    <Button
                      variant="contained"
                      ref={submitBtn}
                      disabled={isDisabled || isSubmitting}
                      type="submit"
                      className="mt-4 w-1/2 mx-auto"
                      endIcon={isSubmitting ? null : <SendHorizontal />}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </div>
                      ) : (
                        "Send"
                      )}
                    </Button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>

      )}


    </>
  );
};

export default EventDetail;