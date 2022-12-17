import React from 'react'

// import TopHeader from "../Components/TopHeader";
import TopBanner from "../Components/TopBanner";
import TrustedBy from "../Components/TrustedBy";
import TeamWork from '../Components/TeamWork';
import Gift from '../Components/Gift';
import Workmanagement from '../Components/Workmanagement';
import Try from '../Components/Try';

const Home = () => {
  return (
    <div>
      <TopBanner/>
      <TrustedBy/>
      <TeamWork/>
      <Gift/>
      <Workmanagement/>
      <Try/>
    </div>
  )
}

export default Home