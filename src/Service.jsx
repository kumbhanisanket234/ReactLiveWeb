import React from 'react';
import Card from './Card';
import Carddetail from './Carddetail';

function Service() {
  return (
    <>

      <div className='container-fluid col-md-10'>
        <h1 className='text-center py-3'>let's buy</h1>
        <div className='row gy-3'>
          {Carddetail.map((val,ind)=>{
            return(
              <Card
              image={val.img}
              title={val.title}
              />
            )
          })}
        </div>
      </div>

    </>
  );
}

export default Service;
