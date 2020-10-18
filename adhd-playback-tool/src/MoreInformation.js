import React from 'react';
import { NavBar } from './NavBar';
import './styles/MoreInformation.css';

export const MoreInformation = () => {
    return (
        <div className="more">
            <NavBar/>
            <h1>More Information</h1>
             <p>
             As COVID-19 infection rates are increasing globally, most schools have transitioned to online learning. Millions of students have to attend live online classes or watch pre-recorded lectures for several hours a day. As noninteractive as online schooling is, it is even more difficult for those with ADHD.<br/>
             People with ADHD have a hard time watching long lectures online. They need a break every once in a while, to give their brains a rest every so often to avoid burnout. It’s also difficult for them to sit at a desk all day. A student with ADHD explained how, “viewing the lesson in “chunks” — when I’m better able to listen and learn — could be more effective for me. I might need cues from my parents, and I know this service won’t always be possible, but if there’s any way you can arrange it, I know some of us will benefit from a video library of lessons.”<br/>
             To help and support those with ADHD, we have implemented a website that has integrated breaks throughout the lectures. The lecture will pause after predetermined intervals and randomly give the student an activity to bring their focus back to the lecture. These breaks include breathing exercises, math games, physical exercises, or asking to reflect on what they have learned so far. <br/>
            </p>
        </div>

    );
}