<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>member/updateCheck.jsp</title>
</head>
<body>
	<table id="icTbl" class="neon4">
<form action="member.info.go" method="POST" name="ucForm">
		<tr>
			<td id="icTitle" class="neonTitle" colspan="2" align="center">정 보 확 인</td>
		</tr>
		<tr>
			<td class="icIndex">ID</td>
			<td id="icInputID">
				<input name="infoID" maxlength="8" autofocus="autofocus" autocomplete="off">
			</td>
		</tr>
		<tr>
			<td class="icIndex">PW</td>
			<td id="icInputPW">
				<input name="infoPW" maxlength="20" type="password">
			</td>
		</tr>
		<tr>
			<td align="center" colspan="2">
				<button class="icBtn">확인</button>&nbsp;&nbsp;&nbsp;
</form>
				<button class="icBtn" onclick="goHome();">취소</button>
			</td>
		</tr>
	</table>

</body>
</html>