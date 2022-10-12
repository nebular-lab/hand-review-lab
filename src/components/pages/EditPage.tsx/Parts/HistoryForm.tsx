import { Box, Button, Flex, Input, Textarea } from '@chakra-ui/react'
import _ from 'lodash'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { editHistory } from '../../../../lib/editHistory'
import {
  CardInterface,
  editingActionsState,
  editingBlindState,
  editingCardsState,
  editingStreetPotState,
  editingXPotState,
} from '../../../../store/store'

type Inputs = {
  history: string
}

export default function HistoryForm() {
  const { register, handleSubmit } = useForm<Inputs>()
  const setEditingCards = useSetRecoilState(editingCardsState)
  const setEditingActions = useSetRecoilState(editingActionsState)
  const setEditingBlind = useSetRecoilState(editingBlindState)
  const setEditingXPot = useSetRecoilState(editingXPotState)
  const setEditingStreetPot = useSetRecoilState(editingStreetPotState)

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const { action, cards, xPot, sb, bb, streetPot } = editHistory(data.history)
    setEditingCards(cards)
    setEditingActions(action)
    setEditingBlind({ sb: sb, bb: bb })
    setEditingXPot(xPot)
    setEditingStreetPot(streetPot)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Flex direction="column">
          <Textarea
            placeholder="ここにハンド履歴をペーストしてください"
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
