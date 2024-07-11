import React from 'react'

const DangerIconButton = ({children, ...rest}) => {
  return (
      <button
          className='transition transform
            translate-y-8 ease-in-out invisible
            absolute group-hover:visible
            top-5 right-3 w-10 h-10 rounded-full bg-red-500/30 border border-red-800/50
            text-red-700 group-hover:translate-y-0
            hover:scale-110'
          {...rest}
        >
        {children}
    </button>
  )
}

export default DangerIconButton
