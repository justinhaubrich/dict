var express = require("express");
var app = express();
var cors = require('cors');
/*app.use((req,res,next)=>{
	res.append('Access-Control-Allow-Origin',['*']);
	res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	    res.append('Access-Control-Allow-Headers', 'Content-Type');
	next();
});*/
app.use(cors());

app.listen(3010, () => {
	console.log("server running on port 3010");
});

app.get("/definition", (req,res,next) => {
	const { exec } = require('child_process');
	console.log(exec);
	exec(`dict "${req.query.def}"`,(err,stdout,stderr) => {
		global.definition = [stdout,stderr];
		res.json([req.query.def,global.definition,]);
	});
});
