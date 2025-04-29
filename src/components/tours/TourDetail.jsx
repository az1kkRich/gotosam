import { Car, Coffee, Send, ShowerHead, Tv, UsersRound, Wifi } from "lucide-react"
import TourCardImg from "./TourImgSlick"
import { useEffect, useState } from "react";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

const TourDetail = () => {
  const [iconSize, setIconSize] = useState(24); // default size

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setIconSize(13); // small screens
      } else {
        setIconSize(27); // default
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div id="tourDetail" className="bg-green-100 mt-[3rem] mb-[-1.5rem] py-5">
        <div className="container-sm" >
          <div className="row mb-4">
            <div className="col-md-8">
              <TourCardImg />
              <hr />
              <div className="tourcard mt-3 p-4 border rounded shadow-sm bg-white">
                <h4 className="text-xl md:text-2xl xl:text-3xl text-amber-700 font-medium">
                  One-day Tour to Samarkand from Tashkent
                </h4>
                <p className="text-sm md:text-lg">
                  One of the most convenient Samarkand tours, this high-speed
                  day trip.
                </p>
                <div className="locationdiv mt-3 flex items-center justify-between gap-2 xl:gap-4 w-full ">
                  <span className="ms-2 font-bold "> Tashkent</span>
                  <hr className="w-[80%]" />
                  <span className="ms-2 font-bold "> Samarqand</span>
                </div>
                <div className="qulayliklar mt-4 flex flex-wrap gap-3  ">
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
                    <h4>Private bathroom  </h4>
                  </div>
                  <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
                    <UsersRound size={iconSize} strokeWidth={0.75} />
                    <h4>Family rooms  </h4>
                  </div>
                  <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
                    <Tv size={iconSize} strokeWidth={0.75} />
                    <h4>Flat-screen TV </h4>
                  </div>

                </div>
                <p className="mainDes mt-4 mb-3">Featuring free WiFi throughout the property, HotelF1 Paris Saint Ouen Marché Aux Puces Rénové offers rooms with a flat-screen TV. The hotel is just a few steps from the flea market and a 10-minute walk from Garibaldi Metro Station.

                  Guests have access to a shared bathroom. A buffet breakfast can be found every morning and vending machines are at your disposal in the lobby. Guests can purchase microfibre towels at the hotel at an extra cost of EUR 3 each.

                  You will find a 24-hour front desk at the property. Marne-la-Vallée is 33 km from HotelF1 Paris Saint Ouen Marché Aux Puces Rénové, while Versailles is 18 km from the property. Orly Airport is 19 km away.

                </p>
                <hr />
                <div className="my-3">
                  <h1 className="text-xl text-red-500 font-semibold">In Tour: </h1>
                  <ul className="ml-3">
                    <li className="listyle">All transfers: 1-2 pax by Sedan type car, 3-7 pax on minivan/van, 8-16 pax by 20 seat bus;</li>
                    <li className="listyle">All transfers: 1-2 pax by Sedan type car, 3-7 pax on minivan/van, 8-16 pax by 20 seat bus;</li>
                    <li className="listyle">All transfers: 1-2 pax by Sedan type car, 3-7 pax on minivan/van, 8-16 pax by 20 seat bus;</li>
                    <li className="listyle">All transfers: 1-2 pax by Sedan type car, 3-7 pax on minivan/van, 8-16 pax by 20 seat bus;</li>
                    <li className="listyle">All transfers: 1-2 pax by Sedan type car, 3-7 pax on minivan/van, 8-16 pax by 20 seat bus;</li>
                    <li className="listyle">All transfers: 1-2 pax by Sedan type car, 3-7 pax on minivan/van, 8-16 pax by 20 seat bus;</li>
                    <li className="listyle">All transfers: 1-2 pax by Sedan type car, 3-7 pax on minivan/van, 8-16 pax by 20 seat bus;</li>
                    <li className="listyle">All transfers: 1-2 pax by Sedan type car, 3-7 pax on minivan/van, 8-16 pax by 20 seat bus;</li>
                    <li className="listyle">All transfers: 1-2 pax by Sedan type car, 3-7 pax on minivan/van, 8-16 pax by 20 seat bus;</li>
                  </ul>

                </div>
                <hr />
                <div className="flex flex-col md:flex-row justify-between items-center">
                  <div className="flex my-3 items-center" >
                    <div className="shadow-2xl bg-blue-700 rounded-full flex items-center justify-center w-20 h-20 text-[35px] z-10 text-white  "><p>4.86</p></div>
                    <Rating name="half-rating" className="shadow rounded-2xl pt-1 text-blue-400! px-4 ml-[-20px]" size="large" defaultValue={5} precision={0.5} />
                  </div>

                  <Button variant="contained" className="p-4! " endIcon={<Send size={15} />}>
                    Request for More Info
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourDetail;
