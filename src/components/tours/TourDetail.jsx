import TourCardImg from "./TourImgSlick"

const TourDetail = () => {
  return (
    <>
      <div id="tourDetail" className="mt-[5rem]">
        <div className="container ">
          <div className="row">
            <div className="col-md-8">
              <TourCardImg />
              <div className="tourcard mt-3 p-4 border rounded shadow-sm bg-white">
                <h4 className="text-2xl text-amber-700 font-medium">
                  One-day Tour to Samarkand from Tashkent
                </h4>
                <p>
                  One of the most convenient Samarkand tours, this high-speed
                  day trip.
                </p>
                <div className="locationdiv flex items-center justify-between gap-2 xl:gap-4 w-full ">
                  <span className="ms-2 font-bold "> Tashkent</span>
                  <span className="ms-2 font-bold "> Samarqand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TourDetail
