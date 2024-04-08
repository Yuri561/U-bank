

const ExcelJS = require('exceljs');

// create a new workbook 



const workbook = new ExcelJS.Workbook();

// add a worksheet to the workbook
workbook.xlsx.readFile('../backEnd/auth_excel.xlsx')
    .then(()=>{
        const worksheet = workbook.getWorksheet(1);

        // iterate over rows and columns to read our worksheet data
        worksheet.eachRow((row, rowNumber)=>{
            console.log(`Row ${rowNumber}:`);
            row.eachCell((cell, colNumber)=>{
                console.log(`Column ${colNumber}: ${cell.value}`);
            })
        })
    })
    .catch((err)=>{
        console.log('Error reading worksheet data');
    })