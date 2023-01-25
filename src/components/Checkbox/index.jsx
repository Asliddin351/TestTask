import React from 'react';


const Checkbox = ({content,...rest}) => {
    return (
        <label className='checkbox'>
        <input type="checkbox" {...rest}/>
        {content}
      </label>
    )
}

export default Checkbox;