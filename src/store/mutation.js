export default {
  setOrderdDdta(state,data){
    state.order=data;
  },
   PaidOrderdDdta(state,data){
     try{
       localStorage.setItem("orderData",JSON.stringify(data));
     }catch (e) {

     }
   },
  setAddress(state,data){
    state.address = data;
    try {
      localStorage.address=data

    }catch (e) {

    }
  }
}
