import React from 'react';

const Button = ({name}) => {
    return (
        <div className='flex justify-center py-4'>
            <button className='btn'>{name}</button>
        </div>
    );
};

export default Button;