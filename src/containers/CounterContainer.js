import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increment, decrement, setDiff } from '../modules/Counter';

const CounterContainer = () => {
    // useSelector() : 리덕스 스토어의 상태를 조회하는 hook함수
    const {number, diff} = useSelector(state => state.counter);
    const dispatch = useDispatch();
    // 각 액션들을 디스패치하는 함수
    const onIncrease = () => dispatch(increment());
    const onDecrease = () => dispatch(decrement());
    const onSetDiff = diff => dispatch(setDiff(diff));
    return (
        <Counter number={number} 
        diff={diff}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onSetDiff={onSetDiff}
        />
    );
};

export default CounterContainer;