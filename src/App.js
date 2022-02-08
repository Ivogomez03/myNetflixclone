import React, { useEffect, useState } from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';
import './App.css'
import FeaturedMovie from './components/FeaturedMovie';
import Navbar from './components/navbar';

export default () => {

  const [movieList, setMovieList] = useState([]);
  const [featureData, setFeatureData] = useState([]);
  const [blacknavBar, setBlackNavBar] = useState(false)
  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);
      let originals = list.filter(i => i.slug === 'originals');
      let randomChosen = Math.floor(Math.random() * originals[0].items.results.length - 1);
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, 'tv');
      setFeatureData(chosenInfo);
    }
    loadAll();
  }, []);
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 10) {
        setBlackNavBar(true)
      }
      else {
        setBlackNavBar(false)
      }
    };
    window.addEventListener('scroll', scroll);
    return () => window.removeEventListener('scroll', scroll);
  }, [])
  return (
    <div className='page'>
      <Navbar black={blacknavBar} />
      {featureData &&
        <FeaturedMovie item={featureData} />}
      <section className='lists'>
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer style={{ background: 'rgb(15,15,15)', display: 'grid', width: '100%', height: '150px', gridTemplateRows: '3', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div className='div--footer'><p >Image rights for <span style={{ color: '#e50914' }}>Netflix</span>.</p></div>
        <div className='div--footer'><p>Clon designed and developed by Ivo Gómez Enrico.</p></div>
        <div className='div--footer'><p>Thanks to Bonieky Lacerda for tutorial.</p></div>
      </footer>
    </div>
  )
}

