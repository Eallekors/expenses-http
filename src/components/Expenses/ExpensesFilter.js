import React from 'react';
import { useState } from 'react';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
   /* const [selectedYear, setSelectedYear] = useState('2023');
    //console.log(selectedYear)
    const saveExpenseDataHandler= (event) => {
        setSelectedYear(selectedYear)
        event.preventDefault()
        props.onChangeFilter(selectedYear)
    }
    const handleYearChange = (event) => {
        const selectedYearValue = event.target.value;
        console.log('Selected Year:', selectedYearValue);
        setSelectedYear(selectedYearValue);
    }
   
  */
const [selectedYear, setSelectedYear] = useState('2023');

const yearChangeHandler = (event) => {
    const selectedYear = event.target.value;
    setSelectedYear(selectedYear);

    // Call the callback function with the selected year
    props.onChangeFilter(selectedYear);

}; 


return (
    <div className='expenses-filter'>
        <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={selectedYear} onChange={yearChangeHandler}>
                <option value='2023'>2023</option>
                <option value='2024'>2024</option>
                <option value='2025'>2025</option>
            </select>
        </div>
    </div>
);
};

export default ExpensesFilter;