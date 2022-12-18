import React from 'react'
import Style from "../../Styles/Marketing/Hit.module.css"
import { motion } from "framer-motion";

const Try = () => {
    const icon = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)",
            stroke: "#FFFFFF",
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "#7FD957",
            stroke: "#7FD957",
            transition: {
                default: {
                    duration: 2, ease: "easeInOut", repeat: Infinity,
                    repeatType: "loop", repeatDelay: 1
                },
                fill: {
                    duration: 2, ease: [1, 0, 0.8, 1], repeat: Infinity,
                    repeatType: "loop", repeatDelay: 1
                },
                repeat: Infinity,
                repeatType: "loop",
            }
        }
    }
    const icon1 = {
        hidden: {
            opacity: 0,
            pathLength: 0,
            fill: "rgba(255, 255, 255, 0)",
            stroke: "#FFFFFF",
        },
        visible: {
            opacity: 1,
            pathLength: 1,
            fill: "#0E6131",
            stroke: "#0E6131",
            transition: {
                default: {
                    duration: 2, ease: "easeInOut", repeat: Infinity,
                    repeatType: "loop", repeatDelay: 1
                },
                fill: {
                    duration: 2, ease: [1, 0, 0.8, 1], repeat: Infinity,
                    repeatType: "loop", repeatDelay: 1
                },

            }
        }
    }
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
        <div className={Style.mainBody}>
            <div className={Style.svgMantain}>
                <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=492,dpr=1/tp/static/assets/img/raster/white/4.png?v2" alt="" />
            </div>
            <div>
                <h1 className={Style.WorkHeading}>Hit your team’s highest targets with Narvi</h1>
                <p className={Style.wholeParaText}>Create, collaborate, and deliver in one powerful platform. Work effortlessly, beat expectations, and send ROI soaring.</p>
                <form onSubmit={(e) => handleSubmit(e)} className={Style.wholebuttons}>
                    {/* <input className={Style.wholeinput} type="email" value={email.text} onChange={(e) => handleChange(e)} placeholder='Enter your business email' /> */}
                    <button className={Style.wholebutton}>Get Started</button>
                </form>
            </div>
            <div className={Style.svgMantain}>
                <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=492,dpr=1/tp/static/assets/img/raster/white/1.png?v2" alt="" />
            </div>
        </div>
    )
}

export default Try