<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>member/loginSuccess.jsp</title>
</head>
<body>
		<table id="loginTbl" class="neon4">
	<form action="member.info.check">
			<tr>
				<td id="lsPhoto" align="center">
					<img src="resources/img/${sessionScope.LoginMember.m_photo }">
				</td>
			</tr>
			<tr>
				<td id="lsNickname" align="center">
					${sessionScope.LoginMember.m_nickname }
				</td>
			</tr>
			<tr>
				<td id="lsBtn" align="center">
					<button>회원정보</button>&nbsp;&nbsp;&nbsp;
	</form>	
					<button onclick="goLogout();">로그아웃</button>
				</td>
			</tr>
		</table>
</body>
</html>