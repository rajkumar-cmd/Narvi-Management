import React from 'react'
import Style from '../Styles/WhyNarvi.module.css'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { HiSpeakerphone } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { ImBriefcase } from "react-icons/im";
import { BiLineChart } from "react-icons/bi";
import { IoIosColorPalette } from "react-icons/io";
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
                </UnorderedList>
            </div>
            <div>
                <p className={Style.MasterlistHeading}>USE CASE</p>
                <UnorderedList styleType={"none"}>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={HiSpeakerphone} />
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
                                <Icon className={Style.listIcon} as={ImBriefcase} />
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
                </UnorderedList>
            </div>
            <div>
                <p className={Style.MasterlistHeading}>FOR TEAMS</p>
                <UnorderedList styleType={"none"}>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
            </div>
            <div>
                <p className={Style.MasterlistHeading}>FOR TEAMS</p>
                <UnorderedList styleType={"none"}>
                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                    <ListItem>Consectetur adipiscing elit</ListItem>
                    <ListItem>Integer molestie lorem at massa</ListItem>
                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                </UnorderedList>
            </div>
        </div>
    )
}

export default WhyNarvi