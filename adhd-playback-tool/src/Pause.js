import React from 'react';
import { Reflection } from './Reflection';
import { Breathing } from './Breathing';
import { Exercises } from './Exercises';
import { MathGame } from './MathGame';
import { Reminder } from './Reminder';
import { BrainDump } from './BrainDump';

export const Pause = () => {
    const pickPause = () => {
        let pages, count
        pages = [<Reflection/>, <Breathing/>, <Exercises/>, <MathGame/>, <Reminder/>, <BrainDump/>];
        count = Math.floor(Math.random() * pages.length);  
        return pages[count];
    }
    return <div>
        {pickPause()}
    </div>
}

