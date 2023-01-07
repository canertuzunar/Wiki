import React, { FC } from 'react'
import { Route, RouteProps } from 'react-router-dom'
import { Error } from '..'

const RouteWithError: FC<RouteProps> = (props) => {
    return(
        <Error key={props.location?.pathname}>
            <Route {...props} />
        </Error>
    )
}


export default RouteWithError