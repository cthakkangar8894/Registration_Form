


const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/empform')
.then(()=>{
    console.log(`connect`);
})


.catch((error)=>{
    console.log(error);
})