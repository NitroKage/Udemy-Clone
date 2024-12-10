const emailFormat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
const PasswordFormat = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const SignInValidation = (Data) => {
    
    if (Data?.fName === '' || Data?.fName === undefined) {
        return { status: false, msg: "Please Enter First Name", field: 'fName' };
    }
    if (Data?.lName === '' || Data?.lName === undefined) {
        return { status: false, msg: "Please Enter Last Name", field: 'lName' };
    } 
    if (Data?.username === '' || Data?.username === undefined) {
        return { status: false, msg: "Please Enter UserName", field: 'username' };
    } 

    if (Data?.email === '' || Data?.email === undefined) {
        return { status: false, msg: "Please Enter E-mail", field: 'email' };
    }
    else if (!emailFormat.test(Data?.email)) {
        return { status: false, msg: "Please Enter Valid E-mail", field: 'email' };
    }

    if (Data?.password === '' || Data?.password === undefined) {
        return { status: false, msg: "Please Enter Password", field: 'password' };
    }else if(!PasswordFormat.test(Data?.password)){
        return { status: false, msg: "Password Must Contain Minimum eight characters, at least one letter and one number", field: 'password' };
    }
    if (Data?.confirmPassword === '' || Data?.confirmPassword === undefined) {
        return { status: false, msg: "Please Re-enter your Password", field: 'confirmPassword' };
    }else if(!(Data?.confirmPassword === Data.password)){
        return { status: false, msg: "Password Dosen't Match", field: 'confirmPassword' };
    }


    return { status: true, msg: '' };
}

export const LogInValidation = (Data) => {
    
    if (Data?.email === '' || Data?.email === undefined) {
        return { status: false, msg: "Please Enter UserName or Email ID", field: 'email' };
    } 

    if (Data?.password === '' || Data?.password === undefined) {
        return { status: false, msg: "Please Enter Password", field: 'password' };
    }

    return { status: true, msg: '' };
}