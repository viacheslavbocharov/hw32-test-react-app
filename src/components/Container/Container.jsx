import React from 'react'
import { useState } from 'react';
import './Container.css'
import Button from '../Button/Button';

export default function Container() {
    //перенести состояние из отдельных кнопок «выше», в ближайший компонент
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className='container'>
            <h1>Независимо обновляющиеся счётчики</h1>
            <Button />
            <Button />

            <h1>Одновременно обновляющиеся счётчики</h1>
            <Button count={count} onClick={handleClick} />
            <Button count={count} onClick={handleClick} />
        </div>
    )
}
