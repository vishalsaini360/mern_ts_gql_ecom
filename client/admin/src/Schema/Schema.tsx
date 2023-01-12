import * as Yup from "yup"

export const CategorySchemas = Yup.object( {
    name : Yup.string().min(2).required("Category Name is required...."),
    image: Yup.mixed().required('Category Image is required....'),
})

export const SubCategorySchemas = Yup.object( {
    categoryId : Yup.string().min(2).required("Category is required...."),
    name : Yup.string().min(2).required("Sub Category Name is required...."),
    image: Yup.mixed().required('Sub Category Image is required....'),
})

export const ProductSchemas = Yup.object( {
    categoryId : Yup.string().min(2).required("Category is required...."),
    subcategoryId : Yup.string().min(2).required("Sub Category is required...."),
    name : Yup.string().min(2).required("Product Name is required...."),
    description : Yup.string().min(2).required("Description is required...."),
    price : Yup.string().min(2).required("Price Name is required...."),
    discount : Yup.string().min(2).required("Discount Name is required...."),
    image: Yup.mixed().required('Sub Category Image is required....'),
})