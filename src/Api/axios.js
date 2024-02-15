import axios from  'axios';
const axiosInstance=axios.create({
    baseURL: "http://localhost:4000",
   
});
 export {axiosInstance};



 
// deployed Version Of amazon server on render;
   // baseURL:" https://amazon-api-deploy-pvrs.onrender.com/", 
  //baseURL:" https://amazon-api-deployment-le5g.onrender.com/",


    //local insatnce of firebase fuction;
    //baseURL: "http://127.0.0.1:5001/clone-51ece/us-central1/api",



    //http://localhost:4000