import { CardMark, CardNum } from "../types/types"

const localHistory1=`PokerStars Zoom Hand #238966161785:  Hold'em No Limit ($0.01/$0.02) - 2022/10/01 5:16:16 ET
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

const history2=`PokerStars Zoom Hand #239025107112:  Hold'em No Limit ($0.01/$0.02) - 2022/10/04 5:20:44 ET
Table 'Halley' 6-max Seat #1 is the button
Seat 1: Allmark77 ($11.89 in chips)
Seat 2: nebular77 ($2.08 in chips)
Seat 3: clodi123 ($2.83 in chips)
Seat 4: Sanoj761 ($2.25 in chips)
Seat 5: mondrush8484 ($1.64 in chips)
Seat 6: HERO777907 ($2.40 in chips)
nebular77: posts small blind $0.01
clodi123: posts big blind $0.02
*** HOLE CARDS ***
Dealt to nebular77 [5c 6h]
Allmark77 is disconnected
Sanoj761: folds
Sanoj761 is disconnected
nebular77 is disconnected
mondrush8484: raises $0.04 to $0.06
HERO777907: folds
Allmark77: folds
nebular77: folds
clodi123: calls $0.04
*** FLOP *** [7c Ts Kc]
clodi123: checks
mondrush8484: bets $0.06
clodi123: raises $0.06 to $0.12
mondrush8484: calls $0.06
*** TURN *** [7c Ts Kc] [3c]
clodi123: bets $0.18
mondrush8484: calls $0.18
*** RIVER *** [7c Ts Kc 3c] [Jc]
clodi123: checks
mondrush8484: bets $1.28 and is all-in
clodi123: folds
Uncalled bet ($1.28) returned to mondrush8484
mondrush8484 collected $0.70 from pot
mondrush8484: doesn't show hand
clodi123 is disconnected
*** SUMMARY ***
Total pot $0.73 | Rake $0.03
Board [7c Ts Kc 3c Jc]
Seat 1: Allmark77 (button) folded before Flop (didn't bet)
Seat 2: nebular77 (small blind) folded before Flop
Seat 3: clodi123 (big blind) folded on the River
Seat 4: Sanoj761 folded before Flop (didn't bet)
Seat 5: mondrush8484 collected ($0.70)
Seat 6: HERO777907 folded before Flop (didn't bet)
`

export const editHistory = (history: string) => {
  let playerName:string[]=[]
  let cards:<{num:CardNum,num:CardMark}>
}


