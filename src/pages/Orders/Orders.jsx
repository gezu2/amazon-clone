import Layout from "../../Component/Layout/Layout"
import { db } from "../../Utility/firebase"
import   { useState, useContext ,useEffect} from "react"
import { DataContext } from "../../Component/DataProvider/DataProvider";
import classes from  "./Order.module.css"
import ProductCard from "../../Component/Product/ProductCard";

function Order() {
  const [{user}] = useContext(DataContext)
  const[orders,setOrders]=useState([])
  useEffect(()=>{
if(user){
db.collection("users")
.doc(user?.uid)
.collection("orders")
.orderBy("created","desc")
.onSnapshot((snapshot)=>{
//console.log(snapshot);
setOrders(
  snapshot.docs.map((doc)=>({
    id: doc.id,
    data: doc.data(),
  }))
  );
});

  
}else{
  setOrders([])

}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return (
    <Layout>
      <section className={classes.container}>
        <div className={classes.Orders__container}>
          <h2>Your Orders</h2>
{
  orders?.length==0 && <div style={{padding:"20px"}}> you do not  have any order yet </div>
}

          {/* orders items */}
          <div>
{
  orders?.map((eachOrders,i)=>{
    return (
      <div key={i}>
        <hr/>
        <p>Order ID: {eachOrders.id}</p>
        {eachOrders?.data?.basket?.map(order=>(
          <ProductCard flex={true} product={order}
          key ={order.id}/>
        ))}
      </div>
    )
  })
}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Order