export default (editor, opts = {}) => {
  const typePageBreak = 'page-break';
  const bm = editor.BlockManager;
  const { blockPageBreak, blockLabel } = opts;

  blockPageBreak && bm.add(typePageBreak, {
    label: `<svg viewBox="0 0 24 24">
        <path d="M 20,18 V 15 H 4 v 3 H 2 v -5 h 20 v 5 M 20,9 H 4 V 6 H 2 v 5 H 22 V 6 h -2 z"></path>
      </svg>
      <div>${blockLabel}</div>`,
    category: 'Extra',
    attributes: {class:'fa fa-page-break'},
    content: {
      type: typePageBreak,
      tagName: 'div',
      activeOnRender: 1,
      style: {
        height: 0,
        width: '100%',
        margin: 0,
        'page-break-before': 'always'
      }
    },
    ...blockPageBreak
  });
}
