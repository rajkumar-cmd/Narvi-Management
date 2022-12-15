import React from 'react'
import Style from '../Styles/Features.module.css'
import {
    ListItem,
    UnorderedList,
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Divider,
    Center
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'
import { AiOutlineForm,AiOutlineFundProjectionScreen,AiOutlineAreaChart} from "react-icons/ai";
import { HiTemplate } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { BsChatLeftTextFill } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { FaStream } from "react-icons/fa";
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { MdSpaceDashboard } from "react-icons/md";
import { TbSettingsAutomation } from "react-icons/tb";
import { CiMobile3 } from "react-icons/ci";
import { GiCrossedSlashes,GiLinkedRings } from "react-icons/gi";


const Features = () => {
    return (
        <div className={Style.features}>
            <div className={Style.featuresList}>
                <UnorderedList styleType={"none"}>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={MdSpaceDashboard} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Dashboards</h1>
                                <p>Visualize tasks,processes,analytics,and more.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={TbSettingsAutomation} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Automation</h1>
                                <p>Define and trigger automated workflows to eliminate manual efforts.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={CiMobile3} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Mobile & Desktop Apps</h1>
                                <p>Work from anywhere with our robust app experience.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={BsChatLeftTextFill} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Proofing</h1>
                                <p>Streamlined proofing and collaboration in one place.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                </UnorderedList>
            </div>
            <Center height='360px' marginTop={12} marginLeft={2}>
            <Divider orientation='vertical' color={"#7FD957"}/>
            </Center>
            <div className={Style.featuresList}>
                <UnorderedList styleType={"none"}>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={GiCrossedSlashes} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Cross-Tagging</h1>
                                <p>Unparalleled visibility  across multiple work streams.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={FaStream} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Kanban Boards</h1>
                                <p>Instantly view project progress and create customized workflows.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={AiOutlineFundProjectionScreen} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Project Resource Planning</h1>
                                <p>Plan and allocate resources for timely delivery.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={AiOutlineAreaChart} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Gantt Charts</h1>
                                <p>Interactive project scheduling across teams.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                </UnorderedList>
            </div>
            <Center height='360px' marginTop={12} marginLeft={2}>
            <Divider orientation='vertical' color={"#7FD957"}/>
            </Center>
            <div className={Style.featuresList}>
                <UnorderedList styleType={"none"}>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={TiTickOutline} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Approvals</h1>
                                <p>Keep approvers in the loop from start to finish.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={HiTemplate} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Custom Item Types</h1>
                                <p>Tailor work items to fit your specific workplace.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={AiOutlineForm} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Dynamic Request Forms</h1>
                                <p>Custom forms powered by conditional logic.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                    <NavLink to={""}>
                        <ListItem className={Style.listArrange}>
                            <div>
                                <Icon className={Style.listIcon} as={GiLinkedRings} />
                            </div>
                            <div className={Style.listText}>
                                <h1 className={Style.headingList}>Integrations</h1>
                                <p>Over 400 popular apps plus custom integrations.</p>
                            </div>
                        </ListItem>
                    </NavLink>
                </UnorderedList>
            </div>
            <Center height='360px' marginTop={12} marginLeft={2}>
            <Divider orientation='vertical' color={"#7FD957"}/>
            </Center>
            <div className={Style.cardList}>
                <Card maxW='sm'>
                    <CardBody className={Style.cardBody}>
                        <Image
                            src='https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=840&q=80'
                            alt='Get your free gift'
                            borderRadius='lg'
                        />
                        <Stack mt='6' spacing='2' className={Style.listText1}>
                            <h1 className={Style.headingList}>Get your free gift!</h1>
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
            </div>
        </div>
    )
}

export default Features