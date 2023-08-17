<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>member/info.jsp</title>
</head>
<body>
	<table id="infoTbl" class="neon4">
			<tr>
				<td id="infoTitle" class="neonTitle" colspan="3">회 원 정 보</td>
			</tr>
			<tr>
				<td class="infoIndex">ID</td>
				<td class="infoInput"><input id="infoId" name="m_id" class="infoInput" readonly="readonly" value="${sessionScope.LoginMember.m_id }"></td>
			</tr>
			<tr>
				<td class="infoIndex">PW</td>
				<td class="infoInputPW" colspan="2">
					<input id="infoPW" type="password" readonly="readonly" value="${sessionScope.LoginMember.m_password }">
					<span id="seePW">PW보기</span>
				</td>
				
			</tr>
			<tr>
				<td class="infoIndex">닉네임</td>
				<td class="infoInput"><input id="infoNickname" readonly="readonly" value="${sessionScope.LoginMember.m_nickname }"></td>
			</tr>
			<tr>
				<td class="infoIndex">이름</td>
				<td class="infoInput" colspan="2"><input readonly="readonly" value="${sessionScope.LoginMember.m_name }"></td>
			</tr>
			<tr>
				<td class="infoIndex">생년월일</td>
				<td class="infoBirth" colspan="2">
					<input readonly="readonly" value="${birthday[0] }">년&nbsp;
					<input readonly="readonly" value="${birthday[1] }">월&nbsp;
					<input readonly="readonly" value="${birthday[2] }">일
				</td>
			</tr>
			<tr>
				<td class="infoIndex">주소</td>
				<td id="infoInputAddr"colspan="2">
					<input value="${addr[0] }" readonly="readonly"><p>
					<input value="${addr[1] }" readonly="readonly"><p>
					<input value="${addr[2] }" readonly="readonly">
				</td>
			</tr>
			<tr>
				<td class="infoIndex">사진</td>
				<td colspan="2">
					<img id="infoPhoto" src="resources/img/${sessionScope.LoginMember.m_photo }">
				</td>
			</tr>
			<tr>
				<td colspan="3" id="infoBtn" align="center">
					<button onclick="goInfoUpdate();">정보수정</button>&nbsp;&nbsp;&nbsp;&nbsp;
					<button onclick="goMemberOut();">회원탈퇴</button>
				</td>
			</tr>
		</table>
</body>
</html>