import React from 'react';
import Header from '../component/Header';
import Moviebody from '../component/Moviebody';
import Footer from '../component/Footer';

function Mypage({ movies, search, setSearch, errorMessage}) {
  return (
    <div className='myPage'>
      <Header />
      <Moviebody className="movieBody" movies={movies} search={search} setSearch={setSearch} errorMessage={errorMessage} />
      <Footer />
    </div>
  );
}

export default Mypage;
