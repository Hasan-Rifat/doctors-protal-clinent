import React, { useState } from "react";
import { DayPicker } from "react-day-picker";

const Demo = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div>
      <DayPicker mode="single" selected={date} onSelect={setDate} />
    </div>
  );
};

export default Demo;
