import React from 'react'
import Style from "../Styles/Navbar.module.css"
import { ReactComponent as NarviIconText } from '../Icons/NarviWithText.svg'
import { ReactComponent as NarviIconSvg } from '../Icons/Narvi.svg'
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import WhyNarvi from './WhyNarvi'
import { Flex, Spacer, Box } from '@chakra-ui/react'

const Navbar = () => {

    // Why Narvi?
    const [whyNarvi, setWhyNarvi] = React.useState(false);
    const [whyNarviIcon, setWhyNarviIcon] = React.useState(true);
    const handleWhyNarvi = () => {
        setWhyNarviIcon(!whyNarviIcon);
        setWhyNarvi(!whyNarvi);
    }

    // Features
    const [Features, setFeatures] = React.useState(false);
    const [FeaturesIcon, setFeaturesIcon] = React.useState(true);
    const handleFeatures = () => {
        setFeaturesIcon(!FeaturesIcon);
    }

    // Resources
    const [Resources, setResources] = React.useState(false);
    const [ResourcesIcon, setResourcesIcon] = React.useState(true);
    const handleResources = () => {
        setResourcesIcon(!ResourcesIcon);
    }

    return (
        <>
            <Flex className={Style.wholeComponent}>
                <Box className={Style.logoParent}>
                    <NarviIconSvg className={Style.logo} />
                    <p className={Style.logoText}>NARVI</p>
                </Box>
                <Box>
                    <Flex>
                        <Box w={"100%"}>
                            <button className={Style.navbarText1} onClick={handleWhyNarvi}>
                                Why Narvi ?
                                {whyNarviIcon ? (<ChevronDownIcon fontSize={22} marginBottom={0.5} />) : (
                                    <ChevronUpIcon fontSize={22} marginBottom={0.5} />
                                )}
                            </button>
                        </Box>
                        <Box w={"100%"}>
                            <button className={Style.navbarText2} onClick={handleFeatures}>
                                Features
                                {FeaturesIcon ? (<ChevronDownIcon fontSize={22} marginBottom={0.5} />) : (
                                    <ChevronUpIcon fontSize={22} marginBottom={0.5} />
                                )}
                            </button>
                        </Box>
                        <Box w={"100%"}>
                            <button className={Style.navbarText3} onClick={handleResources}>
                                Resources
                                {ResourcesIcon ? (<ChevronDownIcon fontSize={22} marginBottom={0.5} />) : (
                                    <ChevronUpIcon fontSize={22} marginBottom={0.5} />
                                )}
                            </button>
                        </Box>
                        <Box w={"100%"}>
                            <button className={Style.navbarText4} onClick={handleResources}>
                                Pricing
                            </button>
                        </Box>
                        <Box w={"100%"}>
                            <button className={Style.navbarText5} onClick={handleResources}>
                                Contact Sales
                            </button>
                        </Box>
                    </Flex>
                </Box>
                <Spacer />
                <Box>
                    <Flex>
                        <Box w={"100%"}>
                            <button className={Style.navbarText6} onClick={handleResources}>
                                Login
                            </button>
                        </Box>
                        <Box w={"100%"}>
                            <button className={Style.navbarText7} onClick={handleResources}>
                                Start for free
                            </button>
                        </Box>
                    </Flex>
                </Box>
            </Flex>
            {whyNarvi ? (<WhyNarvi />) : (
                ""
            )}
        </>
    )
}

export default Navbar