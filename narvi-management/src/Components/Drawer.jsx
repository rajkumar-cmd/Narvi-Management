import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Divider,
    Card,
    CardBody,
    Image,
    Stack,
    CardFooter
} from '@chakra-ui/react'
import Style from "../Styles/Drawer.module.css"
import NarviWithText from "../Icons/NarviWithText.png"
import { NavLink } from 'react-router-dom'
import { Icon } from '@chakra-ui/react'
import { GiHamburgerMenu, GiCrossedSlashes, GiLinkedRings } from 'react-icons/gi';
import { HiSpeakerphone, HiTemplate, HiOutlinePencilAlt } from "react-icons/hi";
import { AiFillBook, AiOutlineCode } from "react-icons/ai";
import { ImBriefcase } from "react-icons/im";
import { BiLineChart, BiCalendarCheck, BiCategory } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { BsSlack, BsFillCalculatorFill, BsChatLeftTextFill } from "react-icons/bs";
import { TiFlowMerge, TiTickOutline } from "react-icons/ti";
import { TbSubtask, TbFolders, TbChartPie, TbTemplate, TbSettingsAutomation } from "react-icons/tb";
import { FaSalesforce, FaStream, FaFolderOpen, FaGraduationCap, FaHandshake } from "react-icons/fa";
import { SiMicrosoftteams, SiAdobecreativecloud } from "react-icons/si";
import { ArrowForwardIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'
import { AiOutlineForm, AiOutlineFundProjectionScreen, AiOutlineAreaChart } from "react-icons/ai";
import { MdSpaceDashboard, MdOndemandVideo } from "react-icons/md";
import { CiMobile3 } from "react-icons/ci";

const SideDrawer = () => {
    // Side Drawer
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    // Fuse?
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

    // WhyNarvi
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

    // Login
    const [Login, setLogin] = React.useState(false);
    const [LoginIcon, setLoginIcon] = React.useState(true);
    const [focusLogin, setFocusLogin] = React.useState(false);
    const handleLogin = () => {
        handleFuse();
        setLoginIcon(!LoginIcon);
        setFocusLogin(!focusLogin);

    }

    // Signup
    const [Signup, setSignup] = React.useState(false);
    const [SignupIcon, setSignupIcon] = React.useState(true);
    const [focusSignup, setFocusSignup] = React.useState(false);
    const handleSignup = () => {
        handleFuse();
        setSignupIcon(!SignupIcon);
        setFocusSignup(!focusSignup);

    }
    return (
        <div>
            <div className={Style.wholeComponentTablet}>
                <div className={Style.logoParentTablet}>
                    <NavLink to={"/"}>
                        <img src={NarviWithText} alt="" style={{ width: "12rem" }} />
                    </NavLink>
                </div>
                <div>
                    <Button ref={btnRef} className={Style.hamberger} onClick={onOpen} on style={{ backgroundColor: "#7FD957" }}>
                        <Icon as={GiHamburgerMenu} />
                    </Button>
                    <Drawer
                        isOpen={isOpen}
                        placement='right'
                        onClose={onClose}
                        finalFocusRef={btnRef}
                        size={"sm"}
                    >
                        <DrawerOverlay />
                        <DrawerContent style={{ backgroundColor: "#0d1833" }}>
                            <DrawerCloseButton style={{ color: "#7FD957" }} />
                            <DrawerHeader className={Style.header}>
                                <NavLink to={"/"} onClick={handleFuse}>
                                    <img src={NarviWithText} alt="" style={{ width: "10rem" }} />
                                </NavLink>
                            </DrawerHeader>

                            <DrawerBody>
                                <Accordion allowToggle>
                                    <AccordionItem padding={2} >
                                        <h2>
                                            <AccordionButton padding={0} margin={2}>
                                                <Box as="span" flex='1' textAlign='left' className={Style.DrawerMain} onClick={handleWhyNarvi} style={(focuswhyNarvi ? ({ color: "#7FD957", textDecoration: "underline", textDecorationThickness: "2px" }) : ({ color: "white" }))}>
                                                    Why Narvi ?
                                                    {whyNarviIcon ? (<ChevronDownIcon fontSize={22} marginBottom={0.5} marginRight={6} />) : (
                                                        <ChevronUpIcon fontSize={22} marginBottom={0.5} marginRight={6} />
                                                    )}
                                                </Box>
                                                {/* <AccordionIcon style={{ color: "#7FD957" }} /> */}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={0.2}>
                                            <p className={Style.topHeadList}>FOR TEAMS</p>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={HiSpeakerphone} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Marketing</h1>
                                                        <p className={Style.paraList}>Streamline proofing and reporting for seamless campaigns.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={ImBriefcase} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Professional Services</h1>
                                                        <p className={Style.paraList}>Take control of billable hours and increase client satisfaction.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={BiLineChart} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Project Managers</h1>
                                                        <p className={Style.paraList}>Plan Agile projects,track deadlines,and deliver results.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={IoIosColorPalette} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Creative & Design</h1>
                                                        <p className={Style.paraList}>Create high-quality assets and get them approved in record time</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink>
                                                <p className={Style.seeMore}>See all teams <ArrowForwardIcon /></p>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0}>
                                            <br />
                                        </AccordionPanel>
                                        <AccordionPanel pb={0}>
                                            <Divider />
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <p className={Style.topHeadList}>USE CASES</p>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={TiFlowMerge} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Workflow Management</h1>
                                                        <p className={Style.paraList}>Use custom statuses and automate your team workflows.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={TbSubtask} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Task Management</h1>
                                                        <p className={Style.paraList}>Organize incoming requests and eliminate repetitive tasks.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={TbChartPie} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Project Tracking</h1>
                                                        <p className={Style.paraList}>Track progress and monitor multiple projects with dashboards.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={TbFolders} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Resource Management</h1>
                                                        <p className={Style.paraList}>View team workloads and reallocate tasks to avoid burnout.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink>
                                                <p className={Style.seeMore}>See all use cases <ArrowForwardIcon /></p>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0}>
                                            <br />
                                        </AccordionPanel>
                                        <AccordionPanel pb={0}>
                                            <Divider />
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <p className={Style.topHeadList}>APPS & INTEGRATIONS</p>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={BsSlack} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Slack</h1>
                                                        <p className={Style.paraList}>Turn a casual Slack chat into an actionable Narvi task.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={FaSalesforce} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Salesforce</h1>
                                                        <p className={Style.paraList}>Integrate client data seamlessly between Narvi and Salesforce.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={SiMicrosoftteams} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Microsoft Teams</h1>
                                                        <p className={Style.paraList}>Collaborate on Narvi projects without leaving Microsoft Teams.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={SiAdobecreativecloud} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Adobe</h1>
                                                        <p className={Style.paraList}>Accelerate Narvi design tasks from Adobe Creative Cloud.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink>
                                                <p className={Style.seeMore}>See all integration <ArrowForwardIcon /></p>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0}>
                                            <br />
                                        </AccordionPanel>
                                        <AccordionPanel pb={0}>
                                            <Divider />
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <p className={Style.topHeadList}>EXPLORE NARVI</p>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon1} style={{ color: "#7FD957" }} as={BiCalendarCheck} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Book a Demo</h1>                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon1} style={{ color: "#7FD957" }} as={BiCategory} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Take a Product Tour</h1>                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon1} style={{ color: "#7FD957" }} as={AiFillBook} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Start With Templates</h1>                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon1} style={{ color: "#7FD957" }} as={TbTemplate} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Customer Stories</h1>                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon1} style={{ color: "#7FD957" }} as={BsFillCalculatorFill} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>ROI Calculator</h1>                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>

                                    </AccordionItem>

                                    <AccordionItem padding={2}>
                                        <h2>
                                            <AccordionButton padding={0} margin={2}>
                                                <Box as="span" flex='1' textAlign='left' className={Style.DrawerMain} onClick={handleFeatures} style={(focusFeatures ? ({ color: "#7FD957", textDecoration: "underline", textDecorationThickness: "2px" }) : ({ color: "white" }))}>
                                                    Features
                                                    {FeaturesIcon ? (<ChevronDownIcon fontSize={22} marginBottom={0.5} marginRight={6} />) : (
                                                        <ChevronUpIcon fontSize={22} marginBottom={0.5} marginRight={6} />
                                                    )}
                                                </Box>
                                                {/* <AccordionIcon style={{ color: "#7FD957" }} /> */}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={MdSpaceDashboard} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Dashboards</h1>
                                                        <p className={Style.paraList}>Visualize tasks,processes,analytics,and more.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={TbSettingsAutomation} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Automation</h1>
                                                        <p className={Style.paraList}>Define and trigger automated workflows to eliminate manual efforts.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={CiMobile3} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Mobile & Desktop Apps</h1>
                                                        <p className={Style.paraList}>Work from anywhere with our robust app experience.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={BsChatLeftTextFill} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Proofing</h1>
                                                        <p className={Style.paraList}>Streamlined proofing and collaboration in one place.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={GiCrossedSlashes} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Cross-Tagging</h1>
                                                        <p className={Style.paraList}>Unparalleled visibility  across multiple work streams.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={FaStream} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Kanban Boards</h1>
                                                        <p className={Style.paraList}>Instantly view project progress and create customized workflows.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={AiOutlineFundProjectionScreen} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Project Resource Planning</h1>
                                                        <p className={Style.paraList}>Plan and allocate resources for timely delivery.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={AiOutlineAreaChart} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Gantt Charts</h1>
                                                        <p className={Style.paraList}>Interactive project scheduling across teams.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={TiTickOutline} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Approvals</h1>
                                                        <p className={Style.paraList}>Keep approvers in the loop from start to finish.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={HiTemplate} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Custom Item Types</h1>
                                                        <p className={Style.paraList}>Tailor work items to fit your specific workplace.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={AiOutlineForm} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Dynamic Request Forms</h1>
                                                        <p className={Style.paraList}>Custom forms powered by conditional logic.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={GiLinkedRings} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Integrations</h1>
                                                        <p className={Style.paraList}>Over 400 popular apps plus custom integrations.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={6}>
                                            <Card maxW='sm'>
                                                <CardBody className={Style.cardBody}>
                                                    <Image
                                                        src='https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80'
                                                        alt='Get your free gift'
                                                        borderRadius='lg'
                                                    />
                                                    <Stack mt='6' spacing='2' className={Style.cardText}>
                                                        <h1 className={Style.cardHeadingList}>Get your free gift!</h1>
                                                        <p className={Style.desList}>
                                                            We have a festive treat for new Narvi customer.
                                                        </p>
                                                    </Stack>
                                                </CardBody>
                                                <Divider />
                                                <NavLink to={""}>
                                                    <CardFooter className={Style.cardFooter}>
                                                        <p className={Style.seeMore1}>Learn more<ArrowForwardIcon /></p>
                                                    </CardFooter>
                                                </NavLink>
                                            </Card>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem padding={2} >
                                        <h2>
                                            <AccordionButton padding={0} margin={2}>
                                                <Box as="span" flex='1' textAlign='left' className={Style.DrawerMain} onClick={handleResources} style={(focusResources ? ({ color: "#7FD957", textDecoration: "underline", textDecorationThickness: "2px" }) : ({ color: "white" }))}>
                                                    Resources
                                                    {ResourcesIcon ? (<ChevronDownIcon fontSize={22} marginBottom={0.5} marginRight={6} />) : (
                                                        <ChevronUpIcon fontSize={22} marginBottom={0.5} marginRight={6} />
                                                    )}
                                                </Box>
                                                {/* <AccordionIcon style={{ color: "#7FD957" }} /> */}
                                            </AccordionButton>
                                        </h2>
                                        <AccordionPanel pb={0.2}>
                                            <p className={Style.topHeadList}>LEARN AND CONNECT</p>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={FaFolderOpen} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Resouce Hub</h1>
                                                        <p className={Style.paraList}>Top assets on productivity,collaboration,and more.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={HiOutlinePencilAlt} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Narvi Blog</h1>
                                                        <p className={Style.paraList}>Latest news and best practices on project management.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={FaGraduationCap} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Education Guides</h1>
                                                        <p className={Style.paraList}>Guides and tools to unlock better work management.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={MdOndemandVideo} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Webinars</h1>
                                                        <p className={Style.paraList}>Join our live or on-demand sessions to do your best work.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={FaHandshake} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Partners</h1>
                                                        <p className={Style.paraList}>Power new possibilities with the Narvi Partner Program.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div>
                                                        <Icon className={Style.listIcon} style={{ color: "#7FD957" }} as={AiOutlineCode} />
                                                    </div>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Developers</h1>
                                                        <p className={Style.paraList}>Connect and build integrations with easy-to-use APIs.</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0}>
                                            <br />
                                        </AccordionPanel>
                                        <AccordionPanel pb={0}>
                                            <Divider />
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>BECOME NARVI PRO</h1>                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Submit a Ticket</h1>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Support Hub</h1>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Premium Support</h1>                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Community Topics</h1>                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Training Cources</h1>                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={0.2}>
                                            <NavLink to="">
                                                <div className={Style.DrawerContent}>
                                                    <div className={Style.listText}>
                                                        <h1 className={Style.headingList}>Facilitated Services</h1>                                                    </div>
                                                </div>
                                            </NavLink>
                                        </AccordionPanel>
                                        <AccordionPanel pb={6}>
                                            <Card maxW='sm'>
                                                <CardBody className={Style.cardBody}>
                                                    <Image
                                                        src='https://images.unsplash.com/photo-1545861163-d75d945d8dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                                                        alt='Get your free gift'
                                                        borderRadius='lg'
                                                    />
                                                    <Stack mt='6' spacing='2' className={Style.cardText}>
                                                        <h1 className={Style.cardHeadingList}>Sony Pictures television uses Narvi to streamline creative operations.</h1>
                                                        <p className={Style.desList}>
                                                            Learn more how Narvi speedup Sony Pictures Television speedup proofing and boost client communications.
                                                        </p>
                                                    </Stack>
                                                </CardBody>
                                                <Divider />
                                                <NavLink to={""}>
                                                    <CardFooter className={Style.cardFooter}>
                                                        <p className={Style.seeMore1}>See all teams <ArrowForwardIcon /></p>
                                                    </CardFooter>
                                                </NavLink>
                                            </Card>
                                        </AccordionPanel>
                                    </AccordionItem>

                                    <AccordionItem padding={2} >
                                        <h2>
                                            <NavLink to={"/pricing"} onClick={handlePricing}>
                                                <AccordionButton padding={0} margin={2}>
                                                    <Box as="span" flex='1' textAlign='left' className={Style.DrawerMain} style={(focusPricing ? ({ color: "#7FD957", textDecoration: "underline", textDecorationThickness: "2px" }) : ({ color: "white" }))}>
                                                        Pricing
                                                    </Box>
                                                    {/* <AccordionIcon style={{ color: "#7FD957" }} /> */}
                                                </AccordionButton>
                                            </NavLink>
                                        </h2>
                                    </AccordionItem>

                                    <AccordionItem padding={2} >
                                        <h2>
                                            <NavLink to={"/contact"} onClick={handleContact}>
                                                <AccordionButton padding={0} margin={2}>
                                                    <Box as="span" flex='1' textAlign='left' className={Style.DrawerMain} style={(focusContact ? ({ color: "#7FD957", textDecoration: "underline", textDecorationThickness: "2px" }) : ({ color: "white" }))}>
                                                        Contact Sales
                                                    </Box>
                                                    {/* <AccordionIcon style={{ color: "#7FD957" }} /> */}
                                                </AccordionButton>
                                            </NavLink>
                                        </h2>
                                    </AccordionItem>
                                </Accordion>
                                <div className={Style.drawerFooter}>
                                    <NavLink to={"/login"} className={Style.drawerFooterButton1} onClick={handleLogin}>
                                        <button className={Style.drawerFooterButtonChild1}>
                                            Login
                                        </button>
                                    </NavLink>
                                    <NavLink to={"/signup"} className={Style.drawerFooterButton2} onClick={handleSignup}>
                                        <button className={Style.drawerFooterButtonChild2}>
                                            Start for free
                                        </button>
                                    </NavLink>
                                </div>

                            </DrawerBody>

                            <DrawerFooter>


                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </div>
    )
}

export default SideDrawer