import React,{useState} from 'react';
import './form.css';
const Form=()=>{
    const[data,setData]=useState({
        'username':'',
        'email':'',
        'password':'',
        'confirmpassword':''
    })
    const {username,email,password,confirmpassword}=data;
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
e.preventDefault();
if(password===confirmpassword){
    console.log(data);
}
else{
    console.log("passwords are not matching");
}

    }
    return(
<>
<center>
    <div>
    <form onSubmit={submitHandler}>
        Username:         <input type="text" name="username" value={username} onChange={changeHandler} placeholder="Enter username here"/><br/>
        Email:             <input type="email" name="email" value={email} onChange={changeHandler} placeholder="Enter email"/><br/>
        Password:          <input type="password" name="password" value={password} onChange={changeHandler}placeholder="Enter password"/><br/>
        Confirm Password:   <input type="password" name="confirmpassword" value={confirmpassword} onChange={changeHandler} placeholder="confirm password"/><br/>
        <input type="submit" name="submit" id="submit"/>
    </form>
    </div>
</center>
</>
    )
};
export default Form;