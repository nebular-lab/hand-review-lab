import { ComponentProps, FC, useEffect, useRef, useState } from 'react'
import { CheckListPlugin } from '@lexical/react/LexicalCheckListPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { ListPlugin } from '@lexical/react/LexicalListPlugin'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import styles from './Editor.module.scss'
import { theme } from './editorTheme'
import { nodes } from './nodes'
import { AutoFocusPlugin } from './plugins/AutoFocusPlugin'

import { InlineToolbarPlugin } from './plugins/InlineToolbarPlugin'
import { ToolbarPlugin } from './plugins/ToolbarPlugin'
import { Button, Flex } from '@chakra-ui/react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { EditorState } from 'lexical'
import { useLocalStorage } from 'react-use'
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin'
import { HelloWorldPlugin } from './plugins/HelloWorldPlugin'
import CardPlugin, { INSERT_CARD_COMMAND } from './plugins/CardPlugin'

export const Editor: FC = () => {
  const initialConfig: ComponentProps<typeof LexicalComposer>['initialConfig'] =
    {
      namespace: 'MyEditor',
      onError: (error) => console.error(error),
      nodes: nodes,
      theme: theme,
    }
  const editorStateRef = useRef<EditorState>()
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Flex>
        <ToolbarPlugin />
        <InlineToolbarPlugin />
        <CardPlugin />
        <HelloWorldPlugin />
        <Button
          onClick={() => {
            if (editorStateRef.current) {
              console.log(JSON.stringify(editorStateRef.current))
            }
          }}
        >
          保存
        </Button>
      </Flex>

      <div className={styles.editorContainer}>
        <RichTextPlugin
          contentEditable={
            <ContentEditable className={styles.contentEditable} />
          }
          placeholder={
            <div className={styles.placeholder}>良いポーカーライフを！</div>
          }
        />
      </div>

      <AutoFocusPlugin />
      <HistoryPlugin />
      <OnChangePlugin
        onChange={(editorState) => (editorStateRef.current = editorState)}
      />

      <ListPlugin />
    </LexicalComposer>
  )
}
