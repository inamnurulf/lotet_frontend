import React, { useState } from 'react'
import Select from 'react-select'

// interface DropDownProps {
//   onSelectValue: (selectedValues: string[]) => void;
// };

const DropDown = ({ onSelectValue }:any) => {
  const options = [
    { value: 'Electrical Eng.', label: 'Electrical Eng.' },
    { value: 'Information Eng.', label: 'Information Eng.' },
    { value: 'Biomedical Eng.', label: 'Biomedical Eng.' },
    { value: 'Control Systems', label: 'Control Systems' },
    { value: 'Power', label: 'Power' },
    { value: 'Telecommunications', label: 'Telecommunications' },
    { value: 'IOT', label: 'IOT' },
    { value: 'Cyber Security', label: 'Cyber Security' },
    { value: 'Software Dev', label: 'Software Dev' },
    { value: 'Mobile Dev', label: 'Mobile Dev' },
    { value: 'Web Dev', label: 'Web Dev' },
    { value: 'Data Engineer', label: 'Data Engineer' },
    { value: 'Telemedicine', label: 'Telemedicine' },
    { value: 'AI', label: 'AI' },
    { value: 'AR', label: 'AR' },
    { value: 'Robotics', label: 'Robotics' },
    { value: 'Machine Learning', label: 'Machine Learning' },
    { value: 'Genomics', label: 'Genomics' },
    { value: 'Biocybernetics', label: 'Biocybernetics' },
    { value: 'Biomechanics', label: 'Biomechanics' }
  ]

  const [selectedValue, setSelectedValue] =  useState<string[]>([]);
  

  const handleChange =async (e:any) => {
    onSelectValue(e)
    // const data = await setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
    // onSelectValue(selectedValue)
  }

  return (
    <Select 
      isMulti
      isClearable
      name="categories"
      className="basic-multi-select"
      classNamePrefix="select"
      options={options}
      onChange={handleChange}
       />

  );
};

export default DropDown;

  // const handleChange = (e:any) => {
  //   console.log(e.target.value);
  //   setSelected(e.target.value);
  // };


// }: React.FC<DropDownProps> = ({ onSelectChange })

// interface DropDownProps {
//   onSelectValue = 
// };


    //   {selectedValue && <div style={{ marginTop: 20, lineHeight: '25px' }}>
    //   <div><b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}</div>
    // </div>}