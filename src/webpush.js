const webpush = require('web-push')

// Utilizar claves publica y privada
webpush.setVapidDetails(
    'mailto:claudiobessone@gmail.com', 
    process.env.PUBLIC_VAPID_KEY, 
    process.env.PRIVATE_VAPID_KEY
);

module.exports = webpush;