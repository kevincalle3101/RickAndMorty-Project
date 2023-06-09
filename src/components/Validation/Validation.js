

function validation(userData){
    let errors = {}
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userData.email)){
        errors.email="A valid email is required"
    }
    if(!userData.email){
        errors.email = "this field can not be blank"
    }
    if(userData.email.length>35){
        errors.email = "must not be longer than 35 characters"
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password = "must have at least one number"
    }
    if(userData.password.length<6||userData.password.length>10){
        errors.password ="must be between 6 and 10 characters"
    }
    return errors;
}

export default validation;