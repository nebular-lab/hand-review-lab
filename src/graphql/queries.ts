import { gql } from '@apollo/client'

export const GET_ALL_HANDS = gql`
  query GetAllHands {
    hands {
      id
      title
      content
      es
      user_id
      created_at
      updated_at
      actions(order_by: { street: asc, order: asc }) {
        id
        hand_id
        position
        move
        size
        street
        order
        created_at
        updated_at
      }

      hands_cards(order_by: { order: asc }) {
        card {
          id
          num
          mark
        }
        order
      }
      pots {
        id
        hand_id
        size
        street
      }
    }
  }
`

export const INSERT_HAND = gql`
  mutation InsertHand(
    $object: hands_insert_input!
    $on_conflict: hands_on_conflict
  ) {
    insert_hands_one(object: $object, on_conflict: $on_conflict) {
      id
      title
      content
      es
      user_id
      created_at
      updated_at
      actions(order_by: { street: asc, order: asc }) {
        id
        hand_id
        position
        move
        size
        order
        street
        created_at
        updated_at
      }
      hands_cards(order_by: { order: asc }) {
        card {
          id
          num
          mark
        }
        order
      }
      pots {
        id
        hand_id
        size
        street
      }
    }
  }
`
