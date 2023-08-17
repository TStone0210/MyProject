//go.js

function goHome () {
	location.href = "index.go";
}

function goSignup () {
	location.href = "member.signup.go";
}

function goLightOff () {
	let t = confirm('불을 끄시겠습니까?')
	if (t) {
		location.href = "lightOff.go";
	} else {
		return false;
	}
}

function goLogout () {
	let t = confirm('로그아웃 하시겠습니까?');
	if (t) {
		location.href = "member.logout";
	} else {
		return false;
	}
}

function goInfoUpdate () {
	location.href = "member.infoUpdate.go";
}

function goMemberOut () {
	let t = confirm('정말로 탈퇴하시겠습니까?');
	if (t) {
		location.href = "member.memberOut.go";
	} else {
		return false;
	}
}

function goBoard () {
	location.href = "board.go";
}

function goBoardWrite () {
	location.href = "board.write.go";
}

