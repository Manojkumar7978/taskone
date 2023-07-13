import React, { useContext, useEffect, useState } from 'react';
import {
    chakra, Center, Button, IconButton, Image, Tooltip,
} from '@chakra-ui/react';
import axios from 'axios';
import './home.css'
import movieContext from '../components/context';
import Card from '../components/card';

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


                                    return <Card el={el} ind={ind} />
                                })
                            }
                        </div>
            }

        </chakra.div>
    );
}

export default Home;
