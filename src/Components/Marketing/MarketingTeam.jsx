import React from 'react'
import Style from "../../Styles/Marketing/MarketingTeam.module.css"
import { ArrowForwardIcon } from '@chakra-ui/icons'
import wave from "../../Images/wave.png"

const TeamWork = () => {
  return (
    <>
      <div className={Style.teamWork}>
        <div>
          <h1 className={Style.wholeHeaderText}>One hub for every marketing team</h1>
          <p className={Style.wholeParaText}>Where leading marketing and creative teams unite to supercharge productivity and deliver results.</p>
        </div>
        <div className={Style.flexBoxes}>
          <div className={Style.flexBox}>
            <img className={Style.flexImage} src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=1/tp/storage/uploads/6ec4e76b-573c-4871-b756-03077a0dc5fe/icp-card-mrkt-campaign-management-simple-200x122.png" alt="" />
            <h1 className={Style.flexHeadingText}>Professional Services</h1>
            <p className={Style.flexParaText}>Are your campaigns agile enough to pivot at the
              pace of the market? Wrike accelerates everything
              with seamless integrations and instant campaign
              analytics so you can adjust quickly to maximize
              your ROI.</p>
            <div>
              <h1 className={Style.flexMore}>Learn More <ArrowForwardIcon /></h1>
            </div>
          </div>
          <div className={Style.flexBox}>
            <img className={Style.flexImage} src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=276,dpr=1/tp/storage/uploads/6ec4e76b-573c-4871-b756-03077a0dc5fe/icp-card-mrkt-creative-simple-200x122.png" alt="" />
            <h1 className={Style.flexHeadingText}>Creative project management</h1>
            <p className={Style.flexParaText}>You focus on the creativity, we'll manage the
              work. Use our Adobe Creative Cloud extension
              or easy editing. Lean on pre-built templates to
              save time, and deliver top-quality, on-brand</p>
            <div>
              <h1 className={Style.flexMore}>Learn More <ArrowForwardIcon /></h1>
            </div>
          </div>
          <div className={Style.flexBox}>
            <img className={Style.flexImage1} src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=276,dpr=1/tp/storage/uploads/6ec4e76b-573c-4871-b756-03077a0dc5fe/icp-card-mrkt-production-simple-200x122.png" alt="" />
            <h1 className={Style.flexHeadingText}>Event management</h1>
            <p className={Style.flexParaText}>Do you feel fully in control before every event?
              You will with Wrike. Get complete visibility for
              seamless execution of all event details, including
              asset creation, logistics, and budget
              ment
              man</p>
            <div>
              <h1 className={Style.flexMore}>Learn More <ArrowForwardIcon /></h1>
            </div>
          </div>
          <div className={Style.flexBox}>
            <img className={Style.flexImage} src="https://web-static.wrike.com/cdn-cgi/image/format=auto,quality=80,width=224,dpr=1/tp/storage/uploads/6ec4e76b-573c-4871-b756-03077a0dc5fe/icp-card-mrkt-resource-management-simple-200x122.png" alt="" />
            <h1 className={Style.flexHeadingText}>Marketing project and resource
              management</h1>
            <p className={Style.flexParaText}>Accelerate speed to market through true
              operational efficiency. Monitor resources in real
              time across all projects, easily see who has
              bandwidth, and quickly shift to achieve on-target
              delivery.</p>
            <div>
              <h1 className={Style.flexMore}>Learn More <ArrowForwardIcon /></h1>
            </div>
          </div>
        </div>
        <button className={Style.flexSeeMore}>
          <h1>Transform your team <ArrowForwardIcon /></h1>
        </button>
      </div>
    </>
  )
}

export default TeamWork