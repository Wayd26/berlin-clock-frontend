import { useState } from 'react';
import './App.css';
import { BerlinTimeComponent, DigitalTimeComponent, ResultComponent, ConversionTypeComponent } from './components';
import { convertToBerlinTime, convertToDigitalTime } from './services/httpReuests';
import "react-toastify/dist/ReactToastify.css"; 

import { ToastContainer, toast } from 'react-toastify';


function App() {
  const [conversionType, setConversionType] = useState("digital")
  const [data, setData] = useState(null)
  const [result, setResult] = useState(null)

  const handleChangeType = (value) => {
    setResult(null)
    setData("")
    setConversionType(value)
  }
  const handleChangeEntry = (type, value) => {
    let temp;
    if (type === "berlin") {
      temp = {
        "source": value.toString()
      }
    }
    if (type === "digital") {
      temp = {
        "hours": parseInt(value.hours),
        "minutes": parseInt(value.minutes),
        "seconds": parseInt(value.seconds)
      }
    }

    setData(temp)

  }

  const handleConvertToDigital = async () => {

    const request = await convertToDigitalTime(data);
    if (request.response && request.response.status !== 200) {
      toast.error(`Something went wrong. Please check the value entered correctly.`, {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      setResult(request?.data.data.converted)
    }
  }

  const handleConvertToBerlin = async () => {
    const request = await convertToBerlinTime(data);
    if (request.response && request.response.status !== 200) {
      toast.error(`Something went wrong. Please check the value entered correctly.`, {
        position: toast.POSITION.TOP_RIGHT
      });
    } else {
      setResult(request?.data.data.converted)
    }
  }

  const handleClickSubmitButton = () => {
    if(conversionType === "berlin" ) handleConvertToBerlin()
    if(conversionType === "digital" ) handleConvertToDigital()
  }

  return (
    <div className="App">
       <ToastContainer />
      <h1 className='title'>Convert</h1>

      {conversionType === "berlin" && <DigitalTimeComponent handleChangeEntry={handleChangeEntry} />}
      {conversionType === "digital" && <BerlinTimeComponent handleChangeEntry={handleChangeEntry} />}
      <ConversionTypeComponent handleChangeType={handleChangeType} handleClickSubmitButton={handleClickSubmitButton} />
      {result && <ResultComponent result={result}/>}
    </div>
  );
}

export default App;
