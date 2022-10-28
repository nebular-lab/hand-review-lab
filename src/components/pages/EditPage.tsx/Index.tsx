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

import History from './Parts/History/Index'
import Layout from '../../Atoms/Layout'
import dynamic from 'next/dynamic'
import { Editor } from './Parts/Editor/Index'
import { useEditingHand } from '../../../apollo/hooks/useEditingHand'
import InsertButton from './Parts/InsertHandButton/Index'
import HistoryForm from './Parts/HistoryForm/Index'
import BasicInfo from './Parts/BasicInfo/Index'

const EditPage = () => {
  return (
    <Layout>
      <Flex mx="auto" my="20" gap={2} bg="blue.200">
        <VStack bg="green">
          <BasicInfo />
          <History />
          <Box bg="white" rounded="md" w={'50rem'}>
            <Editor />
          </Box>
        </VStack>
        <VStack>
          <InsertButton />
          <HistoryForm />
        </VStack>
      </Flex>
    </Layout>
  )
}

export default EditPage
