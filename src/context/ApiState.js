import React, { useReducer } from 'react';
import ApiContext from './ApiContext';
import ApiReducer from './ApiReducer';
import axiosClient from '../config/axios';
import { GET_INSURANCE, SET_LOADING } from '../actions';
import { toast } from 'react-toastify';

const ApiState = props => {
    const initialState = {
        loading: false,
        data: null
    }

    const [state, dispatch] = useReducer(ApiReducer, initialState);

    const getInsurance = async insuranceId => {
        try {
            setLoading(true);
            const response = await axiosClient.get(`/interview/insurance/${insuranceId}`)
            
            dispatch({
                type: GET_INSURANCE,
                payload: response.data.insurance
            });
        } catch (error) {
            setLoading(false);
            toast.error('❌ Error al intentar obtener la información');
        }
    }

    const setLoading = loading => {
        dispatch({
            type: SET_LOADING,
            payload: loading
        });
    }

    return (
        <ApiContext.Provider
            value={{
                loading: state.loading,
                data: state.data,
                getInsurance
            }}
        >
            {props.children}
        </ApiContext.Provider>
    );
}

export default ApiState;