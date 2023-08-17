<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>member/signup.jsp</title>
</head>
<body>
	<form name="signupForm" action="member.signup" method="POST" enctype="multipart/form-data" onsubmit="return signupCheck();">
		<table id="signupTbl" class="neon4">
			<tr>
				<td id="signupTitle" class="neonTitle" colspan="3">회 원 가 입</td>
			</tr>
			<tr>
				<td class="signupIndex">ID</td>
				<td class="signupInput"><input id="signupId" name="m_id" class="signupInput" autofocus="autofocus" autocomplete="off" placeholder="2~8자, 영어 및 숫자" maxlength="8"></td>
				<td id="signupIdChk">이미 가입된 아이디입니다</td>
			</tr>
			<tr>
				<td class="signupIndex">PW</td>
				<td class="signupInputPW" colspan="2"><input name="m_password" type="password" placeholder="3~20자, 영어, 숫자 및 !,@" maxlength="20"></td>
			</tr>
			<tr>
				<td class="signupIndex">PW확인</td>
				<td class="signupInputPW" colspan="2"><input name="m_passwordChk" type="password" maxlength="20"></td>
			</tr>
			<tr>
				<td class="signupIndex">닉네임</td>
				<td class="signupInput"><input id="signupNickname" name="m_nickname" autocomplete="off" placeholder="2~8자, 영어 및 숫자" maxlength="8"></td>
				<td id="signupNicknameChk">이미 가입된 닉네임입니다</td>
			</tr>
			<tr>
				<td class="signupIndex">이름</td>
				<td class="signupInput" colspan="2"><input name="m_name" autocomplete="off" placeholder="2~8자" maxlength="8"></td>
			</tr>
			<tr>
				<td class="signupIndex">생년월일</td>
				<td class="signupBirth" colspan="2">
					<input name="m_y" autocomplete="off" placeholder="XXXX" maxlength="4">년&nbsp;
					<input name="m_m" autocomplete="off" placeholder="XX" maxlength="2">월&nbsp;
					<input name="m_d" autocomplete="off" placeholder="XX" maxlength="2">일
				</td>
			</tr>
			<tr>
				<td class="signupIndex">주소</td>
				<td id="signupInputAddr"colspan="2">
					<input name="m_addr1" id="signupAddr1" autocomplete="off" placeholder="우편번호" readonly="readonly"><p>
					<input name="m_addr2" id="signupAddr2" autocomplete="off" placeholder="주소" readonly="readonly"><p>
					<input name="m_addr3" autocomplete="off" placeholder="상세주소">
				</td>
			</tr>
			<tr>
				<td class="signupIndex">사진</td>
				<td colspan="2">
					<input class="imgUpload" id="signupPhoto" name="m_photo" type="file"><p>
					<span id="photoNotice">png, jpg, jpeg, gif 등록가능</span>
				</td>
			</tr>
			<tr>
				<td colspan="3" id="signupBtn" align="center">
					<button>등록하기</button>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>