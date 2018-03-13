const defaultState = {
    email:"",
    password:"",
    userType:"buyer",
    user: {id: "5aa311e7d46de5ee2046a1b1"},
    redirect: false,
    error: false


};

export default function loginReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {

        case "LOGIN_INPUT_CHANGE":{
          return{
                ...state,
                ...payload

            }

        }

        case "LOGIN_FULFILLED": {
            return {
                ...state,
                user: payload,
                error: false,
                redirect: true
            }
        }

        case "LOGIN_REJECTED":{
            console.log("rejected payload", payload)

            var error = state.error;

            return{
                ...state,
                error
            }
        }


        default: {
            return state;
        }
    }
    return state;
};
