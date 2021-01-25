import React from 'react';
import {Route} from 'react-router-dom';

const RouteContainer = (props:any) => {
    const {...otherProps} = props
    return(
        <Route {...otherProps} />
    )
}

export default RouteContainer;
