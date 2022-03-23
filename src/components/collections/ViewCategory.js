import axios from 'axios';
import React, { useEffect } from 'react';

function ViewCategory() {
    useEffect(() => {
    axios.get(`/api/ga/categories`).then(res=>{
        if(res.data.status === 200){
            console.log(res.data.categories);
        }
       });
    });
  return (
    <div>
        <div>
            <div className='container'>
                <h6>category page</h6>
            </div>
        </div>

        <div>
            <div className='container'>
                <h6>category Data</h6>
            </div>
        </div>

    </div>
  )
}

export default ViewCategory