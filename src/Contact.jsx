import React, { useState } from 'react';
import Common from './Common';


function Contact() {
  const [cdata,setdata]=useState({
    name:"",
    email:"",
    phone:"",
    cmt:""
  });

  const changeevt=(e)=>{
    const {name,value}=e.target;

    setdata((prev)=>{
      return {
        ...prev,
        [name]:value,
      }
    });
  }


  return (
    <>
      <div className='container-fluid mt-4'>
        <div className='col-md-10 mx-auto text-center '>
          <h1>Welcome To Contact Page</h1>
        </div>
        <form>
          <div className='col-md-10 mx-auto mt-5'>
            <div class="mb-3">
              <label for="exampleInputFullname" class="form-label">Full Name</label>
              <input type="text" name='name' value={cdata.name} class="form-control" id="exampleInputFullname" aria-describedby="emailHelp" onChange={changeevt}/>
            </div>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Email address</label>
              <input type="email" name='email' value={cdata.email} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={changeevt}/>
              <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPhone" class="form-label">Phone</label>
              <input type="tel" name='phone' value={cdata.phone} class="form-control" id="exampleInputPhone" onChange={changeevt} />
            </div>
            <div class="form-floating">
              <textarea class="form-control" name='cmt' value={cdata.cmt} placeholder="Leave a comment here" id="floatingTextarea" onChange={changeevt}></textarea>
              <label for="floatingTextarea">Comments</label>
            </div>
            <button type="submit" class="btn btn-primary mt-3" onClick={()=>{return alert(`name=${cdata.name} \n Email=${cdata.email} \n phone=${cdata.phone} \n cmt=${cdata.cmt}`)}}>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Contact;
