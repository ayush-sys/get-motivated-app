import React from 'react';

const date = () => {
    let today = new Date().toLocaleDateString();
    return(today);
}
 
export default date;