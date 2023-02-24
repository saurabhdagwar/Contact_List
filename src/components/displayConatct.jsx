import React,{useContext} from 'react';
import AppContext from '../context';

const DisplayConatct = () => {
    const data = useContext(AppContext);
    console.log("Check Data",data);

    return (
        <div className='display-conatct'>
            {data.contactList.length > 0 && data.contactList.map((item, index) => {
                return (
                    <button key={index} className='contact-item'>
                        <div className='val-display'>{item.name}</div>
                        <div className='val-display'>{item.mobile}</div>
                    </button>
                )
            })}
        </div>
    );
};

export default DisplayConatct;