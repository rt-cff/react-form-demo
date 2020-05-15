import React, {forwardRef, useImperativeHandle, useContext, useReducer, createContext, useCallback} from 'react'

import _isFunction from 'lodash/isFunction'
import { useEffect } from 'react'

const formReducer = (state, action) => {
    const {defaultValue, key, value, ftn} = action.payload

    switch(action.type) {
        case 'init':
            return {...defaultValue}
        case 'updateValue':
            if(_isFunction(value))
                return {...state, [key]: value(state[key], state)}
            else
                return {...state, [key]: value}

        case 'updateFormValue':
            if(ftn)
                return {...state, value: ftn(state.value)}
            return {...state, value: {...state.value, ...value}}
        default:
            return state
    }
}

export const FormContext = createContext({
    value: {},
    updateValue: {},
    updateFormValue: {}, 
    size: 'sm',
    layout: '2-10', 
    horizontal: false,
})

export const useFormContext = (id) => {
    const {state, updateValue, horizontal, size, layout} = useContext(FormContext)
    const {[id]: value} = state || {} 

    return [
        value, 
        (v) => {
            updateValue(id, v)
        }, 
        horizontal,
        size, 
        layout, 
    ]
}

export const Form = forwardRef(({
    children, 
    defaultValue = {}, 
    horizontal = false, 
    size, 
    layout, 
}, ref) => {
    const [state, dispatch] = useReducer(formReducer, defaultValue)
    const updateValue = useCallback((key, value) => dispatch({
        type: 'updateValue',
        payload: {
            key, value, 
        }
    }), [dispatch])
    const updateFormValue = useCallback((value) => dispatch({
        type: 'updateFormValue',
        payload: {
            value, 
        }
    }), [dispatch])

    useImperativeHandle(ref, () => ({
        getValue: () => ({...state})
    }))

    useEffect(() => {
        dispatch({
            type: 'init',
            payload: {defaultValue}
        })
    }, [defaultValue, dispatch])

    return (
        <FormContext.Provider value = {{state, updateValue, updateFormValue, horizontal, size, layout}}>
            {children}
        </FormContext.Provider>
    )
})

export default Form