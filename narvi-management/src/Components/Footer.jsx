import React from 'react'
import { NavLink } from "react-router-dom"
import Style from "../Styles/Footer.module.css"
import { ReactComponent as Google } from '../Icons/google.svg'
import { ReactComponent as Apple } from '../Icons/Apple.svg'
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
import { AiOutlineTwitter } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaGooglePlay, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className={Style.footerBody}>
                <div className={Style.footerFlex}>
                    <h1 className={Style.headingList1}>Product</h1>
                    <UnorderedList styleType={"none"}>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Product tour</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Pricing</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Templates</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Apps & Integrations</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Task management</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Gantt charts</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Narvi Status</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Security</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>CA Notice at Collection</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>API</p>
                                </div>
                            </ListItem>
                        </NavLink>
                    </UnorderedList>
                </div>
                {/* <Center height='350px' marginTop={1} marginLeft={2}>
                    <Divider orientation='vertical' color={"#7FD957"} />
                </Center> */}
                <div className={Style.footerFlex}>
                    <h1 className={Style.headingList1}>Solutions</h1>
                    <UnorderedList styleType={"none"}>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>All Teams</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Marketing</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Creative</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Project Management</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Product Development</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Business Operations</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Professional Services</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Students</p>
                                </div>
                            </ListItem>
                        </NavLink>
                    </UnorderedList>
                </div>
                {/* <Center height='350px' marginTop={1} marginLeft={2}>
                    <Divider orientation='vertical' color={"#7FD957"} />
                </Center> */}
                <div className={Style.footerFlex}>
                    <h1 className={Style.headingList1}>Resources</h1>
                    <UnorderedList styleType={"none"}>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Help Center</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Community</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Webinars</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Interactive Training</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Support</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Google project management tools</p>
                                </div>
                            </ListItem>
                        </NavLink>
                    </UnorderedList>
                </div>
                {/* <Center height='350px' marginTop={1} marginLeft={2}>
                    <Divider orientation='vertical' color={"#7FD957"} />
                </Center> */}
                <div className={Style.footerFlex}>
                    <h1 className={Style.headingList1}>Company</h1>
                    <UnorderedList styleType={"none"}>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>About Us</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Careers</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Our Customers</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Blog</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Events</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Newsroom</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Partner Program</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>User Conference</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Contact Us</p>
                                </div>
                            </ListItem>
                        </NavLink>
                    </UnorderedList>
                </div>
                {/* <Center height='350px' marginTop={1} marginLeft={2}>
                    <Divider orientation='vertical' color={"#7FD957"} />
                </Center> */}
                <div className={Style.footerFlex1}>
                    <h1 className={Style.headingList}>Guides</h1>
                    <UnorderedList styleType={"none"}>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Project Management Guide</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Professional Services Guide</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Kanban Guide</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Agile Guide</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Remote Work Guide</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Marketing Project Management Guide</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Scrum Guide</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Product Management Guide</p>
                                </div>
                            </ListItem>
                        </NavLink>
                        <NavLink to={""}>
                            <ListItem className={Style.listArrange}>
                                <div className={Style.listText}>
                                    <p>Digital Marketing Guide</p>
                                </div>
                            </ListItem>
                        </NavLink>
                    </UnorderedList>
                </div>
            </div>
            <Center>
                <Divider />
            </Center>
            <div className={Style.footerFooter}>
                <div className={Style.footerFooter1}>
                    <a href="">
                        <Apple className={Style.applePlay} />
                    </a>
                    <a href="">
                        <Google className={Style.googlePlay} />
                    </a>
                </div>
                <div className={Style.footerFooter2}>
                    <a href="">
                        <Icon className={Style.listIcon2} as={AiOutlineTwitter} />
                    </a>
                    <a href="">
                        <Icon className={Style.listIcon2} as={FaGooglePlay} />
                    </a>
                    <a href="">
                        <Icon className={Style.listIcon2} as={FaLinkedinIn} />
                    </a>
                    <a href="">
                        <Icon className={Style.listIcon2} as={BsYoutube} />
                    </a>
                    <a href="">
                        <Icon className={Style.listIcon2} as={FaInstagram} />
                    </a>
                </div>
            </div>
            <div className={Style.lowerfooterFooter}>
                <p className={Style.copyrightText}>©2006-2022 Wrike, Inc. All rights reserved. Patented.<a href="" className={Style.copyrightLink}>Privacy Policy</a><a href="" className={Style.copyrightLink}>Terms of Service</a><a href="" className={Style.copyrightLink}>Cookie Preferences</a>.</p>
            </div>
        </>
    )
}

export default Footer