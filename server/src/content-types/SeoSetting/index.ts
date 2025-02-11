const schema = {
  kind: 'singleType',
  collectionName: 'yek-panel-seo-setting',
  info: {
    name: 'yek-panel-seo-setting',
    singularName: 'yek-panel-seo-setting',
    pluralName: 'yek-panel-seo-settings',
    displayName: 'YEK Panel Seo Settings',
  },
  options: {
    reviewWorkflows: false,
    draftAndPublish: false,
  },
  pluginOptions: {
    'content-manager': {
      visible: true,
    },
    'content-type-builder': {
      visible: false,
    },
    i18n: {
      localized: true,
    },
  },
  attributes: {
    title: {
      type: 'string',
      required: true,
      configurable: false,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    titleTemplate: {
      type: 'string',
      required: false,
      configurable: false,
      default: '%s | YekPlus',
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    description: {
      type: 'text',
      required: true,
      configurable: false,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    keywords: {
      type: 'text',
      required: false,
      configurable: false,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
  },
};

export default { schema };
