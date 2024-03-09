'use client';

import React, { useState } from 'react';
import styles from './RunawayButton.module.css';

const RunawayButton = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });


    // Get parent element's height on component mount
    React.useEffect(() => {
        const parentRect = document.getElementById('parent').getBoundingClientRect();
        setPosition(prevPosition => ({
            x: parentRect.width /2 - 50,
            y: parentRect.height
        }));
    }, []);

    const handleMouseEnter = () => {
        // @ts-ignore
        const parentRect = document.getElementById('parent').getBoundingClientRect();
        const randomX =  Math.random() * (parentRect.width - 200); // Adjust 200 based on button width
        const randomY =  Math.random() * (parentRect.height - 50); // Adjust 50 based on button height
        setPosition({ x: randomX, y: randomY });
        console.log(randomX+ " " + randomY);
    };

    return (
        <div id="parent" className={styles.parent}>
            <button
                className={styles.button}
                style={{ left: position.x, top: position.y }}
                onMouseEnter={handleMouseEnter}
            >
                Dalej
            </button>
        </div>
    );
};

export default RunawayButton;
