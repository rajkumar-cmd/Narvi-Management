import React from 'react'
import Style from "../Styles/TrustedBy.module.css"

const TrustedBy = () => {
  return (
    <div className={Style.trusted}>
        <div className={Style.img}>
            <img src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-google.svg" alt="Google" />
            <img src="https://web-static.wrike.com/tp/storage/uploads/17e81db2-0802-47a7-8037-8cb11d166299/1440-logoroll-logo-syneos.svg" alt="Syneos" />
            <img src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-lyft.svg" alt="lyft" />
            <img src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-siemens.svg" alt="Siemens" />
            <img src="https://web-static.wrike.com/tp/storage/uploads/473c0f49-59e8-4422-89d7-184c44f362cf/1440-logoroll-logo-nickelodeon.svg" alt="Nickelodeon" />
            <img src="https://web-static.wrike.com/tp/storage/uploads/3b19367a-9020-408b-8af7-5e89773b8d4b/1440-logoroll-logo-oglivy.svg" alt="Ogilvy" />
            <img src="https://web-static.wrike.com/tp/storage/uploads/1440-logoroll-logo-snowflake.svg" alt="Slowflake" />
        </div>
        <div>
            <p className={Style.text}>TRUSTED BY 20,000+ ORGANIZATIONS WORLDWIDE</p>
        </div>
    </div>
  )
}

export default TrustedBy