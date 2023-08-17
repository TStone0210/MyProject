<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>board/board.jsp</title>
</head>
<body>
	<table class="neon4" id="boardTbl">
<form action="board.search" method="POST">
		<tr>
			<td colspan="4" align="center" class="neonTitle" id="bTitle"><a href="board.go">게 시 판</a></td>
		</tr>
		<tr>
			<td colspan="4" align="right">
				<div id="bPP">
				페이지 당 게시글 수
				<select id="bPPS" name="bPP" selected="selected">
					<option value="5" <c:if test ="${sessionScope.boardPerPage == 5}"> selected="selected"</c:if>>5</option>
					<option value="10" <c:if test ="${sessionScope.boardPerPage == 10}"> selected="selected"</c:if>>10</option>
					<option value="20" <c:if test ="${sessionScope.boardPerPage == 20}"> selected="selected"</c:if>>20</option>
					<option value="30" <c:if test ="${sessionScope.boardPerPage == 30}"> selected="selected"</c:if>>30</option>
				</select>&nbsp;&nbsp;&nbsp;
				</div><p>
			</td>
		</tr>
		<c:forEach var="b" items="${boards }">
		<tr>
			<td id="boardImg" class="boardTd" align="center">
				<img src="resources/img/${b.m_photo }" width="50px" height="50px;">
			</td>
			<td id="boardWriter" class="boardTd">${b.b_writer }</td>
			<td id="boardTitle" class="boardTd">
				<a href="board.read?b_no=${b.b_no }">${b.b_title }</a>
			</td>
			<td id="boardWhen" class="boardTd">
			<fmt:formatDate value="${b.b_when }" pattern="yyyy-MM-dd E HH:mm" /> 
			</td>
		</tr>
		</c:forEach>
	</table>
	<table>
		<tr>
			<td id="sBtn">
				<select id="searchW" name="searchW">
					<option value="제목" <c:if test ="${sessionScope.searchW eq '제목'}"> selected="selected"</c:if>>제목</option>
					<option value="내용" <c:if test ="${sessionScope.searchW eq '내용'}"> selected="selected"</c:if>>내용</option>
					<option value="닉네임" <c:if test ="${sessionScope.searchW eq '닉네임'}"> selected="selected"</c:if>>닉네임</option>
				</select>
				<input id="search" name="search" value="${sessionScope.search }">&nbsp;&nbsp;&nbsp;&nbsp;
				<button>검색</button>&nbsp;&nbsp;
			</td>
</form>
			<td id="wBtn">
				<c:if test="${sessionScope.LoginMember != null }">
					<button onclick="goBoardWrite();">글쓰기</button>
				</c:if>
			</td>
		</tr>
	</table>
	<table>
		<tr>
			<td id="pageNum">
			<c:forEach var="p" begin="1" end="${pageCount }">
				<a href="board.page?bPP=<c:choose><c:when test="${empty sessionScope.boardPerPage }">5</c:when><c:otherwise>${sessionScope.boardPerPage }</c:otherwise></c:choose>&searchW=<c:choose><c:when test="${empty sessionScope.searchW }">제목</c:when><c:otherwise>${sessionScope.searchW }</c:otherwise></c:choose>&search=${sessionScope.search }&p=${p }">[${p }]</a>&nbsp;&nbsp;
			</c:forEach>
			</td>
		</tr>
	</table>
</body>
</html>