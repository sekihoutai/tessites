document.addEventListener("DOMContentLoaded", function () {
	var btn = document.getElementById('btn');
	btn.addEventListener("click", myalert);	
}, false);

function myalert() {
	while (true) {
		window.alert("ウイルスが削除できません");
	}
}

