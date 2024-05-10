import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import './App.css'
import { useState } from 'react';

function App() {

  function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }
  const [currentDate, setCurrentDate] = useState(getDate());
  const currTime = new Date().toLocaleTimeString();
console.log(currentDate, currTime);



  return (
    <>
      <div>
      <DemoItem label="Mobile variant">
          <MobileDateTimePicker defaultValue={dayjs('15:30T2022-04-17')} />
        </DemoItem>
      </div>
    </>
  )
}

export default App



