import React from 'react'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'


const HistoryForm = () => {
  const { register, watch, handleSubmit, formState } = useForm<string>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      text:""
    }
  })

  const handleOnSubmit: SubmitHandler<> = (values) => {
    console.log(values)
  }

  const handleOnError: SubmitErrorHandler<valuesType> = (errors) => {
    console.log(errors)
  }
  return (
    <div>
      
    </div>
  )
}

export default HistoryForm
