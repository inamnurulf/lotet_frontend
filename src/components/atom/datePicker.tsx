import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DateCalendarProps {
  onDateChange: (date: Date | null) => void;
}

const DateCalendar: React.FC<DateCalendarProps> = ({ onDateChange }) => {
  const [startDate, setStartDate] =  useState<Date | null>(null);

  const handleChange = (date: Date | null) => {
    setStartDate(date);
    onDateChange(date);
  };

  return (
    <div className="border border-gray-300 rounded">
      <DatePicker 
        showIcon
        dateFormat="dd/MM/yyyy"
        selected={startDate} 
        onChange={handleChange} />
    </div>
  );
}

export default DateCalendar;
