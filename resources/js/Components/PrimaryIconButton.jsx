import React from 'react'

const PrimaryIconButton = ({children, ...rest}) => {
  return (
      <button
          className='w-10 h-10 rounded-full bg-cyan-700 border border-cyan-800 text-white
                        transform ease-in-out duration-300 hover:scale-110'
      {...rest}
      >
        {children}
    </button>
  )
}

export default PrimaryIconButton
