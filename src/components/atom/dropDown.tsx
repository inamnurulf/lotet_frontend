import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'banana', label: 'Banana' },
  { value: 'coffee', label: 'Coffee' },
  { value: 'blueberry', label: 'Blueberry' },
  { value: 'melon', label: 'Melon' },
  { value: 'matcha', label: 'Matcha' },
  { value: 'cheese', label: 'Cheese' }
]

const DropDown = () => (
  <Select 
    isMulti
    name="colors"
    className="basic-multi-select"
    classNamePrefix="select"
    options={options} />
)


export default DropDown;