import { useEffect, useState } from "react";
import { Validates } from "./Validates";
import {notify} from './Toasted'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";
import styles from './Global.module.css'
const SignUp = () => {

    const [Data , setData]=useState({
        Name:"",
        Email:"",
        Password:"",
        Confirm:"",
        Rules:false
    })
    const [Errors, setErrors]=useState({})

     const [Touched ,setTouched]=useState({})

        useEffect(()=>{

            setErrors(Validates(Data,"SignUp"))



        },[Data, Touched])
    const ChangeHandler = (event) =>{
        if(event.target.name === "Rules"){

            setData({...Data , Rules: !Data.Rules})

        }else
        {
            setData({...Data , [event.target.name]:event.target.value})
        }

    }
 const FocusHandler =(e) =>{
    setTouched({...Touched , [e.target.name]:true})
 }
    const SubmitHandler =(event) =>{
        event.preventDefault();
        if(!Object.keys(Errors).length){
            notify("you signed up successfully","success")
        }else{
            notify("Invalid data" ,"error")
            setTouched({
                Name:true,
                Email:true,
                Password:true,
                Confirm:true,
                Rules:true

            })
        }

    }
    
    return (
        <div className={styles.FirstContainer}>
             <div className={styles.Container}>
            <h1 className={styles.Header}>Sign Up </h1>
            <form className={styles.Form} onSubmit={SubmitHandler}>
               <div className={styles.FormField}>
               <label className={styles.LabelText} htmlFor="name">Name</label>
                <input className={(Errors.Name && Touched.Name) ? styles.UnCompleted :styles.Input}  id="name" value={Data.Name} name="Name"  placeholder="Name" onChange={ChangeHandler} onFocus={FocusHandler} />
                { Errors.Name  && Touched.Name && <span className={styles.Errors}>{Errors.Name}</span> }                

               </div>

               <div className={styles.FormField}>
               <label className={styles.LabelText}  htmlFor="email">Email</label>
                <input className={(Errors.Email && Touched.Email) ? styles.UnCompleted :styles.Input}   id="email" value={Data.Email} name="Email"  placeholder="Email" onChange={ChangeHandler} onFocus={FocusHandler}/>
                { Errors.Email  && Touched.Email && <span className={styles.Errors}>{Errors.Email}</span> } 
               </div>
               
               <div className={styles.FormField}>
               <label className={styles.LabelText}  htmlFor="password">Password</label>
                <input className={(Errors.Password && Touched.Password) ? styles.UnCompleted :styles.Input}   id="password" value={Data.Password} name="Password"  placeholder="Password" onChange={ChangeHandler} onFocus={FocusHandler}/>
                { Errors.Password  && Touched.Password && <span className={styles.Errors}>{Errors.Password}</span> }                
               </div>
               
                <div className={styles.FormField}>
                <label className={styles.LabelText}  htmlFor="confirm">Confirm Password</label>
                <input className={(Errors.Confirm && Touched.Confirm) ? styles.UnCompleted :styles.Input}   id="confirm" value={Data.Confirm} name="Confirm"  placeholder="Confirm Password" onChange={ChangeHandler} onFocus={FocusHandler}/>
                { Errors.Confirm  && Touched.Confirm && <span className={styles.Errors}>{Errors.Confirm}</span> }                
                </div>

               <div className={styles.checkBoxContainer}>
               <label className={styles.LabelTextcheckbox} htmlFor="rules">I agree to the terms of privacy</label>
                <input className={(Errors.Rules && Touched.Rules) ? styles.UnCompleted :styles.Input}  id="name" value={Data.Rules} name="Rules" type="checkbox" onChange={ChangeHandler} onFocus={FocusHandler}/>
                { Errors.Rules  && Touched.Rules && <span className={styles.Errors}>{Errors.Rules}</span> }      
               </div>

                <div className={styles.Buttons}>
                    <Link className={styles.Link} to="/Login">Login</Link>
                    <button type="submit">Sign up</button>

                </div>          


            </form>
            <ToastContainer/>
        </div>
        </div>
    );
};

export default SignUp;