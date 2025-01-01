const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
const folderPath=path.join(__dirname,"public")




app.post("/createfile",(req,res)=>{
  const timestamp = new Date().toISOString().replace(/[-:T]/g, '').split('.')[0]
  const fileName=`${timestamp}.txt`
  const filepath=path.join(folderPath,fileName)
  
  const content= req.body.content||timestamp
  fs.writeFile(filepath,content,(err)=>{
    if(err){
      console.log("error while creating file",err);
      return res.status(500).json({ message: 'Error creating file', error: err.message });
      
    }
    res.status(200).json({message:"file reated succesfully",fileName})
  })
})


const port = 50003;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});











// const path = require("path");
// const fs = require("fs");


// const folderPath = path.join(__dirname, "public");


// const filePath = path.join(folderPath, "notes.txt");


// const content = "Hello world!";


// fs.writeFile(filePath, content, (err) => {
//   if (err) {
//     console.error("Error creating file:", err);
//   } else {
//     console.log(`File created successfully: ${filePath}`);
//   }
// });


// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const app = express();


// const folderPath = path.join(__dirname, 'public');



// app.get('/create-file', (req, res) => {

//   const filePath = path.join(folderPath, 'simpleFile.txt');
  

//   const content = 'Hello, this is a simple file created using Express!';


//   fs.writeFile(filePath, content, (err) => {
//     if (err) {
//       console.error('Error creating file:', err);
//       return res.status(500).json({ message: 'Error creating file', error: err.message });
//     }
//     res.status(200).json({ message: 'File created successfully', fileName: 'simpleFile.txt' });
//   });
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });
