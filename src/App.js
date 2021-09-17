import React,{useState,useEffect} from "react";
import {Route,Link,Switch} from 'react-router-dom';
import Pizzaform from "./components/pizzaform";
import Home from "./components/Home"
import schema from './validation/formSchema'
import axios from "axios";
import * as yup from 'yup';

const App = () => {
  const initialFormValues ={
    name:'',
    size:'',
    beef:false,
    salami:false,
    bacon:false,
    chicken:false,
  }
  const initialFormErrors={
    name:'',
    size:'',
  }

  const initialDisabled =true;
  const [orders,setOrders]=useState([])
  const [formValues,setFormValues]=useState(initialFormValues);
  const [formErrors, setFormErrors]=useState(initialFormErrors);
  const[disabled, setDisabled]=useState(initialDisabled)

  // const getOrders =()=>{
  //   axios.get('https://reqres.in/api/orders')
  //   .then(res =>{
  //     console.log('thisis from getorders',res.data.data);
  //     setOrders(res.data.data);
  //   }).catch(err=>console.error(err))
  // }
  // useEffect(()=>{
  //   getOrders()
  // },[])
  const postNewOrder=newOrder=>{
    axios.post('https://reqres.in/api/orders',newOrder)
    .then(res=>{
      
      setOrders([res.data.data,...orders])
    }).catch(err=>console.error(err))
  }
  const validate=(name,value)=>{
    yup.reach(schema,name)
    .validate(value)
    .then(()=>setFormErrors({...formErrors,[name]:''}))
    .catch(err=>setFormErrors({...formErrors,[name]:err.errors[0]}))
  }

  // const validate=(id,value)=>{
  //   yup.reach(schema,id)
  //   .validate(value)
  //   .then(()=>setFormErrors({...formErrors,[id]:''}))
  //   .catch(err=>setFormErrors({...formErrors,[id]:err.errors[0]}))
  // }

  const inputChange=(name,value)=>{
    validate(name,value);
    setFormValues({
      ...formValues,
      [name]:value
    })

  }
  const formSubmit=()=>{
    const newOrder={
      name:formValues.name.trim(),
      size:formValues.size.trim(),
      toppings:['beef','salami','bacon','chicken'].filter(topping=>!!formValues[topping])
    }
    postNewOrder(newOrder);
  }

  useEffect(()=>{
    schema.isValid(formValues).then(valid=>setDisabled(!valid))
  },[formValues])
  return (
      <div>
        <nav>
          <h2>LAMBDA EATS</h2>
          <div>
              <a>Home</a>
              <a>Shop</a>
              <Link to="/">Home</Link>
              <Link id="order-pizza" to="/pizza">link to my form</Link>
              
          </div>
        </nav>
      <Switch>
      <Route path="/pizza">
      <Pizzaform
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      initialFormValues={initialFormValues}
      setFormValues={setFormValues}
      />
      </Route>
      <Route path="/">
        <Home/>
      </Route>
      </Switch>


    
      </div>
  );
};
export default App;
