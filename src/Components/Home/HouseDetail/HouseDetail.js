import React from 'react'
import { Link } from 'react-router-dom';
import './HouseDetail.css'
const HouseDetail = (props) => {
const{title,image,icon1,dec,icon2,iconDec2,icon3,iconDec3,amount,button}=props.detail;
    return (
       
            <div style={{display: 'flex',maging: '0 10%'}}  className="col-lg-4 col-md-6 col-md-12 bodyMargin">
            <div style={{height:'100%'}} className="bg-style">
            
            <img style={{width:'100%'}} src={image} alt=""/>
              <div className="padding-inside">
              <h5>{title}</h5>

<img style={{height:'15px',marginRight:'8px'}} src={icon1} alt=""/>
  <span>{dec}</span>
  <div style={{display:'flex',marginBottom:'4%'}}>
      <div>
          <img style={{height:'15px',marginRight:'8px'}} src={icon2} alt=""/>

       <span>{iconDec2}</span>
      </div>
      <div>
          <img style={{height:'15px',marginRight:'8px',marginLeft:'20px'}} src={icon3} alt=""/>

           <span>{iconDec3}</span>
      </div>
  </div>
      <div style={{marginTop:'5%'}} className="view-detail d-flex bd-highlight mb-3">
          <div className=" mr-auto p-2 bd-highlight">
    <h3 style={{fontWeight:'2000px',fontSize:'bold'}}>{amount}</h3>
          </div>

          <div>
   <Link to="/homedetails"> <button style={{width:'157px',height:'50px'}} className="button-design">View Details</button></Link>
          </div>
      </div>
              </div>
            </div>
        
       </div>
    );
};

export default HouseDetail;