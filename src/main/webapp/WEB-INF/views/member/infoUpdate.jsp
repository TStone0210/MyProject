<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>member/infoUpdate.jsp</title>
</head>
<body>
		<table id="iuTbl" class="neon4">
<form name="iuForm" action="member.infoUpdate" method="POST" enctype="multipart/form-data" onsubmit="return iuCheck();">
			<tr>
				<td id="iuTitle" class="neonTitle" colspan="3">회 원 정 보</td>
			</tr>
			<tr>
				<td class="iuIndex">ID</td>
				<td class="iuInput" colspan="2"><input id="iuId" name="m_id" class="iuInput" value="${sessionScope.LoginMember.m_id }" readonly="readonly"></td>
			</tr>
			<tr>
				<td class="iuIndex">PW</td>
				<td class="iuInputPW" colspan="2"><input name="m_password" type="password" placeholder="3~20자, 영어, 숫자 및 !,@" maxlength="20"></td>
			</tr>
			<tr>
				<td class="iuIndex">PW확인</td>
				<td class="iuInputPW" colspan="2"><input name="m_passwordChk" type="password" maxlength="20"></td>
			</tr>
			<tr>
				<td class="iuIndex">닉네임</td>
				<td class="iuInput"><input id="iuNickname" name="m_nickname" autocomplete="off" placeholder="2~8자, 영어 및 숫자" maxlength="8" value="${sessionScope.LoginMember.m_nickname }"></td>
				<td id="iuNicknameChk">이미 가입된 닉네임입니다</td>
			</tr>
			<tr>
				<td class="iuIndex">이름</td>
				<td class="iuInput" colspan="2"><input name="m_name" autocomplete="off" placeholder="2~8자" maxlength="8" value="${sessionScope.LoginMember.m_name }"></td>
			</tr>
			<tr>
				<td class="iuIndex">생년월일</td>
				<td class="iuBirth" colspan="2">
					<input name="m_y" autocomplete="off" placeholder="XXXX" maxlength="4" value="${birthday[0] }">년&nbsp;
					<input name="m_m" autocomplete="off" placeholder="XX" maxlength="2" value="${birthday[1] }">월&nbsp;
					<input name="m_d" autocomplete="off" placeholder="XX" maxlength="2" value="${birthday[2] }">일
				</td>
			</tr>
			<tr>
				<td class="iuIndex">주소</td>
				<td id="iuInputAddr"colspan="2">
					<input name="m_addr1" id="iuAddr1" autocomplete="off" placeholder="우편번호" readonly="readonly" value="${addr[0] }"><p>
					<input name="m_addr2" id="iuAddr2" autocomplete="off" placeholder="주소" readonly="readonly" value="${addr[1] }"><p>
					<input name="m_addr3" autocomplete="off" placeholder="상세주소" value="${addr[2] }">
				</td>
			</tr>
			<tr>
				<td class="iuIndex">사진</td>
				<td colspan="2">
					<input class="imgUpload" id="iuPhoto" name="m_photo" type="file" ><p>
					<span id="photoNotice">png, jpg, jpeg, gif 등록가능</span>
				</td>
			</tr>
			<tr>
				<td colspan="3" id="iuBtn" align="center">
					<button>수정하기</button>&nbsp;&nbsp;&nbsp;&nbsp;
	</form>
					<button onclick="goHome();">취소</button>
				</td>
			</tr>
		</table>
		<input id="iuNicknameNow" type="hidden" value="${sessionScope.LoginMember.m_nickname }">
</body>
</html>