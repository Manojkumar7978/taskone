import { useEffect, useState } from 'react';
import Addedcard from '../components/addedcard';
import axios from 'axios';
import '../pages/home.css'





const Favourites = () => {

    let [data, setData] = useState(null)
    useEffect(() => {
        let favdata = JSON.parse(localStorage.getItem('fav-data'))
        let x = favdata.filter((el) => {
            return el.email == localStorage.getItem('email')
        })
        setData(x)
    }, [])
    return (
        <div className='cardlist__movies'>
            {
                data == null ? <></> :

                    data.map((el, ind) => {
                        return <Addedcard el={el} ind={ind} />
                    })

            }


        </div>
    );
}

export default Favourites;
