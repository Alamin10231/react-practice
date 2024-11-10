import { useState } from 'react';
import './Country.css'
const Country = ({country,handlevisitedCountry,handlevisitedflags}) => {
    console.log(country)
   const {name,flags,region,population,cca3} = country;
   
   const [visited,setVisited]= useState(false)
   const eventhandle =()=>{
    setVisited(!visited)
   }

  console.log(handlevisitedCountry)

 const btnpara=()=>{
    handlevisitedCountry(country)
 }
    return (
        <div className={`box ${visited? 'visited':'nonvisited'}`}>
            
            <h3><img className='img' src={flags.png} alt="" /></h3>
            <h3 style={{color:visited?'red':'black'}}>Name: {name.common}</h3>
            <h3>Region: {region}</h3>
            <h3>Code: {cca3}</h3>
            <h3><small>Population:{population}</small></h3>

          <button onClick={btnpara}>Mark as visited</button>
          <button onClick={()=>{handlevisitedflags(country.flags.png)}}>Mark as flags</button>
          

          <button onClick={eventhandle}>{visited?'Visit':'Going'}</button>
         
        
        </div>
    );
};

export default Country;