// our node server 

const express = require('express');
const bodyParser = require('body-parser');
const ExcelJS = required('exceljs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// read data from excel file

const workbook = new ExcelJS.Workbook();
const userData = [];

workbook.xlsx.readFile('../backEnd/auth_excel.xlsx')