import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
     <div className="navbar" >
     <div className='logo' >
      <img style={{}}src="Group.png" /> 
      <img style={{marginLeft:"5px"}} src="density.png" /> 
     </div> 
     <div className='menu'>
     <p className="a">On Boarding</p>
     <p className="b">Deposit</p>
     <p className="c">Withdraw</p>
     <p className="d">Adjust Margin</p>
     </div>

     <div className='icons'>
     <img className="t" src="messge.png" />
     <img className="u" src="profil.png" />
     <img  className="v" src="walle.png" />
     <img  className="x" src="ala.png" />
     <img  className="y" style={{marginLeft:"35%"}} src="logout.png"/>
     </div>
     <div className="coin">
       <div><img src="Eth.png" /></div>
       <div className='coinHeading'>
       <h3 style={{marginBottom:"0",color:"white"}}>ETHUSDT</h3>
       <h5 style={{marginTop:"0"}}>Preptual</h5> 
       </div>
       <img style={{marginLeft:"0.8%"}} src="ddwn.png" width="2%"/>
       <div className='props'>
       <p style={{color:'#00BD84',marginLeft:"25px",fontSize:"30px",marginTop:"25px"}}>$40,988</p>
       <div>
        <h4>Mark</h4>
        <p style={{color:"white"}}>40,564.60</p>
       </div>
       <div>
        <h4>Index</h4>
        <p style={{color:"white"}}>40,564.60</p>

       </div>
       <div>
        <h4>24h High</h4>
        <p style={{color:"white"}}>40,564.60</p>

       </div>
       <div>
        <h4>24h Low</h4>
        <p style={{color:"white"}}>40,564.60</p>

       </div>
       <div>
        <h4>24h Margin</h4>
        <p style={{color:"#00BD84"}}>+564.60(4.014%)</p>


       </div>
       <div>
        <h4>24h Volume(Usdt)</h4>
        <p style={{color:"white"}}>40,564.60</p>

       </div>
       
       </div>
     </div>
     </div>
  )
}

export default Navbar
