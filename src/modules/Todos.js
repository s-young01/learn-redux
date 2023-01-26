// 액션 타입 선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODO ='todos/TOGGLE_TODO';

// 액션 생성 함수
let nextId = 1;
export const addTodo = (text) => ({
    type: ADD_TODO,
    todo: {
        id: nextId++, // 새 항목 추가할 때, nextId의 값을 1씩 더해줌
        text: text
    }
})
export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    id: id
})

// 초기 상태 값 (초기 상태 값은 배열, 객체, 원시타입 등 아무거나 다 됨)
const initialState = [
    // {
    //     id: 1,
    //     text: '할 일1',
    //     done: false
    // }
]

// 리듀서 함수 
export default function todos(state=initialState, action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                action.todo
            ]
        case TOGGLE_TODO:
            // 아이디가 일치하면 done값을 반전, 일치하지 않으면 그대로 둠
            return state.map(todo => todo.id === action.id ? 
                {...todo, done: !todo.done} : todo)
        default:
            return state;
    }
}