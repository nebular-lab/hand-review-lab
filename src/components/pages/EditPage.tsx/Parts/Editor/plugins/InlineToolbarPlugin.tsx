import { FC, useEffect, useState } from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND } from 'lexical'
import {
  MdCode,
  MdFormatBold,
  MdFormatItalic,
  MdFormatStrikethrough,
  MdFormatUnderlined,
} from 'react-icons/md'
import styles from './InlineToolbarPlugin.module.scss'
import { Button } from '@chakra-ui/react'
import { INSERT_CARD_COMMAND } from './CardPlugin'

export const InlineToolbarPlugin: FC = () => {
  const [editor] = useLexicalComposerContext()

  const [isBold, setIsBold] = useState(false)
  const [isUnderline, setIsUnderline] = useState(false)

  useEffect(() => {
    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const selection = $getSelection()

        if (!$isRangeSelection(selection)) return

        setIsBold(selection.hasFormat('bold'))
        setIsUnderline(selection.hasFormat('underline'))
      })
    })
  }, [editor])

  return (
    <div className={styles.inlineToolbar}>
      <button
        type="button"
        aria-label="format bold"
        role="checkbox"
        aria-checked={isBold}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')}
      >
        <MdFormatBold />
      </button>
      <button
        type="button"
        aria-label="format underline"
        role="checkbox"
        aria-checked={isUnderline}
        onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')}
      >
        <MdFormatUnderlined />
      </button>
      <Button
        onClick={() => {
          editor.dispatchCommand(INSERT_CARD_COMMAND, {
            card: { num: '2', mark: 'c' }
          })
        }}
      ></Button>
    </div>
  )
}
