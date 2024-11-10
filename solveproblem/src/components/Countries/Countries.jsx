import { useEffect, useState } from "react";
import Country from "../Country/Country";
import '../Country/Country.css'

const Countries = () => {
    const [countries,setCountries] = useState([])
const [visitedCountry,setVisitedCountry]= useState([])
const [visitedFlags,setVisitedFlags] = useState([])

    const handlevisitedCountry = country =>{
        const newhandlevisited = [...visitedCountry,country];
        setVisitedCountry(newhandlevisited)
    }
    const handlevisitedflags = flags =>{
        const newhandlevisitedflags = [...visitedFlags,flags]
        setVisitedFlags(newhandlevisitedflags);
        // console.log("add hoise vaiya")
            // console.log(flags)
    }

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data => setCountries(data))
    },[])

    
    return (
        <div style={{listStyle:"none",textAlign:'center'}}>
            <h1>Countries:{countries.length}</h1>
           
           <div>
           <h4>Visited Countries:{visitedCountry.length}</h4>
           <ol>
           {
        visitedCountry.map(country =>  <li key={country.cca3}>{country.name.common}</li>)
    }

           </ol>
          
           </div>
           <div className="flags-container">
            {
                visitedFlags.map((flags ,idx) => <img key={idx} src =  {flags}></img>)
            }
            </div>
            <div className="customgrid">
            {
                countries.map(country => <Country
                 key={country.cca3} 
                 handlevisitedCountry ={handlevisitedCountry}
                 handlevisitedflags = {handlevisitedflags}
                    country={country}></Country>)
            }
            </div>
            
           
        </div>
    );
};

export default Countries;