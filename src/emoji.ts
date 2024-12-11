import { EditorView, WidgetType, Decoration } from '@codemirror/view';

export class EmojiWidget extends WidgetType {
  toDOM(view: EditorView): HTMLElement {
    const div = document.createElement('span');

    div.innerText = '🦊';

    return div;
  }
}
