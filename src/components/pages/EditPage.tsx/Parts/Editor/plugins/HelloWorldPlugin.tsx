import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext'
import { COMMAND_PRIORITY_LOW, createCommand, LexicalCommand } from 'lexical'
import { FC, useCallback } from 'react'

export const HelloWorldPlugin: FC = () => {
  const HELLO_WORLD_COMMAND: LexicalCommand<string> = createCommand()
  const [editor] = useLexicalComposerContext()
  editor.registerCommand(
    HELLO_WORLD_COMMAND,
    (payload: string) => {
      console.log(payload) // Hello World!
      return false
    },
    COMMAND_PRIORITY_LOW
  )
  return (
    <button
      onClick={() =>
        editor.dispatchCommand(HELLO_WORLD_COMMAND, 'Hello World!')
      }
    >
      helloWorld
    </button>
  )
}
