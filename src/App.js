import './app.css';
import React  from "react";
import { useSelector} from "react-redux";
import Board from "./components/Board";


export default function App() {
    const boards = useSelector(state => state.boards)

    return (
        <div className="app">
            {boards.map(board =>
                <Board
                       board={board}
                       boards={boards}
                />
            )}
        </div>
    );
}

