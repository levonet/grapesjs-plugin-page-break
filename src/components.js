import {
  keyCustomCode,
  // commandNameCustomCode,
  typeCustomCode,
} from './config';

export default (editor, opts = {}) => {
  const dc = editor.DomComponents;
  const defaultType = dc.getType('default');
  const defaultModel = defaultType.model;
  const defaultView = defaultType.view;
  const { toolbarBtnCustomCode } = opts;
  let timedInterval;

  dc.addType(typeCustomCode, {

    model: defaultModel.extend({
      defaults: {
        ...defaultModel.prototype.defaults,
        name: 'Page-Break',
        editable: false,
        ...opts.propsCustomCode,
      },

      /**
       * Initilize the component
       */
      init() {
        this.listenTo(this, `change:${keyCustomCode}`, this.onCustomCodeChange);
        const initialCode = this.get(keyCustomCode) || opts.blockContent;
        !this.components().length && this.components(opts.blockContent);
        const toolbar = this.get('toolbar');
        const id = 'page-break';

        // Add the custom code toolbar button if requested and it's not already in
        if (toolbarBtnCustomCode && !toolbar.filter(tlb => tlb.id === id ).length) {
          toolbar.unshift({
            id,
            // command: commandNameCustomCode,
            label: `<svg viewBox="0 0 24 24">
              <path d="M 20,18 V 15 H 4 v 3 H 2 v -5 h 20 v 5 M 20,9 H 4 V 6 H 2 v 5 H 22 V 6 h -2 z"></path>
            </svg>`,
            ...toolbarBtnCustomCode
          });
        }
      },

      /**
       * Callback to launch on keyCustomCode change
       */
      onCustomCodeChange() {
        this.components(this.get(keyCustomCode));
      },
    }, {
      /**
       * The component can be used only if requested explicitly via `type` property
       */
      isComponent() {
        return false;
      }
    }),

    // view: defaultType.view.extend({
    //   events: {
    //     dblclick: 'onActive',
    //   },

    //   init() {
    //     this.listenTo(this.model.components(), 'add remove reset', this.onComponentsChange);
    //     this.onComponentsChange();
    //   },

    //   /**
    //    * Things to do once inner components of custom code are changed
    //    */
    //   onComponentsChange() {
    //     timedInterval && clearInterval(timedInterval);
    //     timedInterval = setTimeout(() => {
    //       const { model } = this;
    //       const content = model.get(keyCustomCode) || '';
    //       let droppable = 1;

    //       // Avoid rendering codes with scripts
    //       if (content.indexOf('<script') >= 0) {
    //         this.el.innerHTML = opts.placeholderScript;
    //         droppable = 0;
    //       }

    //       model.set({ droppable });
    //     }, 0);
    //   },

    //   onActive() {
    //     const target = this.model;
    //     this.em.get('Commands').run(commandNameCustomCode, { target });
    //   },
    // })
  });
}
