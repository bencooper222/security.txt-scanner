const admin = require('firebase-admin');

const serviceAccount = require('./securitytxt-scanner-a8b7b00b1117.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();