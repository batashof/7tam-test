import {get} from "./fetch";

import {getDataLoading, getDataSuccess} from "../store/actions";

export const getData = () => {
    return (dispatch) => {
        dispatch(getDataLoading());
        get("http://localhost:3001/data")
            .then((res) => {
                dispatch(getDataSuccess(res.data));
                return res.data;
            })
    }
};
