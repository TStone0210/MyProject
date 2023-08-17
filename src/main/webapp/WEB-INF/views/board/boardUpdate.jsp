<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>board/boardUpdate.jsp</title>
</head>
<body>
	<table id="buTbl" class="neon4">
		<form action="board.update" method="POST" onsubmit="return buCheck();">
			<input type="hidden" name="token" value="${generatedToken }">
			<input type="hidden" value="${sessionScope.Read.b_no }" name="b_no">
			<tr>
				<td id="buTitle" align="left">
					제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name="b_title" maxlength="20" autofocus="autofocus" value="${sessionScope.Read.b_title }">
				</td>
			</tr>
			<tr>
				<td align="center">
					<textarea name="b_text" id="buText" maxlength="512" >${sessionScope.Read.b_text }</textarea>
				</td>
			</tr>
			<tr>
				<td align="center" id="buBtn">
					<button id="updateBtn">수정</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		</form>
					<button onclick="goBoard();">취소</button>
				</td>
			</tr>
	</table>
</body>
</html>