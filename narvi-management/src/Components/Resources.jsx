import React from 'react'
import Style from '../Styles/Resources.module.css'
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Divider,
    Center
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
// 
import { AiFillBook,AiOutlineCode } from "react-icons/ai";
import { HiSpeakerphone,HiOutlinePencilAlt } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { ImBriefcase,ImNewspaper } from "react-icons/im";
import { BiLineChart, BiCalendarCheck, BiCategory } from "react-icons/bi";
import { IoIosColorPalette,IoNewspaperSharp } from "react-icons/io";
import { BsSlack, BsFillCalculatorFill } from "react-icons/bs";
import { TiFlowMerge } from "react-icons/ti";
import { TbSubtask, TbFolders, TbChartPie, TbTemplate } from "react-icons/tb";
import { FaSalesforce,FaFolderOpen,FaGraduationCap,FaHandshake } from "react-icons/fa";
import { SiMicrosoftteams, SiAdobecreativecloud } from "react-icons/si";
import { MdOndemandVideo } from "react-icons/md";

// 
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Resources = () => {
    return (
        <div className={Style.resources}>
            <div className={Style.resourcesList}>
                <p className={Style.MasterlistHeading}>LEARN AND CONNECT</p>
                <UnorderedList styleType={"none"}>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={FaFolderOpen} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Resouce Hub</h1>
                                <p>Top assets on productivity,collaboration,and more.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={HiOutlinePencilAlt} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Narvi Blog</h1>
                                <p>Latest news and best practices on project management.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={FaGraduationCap} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Education Guides</h1>
                                <p>Guides and tools to unlock better work management.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                </UnorderedList>
            </div>
            <Center height='360px' marginTop={12} marginLeft={2}>
                <Divider orientation='vertical' color={"#7FD957"} />
            </Center>
            <div className={Style.resourcesList1}>
                <UnorderedList styleType={"none"}>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={MdOndemandVideo} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Webinars</h1>
                                <p>Join our live or on-demand sessions to do your best work.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={FaHandshake} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Partners</h1>
                                <p>Power new possibilities with the Narvi Partner Program.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={AiOutlineCode} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Developers</h1>
                                <p>Connect and build integrations with easy-to-use APIs.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                </UnorderedList>
            </div>
            <Center height='360px' marginTop={12} marginLeft={2}>
                <Divider orientation='vertical' color={"#7FD957"} />
            </Center>
            <div className={Style.resourcesList}>
                <p className={Style.MasterlistHeading}>BECOME NARVI PRO</p>
                <UnorderedList styleType={"none"}>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange1}>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Submit a Ticket</h1>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange1}>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Support Hub</h1>                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange1}>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Premium Support</h1>                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange1}>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Community Topics</h1>                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange1}>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Training Cources</h1>                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange1}>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Facilitated Services</h1>                            </div>
                        </ListItem>
                    </NavLink>
                </UnorderedList>
            </div>
            <Center height='360px' marginTop={12} marginLeft={2}>
                <Divider orientation='vertical' color={"#7FD957"} />
            </Center>
            <div className={Style.cardList}>
                <Card maxW='sm'>
                    <CardBody className={Style.cardBody}>
                        <Image
                            src='https://images.unsplash.com/photo-1545861163-d75d945d8dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80'
                            alt='Get your free gift'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='2' className={Style.listText1}>
                            <h1 className={Style.headingList}>Sony Pictures television uses Narvi to streamline creative operations.</h1>
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
            </div>
        </div>
    )
}

export default Resources