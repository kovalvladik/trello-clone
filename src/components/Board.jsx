import React from 'react';
import Item from "./Item";
import {getNewBoards, setCurrentBoard, setCurrentItem} from "../redux/Reducer";
import {useDispatch, useSelector} from "react-redux";


const Board = (props) => {
        const {
            board,
            boards,
        } = props

        const currentBoard = useSelector(state => state.currentBoard)
        const currentItem = useSelector(state => state.currentItem)
        const dispatch = useDispatch()

        function dragOverHandler(e) {
            e.preventDefault()
            if (e.target.className === 'item') {
                e.target.style.boxShadow = '0 4px 3px gray'
            }
        }

        function dragLeaveHandler(e) {
            e.target.style.boxShadow = 'none'
        }

        function dragStartHandler(e, board, item) {
            dispatch(setCurrentBoard(board))
            dispatch(setCurrentItem(item))
        }

        function dragEndHandler(e) {
            e.target.style.boxShadow = 'none'
        }

        function dropHandler(e, board, item) {
            e.preventDefault()
            const currentIndex = currentBoard.items.indexOf(currentItem)
            currentBoard.items.splice(currentIndex, 1)
            const dropIndex = board.items.indexOf(item)
            board.items.splice(dropIndex + 1, 0, currentItem)
            dispatch(getNewBoards((boards.map(b => {
                if (b.id === board.id) {
                    return board
                }
                if (b.id === currentBoard.id) {
                    return currentBoard
                }
                return b
            }))))
        }

        function dropCardHandler(event, board) {
            if (event.target.className !== "item") {
                board.items.push(currentItem)
                const currentIndex = currentBoard.items.indexOf(currentItem)
                currentBoard.items.splice(currentIndex, 1)
                dispatch(getNewBoards((boards.map(b => {
                    if (b.id === board.id) {
                        return board
                    }
                    if (b.id === currentBoard.id) {
                        return currentBoard
                    }
                    return b
                }))))

            }

        }

        return (
            <div className='board'
                 onDragOver={(event) => dragOverHandler(event)}
                 onDrop={event => dropCardHandler(event, board)}


            >
                <div className='board__title'>{board.title}//{board.items.length}</div>
                {board.items.map(item =>
                    <Item dragOverHandler={dragOverHandler}
                          dragLeaveHandler={dragLeaveHandler}
                          dragStartHandler={dragStartHandler}
                          board={board}
                          item={item}
                          dragEndHandler={dragEndHandler}
                          dropHandler={dropHandler}
                    />
                )}
            </div>
        );
    }
;

export default Board;