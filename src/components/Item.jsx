import React from 'react';

const Item = (props) => {
    const {
        dragOverHandler,
        dragLeaveHandler,
        dragStartHandler,
        board,
        item,
        dragEndHandler,
        dropHandler
    } = props

    return (
        <div className='item'
             onDragOver={(event) => dragOverHandler(event)}
             onDragLeave={(event => dragLeaveHandler(event))}
             onDragStart={event => dragStartHandler(event, board, item)}
             onDragEnd={(event => dragEndHandler(event))}
             onDrop={event => dropHandler(event, board, item)}
             draggable={true}
        > {item.title} </div>
    );
};

export default Item;