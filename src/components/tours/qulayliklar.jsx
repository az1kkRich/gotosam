import { Car, Coffee, ShowerHead, Tv, UsersRound, Wifi } from 'lucide-react'


const Qulayliklar = ({iconSize}) => {
  return (
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
  )
}

export default Qulayliklar
