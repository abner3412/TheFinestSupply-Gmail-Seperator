const fs = require('fs');
const { join } = require('path');


const emails = JSON.parse(fs.readFileSync("./emails.json")).data;

for (let email of emails){

let gmail = email.substring(0, email.indexOf(":"));
console.log(gmail)
fs.appendFileSync("./gmails.txt", `${gmail} \n`, function(err){
    if(err)
      return err;
});
}