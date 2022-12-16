import React from 'react'
import Style from '../Styles/Workmanagement.module.css'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'


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
            <Tab><h1 className={Style.TabHeading}>One</h1></Tab>
            <Tab><h1 className={Style.TabHeading}>Two</h1></Tab>
            <Tab><h1 className={Style.TabHeading}>Three</h1></Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  )
}

export default Workmanagement