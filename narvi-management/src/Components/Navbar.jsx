import React from 'react'
import Style from "../Styles/Navbar.module.css"
import { ReactComponent as NarviIconText } from '../Icons/NarviWithText.svg'
import { ReactComponent as NarviIconSvg } from '../Icons/Narvi.svg'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import WhyNarvi from './WhyNarvi'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    // Why Narvi?
    const handleFuse=()=>{
        setWhyNarviIcon(true);
        setWhyNarvi(false);
        setFocus(false);
        setFeaturesIcon(true);
        setResourcesIcon(true);
    }
    const [whyNarvi, setWhyNarvi] = React.useState(false);
    const [focus,setFocus]=React.useState(false);
    const [whyNarviIcon, setWhyNarviIcon] = React.useState(true);
    const handleWhyNarvi = () => {
        handleFuse("whyNarvi");
        setWhyNarviIcon(!whyNarviIcon);
        setWhyNarvi(!whyNarvi);
        setFocus(!focus);
    }

    // Features
    const [Features, setFeatures] = React.useState(false);
    const [FeaturesIcon, setFeaturesIcon] = React.useState(true);
    const handleFeatures = () => {
        handleFuse();
        setFeaturesIcon(!FeaturesIcon);
    }

    // Resources
    const [Resources, setResources] = React.useState(false);
    const [ResourcesIcon, setResourcesIcon] = React.useState(true);
    const handleResources = () => {
        handleFuse();
        setResourcesIcon(!ResourcesIcon);
    }

    // Pricing
    const [Pricing, setPricing] = React.useState(false);
    const [PricingIcon, setPricingIcon] = React.useState(true);
    const handlePricing = () => {
        handleFuse();
        setPricingIcon(!PricingIcon);
    }

    // Contact Sales
    const [Contact, setContact] = React.useState(false);
    const [ContactIcon, setContactIcon] = React.useState(true);
    const handleContact = () => {
        handleFuse();
        setContactIcon(!ContactIcon);
    }

    return (
        <>
            <div className={Style.wholeComponent}>
                <div className={Style.logoParent}>
                    <NarviIconText className={Style.logo} />
                    {/* <p className={Style.logoText}>NARVI</p> */}
                </div>
                <div className={Style.navbarText}>
                    <button className={Style.navbarText1} onClick={handleWhyNarvi} style={(focus?({color:"green"}):({color:"white"}))}>
                        Why Narvi ?
                        {whyNarviIcon ? (<ChevronDownIcon fontSize={22} marginBottom={0.5} />) : (
                            <ChevronUpIcon fontSize={22} marginBottom={0.5} />
                        )}
                    </button>
                    <button className={Style.navbarText2} onClick={handleFeatures}>
                        Features
                        {FeaturesIcon ? (<ChevronDownIcon fontSize={22} marginBottom={0.5} />) : (
                            <ChevronUpIcon fontSize={22} marginBottom={0.5} />
                        )}
                    </button>
                    <button className={Style.navbarText3} onClick={handleResources}>
                        Resources
                        {ResourcesIcon ? (<ChevronDownIcon fontSize={22} marginBottom={0.5} />) : (
                            <ChevronUpIcon fontSize={22} marginBottom={0.5} />
                        )}
                    </button>
                    <button className={Style.navbarText4} onClick={handlePricing}>
                        <NavLink to={"/pricing"}>Pricing</NavLink>
                    </button>
                    <button className={Style.navbarText5} onClick={handleContact}>
                        <NavLink to={"/contact"}>Contact Sales</NavLink>
                    </button>
                </div>
                <div className={Style.navbarAccounts}>
                    <button className={Style.navbarText6} onClick={handleResources}>
                        <NavLink to={"/login"}>Login</NavLink>
                    </button>
                    <button className={Style.navbarText7} onClick={handleResources}>
                        <NavLink to={"/signup"}>Start for free</NavLink>
                    </button>
                </div>

            </div>
            {whyNarvi ? (<WhyNarvi />) : (
                ""
            )}
        </>
    )
}

export default Navbar