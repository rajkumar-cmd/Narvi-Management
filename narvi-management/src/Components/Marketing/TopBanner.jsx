import React from 'react'
import Style from "../../Styles/Marketing/TopBanner.module.css"
import {NavLink} from "react-router-dom";
const TopBanner = () => {
    const [email, setEmail] = React.useState({
        email: ""
    });
    const handleChange = (e) => {
        const value = e.target.value;
        const type = e.target.type;
        setEmail({ ...email, [type]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, "***");
    }
    console.log(email);
    return (
        <div className={Style.wholeHeader}>
            <div className={Style.wholeHeader1}>
                <h1 className={Style.wholeHeaderText}>Deliver marketing campaigns with</h1>
                <h1 className={Style.wholeHeaderText}>effortless collaboration</h1>
                <p className={Style.wholeParaText}>One platform for campaign management, asset production, and performance insights</p>
                <form onSubmit={(e) => handleSubmit(e)} className={Style.wholebuttons}>
                    <button className={Style.wholebutton}>Try Narvi for Marketing</button>
                    <NavLink to="">
                        <p className={Style.wholeParaText1}>Marketers love us. See why.</p>
                    </NavLink>     
                </form>
                {/* <div className={Style.headerImg}> */}
                {/* </div> */}
            </div>
            <div className={Style.wholeHeader2}>
                <img className={Style.headerImg} src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=672,dpr=1/tp/storage/uploads/31472bed-5c08-495d-b4d3-d8bbf4c142d2/rebrand-hero-marketing-mobile-2x.png" alt="" />
            </div>
        </div>
    )
}

export default TopBanner