import React from 'react'
import Style from "../Styles/TopBanner.module.css"

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
                <h1 className={Style.wholeHeaderText}>Remove barriers,</h1>
                <h1 className={Style.wholeHeaderText}>find clarity,</h1>
                <h1 className={Style.wholeHeaderText}>exceed goals</h1>
                <p className={Style.wholeParaText}>Anything is possible with the most powerful work</p>
                <p className={Style.wholeParaText}>management software at your fingertips.</p>
                <form onSubmit={(e) => handleSubmit(e)} className={Style.wholebuttons}>
                    <input className={Style.wholeinput} type="email" value={email.text} onChange={(e) => handleChange(e)} placeholder='Enter your business email' />
                    <button className={Style.wholebutton}>Get Started</button>
                </form>
                {/* <div className={Style.headerImg}> */}
                    <img className={Style.headerImg} src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=672,dpr=1/tp/storage/uploads/95fbafc9-6609-4b2d-aa0b-ceba4f4c4cbb/rebrand-hero-illustration-homepage-screenshots-dark-mobile.png" alt="" />
                {/* </div> */}
            </div>
            <div  className={Style.wholeHeader2}>

            </div>
        </div>
    )
}

export default TopBanner