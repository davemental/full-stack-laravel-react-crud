import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const override = {
    display: 'block',
    margin: '30px auto',
}

const Spinner = ({loading}) => {
  return (
      <ClipLoader
          color="rgba(215, 117, 27, 1)"
          loading={loading}
          cssOverride={override}
          size={80}
    />
  )
}

export default Spinner;
