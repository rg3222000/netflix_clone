const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
tabItems.forEach(item => item.addEventListener('click',selectItem));

function selectItem(e){
	console.log(this.id);
	removeBorder();
	removeShow();
   // this.classList.add('show');
	this.classList.add('tab-border');
	//const tabContentItem = document.querySelector('t-content');
	if(this.id=="tab-1")
	{
		document.getElementById("tab-1-content").classList.add('show');
	}
	else if(this.id=="tab-2"){
		document.getElementById("tab-2-content").classList.add('show');
	}
	else if(this.id=="tab-3")
		document.getElementById("tab-3-content").classList.add('show');
}
function removeBorder(){
	tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
	tabContentItems.forEach(item => item.classList.remove('show'));
}


