import React from 'react'

const Header = (props) => {

    const handleClear = () => {
        props.handleClear()
    }
  return (
    <React.Fragment >
        <button onClick={handleClear} className='text-white bg-stone-900 rounded-full font-bold text-md ml-2 flex justify-center items-center shadow-inner hover:shadow-inner hover:shadow-white '>AC</button>
    </React.Fragment>
  )
}

export default Header
