/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type { NodeKey } from 'lexical'

import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { mergeRegister } from '@lexical/utils'
import {
  $getNodeByKey,
  $getSelection,
  $isNodeSelection,
  COMMAND_PRIORITY_HIGH,
  KEY_ESCAPE_COMMAND,
  SELECTION_CHANGE_COMMAND,
} from 'lexical'
import * as React from 'react'
import { useCallback, useEffect, useRef, useState } from 'react'

import CardEditor from './CardEditor'
import KatexRenderer from './KatexRenderer'
import { $isCardNode } from './CardNode'
import { CardInterface } from '../../../../../../store/store'

type CardComponentProps = {
  card: CardInterface
  nodeKey: NodeKey
}

export default function CardComponent({
  card,
  nodeKey,
}: CardComponentProps): JSX.Element {
  const [editor] = useLexicalComposerContext()
  const [cardValue, setCardValue] = useState(card)
  const [showCardEditor, setShowCardEditor] = useState<boolean>(false)
  const inputRef = useRef(null)

  const onHide = useCallback(
    (restoreSelection?: boolean) => {
      setShowCardEditor(false)
      editor.update(() => {
        const node = $getNodeByKey(nodeKey)
        if ($isCardNode(node)) {
          node.setCard(cardValue)
          if (restoreSelection) {
            node.selectNext(0, 0)
          }
        }
      })
    },
    [editor, cardValue, nodeKey]
  )

  useEffect(() => {
    if (!showCardEditor && cardValue !== card) {
      setCardValue(card)
    }
  }, [showCardEditor, card, cardValue])

  useEffect(() => {
    if (showCardEditor) {
      return mergeRegister(
        editor.registerCommand(
          SELECTION_CHANGE_COMMAND,
          (payload) => {
            const activeElement = document.activeElement
            const inputElem = inputRef.current
            if (inputElem !== activeElement) {
              onHide()
            }
            return false
          },
          COMMAND_PRIORITY_HIGH
        ),
        editor.registerCommand(
          KEY_ESCAPE_COMMAND,
          (payload) => {
            const activeElement = document.activeElement
            const inputElem = inputRef.current
            if (inputElem === activeElement) {
              onHide(true)
              return true
            }
            return false
          },
          COMMAND_PRIORITY_HIGH
        )
      )
    } else {
      return editor.registerUpdateListener(({ editorState }) => {
        const isSelected = editorState.read(() => {
          const selection = $getSelection()
          return (
            $isNodeSelection(selection) &&
            selection.has(nodeKey) &&
            selection.getNodes().length === 1
          )
        })
        if (isSelected) {
          setShowCardEditor(true)
        }
      })
    }
  }, [editor, nodeKey, onHide, showCardEditor])

  return (
    // <>
    //   {showCardEditor ? (
    //     <CardEditor
    //       card={cardValue}
    //       setCard={setCardValue}
    //       inline={inline}
    //       inputRef={inputRef}
    //     />
    //   ) : (
    //     <KatexRenderer
    //       card={cardValue}
    //       inline={inline}
    //       onClick={() => {
    //         setShowCardEditor(true)
    //       }}
    //     />
    //   )}
    // </>
    <CardEditor
      card={cardValue}

    />
  )
}
