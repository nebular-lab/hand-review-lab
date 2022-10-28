export type CardNum =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | 'T'
  | 'J'
  | 'Q'
  | 'K'
  | 'A'
  | 'w'
export type CardMark = 's' | 'c' | 'h' | 'd' | 'w'

export interface Card {
  num: CardNum
  mark: CardMark
}

export interface Action {
  pos: string
  move: string
  size: number
  street: number
  order: number
}
