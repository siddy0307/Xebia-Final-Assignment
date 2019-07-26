export const HomeReducer = (state,action) => {
    switch(action.type){
        case "ADD":
        state = state + action.payload;
        break;
        case "SUBTRACT":
        state = state - action.payload;
        break;
    }
    return state;
}