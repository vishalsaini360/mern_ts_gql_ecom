import * as Yup from "yup"

export const Schemas = Yup.object( {
    firstName : Yup.string().min(2).max(12).required("Please Enter FirstName.."),
    lastName : Yup.string().min(2).max(12).required("Please Enter LastName.."),
    email : Yup.string().email().required("Please Enter Email.."),
    password : Yup.string().min(6).required("Please Enter Password.."),
    confirmPassword : Yup.string().required().
                    oneOf([Yup.ref("password"),null],"Password Must Match")
})