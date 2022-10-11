import React from 'react'

const HistoryForm = () => {
  const { register, watch, handleSubmit, formState } = useForm<string>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {

    }
  })

  const handleOnSubmit: SubmitHandler<valuesType> = (values) => {
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
