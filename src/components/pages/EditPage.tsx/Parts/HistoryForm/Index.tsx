import { Box, Button, Flex, Input, Textarea } from '@chakra-ui/react'
import _ from 'lodash'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { useEditingHand } from '../../../../../apollo/hooks/useEditingHand'
import { editHistory } from '../../../../../lib/editHistory'

type Inputs = {
  history: string
}

export default function HistoryForm() {
  const { register, handleSubmit } = useForm<Inputs>()
  const [editingHand, setEditingHand] = useEditingHand()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { action, cards, xPot, sb, bb, pots, flopPlayers } = editHistory(
      data.history
    )
    setEditingHand({
      ...editingHand,
      actions: action,
      cards: cards,
      xPot: xPot,
      blinds: { bb: bb, sb: sb },
      pots: pots,
      flopPlayers: flopPlayers,
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column">
          <Textarea
            placeholder="ここにハンド履歴をペーストしてください"
            bg="white"
            {...register('history')}
          />
          <Button type="submit" colorScheme="green">
            PT4からハンド履歴を登録
          </Button>
        </Flex>
      </form>
    </>
  )
}
