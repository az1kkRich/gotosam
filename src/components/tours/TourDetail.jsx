"use client"

import { useEffect, useState, useMemo, useRef } from "react"
import { Minus, Plus, Send, SendHorizontal } from "lucide-react"
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input"
import "react-phone-number-input/style.css"
import Rating from "@mui/material/Rating"
import Button from "@mui/material/Button"
import { TextField } from "@mui/material"
import TourCardImg from "./TourImgSlick"
import { useTranslation } from "react-i18next"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const TourDetail = () => {
  const [iconSize, setIconSize] = useState(24)
  const [phone, setPhone] = useState("")
  const [isValid, setIsValid] = useState(true)
  const [adults, setAdults] = useState(1)
  const [children, setChildren] = useState(0)
  const [infants, setInfants] = useState(0)
  const [date, setDate] = useState("")

  const [isDisabled, setIsDisabled] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fullNameRef = useRef(null)
  const submitBtn = useRef(null)

  const navigate = useNavigate()

  // Fetch api

  const [tour, setTour] = useState({})
  const [loading, setLoading] = useState(true)

  const currentLang = localStorage.getItem("selectedGotosamLanguage")

  const { id } = useParams()

  const envUrl = import.meta.env.VITE_API_URL

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(`${envUrl}/tours/${id}`)
        setTour(response.data)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching tours:", error)
      }
    }

    fetchTours()
  }, [])

  // `useTranslation` hookini chaqirish
  const { t } = useTranslation()

  // Inputga fokus beruvchi funksiya
  const handleRef = () => {
    if (fullNameRef.current) fullNameRef.current.focus()
  }

  // Tugmani faollashtirish yoki o'chirish uchun `useEffect`
  useMemo(() => {
    setIsDisabled(adults + children + infants === 0)
  }, [adults, children, infants])

  // Formani yuborish funksiyasi
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    if (!isValidPhoneNumber(phone)) {
      alert("Please enter your phone number correctly!")
      setIsSubmitting(false)
      return
    }

    const totalPrice = adults * tour.price.adult + children * tour.price.child + infants * tour.price.infant

    const formData = {
      tour_name: e.target.tour_name.value,
      fullName: fullNameRef.current?.value,
      email: e.target.email.value,
      phone: phone,
      date: date,
      guests: {
        adults,
        children,
        infants,
      },
      total: totalPrice,
    }

    try {
      await axios.post(`${envUrl}/send-booking`, formData)
      alert("✅ Your request has been sent!")
      navigate("/")
    } catch (error) {
      console.error("❌ Error submitting form:", error)
      alert("❌ Failed to send request. Try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Guests sonini oshirish yoki kamaytirish
  const handleDecrement = (setter, value) => {
    if (value > 0) setter(value - 1)
  }

  const handleIncrement = (setter, value) => {
    setter(value + 1)
  }

  // Guest row komponenti
  const guestRow = (label, ageRange, price, value, setter) => (
    <div className="flex flex-col xl:flex-row md:flex-wrap text-center items-center justify-between border-b py-3">
      <div className="block">
        <p className="font-semibold">{label}</p>

        <div className="flex gap-3">
          <p className="text-sm text-gray-500">age {ageRange}</p>
          <p className="text-md text-green-700 font-mono font-medium">${price}</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Button
          style={{
            borderRadius: "50%",
            width: "2.5rem", // Ikona hajmiga teng
            height: "2.5rem", // Ikona hajmiga teng
            minWidth: "unset", // Material-UI tugmaning standart kattaligini bekor qilish
            padding: "0",
          }}
          onClick={() => handleDecrement(setter, value)}
          className="p-0"
        >
          <Minus size={22} strokeWidth={0.75} className="p-0" />
        </Button>
        <span className="w-8 text-center">{value}</span>
        <Button
          style={{
            borderRadius: "50%",
            width: "2.5rem", // Ikona hajmiga teng
            height: "2.5rem", // Ikona hajmiga teng
            minWidth: "unset", // Material-UI tugmaning standart kattaligini bekor qilish
            padding: "0",
          }}
          onClick={() => handleIncrement(setter, value)}
        >
          <Plus size={22} strokeWidth={0.75} />
        </Button>
      </div>
    </div>
  )

  // Ekran o'lchamiga qarab ikonkaning o'lchamini o'zgartirish
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setIconSize(width < 640 ? 13 : 27)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Telefon raqamini boshqarish
  const handleChange = (value) => {
    setPhone(value)
    setIsValid(isValidPhoneNumber(value || ""))
  }

  return (
    <>
      {loading && (
        <>
          <div className="container px-4 mt-18">
            <div className="row">
              <div className="col-md-8 col-xl-8 mb-3">
                <div className="tourcard m-1 px-3 py-4 border rounded shadow-sm bg-white animate-pulse">
                  <div className="w-full h-[200px] bg-gray-300 rounded"></div>
                  <div className="mt-2 h-6 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-5/6 mt-2"></div>
                  <div className="flex justify-content-between gap-1 items-center mt-3 md:block xl:flex">
                    <div className="w-3/5 md:w-full xl:w-1/2  ">
                      <div className="mb-0 h-4 bg-gray-300 rounded w-1/3"></div>
                      <div className="h-6 bg-gray-300 rounded w-1/2 mt-2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {!loading && (
        <div className="bg-red-100 mt-[3rem] mb-[-1.5rem] py-5">
          <div className="max-w-[90rem] mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-3">
              <div className="w-full md:w-4/6">
                <TourCardImg images={tour.images} />
                <div className="tourcard mt-3 p-4 border rounded shadow-sm bg-white">
                  <h4 className="text-xl md:text-2xl xl:text-3xl text-amber-700 font-medium">
                    {tour.title[currentLang]}
                  </h4>
                  <p className="text-sm md:text-lg">{tour.shortDescription[currentLang]}</p>
                  {/* <div className="locationdiv mt-3 flex items-center justify-between gap-2 xl:gap-4 w-full">
                <span className="ms-2 font-bold">Tashkent</span>
                <hr className="w-[80%]" />
                <span className="ms-2 font-bold">Samarqand</span>
              </div> */}

                  <p className="mainDes mt-4 mb-3">{tour.longDescription[currentLang]}</p>
                  <hr />
                  <div className="my-3">
                    <h1 className="text-xl text-red-500 font-semibold">{t("tourCard.InTour")}: </h1>
                    <ul className="ml-3 list-disc list-inside">
                      {tour.includes[currentLang].map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                  <div className="flex flex-col lg:flex-row justify-between items-center">
                    <div className="flex my-3 items-center">
                      <div className="shadow-2xl bg-blue-700 rounded-full flex items-center justify-center w-20 h-20 text-[35px] z-10 text-white">
                        <p>4.86</p>
                      </div>
                      <Rating
                        name="half-rating"
                        className="shadow rounded-2xl pt-1 px-4 ml-[-20px]"
                        size="large"
                        defaultValue={5}
                        precision={0.5}
                      />
                    </div>
                    <Button variant="contained" onClick={handleRef} className="p-2 md:p-4" endIcon={<Send size={15} />}>
                      {t("tourCard.ReqForMore")}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-2/6">
                <form onSubmit={handleSubmit} className="bg-white p-4 border shadow-sm">
                  <h1 className="font-semibold text-md md:text-xl lg:text-2xl text-yellow-600 font-mono">
                    {t("tourCard.from")} ${tour.price.adult}
                  </h1>
                  <p className="text-sm text-yellow-800 mt-[-7px]">{t("tourCard.perAdult")}</p>
                  <input type="text" value={tour.title.uz} name="tour_name" className="hidden" />
                  <h1 className="font-medium mt-2 text-md md:text-xl lg:text-2xl">
                    {t("tourCard.Enteryour_information")}
                  </h1>
                  <TextField
                    id="fullName"
                    name="full_name"
                    inputRef={fullNameRef}
                    label="Fullname"
                    variant="outlined"
                    type="text"
                    className="w-full mt-2"
                    required
                  />
                  <TextField
                    id="email"
                    name="email"
                    label="Email"
                    variant="outlined"
                    type="email"
                    className="w-full mt-3"
                    required
                  />
                  <PhoneInput
                    international
                    defaultCountry="UZ"
                    name="phone_number"
                    value={phone}
                    onChange={handleChange}
                    className="border p-3 rounded w-full mt-3"
                    required
                  />
                  {!isValid && <p className="text-red-500 text-sm mt-2">❌ Invalid phone number</p>}
                  {isValid && phone && <p className="text-green-600 text-sm mt-2">✅ Correct phone number</p>}
                  <h1 className="mt-2 border-t border-amber-950 pt-2 text-md md:text-xl lg:text-2xl">
                    {t("tourCard.Select date and guests")}
                  </h1>
                  <div className="w-full mt-2 mx-auto">
                    <label className="block text-gray-700 font-medium mb-1">Choose a date</label>
                    <div className="relative">
                      <input
                        required
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full appearance-none border border-gray-300 rounded-xl py-3 px-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200"
                      />
                    </div>
                  </div>
                  <div className="mt-3 w-full bg-white shadow-xl rounded-xl p-4">
                    <h2 className="text-lg font-bold text-gray-800">{t("tourCard.Select date and guests")}</h2>
                    {guestRow(t("tourCard.Adults"), "8 - 80", tour.price.adult, adults, setAdults)}
                    {guestRow(t("tourCard.Children"), "3 - 7", tour.price.child, children, setChildren)}
                    {guestRow(t("tourCard.Infants"), "0 - 2", tour.price.infant, infants, setInfants)}
                    <div className="pt-4 flex flex-col md:flex-row justify-between font-semibold">
                      <div>
                        <span>{t("tourCard.Total Guests")}: </span>
                        <span className="text-red-500">{adults + children + infants}</span>
                      </div>
                      <div>
                        <span>{t("tourCard.Total Price")}: </span>
                        <span className="text-amber-700">
                          ${adults * tour.price.adult + children * tour.price.child + infants * tour.price.infant}
                        </span>
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
                            {t("tourCard.sending") || "Sending..."}
                          </div>
                        ) : (
                          t("tourCard.send")
                        )}
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default TourDetail
