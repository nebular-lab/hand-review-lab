import { CodeNode, CodeHighlightNode } from '@lexical/code'
import { ListItemNode, ListNode } from '@lexical/list'
import { HeadingNode, QuoteNode } from '@lexical/rich-text'
import { Klass, LexicalNode } from 'lexical'
import { CardNode } from './plugins/CardNode'

export const nodes: Klass<LexicalNode>[] = [
  HeadingNode,
  ListItemNode,
  ListNode,
  CardNode,
]
