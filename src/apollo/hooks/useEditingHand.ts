import { Action, Card, Position } from '../../types/types'
import { createReactiveVar } from '../createReactiveVar'
import { ReactiveVarHooks, useReactiveVarHooks } from '../useReactiveVarHooks'

interface editingHandType {
  id: string
  title: string
  content: string
  es: number
  xPot: number
  blinds: { sb: number; bb: number }
  actions: Action[][]
  cards: Card[]
  pots: number[]
  flopPlayers: Position[]
}

const initialValue: editingHandType = {
  id: '',
  title: '',
  content: '',
  xPot: 0,
  es: 0,
  blinds: { sb: 0, bb: 0 },
  actions: [[], [], [], []],
  cards: [
    { num: 'w', mark: 'w' },
    { num: 'w', mark: 'w' },
    { num: 'w', mark: 'w' },
    { num: 'w', mark: 'w' },
    { num: 'w', mark: 'w' },
  ],
  pots: [],
  flopPlayers: [],
}
const editingHandVar = createReactiveVar(initialValue)

export const useEditingHand = (): ReactiveVarHooks<editingHandType> =>
  useReactiveVarHooks(editingHandVar)
