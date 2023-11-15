const options = {
    swaggerDefinition: {
        info: {
            title: 'Pokemon API',
            version: '1.0.0',
            description: 'TODO modifié',
        },
    },
    apis: ['./src/controllers/*.js'],
};

module.exports = options;