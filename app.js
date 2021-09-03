const express= require('express');
const app=express();
const path=require('path');
const port=3030; 

app.listen(port,()=> {console.log('servidor funcionando');});
app.use(express.static('public'));

/*rutas*/ 
const mainRouter= require('./routers/main');
app.use('/',mainRouter);
/*configuracion del motor de plantilla*/ /*en terminal instalar ejs con npm install  i ejs*/

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
