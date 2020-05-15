import React, {} from 'react'
import classNames from 'classnames/bind'
import Select from 'react-select'
import DatePicker from "react-datepicker"
import moment from 'moment'

import _capitalize from 'lodash/capitalize'
import "react-datepicker/dist/react-datepicker.css"

import {useFormContext} from './form.component'

const getClassNames = (id, horizontal, size, layoutStr, {
    containerClassName, 
    labelClassName, 
    inputContainerClassName, 
    inputClassName
}) => {
    const layout = layoutStr.split('-')

    if(typeof id === 'string' || id === undefined) {
        return [{
            containerClassName: classNames('form-group', {
                row: horizontal
            }, containerClassName), 
            labelClassName: classNames({
                [`col-${size}-${layout[0]}`]: horizontal,
                'col-form-label': horizontal, 
            }, labelClassName), 
            inputContainerClassName: classNames({
                [`col-${size}-${layout[1]}`]: horizontal,
            }, 'd-flex', 'align-items-center', inputContainerClassName), 
            inputClassName: classNames('form-control', {

            }, inputClassName), 
        }]
    }
    else {
        return id.map((n, i) => getClassNames(n, horizontal, size[i], layout[i]))
    }
}

/*
if FormInput is not being used or wrapped within a Form component, 
please porvide your own 
    value, 
    onChange
props, or else, it will take wrong value and update a upper stream Form Component

<Form>
    <FormInput id = 'xx'/>

    // Input that is not relevant with the form
    <FormInput id = 'yy' value = 'zz' onChange = {}/>
</Form>

*/

const FormInput = ({
        id, 
        label = _capitalize(id), 
        type = 'text', 
        onChange, 
        component, 
        componentProps, 
        horizontal, 
        size, 
        layout,
        value: propsValue, 
        ...props
    }) => {
        const [value, updateValue, formHorizontal, formSize, formLayout] = useFormContext(id)
        const [{containerClassName, labelClassName, inputContainerClassName, inputClassName}] = getClassNames(id, formHorizontal || horizontal, formSize || size, formLayout || layout, props)
        
        const handleChange = onChange || (e => updateValue(e.target.value))

        const Input = component ? 
            React.createElement(component, {id, value, updateValue, ...componentProps}) :
            <input 
                className = {inputClassName}
                id = {id} 
                type = {type} 
                value = {value}
                onChange = {handleChange} 
                {...props}
            />

        return (
            <div className = {containerClassName}>
                <label htmlFor = {id} className = {labelClassName}>{label}</label>

                {formHorizontal || horizontal ? (
                    <div className = {inputContainerClassName}>
                        {Input}
                    </div>
                ) : Input}
            </div>
        )
}

export const normalizeOptions = (options) => {
    return options.map(opt => opt)
}

export const normalizeValue = (value, options) => {
    const opts = options.find(opt => opt.value === value)
    
    return opts[0] ? opts[0] : null
}

//uncontrolled component (but can be controlled)
export const SelectInput = (props) => {
    const [value, updateValue] = useFormContext(props.id)
 
    const onChange = props.onChange || ((option, action) => {
        updateValue(
            // props.getOptionValue ?           
            // props.getOptionValue(option) :
            // option.value
            option
        )
    })

    return <Select value={value} onChange = {onChange} {...props}/>
}

export const toDateString = (date, format) => moment(date).format('DD/MM/YYYY', format)

export const DateInput = ({value, updateValue, ...props}) => {
    // const [value, updateValue] = useFormContext(props.id) 
    // const handleChange = onChange || ((date) => {
    //     updateValue(date)
    // })
console.log(value)
    return (
        <DatePicker
            selected = {value}
            onChange = {updateValue}
            {...props} 
        />
    )
}

export default FormInput