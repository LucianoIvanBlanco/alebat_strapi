module.exports = [
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: 'strapi::poweredBy',
    config: {
      poweredBy: 'Alebat S.L'
    }
  },
  {
    name: 'strapi::body',
    config: {
      formLimit: '256mb', // modify form body
      jsonLimit: '256mb', // modify JSON body
      textLimit: '256mb', // modify text body
      formidable: {
        maxFileSize: 1000 * 1024 * 1024 // multipart data, modify here limit of uploaded file size
      }
    }
  },
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ['\'self\'', 'https:'],
          'img-src': ['\'self\'', 'data:', 'blob:', 'd33wusrb9waivf.cloudfront.net', 'market-assets.strapi.io'],
          'media-src': ['\'self\'', 'data:', 'blob:', 'd33wusrb9waivf.cloudfront.net', 'market-assets.strapi.io'],
          'script-src': ["'self'", "editor.unlayer.com", "editor.unlayer.com/embed.js"],
          'frame-src': ["'self'", "editor.unlayer.com"],
          upgradeInsecureRequests: null
        }
      }
    }
  }
]
