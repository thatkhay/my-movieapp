import React from 'react';
import Header from '../component/Header';
import Moviebody from '../component/Moviebody';
import Footer from '../component/Footer';
import '../App.css';

function Mypage({ movies, search, setSearch, errorMessage, loadMoreMovies, totalPages, currentPage }) {
  return (
    <div className='myPage'>
      <Header />
      <Moviebody className="movieBody" movies={movies} search={search} setSearch={setSearch} errorMessage={errorMessage} loadMoreMovies={loadMoreMovies} totalPages={totalPages} currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default Mypage;
