let response=fetch("https://carsapi-mauve.vercel.app/data",{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        ratings:"4.5",
        trips:"55",
        name:"maruti 800",
        type:"manual",
        emission:"diesel",
        seats:"7",
        price:"5000",
        image:"https://media.zigcdn.com/media/model/2023/Apr/innova_2023_360x240.jpg",
        category:"suv",
        airbags:"true",
        sunroof:"false",
        crusecontrol:"true",
        camera:"true",
        ac:"true" 
      })
  })
response.then((res)=>{return res.json()})
.then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)})
