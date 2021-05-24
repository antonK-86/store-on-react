const initialState = {
    registrationSuccess = false
}

const registrationRedicer = (state=initialState, action) =>{
     switch (action.type) {
     case "Success":
      return {
        ...state,
        registrationSuccess: true
      };
    default:
      return state;
  }
}

//action
const regAction = ()=>({
    type:"Success"
})

//thunk
export const regThunk = ()=> async (dispatch)=>{
    let response = await Api.regMe();
    

}