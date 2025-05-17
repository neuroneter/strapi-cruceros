module.exports = {
        'localazy': {
        enabled: true,
        config: {
            apiKey: process.env.LOCALAZY_API_KEY,  // Tu API key de Localazy
            projectId: process.env.LOCALAZY_PROJECT_ID,  // ID de tu proyecto en Localazy
            upload: true,  // Si deseas que Strapi suba las traducciones a Localazy
            download: true,  // Si deseas que Strapi descargue las traducciones de Localazy
        },
     },
  };