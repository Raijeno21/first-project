import {useState,useEffect} from "react"

const  useFetch = (url) => {
    const [cakes, setCakes] = useState(null)
    const[ err,setErr] = useState(null)
useEffect(()=>{
      fetch(url)
.then(res=>{
if(!res.ok){
    throw new Error("cannot fetch data"); 
}
return res.json()
})
.then(data =>{
setCakes(data)
console.log("data received")
})
.catch(error=>{
    setErr(error.message)  
}
)
},[url])
  

    return {cakes,err};
}
 
export default useFetch ;