import React, { useState, useRef, useEffect } from 'react'
import Form, { useFormContext } from './react-form/form.component'
import FormInput, { DateInput, SelectInput, toDateString } from './react-form/form-input.component'

import './App.css';

const defaultValue = [{
  name: 'Ben Tang',
  age: 23,
  email: '1@1.com',
  phone: '0933221103',
  schedule: [],
}, {
  name: 'Ada Chiu',
  age: 33,
  email: 'a@a.com',
  phone: '0945231126',
  schedule: [],
}]

function App() {
  const formRef = useRef()
  const [value, setValue] = useState({})
  const [index, setIndex] = useState(0)

  useEffect(() => {
    //simulate get data by API
    setTimeout(() => {
      setValue(defaultValue[0])
    }, 1000)
  }, [setValue, defaultValue])

  useEffect(() => {
    setValue(defaultValue[index])
  }, [index, setValue, defaultValue])

  const handleClick = () => {
    if(index === 0)
      setValue(defaultValue[1])
    if(index === 1)
      setValue(defaultValue[0])

    setIndex(i => {
      if(i === 0) return 1
      if(i === 1) return 0
    })
  }

  const submit = () => {
    const formValue = formRef.current.getValue()
    console.log(formValue)
  }

  return (
    <div className="container-fluid p-5">
      <button className='btn btn-primary btn-sm m-2' onClick={handleClick}>Change Form Default Value Props</button>
      <Form ref={formRef} defaultValue={value} horizontal size='sm' layout='2-10'>
        <FormInput id='name'/>
        <FormInput id='age' type='number'/>
        <FormInput id='phone'/>
        <FormInput id='email'/>
        <FormInput id='schedule' inputContainerClassName='flex-wrap' component={Schedule}/>
        <button className='btn btn-primary btn-sm m-2' onClick={submit}>Submit</button>
      </Form>
    </div>
  );
}

const Schedule = (props) => {
  const [schedule = [], updateValue] = useFormContext('schedule')
  const [type, setType] = useState(null), [date, setDate] = useState(null)

  const addSchedule = () => {
      setType(null)
      setDate(null)
      updateValue(schedule => [...schedule, {type, date}])
      //TODO: sort on actual date
  }

  return (
      <>
        <SelectInput 
          isClearable
          className = 'w-25 mr-3'
          options = {[{value: 'UAT', label: 'UAT'}, {value: 'SIT', label: 'SIT'}]}
          styles = {{
              container: (base, props) => {
                  return {...base, width: '100%'}
              }
          }}
          id = 'type'
          name = 'type'
          value = {type}
          inputId = 'schedule'
          onChange = {setType}
        />
        <DateInput
          wrapperClassName = 'w-50 mr-3'
          className = 'form-control'
          value = {date}
          onChange = {setDate}
        />
        <button className='btn btn-primary btn-sm' onClick={addSchedule} disabled={!type || !date}>Add</button>
        <div className = 'w-100 m-2'> 
          {
            schedule.map((s, i) => (
              <div key={i} className = {`w-75 d-flex border border-primary${i !== 0 ? ' border-top-0' : ''} p-1`}>
                <div className = 'w-25 mr-3'>{s.type.label}</div>
                <div className = 'w-50 mr-3'>{toDateString(s.date)}</div>
              </div>
            ))
          }
        </div>
      </>
  )
} 

export default App;
