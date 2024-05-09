import { useState } from 'react';
import './Button.css';

function Button({ count, onClick }) {
    // Если count или onClick не определены, используем useState и handleClick
    const [localCount, setLocalCount] = useState(0);
    const handleClick = () => {
        setLocalCount(localCount + 1);
    };

    // Используем count и onClick, если они определены
    const handleClickExternal = () => {
        if (onClick) {
            onClick();
        } else {
            handleClick();
        }
    };

    return (
        <button onClick={handleClickExternal}>
            Кликнули {count || localCount} раз
        </button>
    );
}

export default Button;