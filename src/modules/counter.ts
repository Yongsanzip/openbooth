//action types
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const;

//action creators
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff
});

//state
type CounterState = {
  count: number;
}

const initialState: CounterState = {
  count: 0
};



//type CounterAction =
//  | ReturnType<typeof increase>
//  | ReturnType<typeof decrease>
//  | ReturnType<typeof increaseBy>;

type CounterAction = {
    type: "counter/INCREASE"
} | {
    type: "counter/DECREASE"
} | {
    type: "counter/INCREASE_BY",
    payload: number
}


function counter(state: CounterState = initialState, action: CounterAction) {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
}

export default counter;