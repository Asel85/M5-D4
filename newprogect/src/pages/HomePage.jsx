import React from 'react'
import MyNav from '../components/MyNav';
import Welcome from '../components/Welcome';
import Carousello from '../components/Carousello';
import LatestRelease from '../components/LatestRelease';

const HomePage = () => {
  return (
    <>
    <MyNav/>
    <Welcome/>
    <Carousello/>
    <LatestRelease/>
     </>
  )
}

export default HomePage
