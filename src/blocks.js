import {
  typeCustomCode,
} from './config';

export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const { blockCustomCode, blockLabel } = opts;

  blockCustomCode && bm.add(typeCustomCode, {
    label: `<svg viewBox="0 0 24 24">
        <path d="M 20,18 V 15 H 4 v 3 H 2 v -5 h 20 v 5 M 20,9 H 4 V 6 H 2 v 5 H 22 V 6 h -2 z"></path>
      </svg>
      <div>${blockLabel}</div>`,
    category: 'Extra',
    activate: true,
    select: true,
    content: { type: typeCustomCode },
    ...blockCustomCode
  });
}
