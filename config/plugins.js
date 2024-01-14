module.exports = ({ env }) => ({
  'users-permissions': {
    config: {
      jwtSecret: env('JWT_SECRET'),
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  email: {
    provider: 'sendmail',
    providerOptions: {
      dkim: {
        privateKey: env('DKIM_PRIVATE'),
        keySelector: 'cname', // the same as the one set in DNS txt record, use online dns lookup tools to be sure that is retreivable
      },
    },
    settings: {
      defaultFrom: 'waterwaycomp@gmail.com',
      defaultReplyTo: 'waterwaycomp@gmail.com',
    },
  },
});
