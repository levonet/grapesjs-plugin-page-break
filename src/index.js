import grapesjs from 'grapesjs';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('grapesjs-page-break', (editor, opts = {}) => {
  const options = {
    // Label of the page-break block
    blockLabel: 'Page-Break',

    // Object to extend the default page-break block, eg. { label: 'Page Break', category: 'Extra', ... }.
    // Pass a falsy value to avoid adding the block
    blockPageBreak: {},

    ...opts
  };

  // Add blocks
  loadBlocks(editor, options);
});
