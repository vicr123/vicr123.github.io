import React from 'react';

function Container({children, className, style}) {
    return <div className={className} style={style}>
        <div className="container">
            {children}
        </div>
    </div>
}

export default Container;