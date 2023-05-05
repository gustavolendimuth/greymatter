/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const express = require('express');
const bodyParser = require('body-parser');
const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const { SERVICE_ACCOUNT_KEY_FILE, SPREADSHEET_ID, SHEET_NAME } = process.env;

async function saveEmailToSheet({ email, name }) {
  const doc = new GoogleSpreadsheet(SPREADSHEET_ID);
  await doc.useServiceAccountAuth(JSON.parse(SERVICE_ACCOUNT_KEY_FILE));
  await doc.loadInfo();

  const sheet = doc.sheetsByTitle[SHEET_NAME];
  await sheet.addRow({ email, name });
}

app.get('/', (_req, res) => res.send('Grey Matter API'));

app.post('/collect-email', async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).send({ error: 'Email is required' });
    }

    await saveEmailToSheet({ email, name });
    res.status(200).send({ message: 'Email saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send({ error: 'An error occurred while saving the email' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
