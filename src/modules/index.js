// 한 프로젝트에 여러 개의 리듀서가 있을 경우,
// 한 리듀서로 합쳐서 사용한다.
// 그 합쳐진 리듀서를 루트 리듀서라 한다.
// combineReducers() => 리듀서 합치는 함수

import { combineReducers } from "redux";
import counter from "./Counter";
import todos from "./Todos";

const rootReducer = combineReducers({
    counter: counter,
    todos: todos

})

export default rootReducer;