import { useState } from 'react';
import logo from './puipui.gif';

export default function PuiPui() {
    const [position, setPosition] = useState({
        x:0,
        y:0,
    });

    const onPointerMove = (e) => {
        setPosition({
            x: e.clientX,
            y: e.clientY
        });
    }

    return (
        <div
            onPointerMove={onPointerMove}
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
            }}
        >
            <img
                src={logo}
                alt='puipui'

                style={{
                    width: '15%',
                    height: '10%',
                    position: 'absolute',
                    borderRadius: '50%',
                    transform: `translate(${position.x}px, ${position.y}px)`,
                    backgroundColor: 'red',
                    left: -10,
                    top: -10
                }}
            />
        </div>
    )
}