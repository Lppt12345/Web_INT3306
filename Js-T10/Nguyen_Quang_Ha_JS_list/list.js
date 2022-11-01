var chks = document.getElementsByName("chk");
var rows = document.getElementsByName("row");
const change = new Event('change');

for (let i = 0; i < chks.length; i++){
	chks[i].addEventListener('change',function() {
});
}
	

for (let i = 0; i < chks.length; i++)
	chks[i].onchange = function() {
			if (this.checked) {
				this.parentNode.parentNode.classList.add("selected");
			} else {
				this.parentNode.parentNode.classList.remove("selected");			
			}
	};


function changeCheckBox(id){
	chks[id].checked = !chks[id].checked
	chks[id].dispatchEvent(change)
}



