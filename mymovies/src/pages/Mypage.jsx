import React from 'react'
import Header from '../component/Header'
import Moviebody from '../component/Moviebody'
import Footer from '../component/Footer'

function Mypage() {
  return (
    <div className='myPage'>
        <Header   />
        <Moviebody className="movieBody" />
        <Footer  />
    </div>
  )
}

export default Mypage