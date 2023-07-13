import { useState } from 'react';
import {
    useDisclosure,
    ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Modal,
    Image, chakra, Button, Tooltip, IconButton, useToast
} from '@chakra-ui/react'
import Banner from './banner';

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

const Addedcard = ({ el, ind }) => {
    let { isOpen, onClose, onOpen } = useDisclosure()

    return (
        <div className='card' key={ind}>
            <Image
                className='movie__image'
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${el.poster_path
                    }`}
                alt={el.title}
                onClick={onOpen}
                cursor='pointer'
            />
            <Modal size={'full'} isOpen={isOpen} onClose={onClose} >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody bg={'gray.300'}>
                        <Banner el={el} ind={ind} getGenreString={getGenreString} />
                    </ModalBody>
                </ModalContent>

            </Modal>

            <div className='flex__card'>
                <p className='heading'>{el.title}</p>
                <p className='paragraph'>{getGenreString(el.genre_ids)}</p>
                <br />
            </div>



        </div>
    );
}

export default Addedcard;
