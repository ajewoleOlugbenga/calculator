import React, { useState } from 'react';
import Buttons from './Buttons'; 
import Header from './Header';

function CalculatorApp(props) {

    const [numb, setNumb]=useState('')
    
    const handleClear = () => {
      setNumb('')
    }

    const handleNumb =(e)=> {
        setNumb(numb.concat(e.target.value))
    }

    

    const handleAnswer= () => {
        try {
          setNumb(eval(numb).toString())
        } catch (error) {
          setNumb('IDAN WHY')
        }
      }
  return (
    <React.Fragment className=" flex justify-center items-center bg-black">
        <section>
            <div className='bg-gray-900 w-96 relative h-12 pb-96 pt-10 mt-20 shadow-inner shadow-white rounded-3xl mx-auto overflow-hidden'>
              <Header handleClear={handleClear}/>
                <div className='w-full h-20'>
                    {/*screen*/}

                <input
                type='text'
                placeholder='0'
                value={numb}
                className='w-full h-16 border-blue-400 border-y-2 rounded-3xl shadow-inner shadow-white text-right text-4xl pr-5 bg-gray-900 text-white'/>
               
                </div>
                {/*buttons*/}
                 <Buttons numb={numb} handleNumb={handleNumb} handleAnswer={handleAnswer}/>
                
            </div>
        </section>
    </React.Fragment>
  )
}

export default CalculatorApp;
