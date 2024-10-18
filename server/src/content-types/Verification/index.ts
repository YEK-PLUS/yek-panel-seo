const schema = {
  kind: 'singleType',
  collectionName: 'yek-panel-verification',
  info: {
    name: 'yek-panel-verification',
    singularName: 'yek-panel-verification',
    pluralName: 'yek-panel-verifications',
    displayName: 'YEK Panel Verifications',
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
    }
  },
  attributes: {
    google: {
      type: 'string',
      required: false,
      configurable: false,
    },
    yahoo: {
      type: 'string',
      required: false,
      configurable: false,
    },
    yandex: {
      type: 'string',
      required: false,
      configurable: false,
    },
    me: {
      type: 'string',
      required: false,
      configurable: false,
    },
    logRocket: {
      type: 'string',
      required: false,
      configurable: false,
    },
    facebookAppId: {
      type: 'string',
      required: false,
      configurable: false,
    },
    facebookAdmins: {
      type: 'text',
      required: false,
      configurable: false,
    },
  },
};

export default { schema };
