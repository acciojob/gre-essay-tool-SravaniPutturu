//your code here
const input = document.getElementById('evaluatedText');
const h3 = document.getElementById('wordCount');
var content = "";
input.addEventListener('input',()=>{
	
	content = input.value.trim();
	
	h3.innerHTML = content.split(/\s+/ig).length;
})