import { syncBuiltinESMExports } from 'module'
import { CardMark, CardNum } from '../types/types'

const history1 = `PokerStars Zoom Hand #238384400434:  Hold'em No Limit ($0.01/$0.02) - 2022/09/03 4:58:29 ET
Table 'Halley' 6-max Seat #1 is the button
Seat 1: Dirtymommm ($4.19 in chips)
Seat 2: nebular77 ($2.03 in chips)
Seat 3: ElDuderino204 ($1.90 in chips)
Seat 4: mamemo3 ($2.92 in chips)
Seat 5: c_guess11 ($1.40 in chips)
Seat 6: tiltil55 ($1.88 in chips)
nebular77: posts small blind $0.01
ElDuderino204: posts big blind $0.02
*** HOLE CARDS ***
Dealt to nebular77 [Ah Qd]
c_guess11 is disconnected
mamemo3: folds
c_guess11: folds
mamemo3 is disconnected
tiltil55: raises $0.08 to $0.10
Dirtymommm: folds
Dirtymommm is disconnected
nebular77: raises $0.24 to $0.34
ElDuderino204: folds
tiltil55: calls $0.24
*** FLOP *** [9h Jh Kc]
nebular77: bets $0.22
tiltil55: calls $0.22
*** TURN *** [9h Jh Kc] [8c]
nebular77: bets $1.32
tiltil55: calls $1.32 and is all-in
*** RIVER *** [9h Jh Kc 8c] [9c]
*** SHOW DOWN ***
nebular77: shows [Ah Qd] (a pair of Nines)
tiltil55: shows [7s 7d] (two pair, Nines and Sevens)
tiltil55 collected $3.65 from pot
*** SUMMARY ***
Total pot $3.78 | Rake $0.13
Board [9h Jh Kc 8c 9c]
Seat 1: Dirtymommm (button) folded before Flop (didn't bet)
Seat 2: nebular77 (small blind) showed [Ah Qd] and lost with a pair of Nines
Seat 3: ElDuderino204 (big blind) folded before Flop
Seat 4: mamemo3 folded before Flop (didn't bet)
Seat 5: c_guess11 folded before Flop (didn't bet)
Seat 6: tiltil55 showed [7s 7d] and won ($3.65) with two pair, Nines and Sevens
`

const history2 = `PokerStars Zoom Hand #238965739365:  Hold'em No Limit ($0.01/$0.02) - 2022/10/01 4:26:49 ET
Table 'Halley' 6-max Seat #1 is the button
Seat 1: 1Ropke ($2 in chips)
Seat 2: nebular 77 ($2.44 in chips)
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
  let splitedhistory = history2.split('\n')

  let playerCount = 0
  let sb
  let bb
  const cards: { num: CardNum; mark: CardMark }[] = []
  const actions: { pos: number; move: string; size: number }[][] = [
    [],
    [],
    [],
    [],
  ]
  let nowStreet = -1
  const players: { pos: number; name: string }[] = []
  const posList = [0, 9, 8, 3, 2, 1]
  let posPushIndex = 0
  splitedhistory.forEach((line) => {
    if (line.includes('in chips)')) {
      playerCount++
      // TODO プレイヤー名に空白があった時
      players.push({
        pos: posList[posPushIndex],
        name: line.split(' ').slice(2, -3)[0],
      })
      posPushIndex++
    }
  })
  console.log(players)

  splitedhistory.forEach((line) => {
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

    if (line.includes('*** HOLE CARDS ***')) {
      nowStreet = 0
    }
    if (line.includes('*** FLOP ***')) {
      nowStreet = 1
      console.log('flop')
    }
    if (line.includes('*** TURN ***')) {
      nowStreet = 2
    }
    if (line.includes('*** RIVER ***')) {
      nowStreet = 3
    }
    if (line.includes(': folds')) {
      const name = line.split(' ')[0].slice(0, -1)
      players.forEach((player) => {
        if (player.name == name) {
          actions[nowStreet].push({ pos: player.pos, move: 'fold', size: 0 })
        }
      })
    }
    if (line.includes(': checks')) {
      const name = line.split(' ')[0].slice(0, -1)
      players.forEach((player) => {
        if (player.name == name) {
          actions[nowStreet].push({ pos: player.pos, move: 'check', size: 0 })
        }
      })
    }
    if (line.includes(': calls') && !line.includes('and is all-in')) {
      const size = Number(line.split(' ').slice(-1)[0].replace('$', ''))
      const name = line.split(' ')[0].slice(0, -1)
      players.forEach((player) => {
        if (player.name == name) {
          actions[nowStreet].push({ pos: player.pos, move: 'bet', size: size })
        }
      })
    }
    if (line.includes(': bets') && !line.includes('and is all-in')) {
      const size = Number(line.split(' ').slice(-1)[0].replace('$', ''))
      const name = line.split(' ')[0].slice(0, -1)
      players.forEach((player) => {
        if (player.name == name) {
          actions[nowStreet].push({ pos: player.pos, move: 'bet', size: size })
        }
      })
    }
    if (line.includes(': raises') && !line.includes('and is all-in')) {
      const size = Number(line.split(' ').slice(-1)[0].replace('$', ''))
      const name = line.split(' ')[0].slice(0, -1)
      players.forEach((player) => {
        if (player.name == name) {
          actions[nowStreet].push({
            pos: player.pos,
            move: 'raise',
            size: size,
          })
        }
      })
    }
    if (line.includes('and is all-in')) {
      const size = Number(
        line
          .replace(' and is all-in', '')
          .split(' ')
          .slice(-1)[0]
          .replace('$', '')
      )
      const name = line.split(' ')[0].slice(0, -1)
      players.forEach((player) => {
        if (player.name == name) {
          actions[nowStreet].push({
            pos: player.pos,
            move: 'allin',
            size: size,
          })
        }
      })
    }
  })
  for (let i = 0; i < 5 - cards.length; i++) {
    cards.push({ mark: 'w', num: 'w' })
  }
  console.log(actions)
  let xPot: number = 1
  actions[0].forEach((action) => {
    if (action.move == 'raise') {
      xPot++
    }
  })
}
