import React from 'react';
import { Reflection } from './Reflection';
import { Breathing } from './Breathing';
import { Exercises } from './Exercises';

export const Pause = () => {
    const pickPause = () => {
        let pages, count
        pages = [<Reflection/>, <Breathing/>, <Exercises/>];
        count = Math.floor(Math.random() * pages.length);  
        return pages[count];
        //condition ? true: false
    }
    return <div>
        {pickPause()}
    </div>
}

