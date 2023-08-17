<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>board/boardRead.jsp</title>
</head>
<body>
	<table>
		<tr>
			<c:if test="${sessionScope.LoginMember.m_nickname == sessionScope.Read.b_writer}">
		<form action="board.update.go" method="POST" style="float: left;margin: 0;">
			<td>
				<input type="hidden" name="b_no" value="${sessionScope.Read.b_no }">
					<button id="boardUpdateBtn">수정</button>&nbsp;&nbsp;&nbsp;&nbsp;
		</form>
		<form action="board.delete" method="POST" style="float: right;margin: 0;">
				<input type="hidden" name="b_no" value="${sessionScope.Read.b_no }">
					<button id="boardDeleteBtn">삭제</button>&nbsp;&nbsp;&nbsp;&nbsp;
			</td>
		</form>
			</c:if>
			<td>
				<button onclick="goBoard();" id="goBoardBtn">목록</button>
			</td>
		</tr>
	</table>
	<table id="brTbl" class="neon4">
		<tr>
			<td rowspan="3" id="brImg" align="center">
				<img src="resources/img/${sessionScope.Read.m_photo }">
			</td>
			<td id="brTitle" align="right">제목</td>
			<td id="brTitleContext">${sessionScope.Read.b_title }</td>
		</tr>
		<tr>
			<td id="brWriter" align="right">작성자</td>
			<td id="brWriterContext">${sessionScope.Read.b_writer }</td>
		</tr>
		<tr>
			<td id="brWhen" align="right">작성일</td>
			<td id="brWhenContext">
				<fmt:formatDate value="${sessionScope.Read.b_when }" pattern="yyyy-MM-dd E HH:mm:ss"/>
			</td>
		</tr>
		<tr>
			<td colspan="3" id="brText">
				${sessionScope.Read.b_text }
			</td>
		</tr>
	</table>
	<c:forEach var="r" items="${Reply }">
	<table class="rTbl">
		<tr>
			<td class="rImg" align="center">
				<img src="resources/img/${r.m_photo }" width="50px" height="50px">
			</td>
			<td class="rWriter" align="center">${r.r_writer }</td>
			<td class="rWhen" align="right">
				<fmt:formatDate value="${r.r_when }" pattern="yyyy-MM-dd E HH:mm:ss"/> 
			</td>
			<td>
	<form action="reply.delete" method="POST">
				<input type="hidden" value="${r.r_no }" name="r_no">
				<input type="hidden" value="${param.b_no }" name="b_no">
				<c:if test="${sessionScope.LoginMember.m_nickname == r.r_writer }">
				<button class="replyDeleteBtn">삭제</button>
				</c:if>
	</form>
			</td>
		</tr>
		<tr>
			<td class="rText" colspan="4" align="left">
				${r.r_text }
			</td>
		</tr>
	</table>
	</c:forEach>
	<c:if test="${sessionScope.LoginMember != null }">
	<table id="rwTbl">
	<form name="rForm" action="board.reply" method="POST" onsubmit="return rCheck();">
		<tr>
			<td id="rwText" align="center">
				<textarea name="r_text" maxlength="256"></textarea>
				<input type="hidden" name="b_no" value="${param.b_no }">
				<input type="hidden" name="token" value="${generatedToken }">
				<button id="rwBtn">작성</button>
			</td>
	</form>
		</tr>
	</table>
	</c:if>
</body>
</html>