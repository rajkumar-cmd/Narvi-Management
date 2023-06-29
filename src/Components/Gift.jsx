import React from 'react'
import Style from "../Styles/Gift.module.css"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import wave1 from "../Images/wave1.png"

const Gift = () => {
    return (
        <>
            <div className={Style.gift}>
                <div className={Style.giftImageFlex}>
                    <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=728,dpr=1/tp/storage/uploads/24da2538-075d-4fa9-9a78-b73af61d7628/gift-by-wrike-promo-2x.png" alt="" />
                </div>

                <div className={Style.giftWholeText}>
                    <h1 className={Style.giftTop}>HOLIDAY PROMOTION</h1>
                    <h1 className={Style.giftHeading}>Get your free gift!</h1>
                    <p className={Style.giftPara}>For a limited time only, Wrike is offering a free gift to new customers! Sign up with a qualifying subscription before
                        December 31 to claim your prize.</p>
                    <button className={Style.flexSeeMore}>
                        <h1>See all Gifts <ArrowForwardIcon /></h1>
                    </button>
                </div>
            </div>
            <img className={Style.giftWave} src={wave1} alt="" />
        </>
    )
}

export default Gift