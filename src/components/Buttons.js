import React from 'react';


const Buttons = (props) => {

    const handleNumb = (e) => {
        props.handleNumb(e);
      };

      const handleAnswer = () => {
        props.handleAnswer();
      };
    
  return (
   <React.Fragment>
    <div className='grid grid-cols-4 gap-2 '>
                    {/* buttons */}
                    <button value='1' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>1</button>
                    <button value='2' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>2</button>
                    <button value='3' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>3</button>
                    <button value='/' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>/</button>
                    <button value='4' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>4</button>
                    <button value='5' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>5</button>
                    <button value='6' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>6</button>
                    <button value='*' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>*</button>
                    <button value='7' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>7</button>
                    <button value='8' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>8</button>
                    <button value='9' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>9</button>
                    <button value='-' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>-</button>
                    <button value='0' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full m-1 font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>0</button>
                    <button value='.' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full  font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>.</button>
                    <button  onClick={handleAnswer} className='text-black w-14 h-14 bg-white rounded-full  font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-stone-900 '>=</button>
                    <button value='+' onClick={handleNumb} className='text-white w-14 h-14 bg-stone-900 rounded-full  font-bold text-3xl flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>+</button>
                </div>
   </React.Fragment>
  )
}

export default Buttons
