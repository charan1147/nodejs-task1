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






