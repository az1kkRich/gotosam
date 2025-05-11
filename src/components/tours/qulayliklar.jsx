import { Car, Coffee, ShowerHead, Tv, UsersRound, Wifi } from 'lucide-react'
import { useTranslation } from 'react-i18next';


const Qulayliklar = ({iconSize}) => {

  const {t} = useTranslation();

  return (
    <div className="qulayliklar mt-4 flex flex-wrap gap-3">
      <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
        <Coffee size={iconSize} strokeWidth={0.75} />
        <h4>{t("tourCard.Breakfast")}</h4>
      </div>
      <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
        <Car size={iconSize} strokeWidth={0.75} />
        <h4>{t("tourCard.On-siteparking")}</h4>
      </div>
      <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
        <Wifi size={iconSize} strokeWidth={0.75} />
        <h4>{t("tourCard.FreeWi-Fi")}</h4>
      </div>
      <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
        <ShowerHead size={iconSize} strokeWidth={0.75} />
        <h4>{t("tourCard.Privatebathroom")}</h4>
      </div>
      <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
        <UsersRound size={iconSize} strokeWidth={0.75} />
        <h4>{t("tourCard.Familyrooms")}</h4>
      </div>
      <div className="detCategory flex gap-2 py-2 px-3 items-center border-2 rounded-2xl">
        <Tv size={iconSize} strokeWidth={0.75} />
        <h4>{t("tourCard.Flat-screenTV")}</h4>
      </div>
    </div>
  )
}

export default Qulayliklar
