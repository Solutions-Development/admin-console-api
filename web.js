const exec = require('child_process').exec;

exec("ts-node index.ts", function(e,stdout,stderr){
	console.log(stdout);
	console.log(stderr);
        console.log(e);
})


