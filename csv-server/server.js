// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// app.use(bodyParser.json());

// const cors = require('cors');
// app.use(cors());

// // Paths to CSV files
// const formTutorCsvPath = path.join(__dirname, 'tutor_data.csv');
// const formTuitionCsvPath = path.join(__dirname, 'tuition_data.csv');

// // Create CSV files if they don't exist
// if (!fs.existsSync(formTutorCsvPath)) {
//   fs.writeFileSync(formTutorCsvPath, 'name,email,contact,qualifications,subjects,location,date,time\n');
// }
// if (!fs.existsSync(formTuitionCsvPath)) {
//   fs.writeFileSync(formTuitionCsvPath, 'name,contact,class,location,date,time\n');
// }

// // Route for FormTutor data
// app.post('/save-tutor-data', (req, res) => {
//   const { name, email, contact, qualifications, subjects, location, date, time } = req.body;
//   const line = `${name},${email},${contact},${qualifications},${subjects},${location},${date},${time}\n`;

//   fs.appendFile(formTutorCsvPath, line, err => {
//     if (err) {
//       return res.status(500).send('Error saving data');
//     }
//     res.send('Data saved successfully');
//   });
// });

// // Route for FormTuition data
// app.post('/save-tuition-data', (req, res) => {
//   const { name, contact, class: studentClass, location, date, time } = req.body;
//   const line = `${name},${contact},${studentClass},${location},${date},${time}\n`;

//   fs.appendFile(formTuitionCsvPath, line, err => {
//     if (err) {
//       return res.status(500).send('Error saving data');
//     }
//     res.send('Data saved successfully');
//   });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });



const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

const formTutorCsvPath = path.join(__dirname, 'tutor_data.csv');
const formTuitionCsvPath = path.join(__dirname, 'tuition_data.csv');
const formMeritCsvPath = path.join(__dirname, 'merit_data.csv');

if (!fs.existsSync(formTutorCsvPath)) {
  fs.writeFileSync(formTutorCsvPath, 'name,email,contact,qualifications,subjects,location,date,time\n');
}
if (!fs.existsSync(formTuitionCsvPath)) {
  fs.writeFileSync(formTuitionCsvPath, 'name,contact,class,location,date,time\n');
}
if (!fs.existsSync(formMeritCsvPath)) {
  fs.writeFileSync(formMeritCsvPath, 'name,email,contact,class,location,plan,date,time\n');
}

//FormTutor
app.post('/save-tutor-data', (req, res) => {
  const { name, email, contact, qualifications, subjects, location, date, time } = req.body;
  const line = `${name},${email},${contact},${qualifications},${subjects},${location},${date},${time}\n`;

  fs.appendFile(formTutorCsvPath, line, err => {
    if (err) {
      return res.status(500).send('Error saving data');
    }
    res.send('Data saved successfully');
  });
});

//FormTuition
app.post('/save-tuition-data', (req, res) => {
  const { name, contact, class: studentClass, location, date, time } = req.body;
  const line = `${name},${contact},${studentClass},${location},${date},${time}\n`;

  fs.appendFile(formTuitionCsvPath, line, err => {
    if (err) {
      return res.status(500).send('Error saving data');
    }
    res.send('Data saved successfully');
  });
});

//FormMerit
app.post('/save-merit-data', (req, res) => {
  const { name, email, contact, class: studentClass, location, plan, date, time } = req.body;
  const line = `${name},${email},${contact},${studentClass},${location},${plan},${date},${time}\n`;

  fs.appendFile(formMeritCsvPath, line, err => {
    if (err) {
      return res.status(500).send('Error saving data');
    }
    res.send('Data saved successfully');
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
