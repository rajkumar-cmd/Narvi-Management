import React from 'react'
import Style from "../Styles/Holidayheader.module.css"
import { StarIcon } from '@chakra-ui/icons'

const Holidayheader = () => {
  return (
    <div className={Style.backGroundColor}>
        <p className={Style.textStyle}><StarIcon boxSize={3.5} marginBottom={1} marginRight={2} color={"#7FD957"}/>Give your teams the gift of Narvi this holiday season and you’ll get a free gift, too!<a className={Style.linkLernMore} href='#'>Learn more</a></p>
    </div>
  )
}

export default Holidayheader