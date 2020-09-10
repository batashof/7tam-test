import React from 'react';
import './box.scss';

const Box = ({className, children, classNameFilter}) => {
    return (
        <div className={`box ${className}`}>
            {children}

            <div className={`box__filter ${classNameFilter}`}/>
            <div className="box__dot box__dot_lb"/>
            <div className="box__dot box__dot_rb"/>
            <div className="box__dot box__dot_rt"/>
            <div className="box__dot box__dot_lt"/>

        </div>
    )
};


export default Box;