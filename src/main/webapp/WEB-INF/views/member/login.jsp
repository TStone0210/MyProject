<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>member/login.jsp</title>
</head>
<body>
		<table id="loginTbl" class="neon4">
	<form action="member.login" method="POST">
			<tr>
				<td class="loginIndex">ID</td>
				<td align="center" id="loginInputID"><input id="loginId" name="m_id" autocomplete="off" maxlength="8" value="${cookie.lastLoginId.value }"></td>
			</tr>
			<tr>
				<td class="loginIndex">PW</td>
				<td align="center" id="loginInputPW"><input name="m_password" type="password" maxlength="20"></td>
			</tr>
			<tr>
				<td colspan="2" id="loginBtn" align="center">
					<button>로그인</button>&nbsp;&nbsp;&nbsp;
	</form>
					<button onclick="goSignup();">회원가입</button>
				</td>
			</tr>
		</table>
</body>
</html>