import React from 'react';
import {Animation, Beer, Loader} from './Loading.style.js'
function Loading() {
    return (
        <div>
            <Animation>
                <Beer>
                    <img src="https://image.flaticon.com/icons/png/512/2884/2884828.png" class="beer"/>
                </Beer>
                    <p>LOADING...</p>
                </Animation>
                <Loader>
                    <div></div>
                    <div></div>
                </Loader>
            </div>
            )
};

export default Loading;