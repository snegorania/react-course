import React from 'react';

import './Card.css';

const Card = ({className, children}) => {
    const classNames = "card " + className;
    return (
        <div className={classNames}>{children}</div>
    )
}

export default Card;