/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {
  EditorConfig,
  LexicalNode,
  NodeKey,
  SerializedLexicalNode,
  Spread,
} from 'lexical'

import { DecoratorNode } from 'lexical'
import * as React from 'react'
import { Suspense } from 'react'
import { Card } from '../../../../../../types/types'
import CardComponent from './CardComponent'

// const CardComponent = React.lazy(
//   // @ts-ignore
//   () => import('./CardComponent')
// )

export type SerializedCardNode = Spread<
  {
    type: 'card'
    card: Card
  },
  SerializedLexicalNode
>

export class CardNode extends DecoratorNode<JSX.Element> {
  __card: Card

  static getType(): string {
    return 'card'
  }

  static clone(node: CardNode): CardNode {
    return new CardNode(node.__card, node.__key)
  }

  constructor(card: Card, key?: NodeKey) {
    super(key)
    this.__card = card
  }

  static importJSON(serializedNode: SerializedCardNode): CardNode {
    const node = $createCardNode(serializedNode.card)
    return node
  }

  exportJSON(): SerializedCardNode {
    return {
      card: this.getCard(),
      type: 'card',
      version: 1,
    }
  }

  createDOM(_config: EditorConfig): HTMLElement {
    return document.createElement(this.__inline ? 'span' : 'div')
  }

  updateDOM(prevNode: CardNode): boolean {
    // If the inline property changes, replace the element
    return this.__inline !== prevNode.__inline
  }

  getCard(): Card {
    return this.__card
  }

  setCard(card: Card): void {
    const writable = this.getWritable()
    writable.__card = card
  }

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <CardComponent
          card={this.__card}

          nodeKey={this.__key}
        />
      </Suspense>
    )
  }
}

export function $createCardNode(card: Card): CardNode {
  const cardNode = new CardNode(card)
  return cardNode
}

export function $isCardNode(
  node: LexicalNode | null | undefined
): node is CardNode {
  return node instanceof CardNode
}
