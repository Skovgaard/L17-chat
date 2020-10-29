const config = {
    // databaseURI: 'mongodb://localhost' + '/chatDB', // or MongoDB Atlas connection URI
    databaseURI: 'mongodb+srv://dbUser:dbUserPassword@cluster0.yhd7v.mongodb.net/<dbname>?retryWrites=true&w=majority', // or MongoDB Atlas connection URI
    localPort: 8080
};

module.exports = config;