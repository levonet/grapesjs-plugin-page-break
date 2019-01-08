import grapesjs from 'grapesjs';
// import loadCommands from './commands';
import loadComponents from './components';
import loadBlocks from './blocks';

page-break

export default grapesjs.plugins.add('grapesjs-custom-code', (editor, opts = {}) => {
  const options = { ...{
    // Label of the custom code block
    blockLabel: 'Custom Code',

    // Default content of the page-break component
    blockContent: '<div style="page-break-before: always;"></div>',

  },  ...opts };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // // Add commands
  // loadCommands(editor, options);

  // TODO Remove
  // editor.on('load', () => editor.addComponents(`<div style="margin:100px; padding:25px;">Content loaded from the plugin</div>`, { at: 0 }))
};
