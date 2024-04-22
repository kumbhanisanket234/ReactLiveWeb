import React from 'react';
import { NavLink } from 'react-router-dom';

function Common(props) {
  return (
    <>
      <section className='d-flex align-item-center'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-1 d-flex justify-content-center flex-column'>
                  <h1>Welcome to {props.page} page. Purchase Your Watches from <strong className='bname'>Analog's</strong></h1>
                  <h5 className='my-3'>We provide many brand's Watches</h5>
                  <div className='mt-3'>
                    <NavLink to={props.visit} className='btn-get-started'>{props.btn}</NavLink>
                  </div>
                </div>

                <div className='col-md-6 mt-4 order-1 order-2 d-flex justify-content-center flex-column'>
                    <img src={props.imgsrc} className='img-fluid imghome' alt="watches"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
