import express from 'express';
import fs from 'fs';

const app = express();

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST');
  res.setHeader('Access-Control-Allow-Headers','Content-Type');

  next();
});

app.get("/expenses", (req, res) => {
    // Read the JSON file
    fs.readFile('./data/expenses.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        
        const expenses = JSON.parse(data);
        
        
        res.json(expenses);
    });
});

app.listen(3005, () => {
    console.log("example app is started at http://localhost:3005")
});
