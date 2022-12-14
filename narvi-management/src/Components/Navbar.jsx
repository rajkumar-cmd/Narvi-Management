import React from 'react'
import Style from "../Styles/Navbar.module.css"
import { ReactComponent as NarviIconText } from '../Icons/NarviWithText.svg'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import WhyNarvi from './WhyNarvi'
import { NavLink } from 'react-router-dom'
import Features from './Features'
import Resources from './Resources'

const Navbar = () => {
    // Why Narvi?
    const handleFuse = () => {
        setWhyNarviIcon(true);
        setWhyNarvi(false);
        setfeatures(false);
        setresources(false);
        setFocuswhyNarvi(false);
        setFocusFeatures(false);
        setFocusResources(false);
        setFocusPricing(false);
        setFocusContact(false);
        setFeaturesIcon(true);
        setResourcesIcon(true);
    }
    const [whyNarvi, setWhyNarvi] = React.useState(false);
    const [focuswhyNarvi, setFocuswhyNarvi] = React.useState(false);
    const [whyNarviIcon, setWhyNarviIcon] = React.useState(true);
    const handleWhyNarvi = () => {
        handleFuse();
        setWhyNarviIcon(!whyNarviIcon);
        setWhyNarvi(!whyNarvi);
        setFocuswhyNarvi(!focuswhyNarvi);
    }

    // Features
    const [features, setfeatures] = React.useState(false);
    const [FeaturesIcon, setFeaturesIcon] = React.useState(true);
    const [focusFeatures, setFocusFeatures] = React.useState(false);
    const handleFeatures = () => {
        handleFuse();
        setfeatures(!features);
        setFeaturesIcon(!FeaturesIcon);
        setFocusFeatures(!focusFeatures);
    }

    // Resources
    const [resources, setresources] = React.useState(false);
    const [ResourcesIcon, setResourcesIcon] = React.useState(true);
    const [focusResources, setFocusResources] = React.useState(false);
    const handleResources = () => {
        handleFuse();
        setresources(!resources);
        setResourcesIcon(!ResourcesIcon);
        setFocusResources(!focusResources);
    }

    // Pricing
    const [Pricing, setPricing] = React.useState(false);
    const [PricingIcon, setPricingIcon] = React.useState(true);
    const [focusPricing, setFocusPricing] = React.useState(false);
    const handlePricing = () => {
        handleFuse();
        setPricingIcon(!PricingIcon);
        setFocusPricing(!focusPricing);
    }

    // Contact Sales
    const [Contact, setContact] = React.useState(false);
    const [ContactIcon, setContactIcon] = React.useState(true);
    const [focusContact, setFocusContact] = React.useState(false);
    const handleContact = () => {
        handleFuse();
        setContactIcon(!ContactIcon);
        setFocusContact(!focusContact);
    }

    return (
        <>
            <div className={Style.wholeComponent}>
                <div className={Style.logoParent}>
                    <NavLink to={"/"}>
                        <NarviIconText className={Style.logo} />
                    </NavLink>
                </div>
                <div className={Style.navbarText}>
                    <button className={Style.navbarText1} onClick={handleWhyNarvi} style={(focuswhyNarvi ? ({ color: "#7FD957", textDecoration:"underline", textDecorationThickness:"2px" }) : ({ color: "white" }))}>
                        Why Narvi ?
                        {whyNarviIcon ? (<ChevronDownIcon fontSize={22} marginBottom={0.5} />) : (
                            <ChevronUpIcon fontSize={22} marginBottom={0.5} />
                        )}
                    </button>
                    <button className={Style.navbarText2} onClick={handleFeatures} style={(focusFeatures ? ({ color: "#7FD957", textDecoration:"underline", textDecorationThickness:"2px" }) : ({ color: "white" }))}>
                        Features
                        {FeaturesIcon ? (<ChevronDownIcon fontSize={22} marginBottom={0.5} />) : (
                            <ChevronUpIcon fontSize={22} marginBottom={0.5} />
                        )}
                    </button>
                    <button className={Style.navbarText3} onClick={handleResources} style={(focusResources ? ({ color: "#7FD957", textDecoration:"underline", textDecorationThickness:"2px" }) : ({ color: "white" }))}>
                        Resources
                        {ResourcesIcon ? (<ChevronDownIcon fontSize={22} marginBottom={0.5} />) : (
                            <ChevronUpIcon fontSize={22} marginBottom={0.5} />
                        )}
                    </button>
                    <button className={Style.navbarText4} onClick={handlePricing} style={(focusPricing ? ({ color: "#7FD957", textDecoration:"underline", textDecorationThickness:"2px" }) : ({ color: "white" }))}>
                        <NavLink to={"/pricing"}>Pricing</NavLink>
                    </button>
                    <button className={Style.navbarText5} onClick={handleContact} style={(focusContact ? ({ color: "#7FD957", textDecoration:"underline", textDecorationThickness:"2px" }) : ({ color: "white" }))}>
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
            <div>
            {whyNarvi ? (<WhyNarvi />) : (
                ""
            )}
            </div>
            <div>
            {features ? (<Features />) : (
                ""
            )}
            </div>
            <div>
            {resources ? (<Resources />) : (
                ""
            )}
            </div>
        </>
    )
}

export default Navbar