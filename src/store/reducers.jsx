import {
    GET_DATA_LOADING,
    GET_DATA_SUCCESS,
    ADD_TO_CART
} from "./actions";
import React from "react"
import {ReactComponent as Star} from '../assets/icons/star.svg';
import {ReactComponent as Arrow} from '../assets/icons/green-arrow.svg';

const initialState = {
    pending: true,
    data: [],
    cart: [],
    itemsInCartNumber: 0,
};

const styleData = (data) => {
    let newData = [];

    data.map((item) => {
            item.profit = <div><span style={{color: "#00A651"}}>{item.profit}</span> / day</div>;
            item.price = <div style={{color: "white"}}>{item.priceFrom}$ - {item.priceTo}$</div>;
            delete item.priceFrom;
            delete item.priceTo;
            newData.push({"star": <Star className="star"/>, "arrow": <Arrow className="arrow"/>, ...item});
        return newData;
        }
    );
    return newData;
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_LOADING:
            return {
                ...state,
                roomsPending: true
            };
        case GET_DATA_SUCCESS:

            return {
                ...state,
                pending: false,
                data: styleData(action.payload)
            };

        case ADD_TO_CART:
            const addedItem = state.cart.find((item) => item.id === action.payload.id);
            return addedItem ? {...state} : {
                ...state,
                cart: [...state.cart, action.payload],
                itemsInCartNumber: state.itemsInCartNumber + 1
            };

        default:
            return state;
    }
};

