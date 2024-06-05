const express = require('express');
const bodyParser = require('body-parser');
const firebase = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');

const app = express();
const port = 3001;

app.use(bodyParser.json());

const firebaseConfig = {
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://projet-jeux-olympiques-paris.firebaseio.com'
};

firebase.initializeApp(firebaseConfig);

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const userRecord = await firebase.auth().createUser({
      email,
      password
    });
    res.status(200).send(userRecord);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.post('/api/reset-password', async (req, res) => {
  const { email } = req.body;
  try {
    await firebase.auth().sendPasswordResetEmail(email);
    res.status(200).send("Password reset email sent successfully");
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
