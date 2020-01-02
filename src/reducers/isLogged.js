const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            //this means the opposite of true because is the opposite of default state in this case
            //is false 
            return !state;
        default:
            return state
    }
};
export default loggedReducer;