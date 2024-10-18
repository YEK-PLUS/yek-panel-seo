const schema = {
  kind: 'singleType',
  collectionName: 'yek-panel-setting',
  info: {
    name: 'yek-panel-setting',
    singularName: 'yek-panel-setting',
    pluralName: 'yek-panel-settings',
    displayName: 'YEK Panel Settings',
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
    name: {
      type: 'string',
      required: true,
      configurable: false,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    mail: {
      type: 'email',
      required: false,
      configurable: false,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    telephone: {
      type: 'string',
      required: false,
      configurable: false,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    address: {
      type: 'text',
      required: false,
      configurable: false,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    lightLogo: {
      type: 'media',
      multiple: false,
      required: true,
      configurable: false,
      allowedTypes: ['images'],
      pluginOptions: {
        i18n: {
          localized: false,
        },
      },
    },
    darkLogo: {
      type: 'media',
      multiple: false,
      required: true,
      configurable: false,
      allowedTypes: ['images'],
      pluginOptions: {
        i18n: {
          localized: false,
        },
      },
    },
    facebookLink: {
      type: 'string',
      required: false,
      configurable: false,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    instagramLink: {
      type: 'string',
      required: false,
      configurable: false,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    linkedinLink: {
      type: 'string',
      required: false,
      configurable: false,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    tiktokLink: {
      type: 'string',
      required: false,
      configurable: false,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    xLink: {
      type: 'string',
      required: false,
      configurable: false,
      pluginOptions: {
        i18n: {
          localized: true,
        },
      },
    },
    youtube: {
      type: 'string',
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
