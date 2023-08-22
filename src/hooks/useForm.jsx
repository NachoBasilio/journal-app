import { useEffect, useState } from 'react';

export default function useForm( initialForm = {}, formaValidations = {} ){
  
    const [ formState, setFormState ] = useState( initialForm );
    const [ formValidation, setFormValidation ] = useState( {} );

    useEffect(() => {
        createValidations()
    }, [formState]);
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const createValidations = () => {
        const formCheckedValues = {}
        for (const formField of Object.keys(formaValidations)) {
            const [fn, errorMsg = "Este campo es requerido"] = formaValidations[formField]
            formCheckedValues[`${formField}Valid`] = fn(formState[formField]) ? null : errorMsg
        }

        setFormValidation(formCheckedValues)
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation
    }
}