const properties = [
    {
        id:1,
        house_type:"Upgraded Beautifully | Earth Course View",
        price:4000000.00,
        beds:4,
        bathrooms:5,
        area:300,
        unit:"sq.ft area",
        property_link:"https://foreignbuyerswatch.com/wp-content/uploads/2019/07/Capture-d%E2%80%99e%CC%81cran-2019-07-26-a%CC%80-13.14.52.png"
    },
    {
        id:1,
        house_type:"Beautifully house",
        price:4500000.00,
        beds:4,
        bathrooms:5,
        area:350,
        unit:"sq.ft area",
        property_link:"https://foreignbuyerswatch.com/wp-content/uploads/2019/07/Capture-d%E2%80%99e%CC%81cran-2019-07-26-a%CC%80-13.14.52.png"
    },
    {
        id:1,
        house_type:"Beautifully house",
        price:5000000.00,
        beds:5,
        bathrooms:6,
        area:400,
        unit:"sq.ft area",
        property_link:"https://foreignbuyerswatch.com/wp-content/uploads/2019/07/Capture-d%E2%80%99e%CC%81cran-2019-07-26-a%CC%80-13.14.52.png"
    },
    {
        id:1,
        price:5500000.00,
        beds:6,
        house_type:"Beautifully house",
        bathrooms:7,
        area:450,
        unit:"sq.ft area",
        property_link:"https://foreignbuyerswatch.com/wp-content/uploads/2019/07/Capture-d%E2%80%99e%CC%81cran-2019-07-26-a%CC%80-13.14.52.png"
    },
    {
        id:1,
        price:6000000.00,
        beds:6,
        house_type:"Beautifully house",
        bathrooms:7,
        area:500,
        unit:"sq.ft area",
        property_link:"https://foreignbuyerswatch.com/wp-content/uploads/2019/07/Capture-d%E2%80%99e%CC%81cran-2019-07-26-a%CC%80-13.14.52.png"
    },
    {
        id:1,
        price:7000000.00,
        beds:7,
        house_type:"Beautifully house",
        bathrooms:8,
        area:600,
        unit:"sq.ft area",
        property_link:"https://foreignbuyerswatch.com/wp-content/uploads/2019/07/Capture-d%E2%80%99e%CC%81cran-2019-07-26-a%CC%80-13.14.52.png"
    }
   
]

//Show Modal
function showModal() {
    document.querySelector(".overlay").classList.add("show-overlay");
    document.querySelector(".logincont").classList.add("show-loginform");
  }
  
function closeModal() {
    document.querySelector(".overlay").classList.remove("show-overlay");
    document.querySelector(".logincont").classList.remove("show-loginform");
  }
   

  function fetchProperty(){
     properties.map((properties) =>{
      document.querySelector('.item-boxes').innerHTML += ` <div class="item-box"><img src=${properties.property_link} alt="image"> <b>&#8377 ${properties.price}</b><p>${properties.house_type}</p><hr><i class="uil uil-bed "></i><span> ${properties.beds} Beds </span><i class="uil uil-bath"></i> <span> ${properties.bathrooms} Bathrooms </span><i class="uil uil-estate"></i></i> <span>${properties.area}${properties.unit}</span></div>`
     })
  }
  fetchProperty()