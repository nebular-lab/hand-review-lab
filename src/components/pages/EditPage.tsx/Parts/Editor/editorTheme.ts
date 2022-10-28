import { EditorThemeClasses } from "lexical";
import styles from "./editorTheme.module.scss";

export const theme: EditorThemeClasses = {
  
  heading: {
    h1: styles.h1,
    h2: styles.h2,
  },
  quote: styles.quote,
  list: {
    ul: styles.ul,
    ol: styles.ol,
    listitem: styles.listitem,
    nested: {
      listitem: styles.nestedListItem,
    },
    listitemChecked: styles.listitemChecked,
    listitemUnchecked: styles.listitemUnchecked,
  },
  text: {
    bold: styles.textBold,
    code: styles.textCode,
    italic: styles.textItalic,
    strikethrough: styles.textStrikethrough,
    subscript: styles.textSubscript,
    superscript: styles.textSuperscript,
    underline: styles.textUnderline,
    underlineStrikethrough: styles.textUnderlineStrikethrough,
  },
};
