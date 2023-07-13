import React from 'react';
import { chakra, Image, useToast } from '@chakra-ui/react'
import './banner.css'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';

const Banner = ({ el, getGenreString }) => {
    let toast = useToast()
    return (
        <chakra.div maxWidth='1200px'>
            <chakra.div flexDirection={['column', 'row', 'row']} className="movie-details">
                <Image
                    className='banner'
                    src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                    alt={el.title}
                    w={'300px'}
                />
                <div className="movie-info">
                    <h2 className="title">{el.title}</h2>
                    <p className="overview">{el.overview}</p>
                    <p className="release-date">Release Date: {el.release_date}</p>
                    <p className="genre">Genre: {getGenreString(el.genre_ids)}</p>
                    <div className="rating" style={{ height: '50px', width: '50px', marginBottom: '10px' }}>
                        <CircularProgressbar
                            value={el.vote_average * 10}
                            text={`${el.vote_average}`}
                            styles={buildStyles({
                                rotation: 0.25,
                                textSize: '30px',
                                pathTransitionDuration: '0.5',
                                pathColor: '#3EB489',
                            })}
                        />
                    </div>
                    <button className="play-now-button" onClick={() => {
                        toast({
                            title: 'Movie is Playing',
                            status: 'success',
                            duration: '3000',
                            isCloseble: true,
                            variant: 'top-accent',
                            position: 'top'
                        })
                    }}>
                        Play Now
                    </button>
                </div>
            </chakra.div>



        </chakra.div>
    );
}

export default Banner;
