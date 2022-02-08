import React from 'react';
import './FeaturedMovie.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import Navbar from './navbar';
export default ({ item }) => {
    console.log(item)
    let firstYear = new Date(item.first_air_date);
    let genders = [];
    for (let i in item.genres) {
        genders.push(item.genres[i].name)
    }
    return <div>
        <Navbar />
        <section className='feature' style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
        }}>
            <div className='featured--vertical'>
                <div className='feature--all'>
                    <div className='featured--name'>{item.original_name}</div>
                    <div className='featured--info'>
                        <div className='featured--points'>{item.vote_average} points</div>
                        <div className='featured--year'>{firstYear.getFullYear()}</div>
                        <div className='featured--seasons'>{item.number_of_seasons} season{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    </div>
                    <div className='featured--description'>{item.overview}</div>
                    <div className='featured--buttons'>
                        <button className='featured--btn-play'><FontAwesomeIcon icon={faPlay} style={{ marginRight: '10px' }} /> Play</button>
                        <button className='featured--btn-info'><FontAwesomeIcon icon={faInfo} style={{ border: '2px solid white', fontSize: '25px', padding: '4px', borderRadius: '100%', width: '25px', marginRight: '10px' }} />More info</button>
                    </div>
                    <div className='featured--genders'><strong>Genders: </strong>{genders.join(', ')}.</div>
                </div>
            </div>
        </section>
    </div>
};

