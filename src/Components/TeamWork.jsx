import React from 'react'
import Style from "../Styles/TeamWork.module.css"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import wave from "../Images/wave.png"

const TeamWork = () => {
  return (
    <>
      <div className={Style.teamWork}>
        <div>
          <h1 className={Style.wholeHeaderText}>Transform the way your teams work</h1>
          <p className={Style.wholeParaText}>Empower your teams to do the best work of their lives with 360° visibility,</p>
          <p className={Style.wholeParaText}>true cross-departmental collaboration, and powerful automation.</p>
        </div>
        <div className={Style.flexBoxes}>
          <div className={Style.flexBox}>
            <img className={Style.flexImage} src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=1/tp/storage/uploads/f12bf685-64af-4413-a42e-80e58ed088ee/evo-icp-hp-ps-light.png" alt="" />
            <h1 className={Style.flexHeadingText}>Professional Services</h1>
            <p className={Style.flexParaText}>Take service delivery to the next level with Narvi's
              powerful platform. Manage resources, track
              billable hours, and make informed decisions with
              ease.</p>
            <div>
              <h1 className={Style.flexMore}>Learn More <ArrowForwardIcon /></h1>
            </div>
          </div>
          <div className={Style.flexBox}>
            <img className={Style.flexImage} src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=1/tp/storage/uploads/8b283fef-6bd1-4513-8398-228095b64833/evo-icp-hp-marketing-light.png" alt="" />
            <h1 className={Style.flexHeadingText}>Marketing</h1>
            <p className={Style.flexParaText}>Empower your marketing team with customizable
              workflows, leading DAM tools, and dynamic
              reporting to help create high-performing
              campaigns.</p>
            <div>
              <h1 className={Style.flexMore}>Learn More <ArrowForwardIcon /></h1>
            </div>
          </div>
          <div className={Style.flexBox}>
            <img className={Style.flexImage1} src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=276,dpr=1/tp/storage/uploads/4486fa19-a0c3-4f16-8d12-60ddfefec7c8/evo-icp-hp-pm-light.png" alt="" />
            <h1 className={Style.flexHeadingText}>Project Management</h1>
            <p className={Style.flexParaText}>Be the collaborative force that unifies your
              business with improved planning, risk
              management, and automation software to deliver
              better results.</p>
            <div>
              <h1 className={Style.flexMore}>Learn More <ArrowForwardIcon /></h1>
            </div>
          </div>
          <div className={Style.flexBox}>
            <img className={Style.flexImage} src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=1/tp/storage/uploads/0eadfaae-5c62-44fe-a375-cfdaab468ac0/evo-icp-hp-it-light.png" alt="" />
            <h1 className={Style.flexHeadingText}>IT</h1>
            <p className={Style.flexParaText}>Meet workforce and delivery needs by optimizing
              agile IT workflows. Manage strategic initiatives
              and service requests alike in the same place.</p>
            <div>
              <h1 className={Style.flexMore}>Learn More <ArrowForwardIcon /></h1>
            </div>
          </div>
        </div>
        <button className={Style.flexSeeMore}>
          <h1>See all teams <ArrowForwardIcon /></h1>
        </button>
      </div>
      <img className={Style.wave} src={wave} alt="" />
    </>
  )
}

export default TeamWork