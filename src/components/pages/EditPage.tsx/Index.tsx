import { useMutation } from '@apollo/client'
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import {
  Actions_Insert_Input,
  Cards_Constraint,
  Cards_Update_Column,
  Hands_Cards_Constraint,
  Hands_Cards_Insert_Input,
  Hands_Cards_Update_Column,
  Hands_Constraint,
  Hands_Update_Column,
  Pots_Constraint,
  Pots_Update_Column,
} from '../../../gql/graphql'
import { INSERT_HAND } from '../../../graphql/queries'
import {
  editingActionsState,
  editingCardsState,
  editingContentState,
  editingESState,
  editingStreetPotState,
  editingTitleState,
  isDataState,
} from '../../../store/store'
import History from './Parts/History/Index'
import HistoryForm from './Parts/Form/Index'
import Layout from '../../Template/Layout'
import dynamic from 'next/dynamic'
import { Editor } from './Parts/Editor/Index'

const EditPage = () => {
  const [editingActions, setEditingActions] =
    useRecoilState(editingActionsState)
  const [editingCards, setEditingCards] = useRecoilState(editingCardsState)
  const [editingES, setEditingES] = useRecoilState(editingESState)
  const [editingPot, setEditingPot] = useRecoilState(editingStreetPotState)
  const [editingTitle, setEditingTitle] = useRecoilState(editingTitleState)
  const [editingContent, setEditingContent] =
    useRecoilState(editingContentState)
  const [isData, setIsData] = useRecoilState(isDataState)

  useEffect(() => {
    setEditingActions([[], [], [], []])
    setEditingCards([
      { num: 'w', mark: 'w' },
      { num: 'w', mark: 'w' },
      { num: 'w', mark: 'w' },
      { num: 'w', mark: 'w' },
      { num: 'w', mark: 'w' },
    ])
    setEditingES(100)
    setEditingPot([0, 0, 0, 0])
    setEditingTitle('')
    setEditingContent('')
    setIsData(true)
  }, [])

  const [insertHand, { loading, error }] = useMutation(INSERT_HAND)
  const router = useRouter()
  const onClickSave = () => {
    const actionList: Actions_Insert_Input[] = []
    editingActions.forEach((street) => {
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
    editingCards.forEach((card, index) => {
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
          title: editingTitle,
          es: editingES,
          content: editingContent,
          pots: {
            data: [
              { size: editingPot[0], street: 0 },
              { size: editingPot[1], street: 1 },
              { size: editingPot[2], street: 2 },
              { size: editingPot[3], street: 3 },
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
    <Layout>
      <Flex bg="orange.100" mx="40" my="20" alignItems="start" gap={2}>
        <Flex direction="column" w="full" bg="green.100" gap={2}>
          <History />
          <Box bg="white" w="full">

              <Editor />
          </Box>
        </Flex>
        <VStack bg="cyan.100" h="100px">
          <Button onClick={onClickSave} colorScheme="blue">
            保存
          </Button>
          <HistoryForm />
        </VStack>
      </Flex>
    </Layout>
  )
}

export default EditPage
