// 액션타입 만들기
const SET_DIFF = 'counter/SET_DIFF';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

// 액션 생성 함수 만들기 
export const setDiff = (diff) => ({type: SET_DIFF, diff});
export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});

// 초기 상태선언
const initialState = {
    number: 0,
    diff: 1
}

// 리듀서 함수선언
export default function counter(state=initialState, action) {
    switch(action.type) {
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        case INCREMENT:
            return {
                ...state,
                number: state.number + state.diff
            }
        case DECREMENT:
            return {
                ...state,
                number: state.number - state.diff
            }
        default:
            return state;
    }
}