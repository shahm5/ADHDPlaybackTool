import React from 'react';
import './styles/Reflection.css';

export const Reflection = () => {
    return (
        <div>
            <h1>Take a few minutes to reflect on what has been taught so far</h1>
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