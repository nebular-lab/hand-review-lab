import { useMutation } from '@apollo/client'
import { Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { useEditingHand } from '../../../../../apollo/hooks/useEditingHand'
import {
  Actions_Insert_Input,
  Cards_Constraint,
  Cards_Update_Column,
  Hands_Cards_Constraint,
  Hands_Cards_Insert_Input,
  Hands_Cards_Update_Column,
  Hands_Constraint,
  Hands_Update_Column,
  InsertHandDocument,
  Pots_Constraint,
  Pots_Update_Column,
} from '../../../../../gql/graphql'
import { INSERT_HAND } from '../../../../../graphql/queries'

const InsertButton = () => {
  const router = useRouter()
  const [editingHand] = useEditingHand()
  const [insertHand] = useMutation(INSERT_HAND)

  const onClickInsertHand = () => {
    const actionList: Actions_Insert_Input[] = []
    editingHand.actions.forEach((street) => {
      street.forEach((action) => {
        actionList.push({
          position: action.pos,
          move: action.move,
          size: action.size,
          order: action.order,
          street: action.street,
        })
      })
    })
    const cardList: Hands_Cards_Insert_Input[] = []
    editingHand.cards.forEach((card, index) => {
      cardList.push({
        card: {
          data: {
            mark: card.mark,
            num: card.num,
          },
          on_conflict: {
            constraint: Cards_Constraint.CardsNumMarkKey,
            update_columns: [Cards_Update_Column.Mark, Cards_Update_Column.Num],
          },
        },
        order: index,
      })
    })
    insertHand({
      variables: {
        object: {
          title: editingHand.title,
          es: editingHand.es,
          content: editingHand.content,
          pots: {
            data: [
              { size: editingHand.pots[0], street: 0 },
              { size: editingHand.pots[1], street: 1 },
              { size: editingHand.pots[2], street: 2 },
              { size: editingHand.pots[3], street: 3 },
            ],
            on_conflict: {
              constraint: Pots_Constraint.PotsHandIdStreetKey,
              update_columns: [
                Pots_Update_Column.Size,
                Pots_Update_Column.Street,
              ],
            },
          },
          actions: {
            data: actionList,
          },
          hands_cards: {
            data: cardList,
            on_conflict: {
              constraint: Hands_Cards_Constraint.HandsCardsHandIdCardIdOrderKey,
              update_columns: [Hands_Cards_Update_Column.Order],
            },
          },
        },
        on_conflict: {
          constraint: Hands_Constraint.HandsPkey,
          update_columns: [
            Hands_Update_Column.Id,
            Hands_Update_Column.Es,
            Hands_Update_Column.Content,
            Hands_Update_Column.Title,
            Hands_Update_Column.UserId,
          ],
        },
      },
    }).then(() => {
      router.push('/hands')
    })
  }
  return (
    <Button onClick={onClickInsertHand} colorScheme="blue">
      保存
    </Button>
  )
}

export default InsertButton
