//check.js

function signupCheck() {
	let su_id = document.signupForm.m_id;
	let su_pw = document.signupForm.m_password;
	let su_pwChk = document.signupForm.m_passwordChk;
	let su_nickname = document.signupForm.m_nickname;
	let su_name = document.signupForm.m_name;
	let su_year = document.signupForm.m_y;
	let su_month = document.signupForm.m_m;
	let su_day = document.signupForm.m_d;
	let su_addr1 = document.signupForm.m_addr1;
	let su_addr2 = document.signupForm.m_addr2;
	let su_addr3 = document.signupForm.m_addr3;
	let su_photo = document.signupForm.m_photo;
	
	if (isEmpty(su_id)) {
		alert('아이디를 입력해주세요');
		su_id.focus();
		return false;
	} else if (atLeastLetter(su_id, 2)) {
		alert('아이디는 최소 2자입니다');
		su_id.value = "";
		su_id.focus();
		return false;
	} else if (containsAnotherID(su_id)) {
		alert('아이디는 영어 및 숫자만 사용 가능합니다');
		su_id.value = "";
		su_id.focus();
		return false;
	} else if ($('#signupIdChk').css('opacity') == 1) {
		alert('이미 가입된 아이디입니다');
		su_id.value = "";
		su_id.focus();
		return false;
	} else if (isEmpty(su_pw)) {
		alert('비밀번호를 입력해주세요');
		su_pw.focus();
		return false;
	} else if (atLeastLetter(su_pw, 3)) {
		alert('비밀번호는 최소 3자입니다');
		su_pw.value = "";
		su_pw.focus();
		return false;
	} else if (containsAnotherPW(su_pw)) {
		alert('비밀번호는 영어 및 숫자와 !,@만 사용 가능합니다');
		su_pw.value = "";
		su_pw.focus();
		return false;
	} else if (notEqualPW(su_pw, su_pwChk)) {
		alert('비밀번호가 일치하지 않습니다');
		su_pwChk.value = "";
		su_pwChk.focus();
		return false;
	} else if (isEmpty(su_nickname)) {
		alert('닉네임을 입력해주세요');
		su_nickname.focus();
		return false;
	} else if (atLeastLetter(su_nickname, 2)) {
		alert('닉네임은 최소 2자입니다');
		su_nickname.value = "";
		su_nickname.focus();
		return false;
	} else if (containsAnotherID(su_nickname)) {
		alert('닉네임은 영어 및 숫자만 사용 가능합니다');
		su_nickname.value = "";
		su_nickname.focus();
		return false;
	} else if ($('#signupNicknameChk').css('opacity') == 1) {
		alert('이미 가입된 닉네임입니다');
		su_nickname.value = "";
		su_nickname.focus();
		return false;
	} else if (isEmpty(su_name)) {
		alert('이름을 입력해주세요');
		su_name.focus();
		return false;
	} else if (atLeastLetter(su_name, 2)) {
		alert('이름은 최소 2자입니다');
		su_name.value = "";
		su_name.focus();
		return false;
	} else if (atLeastLetter(su_year, 4)) {
		alert('년도 4자리를 정확히 입력해주세요');
		su_year.value = "";
		su_year.focus();
		return false;
	} else if (isNotNumber(su_year)) {
		alert('생년월일은 숫자만 입력해주세요');
		su_year.value = "";
		su_year.focus();
		return false;
	} else if (isEmpty(su_month)) {
		alert('태어난 월을 입력해주세요');
		su_month.focus();
		return false;
	} else if (isNotNumber(su_month)) {
		alert('생년월일은 숫자만 입력해주세요');
		su_month.value = "";
		su_month.focus();
		return false;
	} else if (isEmpty(su_day)) {
		alert('태어난 일을 입력해주세요');
		su_day.focus();
		return false;
	} else if (isNotNumber(su_day)) {
		alert('생년월일은 숫자만 입력해주세요');
		su_day.value = "";
		su_day.focus();
		return false;
	} else if (wrongDay(su_day)) {
		alert('생년월일을 정확히 입력해주세요');
		su_day.value = "";
		su_day.focus();
		return false;
	} else if (wrongMonth(su_month)) {
		alert('생년월일을 정확히 입력해주세요');
		su_month.value = "";
		su_month.focus();
		return false;
	} else if (day30(su_month, su_day)) {
		alert('생년월일을 정확히 입력해주세요');
		su_day.value = "";
		su_day.focus();
		return false;
	} else if (day29(su_month, su_day)) {
		alert('생년월일을 정확히 입력해주세요');
		su_day.value = "";
		su_day.focus();
		return false;
	} else if (day28(su_year, su_month, su_day)) {
		alert('생년월일을 정확히 입력해주세요');
		su_day.value = "";
		su_day.focus();
		return false;
	} else if (isEmpty(su_addr1) || isEmpty(su_addr2) || isEmpty(su_addr3)) {
		alert('주소를 입력해주세요');
		su_addr1.value = "";
		su_addr2.value = "";
		su_addr3.value = "";
		return false;
	} else if (isEmpty(su_photo)) {
		alert('사진을 등록해주세요');
		return false;
	} else if (isNotType(su_photo, "png") && isNotType(su_photo, "jpg") && isNotType(su_photo, "jpeg") && isNotType(su_photo, "gif") && isNotType(su_photo, "PNG") && isNotType(su_photo, "JPG") && isNotType(su_photo, "JPEG") && isNotType(su_photo, "GIF")) {
		alert('확장자는 png, jpg, jpeg, gif만 등록 가능합니다');
		su_photo.value = "";
		return false;
	}
	let t = confirm('회원가입을 하시겠습니까?');
	if (t) {
		return true;
	} else {
		return false;
	}
}

