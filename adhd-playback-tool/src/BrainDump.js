import React from 'react';
import './styles/BrainDump.css';

export const BrainDump = () => {
    return (
        <div>
            <h1>Take a few minutes to Brain Dump!</h1>
            <form action="//www.html.am/html-codes/textboxes/submitted.cfm">
                <textarea name="myTextBox" cols="50" rows="5">
                    Enter some text...
                </textarea>
                <br />
                <input type="submit" />
            </form>
        </div>

    );
}