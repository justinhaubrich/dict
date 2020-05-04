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
	
	//validate user input on the server side
	let dictRegex = /^[A-Za-z\s]*$/;
			req.query.def = value[0];//.match(/^[a-z\s]*$/);
				if (null != req.query.def.toString().match(dictRegex) && req.query.def.toString().match(dictRegex).length > 0) {
					
				
	//
	exec(`dict "${req.query.def}"`,(err,stdout,stderr) => {
		global.definition = [stdout,stderr];
		res.json([req.query.def,global.definition,]);
	});
				} else {res.json('Invalid');}
});
