const options = {
    swaggerDefinition: {
        info: {
            title: 'Pokemon API',
            version: '1.0.0',
            description: 'TODO modifié',
        },
    },
    apis: ['./src/presentation/routers/**/*.ts'], // Spécifiez le chemin de vos fichiers de routes
};

module.exports = options;
