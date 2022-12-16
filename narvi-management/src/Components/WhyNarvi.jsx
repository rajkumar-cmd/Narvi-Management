import React from 'react'
import Style from '../Styles/WhyNarvi.module.css'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Center,
    Divider
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { AiFillBook } from "react-icons/ai";
import { HiSpeakerphone } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { ImBriefcase } from "react-icons/im";
import { BiLineChart,BiCalendarCheck,BiCategory } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
import { BsSlack,BsFillCalculatorFill } from "react-icons/bs";
import { TiFlowMerge } from "react-icons/ti";
import { TbSubtask,TbFolders,TbChartPie,TbTemplate } from "react-icons/tb";
import { FaSalesforce } from "react-icons/fa";
import { SiMicrosoftteams,SiAdobecreativecloud } from "react-icons/si";
import { ArrowForwardIcon } from '@chakra-ui/icons'

const WhyNarvi = () => {
    return (
        <div className={Style.whyNarvi}>
            <div>
                <p className={Style.MasterlistHeading}>FOR TEAMS</p>
                <UnorderedList styleType={"none"}>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={HiSpeakerphone} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Marketing</h1>
                                <p>Streamline proofing and reporting for seamless campaigns.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={ImBriefcase} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Professional Services</h1>
                                <p>Take control of billable hours and increase client satisfaction.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={BiLineChart} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Project Managers</h1>
                                <p>Plan Agile projects,track deadlines,and deliver results.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={IoIosColorPalette} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Creative & Design</h1>
                                <p>Create high-quality assets and get them approved in record time</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink>
                        <p className={Style.seeMore}>See all teams <ArrowForwardIcon /></p>
                    </NavLink>
                </UnorderedList>
            </div>
            <Center height='360px' marginTop={12} marginLeft={2}>
            <Divider orientation='vertical' color={"#7FD957"}/>
            </Center>
            <div>
                <p className={Style.MasterlistHeading}>USE CASE</p>
                <UnorderedList styleType={"none"}>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={TiFlowMerge} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Workflow Management</h1>
                                <p>Use custom statuses and automate your team workflows.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={TbSubtask}/>
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Task Management</h1>
                                <p>Organize incoming requests and eliminate repetitive tasks.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={TbChartPie} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Project Tracking</h1>
                                <p>Track progress and monitor multiple projects with dashboards.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={TbFolders} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Resource Management</h1>
                                <p>View team workloads and reallocate tasks to avoid burnout.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink>
                        <p className={Style.seeMore}>See all use cases <ArrowForwardIcon /></p>
                    </NavLink>
                </UnorderedList>
            </div>
            <Center height='360px' marginTop={12} marginLeft={2}>
            <Divider orientation='vertical' color={"#7FD957"}/>
            </Center>
            <div>
                <p className={Style.MasterlistHeading}>APPS & INTEGRATIONS</p>
                <UnorderedList styleType={"none"}>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={BsSlack} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Slack</h1>
                                <p>Turn a casual Slack chat into an actionable Narvi task.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={FaSalesforce} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Salesforce</h1>
                                <p>Integrate client data seamlessly between Narvi and Salesforce.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={SiMicrosoftteams} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Microsoft Teams</h1>
                                <p>Collaborate on Narvi projects without leaving Microsoft Teams.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={SiAdobecreativecloud} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Adobe</h1>
                                <p>Accelerate Narvi design tasks from Adobe Creative Cloud.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink>
                        <p className={Style.seeMore}>See all integration <ArrowForwardIcon /></p>
                    </NavLink>
                </UnorderedList>
            </div>
            <Center height='360px' marginTop={12} marginLeft={2}>
            <Divider orientation='vertical' color={"#7FD957"}/>
            </Center>
            <div className={Style.lastNavbar}>
            <p className={Style.MasterlistHeading1}>EXPLORE NARVI</p>
                <UnorderedList styleType={"none"}>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange2}>
                            <div>
                                <Icon className={Style.listIcon2} as={BiCalendarCheck} />
                            </div>
                            <div className={Style.listText2}>
                                <h1 className={Style.headingList2}>Book a Demo</h1>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange2}>
                            <div>
                                <Icon className={Style.listIcon2} as={BiCategory} />
                            </div>
                            <div className={Style.listText2}>
                                <h1 className={Style.headingList2}>Take a Product Tour</h1>                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange2}>
                            <div>
                                <Icon className={Style.listIcon2} as={AiFillBook} />
                            </div>
                            <div className={Style.listText2}>
                                <h1 className={Style.headingList2}>Start With Templates</h1>                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange2}>
                            <div>
                                <Icon className={Style.listIcon2} as={TbTemplate} />
                            </div>
                            <div className={Style.listText2}>
                                <h1 className={Style.headingList2}>Customer Stories</h1>                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange2}>
                            <div>
                                <Icon className={Style.listIcon2} as={BsFillCalculatorFill} />
                            </div>
                            <div className={Style.listText2}>
                                <h1 className={Style.headingList2}>ROI Calculator</h1>                            </div>
                        </ListItem>
                    </NavLink>
                </UnorderedList>
            </div>
        </div>
    )
}

export default WhyNarvi