<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>cheese/cheese.jsp</title>
</head>
<body>
	<form action="cheese.search" method="POST">
		<table id="csTbl" class="neon4">
			<tr>
				<td align="center" colspan="3" id="csTitle" class="neonTitle"><a href="cheese.go;">치 즈 검 색</a></td>
			</tr>
			<tr>
			
				<td class="csIndex" colspan="3">이름 : <input name="cs_name" autocomplete="off"></td>
			</tr>
			<tr>
				<td class="csIndex">원산지 :
					<select name="cs_where" class="csW">
						<option <c:if test="${sessionScope.cheeseSearch.cs_where eq '전체' }">selected="selected"</c:if>>전체</option>
						<option <c:if test="${sessionScope.cheeseSearch.cs_where eq '프랑스' }">selected="selected"</c:if>>프랑스</option>
						<option <c:if test="${sessionScope.cheeseSearch.cs_where eq '이탈리아' }">selected="selected"</c:if>>이탈리아</option>
						<option <c:if test="${sessionScope.cheeseSearch.cs_where eq '스위스' }">selected="selected"</c:if>>스위스</option>
						<option <c:if test="${sessionScope.cheeseSearch.cs_where eq '영국' }">selected="selected"</c:if>>영국</option>
						<option <c:if test="${sessionScope.cheeseSearch.cs_where eq '미국' }">selected="selected"</c:if>>미국</option>
						<option <c:if test="${sessionScope.cheeseSearch.cs_where eq '그리스' }">selected="selected"</c:if>>그리스</option>
						<option <c:if test="${sessionScope.cheeseSearch.cs_where eq '기타' }">selected="selected"</c:if>>기타</option>
					</select>
				</td>
				<td class="csIndex">분류 : 
					<select name="cs_hard" class="csW">
						<option <c:if test="${sessionScope.cheeseSearch.cs_hard eq '전체' }">selected="selected"</c:if>>전체</option>
						<option <c:if test="${sessionScope.cheeseSearch.cs_hard eq '생치즈' }">selected="selected"</c:if>>생치즈</option>
						<option <c:if test="${sessionScope.cheeseSearch.cs_hard eq '연성치즈' }">selected="selected"</c:if>>연성치즈</option>
						<option <c:if test="${sessionScope.cheeseSearch.cs_hard eq '반경성치즈' }">selected="selected"</c:if>>반경성치즈</option>
						<option <c:if test="${sessionScope.cheeseSearch.cs_hard eq '경성치즈' }">selected="selected"</c:if>>경성치즈</option>
						<option <c:if test="${sessionScope.cheeseSearch.cs_hard eq '기타' }">selected="selected"</c:if>>기타</option>
					</select>
				</td>
				<td>
					<button id="csBtn">검색</button>
				</td>
			</tr>
		</table>
	</form>
	<c:forEach var="c" items="${cheeses }">
		<table class="cheeseTbl">
			<tr>
				<td align="center" class="c_photo">
	<input type="hidden" id="c_photo" value="${c.c_photo }">
	<input type="hidden" id="c_name" value="${c.c_name }">
	<input type="hidden" id="c_fname" value="${c.c_fname }">
	<input type="hidden" id="c_fat" value="${c.c_fat }">
	<input type="hidden" id="c_time" value="${c.c_time }">
	<input type="hidden" id="c_where" value="${c.c_where }">
					<img src="resources/img/cheese/${c.c_photo }" width="180px" height="180px">
				</td>
			</tr>
			<tr>
				<td align="center" class="c_name">
					${c.c_name }
				</td>
			</tr>
			<tr>
				<td align="center" class="c_fname">
					(${c.c_fname })
				</td>
			</tr>
		</table>
	</c:forEach>
	<table id="cheeseTblB">
			<tr>
				<td align="center" colspan="2" id="c_photoB">
					<img id="c_photoV" src="" width="280px" height="280px">
				</td>
			</tr>
			<tr>
				<td align="center" id="c_nameB" colspan="2">
					<input id="c_nameV">
				</td>
			</tr>
			<tr>
				<td align="center" id="c_fnameB" colspan="2">
					<input id="c_fnameV">
				</td>
			</tr>
			<tr>
				<td align="right" class="cbIndex">원산지</td>
				<td align="center" class="cbV">
					<input id="c_whereV">
				</td>
			</tr>
			<tr>
				<td align="right" class="cbIndex">지방</td>
				<td align="center" class="cbV">
					<input id="c_fatV">
				</td>
			</tr>
			<tr>
				<td align="right" class="cbIndex">숙성</td>
				<td align="center" class="cbV">
					<input id="c_timeV">
				</td>
			</tr>
			<tr>
				<td colspan="2" align="center">
					&nbsp;&nbsp;&nbsp;&nbsp;<button id="cheeseTblBBtn">닫기</button>
					<a id="toGoogle"><img id="wMag" src="resources/img/wmagnifier.png" width="40px" height="40px"></a>
				</td>
			</tr>
		</table>
</body>
</html>