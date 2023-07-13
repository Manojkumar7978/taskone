import React, { useContext, useEffect, useState } from 'react';
import { chakra, Center, Button, IconButton, Tooltip } from '@chakra-ui/react';
import axios from 'axios';
import './home.css'
import { MdFavoriteBorder, MdOutlineFavorite } from 'react-icons/md'
import movieContext from '../components/context';

let getData = async (search) => {
    try {
        let url = ""
        if (search == null || search == undefined || search == '') {
            url = 'https://api.themoviedb.org/3/movie/popular?api_key=031a5d42280677df433e92a3649469e7&page=1'
        } else {
            url = `https://api.themoviedb.org/3/search/movie?api_key=031a5d42280677df433e92a3649469e7&page=1&query=${search}`
        }
        let res = await axios.get(url)
        let data = res.data
        return data.results
    } catch (error) {

    }
}

let genreList = [
    {
        id: 28,
        name: "Action"
    },
    {
        id: 12,
        name: "Adventure"
    },
    {
        id: 16,
        name: "Animation"
    },
    {
        id: 35,
        name: "Comedy"
    },
    {
        id: 80,
        name: "Crime"
    },
    {
        id: 99,
        name: "Documentary"
    },
    {
        id: 18,
        name: "Drama"
    },
    {
        id: 10751,
        name: "Family"
    },
    {
        id: 14,
        name: "Fantasy"
    },
    {
        id: 36,
        name: "History"
    },
    {
        id: 27,
        name: "Horror"
    },
    {
        id: 10402,
        name: "Music"
    },
    {
        id: 9648,
        name: "Mystery"
    },
    {
        id: 10749,
        name: "Romance"
    },
    {
        id: 878,
        name: "Science Fiction"
    },
    {
        id: 10770,
        name: "TV Movie"
    },
    {
        id: 53,
        name: "Thriller"
    },
    {
        id: 10752,
        name: "War"
    },
    {
        id: 37,
        name: "Western"
    }
]

function getGenreString(genreIDs) {
    const genreStrings = genreIDs.map((genreID) => {
        const genre = genreList.find((item) => item.id == genreID);
        return genre ? genre.name : '';
    });
    return genreStrings.join(', ');
}

const Home = () => {
    let [data, setData] = useState(null)
    let { search, setSearch } = useContext(movieContext)
    useEffect(() => {
        getData(search)
            .then((res) => {
                setData(res)

            }).catch((err) => {
                console.log(err)
            })
    }, [search])
    return (
        <chakra.div>
            {
                data == null ? <Center><h1 style={{ margin: 'auto' }}>Loading...</h1></Center> :

                    data.length == 0 ? <Center><h1 style={{ margin: 'auto' }}>Loading...</h1></Center> :

                        <div className='cardlist__movies'>
                            {
                                data.map((el, ind) => {
                                    return <div className='card' key={ind}>
                                        <img
                                            className='movie__image'
                                            src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${el.poster_path
                                                }`}
                                            alt={el.title}
                                        />
                                        <div className='flex__card'>
                                            <p className='heading'>{el.title}</p>
                                            <p className='paragraph'>{getGenreString(el.genre_ids)}</p>
                                            <br />
                                        </div>
                                        <chakra.div display='flex' alignItems='center' gap='2' justifyContent='space-between'>
                                            <Button size='sm' colorScheme='yellow' >Add to Watchlist</Button>
                                            <Tooltip label='Add to Favorite'>
                                                <IconButton icon={<MdFavoriteBorder color='red' size={'sm'} />} />
                                            </Tooltip>

                                        </chakra.div>


                                    </div>
                                })
                            }
                        </div>
            }

        </chakra.div>
    );
}

export default Home;