function iuCheck() {
	let iu_pw = document.iuForm.m_password;
	let iu_pwChk = document.iuForm.m_passwordChk;
	let iu_nickname = document.iuForm.m_nickname;
	let iu_name = document.iuForm.m_name;
	let iu_year = document.iuForm.m_y;
	let iu_month = document.iuForm.m_m;
	let iu_day = document.iuForm.m_d;
	let iu_addr1 = document.iuForm.m_addr1;
	let iu_addr2 = document.iuForm.m_addr2;
	let iu_addr3 = document.iuForm.m_addr3;
	let iu_photo = document.iuForm.m_photo;
	
	if (isEmpty(iu_pw)) {
		alert('비밀번호를 입력해주세요');
		iu_pw.focus();
		return false;
	} else if (atLeastLetter(iu_pw, 3)) {
		alert('비밀번호는 최소 3자입니다');
		iu_pw.value = "";
		iu_pw.focus();
		return false;
	} else if (containsAnotherPW(iu_pw)) {
		alert('비밀번호는 영어 및 숫자와 !,@만 사용 가능합니다');
		iu_pw.value = "";
		iu_pw.focus();
		return false;
	} else if (notEqualPW(iu_pw, iu_pwChk)) {
		alert('비밀번호가 일치하지 않습니다');
		iu_pwChk.value = "";
		iu_pwChk.focus();
		return false;
	} else if (isEmpty(iu_nickname)) {
		alert('닉네임을 입력해주세요');
		iu_nickname.focus();
		return false;
	} else if (atLeastLetter(iu_nickname, 2)) {
		alert('닉네임은 최소 2자입니다');
		iu_nickname.value = "";
		iu_nickname.focus();
		return false;
	} else if (containsAnotherID(iu_nickname)) {
		alert('닉네임은 영어 및 숫자만 사용 가능합니다');
		iu_nickname.value = "";
		iu_nickname.focus();
		return false;
	} else if ($('#iuNicknameChk').css('opacity') == 1) {
		alert('이미 가입된 닉네임입니다');
		iu_nickname.value = "";
		iu_nickname.focus();
		return false;
	} else if (isEmpty(iu_name)) {
		alert('이름을 입력해주세요');
		iu_name.focus();
		return false;
	} else if (atLeastLetter(iu_name, 2)) {
		alert('이름은 최소 2자입니다');
		iu_name.value = "";
		iu_name.focus();
		return false;
	} else if (atLeastLetter(iu_year, 4)) {
		alert('년도 4자리를 정확히 입력해주세요');
		iu_year.value = "";
		iu_year.focus();
		return false;
	} else if (isNotNumber(iu_year)) {
		alert('생년월일은 숫자만 입력해주세요');
		iu_year.value = "";
		iu_year.focus();
		return false;
	} else if (isEmpty(iu_month)) {
		alert('태어난 월을 입력해주세요');
		iu_month.focus();
		return false;
	} else if (isNotNumber(iu_month)) {
		alert('생년월일은 숫자만 입력해주세요');
		iu_month.value = "";
		iu_month.focus();
		return false;
	} else if (isEmpty(iu_day)) {
		alert('태어난 일을 입력해주세요');
		iu_day.focus();
		return false;
	} else if (isNotNumber(iu_day)) {
		alert('생년월일은 숫자만 입력해주세요');
		iu_day.value = "";
		iu_day.focus();
		return false;
	} else if (wrongDay(iu_day)) {
		alert('생년월일을 정확히 입력해주세요');
		iu_day.value = "";
		iu_day.focus();
		return false;
	} else if (wrongMonth(iu_month)) {
		alert('생년월일을 정확히 입력해주세요');
		iu_month.value = "";
		iu_month.focus();
		return false;
	} else if (day30(iu_month, iu_day)) {
		alert('생년월일을 정확히 입력해주세요');
		iu_day.value = "";
		iu_day.focus();
		return false;
	} else if (day29(iu_month, iu_day)) {
		alert('생년월일을 정확히 입력해주세요');
		iu_day.value = "";
		iu_day.focus();
		return false;
	} else if (day28(iu_year, iu_month, iu_day)) {
		alert('생년월일을 정확히 입력해주세요');
		iu_day.value = "";
		iu_day.focus();
		return false;
	} else if (isEmpty(iu_addr1) || isEmpty(iu_addr2) || isEmpty(iu_addr3)) {
		alert('주소를 입력해주세요');
		iu_addr1.value = "";
		iu_addr2.value = "";
		iu_addr3.value = "";
		return false;
	} else if (isEmpty(iu_photo)) {
		let t = confirm('정보를 수정하시겠습니까?');
		if (t) {
			return true;
		} else {
			return false;
		}
	} else if (isNotType(iu_photo, "png") && isNotType(iu_photo, "jpg") && isNotType(iu_photo, "jpeg") && isNotType(iu_photo, "gif") && isNotType(iu_photo, "PNG") && isNotType(iu_photo, "JPG") && isNotType(iu_photo, "JPEG") && isNotType(iu_photo, "GIF")) {
		alert('확장자는 png, jpg, jpeg, gif만 등록 가능합니다');
		iu_photo.value = "";
		return false;
	}
	let t = confirm('정보를 수정하시겠습니까?');
	if (t) {
		return true;
	} else {
		return false;
	}
}

function bwCheck() {
	let title = document.bwForm.b_title;
	let text = document.bwForm.b_text;
	
	if (isEmpty(title)) {
		alert('제목을 입력해주세요');
		title.focus();
		return false;
	} else if (isEmpty(text)) {
		alert('내용을 입력해주세요');
		text.focus();
		return false;
	}
	return true;
}

function buCheck() {
	let title = document.buForm.b_title;
	let text = document.buForm.b_text;
	if (isEmpty(title)) {
		alert('제목을 입력해주세요');
		title.focus();
		return false;
	} else if (isEmpty(text)) {
		alert('내용을 입력해주세요');
		text.focus();
		return false;
	}
	return true;
}

function rCheck() {
	let text = document.rForm.r_text;
	if (isEmpty(text)) {
		alert('내용을 입력해주세요');
		text.focus();
		return false;
	}
	return true;
}