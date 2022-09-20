import React, { useState, useEffect } from "react";
import Select from "react-select";

const colourStyles = {
    control: (styles) => ({ ...styles, backgroundColor: "transparent" ,  width: '200px',border: 'none',   })
  };


function EditVehicleFormSelect({options,onChange,defaultValue}){
  return <div>
      <Select  styles={colourStyles} options={options} onChange={onChange} defaultValue={defaultValue}/>
  </div>
}

export default EditVehicleFormSelect;