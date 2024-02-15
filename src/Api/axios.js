import axios from  'axios';
const axiosInstance=axios.create({
    baseURL: "https://amazon-api-deploy-c22y.onrender.com",
   
});
 export {axiosInstance};



 
// deployed Version Of amazon server on render;
   //baseURL https://amazon-api-deploy-c22y.onrender.com/

  //baseURL: "http://localhost:5000"


    //local insatnce of firebase fuction;
    //baseURL: "http://127.0.0.1:5001/clone-51ece/us-central1/api",
