
const defaultState = {
    boards: [{id:1, title:'ON-HOLD',items:[{id: 1, title: 'hbdhjjdj'}]},
        {id:2, title:'IN-PROGRESS',items:[{id: 1, title: 'fhvfhvjvf'},{id: 2, title: 'fjj'}]},
        {id:3, title:'NEEDS-REVIEW',items:[{id: 1, title: 'max xyi'}]},
        {id:4, title:'APPROVED',items:[{id: 1, title: 'fhfhf'}]}
    ],
    currentBoard: null,
    currentItem: null,

}


export const actionName = {
    SET_BOARDS: "SET_BOARDS",
    SET_CURRENT_BOARD: "SET_CURRENT_BOARD",
    SET_CURRENT_ITEM: "SET_CURRENT_ITEM",
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionName.SET_BOARDS:
            return {
                ...state,
                boards: action.payload
            }
        case actionName.SET_CURRENT_BOARD:
            return {
                ...state,
                currentBoard: action.payload
            }
        case actionName.SET_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload
            }
        default:
            return state
    }

}
export {reducer}
export const getNewBoards = (payload) => ({type: actionName.SET_BOARDS, payload})
export const setCurrentBoard = (payload) => ({type: actionName.SET_CURRENT_BOARD, payload})
export const setCurrentItem = (payload) => ({type: actionName.SET_CURRENT_ITEM, payload})
