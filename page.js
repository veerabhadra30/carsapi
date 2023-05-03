let response=fetch("https://carsapi-mauve.vercel.app/data")
response.then((res)=>{return res.json()})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)})
