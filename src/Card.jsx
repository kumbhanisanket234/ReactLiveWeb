// import React from 'react';
// import Img from '../src/image/watch5.jpg';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

// import { NavLink } from 'react-router-dom';


// function Card(props) {
//     return (
//         <>
//             <div className='col-md-4'>
//                 <div class="card" >
//                     <img src={props.image} height={300} class="card-img-top" alt="..." />
//                     <div class="card-body">
//                         <h5 class="card-title">{props.title}</h5>
//                         <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                         <NavLink to="" className="btn btn-primary">Buy</NavLink>
//                         <NavLink to="" className="btn btn-primary ms-2" onClick={()=>{
//                             console.log('clicked!')
//                             return (<>
//                                 <input className='form-control' type="number"/>
//                                 <button className='btn btn-primary'>+</button>
//                                 <button className='btn btn-primary'>-</button>
//                             </>)
//                         }}>Add to cart</NavLink>

//                     </div>
//                 </div>
//             </div>

//         </>
//     );
// }

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Card(props) {
    const [showQuantity, setShowQuantity] = useState(false);
    const [qty,setqty]=useState(0);
    const [add,added]=useState("Add to cart");
    var cname= "btn btn-success";
    var no=true;
    
    const handleClick = () => {
        console.log('clicked!');
        setShowQuantity(!showQuantity); // Toggle the visibility of quantity inputs
        if(no===true){
        added("Remove from cart");
            cname="btn btn-danger";
        }
        else{
        added("Add to cart");
         cname="btn btn-success";    
        }
    };

    return (
        <div className='col-md-4'>
            <div className="card">
                <img src={props.image} height={300} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <NavLink to="" className="btn btn-primary">Buy</NavLink>
                    <NavLink to="" className={cname}  onClick={handleClick}>
                        {add}
                    </NavLink>

                    {showQuantity && (
                        <>
                            {no=false}
                            {/* <input className='form-control mt-2' value={qty} type="number" /> */}
                            <br/>
                            {/* <div style={{display:'flex',justifyContent:'center'}}>
                                
                                    
                                    <button className='btn btn-primary mt-2 ' onClick={()=>{
                                            if (qty>=0)
                                            return setqty(qty+1)}}
                                        >+</button>
                                    
                                           
                                <h6 className='text-center mt-3' style={{width:'100px'}}>{qty}</h6>
                                
                                   
                                    
                                    <button className='btn btn-primary mt-2 ' onClick={()=>{
                                            if(qty>0)
                                            return setqty(qty-1)}}
                                        >-</button>
                                    
                                
                            </div> */}


                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

// export default Card;


export default Card;
