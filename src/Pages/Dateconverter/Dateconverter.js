import React, { useState } from 'react';
import Moment from 'react-moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Dateconverter.css'
import moment from 'moment';

const Dateconverter = () => {
    const [fromDate, setFromDate] = useState(null);
    const [toDate, setToDate] = useState(null);
    const [duration, setDuration] = useState("");
  
    const handlefromdate = (date) => {
      setFromDate(date);
    };
  
    const handleDurationChange = (event) => {
      const enteredDuration = parseInt(event.target.value);
      setDuration(enteredDuration);
  
      if (!isNaN(enteredDuration) && fromDate) {
        const calculatedToDate = moment(fromDate)
          .add(enteredDuration, 'days')
          .toDate();
        setToDate(calculatedToDate);
      } else {
        setToDate(null);
      }
    };
  
    return (
      <div className='Container'>
          <div className="containerbox">
            <h1>Date Calculator</h1>
        <DatePicker
          selected={fromDate}
          onChange={handlefromdate}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd HH:mm"
          placeholderText="From Date"
          id="fromdate"
        />
        <br/>
        <br/>
        <input
          type="text"
          value={duration}
          onChange={handleDurationChange}
          placeholder="Duration"
        />
        <br/>
        <br/>
        <DatePicker
          selected={toDate}
          onChange={() => {}}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="yyyy-MM-dd HH:mm"
          readOnly
          placeholderText="To Date"
        />
  
        {toDate && <Moment format="yyyy-MM-dddd HH:mm">{toDate}</Moment>}
      </div>
      </div>
    );
  };
  export default Dateconverter