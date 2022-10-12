import { atom } from 'recoil'
import { CardMark, CardNum } from '../types/types'

export interface ActionInterface {
  pos: string
  move: string
  size: number
  street: number
  order: number
}

export interface CardInterface {
  num: CardNum
  mark: CardMark
}

export const editingHandIdState = atom<string>({
  key: 'editingCardIdState',
  default: '',
})

export const editingCardsState = atom<CardInterface[]>({
  key: 'editingCardsState',
  default: [
    { num: 'w', mark: 'w' },
    { num: 'w', mark: 'w' },
    { num: 'w', mark: 'w' },
    { num: 'w', mark: 'w' },
    { num: 'w', mark: 'w' },
  ],
})

export const editingActionsState = atom<ActionInterface[][]>({
  key: 'editingActionsState',
  default: [[], [], [], []],
})

export const editingTitleState = atom<string>({
  key: 'editingTitleState',
  default: '',
})

export const editingContentState = atom<string>({
  key: 'editingContentState',
  default: '',
})

export const editingESState = atom<number>({
  key: 'editingESState',
  default: 0,
})

export const editingStreetPotState = atom<number[]>({
  key: 'editingStreetPotState',
  default: [0, 0, 0, 0],
})

export const editingBlindState = atom<{ sb: number; bb: number }>({
  key: 'editingBlindState',
  default: { sb: 0, bb: 0 },
})

export const editingXPotState = atom<number>({
  key: 'editingXPotState',
  default: 0,
})

export interface SelectedAction {
  street: number
  order: number
}

export const selectedActionState = atom<SelectedAction>({
  key: 'selectedCardState',
  default: { street: 0, order: 0 },
})

export const isOpenNumSetterState = atom<boolean>({
  key: 'isOpenNumSetterState',
  default: false,
})
export const isOpenCardSetterState = atom<boolean>({
  key: 'isOpenCardSetterState',
  default: false,
})

export const settedNumState = atom<number>({
  key: 'settedNum',
  default: 0,
})

export const isDataState = atom<boolean>({
  key: 'isDataState',
  default: false,
})
