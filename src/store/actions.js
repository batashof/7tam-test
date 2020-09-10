export const GET_DATA_LOADING = 'GET_DATA_LOADING';
export const GET_DATA_SUCCESS = 'GET_DATA_SUCCESS';
export const ADD_TO_CART = 'ADD_TO_CART';


export const getDataLoading = () => {
    return {
        type: GET_DATA_LOADING
    }
};
export const getDataSuccess = (data) => {
    return {
        type: GET_DATA_SUCCESS,
        payload: data
    }
};

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
};


