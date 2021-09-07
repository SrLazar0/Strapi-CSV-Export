import React, {useState} from 'react';
import { CSVLink, CSVDownload } from 'react-csv/lib';
import { Select } from '@buffetjs/core';
const SelectTableForm = props => {
  const [val, setValue] = useState('first option');
  const options = ['first option', 'second option'];

  const csvData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"]
  ];
 
  return(<>
    {console.log(strapi)}
    <Select
    name="select"
    onChange={({ target: { value } }) => {
      setValue(value);
    }}
    options={options}
    value={val}
    />
     <CSVLink data={csvData} filename={'teste.csv'}>Download me</CSVLink>;
      {/* <CSVDownload data={csvData} target="_blank" />; */}
    </>
  )
}

export default SelectTableForm;