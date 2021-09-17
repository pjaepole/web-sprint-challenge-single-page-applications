import * as yup from 'yup';

const formSchema =yup.object().shape({
    name:yup
        .string()
        .trim()
        .required()
        .min(2,"name must be at least 2 characters"),
    specialtext:yup
        .string(),
    sizedropdown:yup
        .string()
        .required()
        .oneOf(['small','medium','large'],'size for the pizza is required!'),
    beef:yup.boolean(),
    salami:yup.boolean(),
    bacon:yup.boolean(),
    chicken:yup.boolean()
})

export default formSchema;