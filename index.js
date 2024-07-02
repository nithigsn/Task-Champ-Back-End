const app=require('./app');
const http =require('http').Server(app);

const PORT=3436;

app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`);
});