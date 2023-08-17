<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>board/boardWrite.jsp</title>
</head>
<body>
	<table id="bwTbl" class="neon4">
		<form name="bwForm" action="board.write" method="POST" onsubmit="return bwCheck();">
			<input type="hidden" name="token" value="${generatedToken }">
			<tr>
				<td id="bwTitle" align="left" name="bwTitle">
					제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input name="b_title" maxlength="20" autofocus="autofocus">
				</td>
			</tr>
			<tr>
				<td align="center">
					<textarea name="b_text" id="bwText" maxlength="512"></textarea>
				</td>
			</tr>
			<tr>
				<td align="center" id="bwBtn">
					<button>작성</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		</form>
					<button onclick="goBoard();">취소</button>
				</td>
			</tr>
	</table>
</body>
</html>