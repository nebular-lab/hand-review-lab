import { Button, Input } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { editHistory } from '../../lib/editHistory'

type Inputs = {
  example: string
}

export default function HistoryForm() {
  const { register, handleSubmit } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => editHistory(data.example)

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <Input
        placeholder="ここにハンド履歴をペーストしてください"
        {...register('example')}
      />

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <Button type="submit">ハンド履歴登録</Button>
    </form>
  )
}
