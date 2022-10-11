import { syncBuiltinESMExports } from 'module'
import { CardMark, CardNum } from '../types/types'

const history1 = `PokerStars Zoom Hand #238966161785:  Hold'em No Limit ($0.01/$0.02) - 2022/10/01 5:16:16 ET
Table 'Halley' 6-max Seat #1 is the button
Seat 1: nebular77 ($2.16 in chips)
Seat 2: 3 Titzen 3 ($1.09 in chips)
Seat 3: Mokujin2 ($2 in chips)
Seat 4: ilidum9 ($9.89 in chips)
Seat 5: ilhan100 ($1.90 in chips)
Seat 6: ray147741 ($0.83 in chips)
3 Titzen 3: posts small blind $0.01
Mokujin2: posts big blind $0.02
*** HOLE CARDS ***
Dealt to nebular77 [2h 9d]
ilidum9: folds
ilidum9 is disconnected
ilhan100: raises $0.02 to $0.04
ray147741: folds
nebular77: folds
nebular77 is disconnected
3 Titzen 3: calls $0.03
Mokujin2: raises $0.16 to $0.20
ilhan100: calls $0.16
3 Titzen 3: folds
*** FLOP *** [8s 9s Qs]
3 Titzen 3 is disconnected
Mokujin2: checks
ilhan100: checks
*** TURN *** [8s 9s Qs] [6s]
Mokujin2: checks
ilhan100: checks
*** RIVER *** [8s 9s Qs 6s] [Ac]
Mokujin2: bets $0.28
ilhan100: folds
Uncalled bet ($0.28) returned to Mokujin2
Mokujin2 collected $0.42 from pot
Mokujin2: doesn't show hand
ilhan100 is disconnected
*** SUMMARY ***
Total pot $0.44 | Rake $0.02
Board [8s 9s Qs 6s Ac]
Seat 1: nebular77 (button) folded before Flop (didn't bet)
Seat 2: 3 Titzen 3 (small blind) folded before Flop
Seat 3: Mokujin2 (big blind) collected ($0.42)
Seat 4: ilidum9 folded before Flop (didn't bet)
Seat 5: ilhan100 folded on the River
Seat 6: ray147741 folded before Flop (didn't bet)
`

const history2 = `PokerStars Zoom Hand #238965739365:  Hold'em No Limit ($0.01/$0.02) - 2022/10/01 4:26:49 ET
Table 'Halley' 6-max Seat #1 is the button
Seat 1: 1Ropke ($2 in chips)
Seat 2: nebular77 ($2.44 in chips)
Seat 3: DRYADkA ($1.97 in chips)
Seat 4: meechy__lighto ($16.86 in chips)
Seat 5: badjoke1333 ($2.46 in chips)
Seat 6: ffwq1 ($0.87 in chips)
nebular77: posts small blind $0.01
DRYADkA: posts big blind $0.02
*** HOLE CARDS ***
Dealt to nebular77 [7s Ks]
ffwq1 is disconnected
badjoke1333 is disconnected
meechy__lighto: folds
badjoke1333: folds
ffwq1: folds
meechy__lighto is disconnected
1Ropke: raises $0.02 to $0.04
nebular77: raises $0.12 to $0.16
DRYADkA: folds
DRYADkA is disconnected
1Ropke: calls $0.12
*** FLOP *** [Js 8s 9d]
nebular77: bets $0.11
1Ropke: raises $0.19 to $0.30
nebular77: calls $0.19
*** TURN *** [Js 8s 9d] [Kc]
nebular77: checks
1Ropke: bets $0.67
nebular77: calls $0.67
*** RIVER *** [Js 8s 9d Kc] [6h]
nebular77: checks
1Ropke: bets $0.87 and is all-in
nebular77: calls $0.87
*** SHOW DOWN ***
1Ropke: shows [8d 8h] (three of a kind, Eights)
nebular77: shows [7s Ks] (a pair of Kings)
1Ropke collected $3.88 from pot
*** SUMMARY ***
Total pot $4.02 | Rake $0.14
Board [Js 8s 9d Kc 6h]
Seat 1: 1Ropke (button) showed [8d 8h] and won ($3.88) with three of a kind, Eights
Seat 2: nebular77 (small blind) showed [7s Ks] and lost with a pair of Kings
Seat 3: DRYADkA (big blind) folded before Flop
Seat 4: meechy__lighto folded before Flop (didn't bet)
Seat 5: badjoke1333 folded before Flop (didn't bet)
Seat 6: ffwq1 folded before Flop (didn't bet)
`

export const editHistory = (history: string) => {
  let splitedhistory = history1.split('\n')
  console.log(splitedhistory)

  let playerCount = 0
  let sb
  let bb
  let cards: { num: CardNum; mark: CardMark }[] = []
  let actions: { pos: string; move: string; size: number }[][] = [
    [],
    [],
    [],
    [],
  ]
  let nowStreet = -1
  splitedhistory.forEach((line) => {
    if (line.includes('Seat ')) playerCount++

    if (line.includes('posts small blind')) {
      sb = Number(line.split(' ').slice(-1)[0].replace('$', ''))
    }
    if (line.includes('posts big blind')) {
      bb = Number(line.split(' ').slice(-1)[0].replace('$', ''))
    }

    if (line.includes('Board [')) {
      let board = line.replace('Board [', '').replace(']', '').split(' ')
      board.forEach((card) => {
        cards.push({ mark: card[0] as CardMark, num: card[1] as CardNum })
      })
    }

    if (line.includes('HOLE CARDS')) {
      nowStreet = 0
    }
    if (line.includes('FLOP')) {
      nowStreet = 1
    }
    if (line.includes('TURN')) {
      nowStreet = 2
    }
    if (line.includes('RIVER')) {
      nowStreet = 3
    }
    if (line.includes(': folds')) {
      actions[nowStreet].push({ pos: 'BB', move: 'fold', size: 0 })
    }
    if (line.includes(': checks')) {
      actions[nowStreet].push({ pos: 'BB', move: 'check', size: 0 })
    }
    if (line.includes(': bets') && !line.includes('and is all-in')) {
      actions[nowStreet].push({
        pos: 'BB',
        move: 'bet',
        size: Number(line.split(' ').slice(-1)[0].replace('$', '')),
      })
    }
    if (line.includes('and is all-in')) {
      actions[nowStreet].push({ pos: 'BB', move: 'allin', size: 0 })
    }
  })
  playerCount /= 2
  for (let i = 0; i < 5 - cards.length; i++) {
    cards.push({ mark: 'w', num: 'w' })
  }
  console.log(cards)

  let playerName: string[] = []
  let xPot: number
  let heroHole: { num: CardNum; mark: CardMark }[] = []
  let preflop: string
  let flop: string
  let turn: string
  let river: string
}
