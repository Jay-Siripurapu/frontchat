import React from 'react'

function Square({ value, onClick }) {
    const style = {
        fontSize: '30px',
        backgroundColor: 'lightblue',
        border: '2px solid #e6ecff',
        fontWeight: '800',
        cursor: 'pointer',
        outline: 'none'
    }


    style.color = value === 'X' ? '#ff0000' : 'darkblue'

    return (
        <button style={style} onClick={onClick}>{value}</button>
    )

}

export default Square