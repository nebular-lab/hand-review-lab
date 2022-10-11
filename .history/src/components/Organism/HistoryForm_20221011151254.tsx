import { Button, Input, Textarea } from '@chakra-ui/react'
import _ from 'lodash'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRecoilState } from 'recoil'
import { editHistory } from '../../lib/editHistory'
import { CardInterface, editingCardsState } from '../../store/store'

type Inputs = {
  example: string
}

export default function HistoryForm() {
  const { register, handleSubmit } = useForm<Inputs>()
  const [editingCards, setEditingCards] = useRecoilState(editingCardsState)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { action, cards } = editHistory(data.example)
    console.log(action)
    console.log(cards)
    let _editingCards :CardInterface[]=[]
    cards.forEach((card)=>{
      _editingCards.push()
    })
    setEditingCards(_editingCards)
  }

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <Textarea
        placeholder="ここにハンド履歴をペーストしてください"
        {...register('example')}
      />

      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>This field is required</span>} */}

      <Button type="submit" colorScheme="green">
        ハンド履歴登録
      </Button>
    </form>
  )
}
