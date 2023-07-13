import React, { useContext } from 'react';
import movieContext from './context';
import { Navigate, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

const Private = ({ children }) => {
    let { user } = useContext(movieContext)
    let toast = useToast()



    return (
        <div>
            {
                user == null ? <>
                    {
                        toast({
                            title: 'Login to your Account!',
                            status: 'info',
                            duration: '3000',
                            isCloseble: true,
                            variant: 'top-accent',
                            position: 'top-right'
                        })
                    }
                    <Navigate to={'/'} />
                </>

                    : children
            }

        </div>
    );
}

export default Private;
