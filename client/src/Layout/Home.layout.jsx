import React from 'react'
import CategoryTabs from '../Components/CategoryTabs';

//components
import Navbar from '../Components/Navbar';

function HomeLayout({children}) {
  return (
    <>
    <Navbar/>
    <CategoryTabs/>
    <div className='container mx-auto px-4 lg:px-20'>{children}</div>
    </>
  )
}

export default HomeLayout;