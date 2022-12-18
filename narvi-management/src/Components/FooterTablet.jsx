import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react'
import Style from "../Styles/FooterTablet.module.css"
import { NavLink } from 'react-router-dom'

const FooterTablet = () => {
  return (
    <div className={Style.wholeDiv}>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton className={Style.Text}>
              <Box as="span" flex='1' textAlign='left'>
                Product
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Product tour
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Pricing
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Templates
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Apps & Integrations
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Task management
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Gantt charts
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Narvi Status
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Security
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              CA Notice at Collection
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              API
            </NavLink>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className={Style.Text}>
              <Box as="span" flex='1' textAlign='left'>
                Solutions
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              All Teams
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Marketing
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Creative
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Project Management
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Product Development
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Business Operations
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Professional Services
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Students
            </NavLink>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className={Style.Text}>
              <Box as="span" flex='1' textAlign='left'>
                Resources
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Help Center
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Community
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Creative
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Webinars
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Interactive Training
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Support
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Google project management tools
            </NavLink>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className={Style.Text}>
              <Box as="span" flex='1' textAlign='left'>
                Company
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              About Us
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Careers
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Our Customers
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Blog
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Events
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Newsroom
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Partner Program
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              User Conference
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
              Contact Us
            </NavLink>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton className={Style.Text}>
              <Box as="span" flex='1' textAlign='left'>
              Guides
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
            Project Management Guide
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
            Professional Services Guide
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
            Kanban Guide
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
            Agile Guide
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
            Remote Work Guide
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
            Return to Work Guide
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
            Marketing Project Management Guide
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
            Scrum Guide
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
            Product Management Guide
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
            Digital Marketing Guide
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
            Go-to-Market Guide
            </NavLink>
          </AccordionPanel>
          <AccordionPanel pb={0} className={Style.innerText}>
            <NavLink to="">
            Collaborative Work Management Guide
            </NavLink>
          </AccordionPanel>
        </AccordionItem>

      </Accordion>
      
    </div>
  )
}

export default FooterTablet