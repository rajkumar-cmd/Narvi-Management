import React from 'react'
import Style from '../../Styles/Marketing/PowerfulFeatures.module.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel, AspectRatio } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const PowerfulFeatures = () => {
    return (
        <div className={Style.Workmanagement}>
            <div>
                <h1 className={Style.WorkHeading}>Powerful features ready-made for marketing</h1>
                <p className={Style.wholeParaText}>Connect the entire campaign process, from planning to execution. Adjust quickly as needed and optimize every touchpoint with real-time reports and integrations.</p>
            </div>
            <div>
                <Tabs isLazy lazyBehavior size={"lg"} colorScheme={"green"} align={"center"}>
                    <TabList>
                        <Tab><h1 className={Style.TabHeading}>Strategy</h1></Tab>
                        <Tab><h1 className={Style.TabHeading}>Resources</h1></Tab>
                        <Tab><h1 className={Style.TabHeading}>Campaigns</h1></Tab>
                        <Tab><h1 className={Style.TabHeading}>Assets</h1></Tab>
                        <Tab><h1 className={Style.TabHeading}>Marketing results</h1></Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <div className={Style.applyFlex}>
                                <div className={Style.flextextCont}>
                                    <h1 className={Style.wholeHeaderText}>Keep everyone in the loop — internally and externally</h1>
                                    <p className={Style.wholeParaText1}>With Wrike, you can cross-tag teams that need project visibility, offering real-time collaborative planning. Use guest approvals to get internal and external stakeholder feedback on creative assets, marketing strategy, and campaign success metrics.
                                    <br />
                                        <button className={Style.flexSeeMore}>
                                            <h1>Learn more  <ArrowForwardIcon /></h1>
                                        </button>
                                    </p>
                                </div>
                                <div className={Style.flexImage}>
                                    <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=868,dpr=1/tp/storage/uploads/c74799d1-a526-4d1e-8c3c-adc6b0808d56/mrkt-overview-screenshot-planning-2x.png" alt="" />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={Style.applyFlex}>
                                <div className={Style.flextextCont}>
                                    <h1 className={Style.wholeHeaderText}>Easily balance workloads and get to market faster</h1>
                                    <p className={Style.wholeParaText1}>Wrike accelerates time to market, helping you deliver campaigns on time, every time. Gauge capacity, allocate resources, and assign tasks effectively with easy-to-use dependencies and timelines for every workflow.
                                    <br />
                                        <button className={Style.flexSeeMore}>
                                            <h1>Learn more  <ArrowForwardIcon /></h1>
                                        </button>
                                    </p>
                                </div>
                                <div className={Style.flexImage}>
                                    <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=868,dpr=1/tp/storage/uploads/c74799d1-a526-4d1e-8c3c-adc6b0808d56/mrkt-overview-screenshot-workload-2x.png" alt="" />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={Style.applyFlex}>
                                <div className={Style.flextextCont}>
                                    <h1 className={Style.wholeHeaderText}>Kick-off work fast and track progress in real time</h1>
                                    <p className={Style.wholeParaText1}>Launch campaigns in minutes with Wrike. Turn repeatable requests into instant workstreams and generate one-click project plans to hit the ground running. Make your work more accurate, scalable, and efficient so you can deliver rapid results.
                                    <br />
                                        <button className={Style.flexSeeMore}>
                                            <h1>Learn more  <ArrowForwardIcon /></h1>
                                        </button>
                                    </p>
                                </div>
                                <div className={Style.flexImage}>
                                <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=868,dpr=1/tp/storage/uploads/c74799d1-a526-4d1e-8c3c-adc6b0808d56/mrkt-overview-screenshot-gantt-2x.png" alt="" />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={Style.applyFlex}>
                                <div className={Style.flextextCont}>
                                    <h1 className={Style.wholeHeaderText}>Approve creative assets in minutes</h1>
                                    <p className={Style.wholeParaText1}>Wrike is the one-stop platform for creative teams. Design assets in our extension for Adobe Creative Cloud, edit text documents, and share feedback without leaving Wrike. Auto-generate briefs from creative request forms and never miss deadlines.
                                    <br />
                                        <button className={Style.flexSeeMore}>
                                            <h1>Learn more  <ArrowForwardIcon /></h1>
                                        </button>
                                    </p>
                                </div>
                                <div className={Style.flexImage}>
                                <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=868,dpr=1/tp/storage/uploads/c74799d1-a526-4d1e-8c3c-adc6b0808d56/mrkt-overview-screenshot-approval-2x.png" alt="" />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className={Style.applyFlex}>
                                <div className={Style.flextextCont}>
                                    <h1 className={Style.wholeHeaderText}>Access instant insights and analytics</h1>
                                    <p className={Style.wholeParaText1}>Wrike’s seamless integrations with Google Ads, Facebook, and more offer instant visibility into campaign performance. Connect real-time analytics in one dashboard. Dive into individual campaign and channel performance to optimize overall strategy.
                                    <br />
                                        <button className={Style.flexSeeMore}>
                                            <h1>Learn more  <ArrowForwardIcon /></h1>
                                        </button>
                                    </p>
                                </div>
                                <div className={Style.flexImage}>
                                <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=868,dpr=1/tp/storage/uploads/c74799d1-a526-4d1e-8c3c-adc6b0808d56/mrkt-overview-screenshot-report-2x.png" alt="" />
                                </div>
                            </div>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </div>
            <div>
                <button className={Style.flexgetStarted}>
                    <h1>Get started <ArrowForwardIcon /></h1>
                </button>
            </div>
        </div>
    )
}

export default PowerfulFeatures