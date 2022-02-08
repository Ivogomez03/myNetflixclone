import React, { useState } from "react";
import './MovieRow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
export default ({ title, items }) => {
    const [scrollX, setScrollX] = useState(0);
    const [opacityLeft, setOpacityLeft] = useState()
    const handleLeftArrow = () => {
        let x = scrollX + Math.round(window.innerWidth / 2);
        if (x > 0) {
            x = 0;
        }
        setScrollX(x)
    };
    const handleRightArrow = () => {
        let x = scrollX - Math.round(window.innerWidth / 2);
        let listW = items.results.length * 150;
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrollX(x)
    };
    const opaLeft = () => {
        scrollX < 0 ? setOpacityLeft(1) : setOpacityLeft(0)
    }
    const opaLeave = () => {
        setOpacityLeft(0)
    }


    return <div className="movieRow" onMouseOver={opaLeft} onMouseLeave={opaLeave}>
        <h2>{title}</h2>
        <div className="arrowLeft" style={{ fontSize: '40px', opacity: opacityLeft }} onClick={handleLeftArrow}><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div className="arrowRight" style={{ fontSize: '40px' }} onClick={handleRightArrow}><FontAwesomeIcon icon={faChevronRight} /></div>
        <div className="movieRow--listarea">
            <div className="movieRow--list" style={{ marginLeft: scrollX, width: items.results.length * 150, transition: '1s' }} >
                {items.results.length > 0 && items.results.map((item, key) => {
                    return <div key={key} className="movieRow--item">
                        <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                    </div>
                })}
            </div>

        </div>
    </div>
}