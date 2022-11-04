/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import * as React from 'react'
import { ChangeEvent, RefObject } from 'react'
import { Card as cardType} from '../../../../../../types/types'
import Card from '../../../../../Atoms/Card'

type BaseCardEditorProps = {
  card: cardType
}

export default function CardEditor({ card }: BaseCardEditorProps): JSX.Element {
  return (
    <span>
      <Card num={card.num} mark={card.mark} />
    </span>
  )
}
