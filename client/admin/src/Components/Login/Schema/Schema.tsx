import * as Yup from "yup"

export const Schemas = Yup.object( {
    email : Yup.string().email().required("Please Enter Email.."),
    password : Yup.string().min(6).required("Please Enter Password.."),
})