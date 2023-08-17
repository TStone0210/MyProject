<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>index.jsp</title>
<link rel="stylesheet" href="resources/css/index.css">
<link rel="stylesheet" href="resources/css/home.css">
<link rel="stylesheet" href="resources/css/login.css">
<link rel="stylesheet" href="resources/css/signup.css">
<link rel="stylesheet" href="resources/css/infoCheck.css">
<link rel="stylesheet" href="resources/css/info.css">
<link rel="stylesheet" href="resources/css/infoUpdate.css">
<link rel="stylesheet" href="resources/css/board.css">
<link rel="stylesheet" href="resources/css/cheese.css">
<link rel="stylesheet" href="resources/css/game/game.css">
<link rel="stylesheet" href="resources/css/game/stars.css">
<link rel="stylesheet" href="resources/css/game/bullet.css">
<link rel="stylesheet" href="resources/css/game/enemy.css">
<link rel="stylesheet" href="resources/css/game/bomb.css">
<link rel="stylesheet" href="resources/css/game/score.css">
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
<script type="text/javascript" src="resources/js/jQuery.js"></script>
<script type="text/javascript" src="resources/js/yang_jQuery.js"></script>
<script type="text/javascript" src="resources/js/go.js"></script>
<script type="text/javascript" src="resources/js/YangValidChecker.js"></script>
<script type="text/javascript" src="resources/js/check.js"></script>
</head>
<body>
	<div id="opening"></div>
	<table id="siteTitleTbl">
		<tr>
			<td id="siteTitleTd" align="center" class="neon6">
				<a href="index.go">
					<span id="t_cheese">Cheese</span>
					<span id="t_and">&</span>
					<span id="t_wine">Wine</span>
				</a>
			</td>
		</tr>
	</table>
	<table id="siteLoginTbl">
		<tr>
			<td><jsp:include page="${loginPage }" /> </td>
		</tr>
		<tr>
			<td>
				<input id="loginR" type="hidden" value="${r }">
			</td>
		</tr>
	</table>
	<table id="siteMenuTbl" class="neon4">
		<tr >
			<td class="menuIndex" align="right">
				<a href="board.go" class="menuA">게시판</a>
			</td>
			<td class="menuIcon" id="menuTop" align="center"><a href="board.go"><img src="resources/img/book.png"></a>
			</td>
		</tr>		
		<tr>
			<td class="menuIndex" align="right">
				<a href="cheese.go" class="menuA">치즈검색</a>
			</td>
			<td class="menuIcon" align="center"><a href="cheese.go"><img src="resources/img/magnifier.png"></a></td>
		</tr>		
		<tr>
			<td class="menuIndex" align="right">
				<a href="game.go" class="menuA">Mini Game</a>
			</td>
			<td class="menuIcon" id="menuBottom" align="center"><a href="game.go"><img src="resources/img/gamepad.png"></a></td>
		</tr>		
	</table>
	<table id="siteContentTbl">
		<tr>
			<td align="center">
				<jsp:include page="${ContentPage }" />
			</td>
		</tr>
	</table>
	<input type="hidden" readonly="readonly" id="openNum" value="${opNum }">
	<button id="lightOff" onclick="goLightOff();">OFF</button>
</body>
</html>