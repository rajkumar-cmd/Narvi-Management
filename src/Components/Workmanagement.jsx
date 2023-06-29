import React from 'react'
import Style from '../Styles/Workmanagement.module.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel, AspectRatio } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Workmanagement = () => {
  return (
    <div className={Style.Workmanagement}>
      <div>
        <h1 className={Style.WorkHeading}>The Most Versatile Work Management Platform™</h1>
        <p className={Style.wholeParaText}>Maximize your team's performance, accelerate growth, and improve customer experience with Wrike's robust and extensive features.</p>
      </div>
      <div>
        <Tabs isLazy lazyBehavior size={"lg"} colorScheme={"green"} align={"center"}>
          <TabList>
            <Tab><h1 className={Style.TabHeading}>Dashboards</h1></Tab>
            <Tab><h1 className={Style.TabHeading}>Cross-tagging</h1></Tab>
            <Tab><h1 className={Style.TabHeading}>Integration</h1></Tab>
            <Tab><h1 className={Style.TabHeading}>Proofing</h1></Tab>
            <Tab><h1 className={Style.TabHeading}>Gantt charts</h1></Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <div className={Style.applyFlex}>
                <div className={Style.flextextCont}>
                  <h1 className={Style.wholeHeaderText}>Customizable dashboards</h1>
                  <p className={Style.wholeParaText1}>Never miss a task with personalized dashboards. See what your team is working on in a comprehensive view and share
                    progress across the organization.</p>
                  <p className={Style.wholeParaText1}>Get a detailed overview of workloads, pin important to-dos, follow important tasks, and choose exactly what you want to
                    see to keep a close eye on progress. <br />
                    <button className={Style.flexSeeMore}>
                      <h1>Learn more  <ArrowForwardIcon /></h1>
                    </button>
                  </p>
                </div>
                <div className={Style.flexImage}>
                  <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=868,dpr=1/tp/storage/uploads/ef0e5d1a-124a-4508-80f6-950b3b129a48/rebrand-screenshot-dashboards-resized-2x.png" alt="" />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={Style.applyFlex}>
                <div className={Style.flextextCont}>
                  <h1 className={Style.wholeHeaderText}>Collaborative cross-tagging</h1>
                  <p className={Style.wholeParaText1}>Cross-tagging allows teams to gain visibility into tasks, folders, milestones, phases, and entire projects across multiple work streams and organizational structures.</p>
                  <p className={Style.wholeParaText1}>Tasks, folders, and projects can now live in multiple places without being duplicated. This means you spend less time managing documentation, more time creating great work. <br />
                    <button className={Style.flexSeeMore}>
                      <h1>Learn more  <ArrowForwardIcon /></h1>
                    </button>
                  </p>
                </div>
                <div className={Style.flexImage}>
                  <img src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=656,dpr=1/tp/storage/uploads/772ccef9-5cc8-498d-81d3-c4dae398dfb3/product-screenshot-cross-tagging-holiday-campaign.png" alt="" />
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={Style.applyFlex}>
                <div className={Style.flextextCont}>
                  <h1 className={Style.wholeHeaderText}>Customizable dashboards</h1>
                  <p className={Style.wholeParaText1}>Never miss a task with personalized dashboards. See what your team is working on in a comprehensive view and share
                    progress across the organization.</p>
                  <p className={Style.wholeParaText1}>Get a detailed overview of workloads, pin important to-dos, follow important tasks, and choose exactly what you want to
                    see to keep a close eye on progress. <br />
                    <button className={Style.flexSeeMore}>
                      <h1>Learn more  <ArrowForwardIcon /></h1>
                    </button>
                  </p>
                </div>
                <div className={Style.flexImage}>
                  <video controls width="100%" autoPlay loop>
                    <source src="https://cdn.wrike.com/video/LP_Animation_Integrations_1X.mp4" type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={Style.applyFlex}>
                <div className={Style.flextextCont}>
                  <h1 className={Style.wholeHeaderText}>Streamlined proofing software</h1>
                  <p className={Style.wholeParaText1}>Organize your feedback, files, and approvals all in one place with Wrike’s proofing feature. Automatically notify approvers when documents are ready to view.</p>
                  <p className={Style.wholeParaText1}>Work with external collaborators and accelerate publishing with DAM integrations. With our proofing capabilities, you can even add comments directly to assets. <br />
                    <button className={Style.flexSeeMore}>
                      <h1>Learn more  <ArrowForwardIcon /></h1>
                    </button>
                  </p>
                </div>
                <div className={Style.flexImage}>
                  <video controls width="100%" autoPlay loop>
                    <source src="https://cdn.wrike.com/video/LP_Animation_Proofing.mp4" type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                  </video>
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className={Style.applyFlex}>
                <div className={Style.flextextCont}>
                  <h1 className={Style.wholeHeaderText}>Easy-to-Use Gantt charts</h1>
                  <p className={Style.wholeParaText1}>See the big picture of your project’s progress with a complete view of work scope and dependencies using our industry-leading Gantt charts.</p>
                  <p className={Style.wholeParaText1}>Control multiple projects from a single platform and update timelines with our seamless drag-and-drop functionality. Collaborate with teams in real time so nobody misses a step. <br />
                    <button className={Style.flexSeeMore}>
                      <h1>Learn more  <ArrowForwardIcon /></h1>
                    </button>
                  </p>
                </div>
                <div className={Style.flexImage}>
                  <video controls width="100%" autoPlay loop>
                    <source src="https://cdn.wrike.com/video/LP_Animation_Gantt-Chart.mp4" type="video/mp4" />
                    Sorry, your browser doesn't support embedded videos.
                  </video>
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

export default Workmanagement