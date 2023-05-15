import * as yup from 'yup';


export const ProductAdd = yup.object().shape({
    category: yup.string().required(),
    price: yup.number().required(),
})