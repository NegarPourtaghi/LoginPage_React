export const Validates=(Data,Type)=>{
const errors={}

if(Type === "SignUp"){
    if(!Data.Name.trim()){
        errors.Name="Username is required"
    }else{
        delete errors.Name;
    }

    if(!Data.Email){
        errors.Email="Email is required"
    }if(!/\S+@\S+\.\S+/.test(Data.Email)){
        errors.Email="email is not valid"
    }else{
        delete errors.Email
    }

    if(!Data.Password){
        errors.Password="password is required"
    }
   else if(Data.Password.length<6){
        errors.Password="password should be more than 6 characters"
    }else {
        delete errors.Password
    }

    if(!Data.Confirm){
        errors.Confirm="confirm is required"
    }
   else if(Data.Confirm !== Data.Password){
        errors.Confirm="passwords doesnt match"
    }
    else if(Data.Confirm === Data.Password){
        delete errors.Confirm
    }

    if(Data.Rules){
        delete errors.Rules
    }else{
        errors.Rules="accept our regulation"
    }
}

return errors;
}