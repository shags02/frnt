// import React, {useEffect, useState} from 'react'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'

// export default function   MyOrder() {

//         const [orderData, setorderData] = useState({})
    
//         const fetchMyOrder = async () => {
//             console.log(localStorage.getItem('userEmail'))
//             await fetch("http://localhost:7000/api/myorderData", {
//                 // credentials: 'include',
//                 // Origin:"http://localhost:3000/login",
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body:JSON.stringify({
//                     email:localStorage.getItem('userEmail')
//                 })
//             }).then(async (res) => {
//                 let response = await res.json()
           
//                 await setorderData(response)
//                 console.log("resss",response)

//             })
    
    
    
//             // await res.map((data)=>{
//             //    console.log(data)
//             // })
    
    
//         }
    
//         useEffect(() => {
//             fetchMyOrder()
//         }, [])
    
//         console.log(orderData);

//         return (
//             <div>
//                 <div>
//                     <Navbar />
//                 </div>
    
//                 <div className='container'>
//                     <div className='row'>
    
//                         {orderData !== {} ? Array(orderData).map(data => {
//                             return (
//                                 data.orderData ?
//                                     data.orderData.order_data.slice(0).reverse().map((item) => {
//                                         return (
//                                             item.map((arrayData) => {
//                                                 return (
//                                                     <div  >
//                                                         {arrayData.Order_date ? <div className='m-auto mt-5'>
    
//                                                             {data = arrayData.Order_date}
//                                                             <hr />
//                                                         </div> :
    
//                                                             <div className='col-12 col-md-6 col-lg-3' >
//                                                                 <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                                                                     <img src={arrayData.img} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} />
//                                                                     <div className="card-body">
//                                                                         <h5 className="card-title">{arrayData.name}</h5>
//                                                                         <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                                                             <span className='m-1'>{arrayData.qty}</span>
//                                                                             <span className='m-1'>{arrayData.size}</span>
//                                                                             <span className='m-1'>{data}</span>
//                                                                             <div className=' d-inline ms-2 h-100 w-20 fs-5' >
//                                                                                 ₹{arrayData.price}/-
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>
    
//                                                             </div>
    
    
    
//                                                         }
    
//                                                     </div>
//                                                 )
//                                             })
    
//                                         )
//                                     }) : ""
//                             )
//                         }) : ""}
//                     </div>
    
    
//                 </div>
    
//                 <Footer />
//             </div>
//         )
//     }



import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {

    const [orderData, setorderData] = useState({})

    const fetchMyOrder = async () => {
        console.log(localStorage.getItem('userEmail'))
        await fetch("http://localhost:7000/api/myOrderData", {
            // credentials: 'include',
            // Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                email:localStorage.getItem('userEmail')
            })
        }).then(async (res) => {
            let response = await res.json()
            await setorderData(response)
        })



        // await res.map((data)=>{
        //    console.log(data)
        // })


    }

    useEffect(() => {
        fetchMyOrder()
    }, [])

    console.log('cccccccccccccccccccccccc', orderData);
    return (
        <div>
            <div>
                <Navbar />
            </div>

            <div className='container'>
                <div className='row'>

                    {orderData !== {} ? Array(orderData).map(data => {
                        console.log('dddddddddddddddddd',data.orderData);
                        return (
                            
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item,idx) => {
                                    console.log("item---------------",item);

                                   return  <li key="idx"> {item.name} {item.qty} </li>
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>

            <Footer />
        </div>
    )
}