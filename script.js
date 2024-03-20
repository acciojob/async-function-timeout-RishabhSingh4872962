//your JS code here. If required.

const text=document.getElementById("text");
const delay=document.getElementById("delay");

const output=document.getElementById("output");
const btn=document.getElementById("btn"); 

function handleDelay() {
	setTimeout(()=>{
		output.innerText=text.value 
	},delay.value)
}

