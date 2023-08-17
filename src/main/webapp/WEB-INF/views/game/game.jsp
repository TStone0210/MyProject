<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>game/game.jsp</title>
<script type="text/javascript" src="resources/js/game.js"></script>
<script type="text/javascript" src="resources/js/stars.js"></script>
<script type="text/javascript" src="resources/js/stars2.js"></script>
<script type="text/javascript" src="resources/js/bullet.js"></script>
<script type="text/javascript" src="resources/js/enemy.js"></script>
<script type="text/javascript" src="resources/js/player.js"></script>
<script type="text/javascript" src="resources/js/bomb.js"></script>
<script type="text/javascript" src="resources/js/gameover.js"></script>
<script type="text/javascript" src="resources/js/score.js"></script>
</head>
<body>
<input id="gameStmt" type="hidden">
<input id="boosterStmt" type="hidden">
<input id="bulletSpeed" value="200" type="hidden">
<input id="pX" type="hidden">
<input id="pY" type="hidden">
<input id="enemySpeed" type="hidden">
<input id="enemyRegen" type="hidden">
	<div id="gameSpace">
		<input id="timer" value="0" disabled="disabled">
		<input id="score" value="0" disabled="disabled">
		<div class="status" id="shade"></div>
		<div id="speedUp">SPEED UP</div>
		<div id="scoreUp">1000 UP</div>
		<div id="bombUp">BOMB +1</div>
		<div id="score2500Up">2500 UP</div>
		
		<div class="status" id="lifeBox">LIFE : <input id="playerLife" value="2" disabled="disabled"></div>
		<div class="status" id="bombBox">BOMB : <input id="bomb" value="1" disabled="disabled"></div>
		<input id="scoreCalc" value="0" type="hidden">
		<input id="scoreCalc2" value="0" type="hidden">
		
		<div id="gameover">GAME OVER</div>
		<form action="game.reg" method="POST">
			<input class="result" id="timerR" readonly="readonly">
			<input class="result" id="scoreR" name="s_score" readonly="readonly">
			<input type="hidden" name="s_who" value="${sessionScope.LoginMember.m_nickname }">
			<c:if test="${sessionScope.LoginMember != null }">
				<button class="welldone" id="regScoreBtn">점 수 등 록</button>
			</c:if>
		</form>
		<c:if test="${sessionScope.LoginMember == null }">
			<div class="welldone" id="noReg">
				점수를 등록하려면<br> 로그인 상태여야 합니다
			</div>
		</c:if>
		<img class="title2" id="gameDS" src="resources/img/game/title.png">
		<img class="title2" id="DStar" src="resources/img/game/star.png">
		<button id="gameGP" class="title2">Game Play</button>
		<button id="gameSC" class="title2">Score</button>
		<button id="gameClick">C l i c k !</button>
		<span id="gameControl">이동 : 방향키&nbsp;&nbsp;&nbsp;&nbsp;공격 : X&nbsp;&nbsp;&nbsp;&nbsp;폭탄 : C</span>
		
		<img id="player" src="resources/img/game/p0.png" width="120px">
		<div id="playerHB"></div>
		<input id="playerStmt" value="1" type="hidden">
		<input id="playerHBX" type="hidden">
		<input id="playerHBY" type="hidden">
		<img id="booster" src="resources/img/game/f01.png" width="75px">
	
		<img class="item" id="bulletItem" src="resources/img/game/s1.png"><input id="bit" type="hidden"><input id="bis" type="hidden"><input id="bir" type="hidden"><input id="bsu" type="hidden">
		<img class="item" id="bombItem" src="resources/img/game/b1.png"><input id="bombScore" type="hidden"><input id="bombItemSwitch" type="hidden"><input id="bombItemRegen" type="hidden"><input id="bombUp" type="hidden">
		
		<img id="bombShot" src="resources/img/game/bs1.png">
		<img class="bombE" id="bombE1" src="resources/img/game/be1.png">
		<img class="bombE" id="bombE2" src="resources/img/game/be1.png">
		<img class="bombE" id="bombE3" src="resources/img/game/be1.png">
		<img class="bombE" id="bombE4" src="resources/img/game/be1.png">
		<img class="bombE" id="bombE5" src="resources/img/game/be1.png">
		<img class="bombE" id="bombE6" src="resources/img/game/be1.png">
		<img class="bombE" id="bombE7" src="resources/img/game/be1.png">
		<img class="bombE" id="bombE8" src="resources/img/game/be1.png">
	
	
		<img class="star" id="star1" src="resources/img/game/star.png">
		<img class="star" id="star2" src="resources/img/game/star.png">
		<img class="star" id="star3" src="resources/img/game/star.png">
		<img class="star" id="star4" src="resources/img/game/star.png">
		<img class="star" id="star5" src="resources/img/game/star.png">
		<img class="star" id="star6" src="resources/img/game/star.png">
		<img class="star" id="star7" src="resources/img/game/star.png">
		<img class="star" id="star8" src="resources/img/game/star.png">
		<img class="star" id="star9" src="resources/img/game/star.png">
		<img class="star" id="star10" src="resources/img/game/star.png">
		<img class="star" id="star11" src="resources/img/game/star.png">
		<img class="star" id="star12" src="resources/img/game/star.png">
		<img class="star" id="star13" src="resources/img/game/star.png">
		<img class="star" id="star14" src="resources/img/game/star.png">
		<img class="star" id="star15" src="resources/img/game/star.png">
		<img class="star" id="star16" src="resources/img/game/star.png">
		<img class="star" id="star17" src="resources/img/game/star.png">
		<img class="star" id="star18" src="resources/img/game/star.png">
		<img class="star" id="star19" src="resources/img/game/star.png">
		<img class="star" id="star20" src="resources/img/game/star.png">
		<img class="star" id="star21" src="resources/img/game/star.png">
		<img class="star" id="star22" src="resources/img/game/star.png">
		<img class="star" id="star23" src="resources/img/game/star.png">
		<img class="star" id="star24" src="resources/img/game/star.png">
		<img class="star" id="star25" src="resources/img/game/star.png">
		<img class="star" id="star26" src="resources/img/game/star.png">
		<img class="star" id="star27" src="resources/img/game/star.png">
		<img class="star" id="star28" src="resources/img/game/star.png">
		<img class="star" id="star29" src="resources/img/game/star.png">
		<img class="star" id="star30" src="resources/img/game/star.png">
		<img class="star" id="star31" src="resources/img/game/star.png">
		<img class="star" id="star32" src="resources/img/game/star.png">
		<img class="star" id="star33" src="resources/img/game/star.png">
		<img class="star" id="star34" src="resources/img/game/star.png">
		<img class="star" id="star35" src="resources/img/game/star.png">
		<img class="star" id="star36" src="resources/img/game/star.png">
		<img class="star" id="star37" src="resources/img/game/star.png">
		<img class="star" id="star38" src="resources/img/game/star.png">
		<img class="star" id="star39" src="resources/img/game/star.png">
		<img class="star" id="star40" src="resources/img/game/star.png">
		
		<img class="bullet" id="bullet1" src="resources/img/game/bullet.png">
		<img class="bullet" id="bullet2" src="resources/img/game/bullet.png">
		<img class="bullet" id="bullet3" src="resources/img/game/bullet.png">
		<img class="bullet" id="bullet4" src="resources/img/game/bullet.png">
		<img class="bullet" id="bullet5" src="resources/img/game/bullet.png">
		<img class="bullet" id="bullet6" src="resources/img/game/bullet.png">
		<img class="bullet" id="bullet7" src="resources/img/game/bullet.png">
		<img class="bullet" id="bullet8" src="resources/img/game/bullet.png">
		<img class="bullet" id="bullet9" src="resources/img/game/bullet.png">
		<img class="bullet" id="bullet10" src="resources/img/game/bullet.png">
		<img class="bullet" id="bullet11" src="resources/img/game/bullet.png">
		<img class="bullet" id="bullet12" src="resources/img/game/bullet.png">
		
		<img class="bulletE" id="bulletE1" src="resources/img/game/bullet.png"><input id="bulletE1X" type="hidden"><input id="bulletE1Y" type="hidden">
		<img class="bulletE" id="bulletE2" src="resources/img/game/bullet.png"><input id="bulletE2X" type="hidden"><input id="bulletE2Y" type="hidden">
		<img class="bulletE" id="bulletE3" src="resources/img/game/bullet.png"><input id="bulletE3X" type="hidden"><input id="bulletE3Y" type="hidden">
		<img class="bulletE" id="bulletE4" src="resources/img/game/bullet.png"><input id="bulletE4X" type="hidden"><input id="bulletE4Y" type="hidden">
		<img class="bulletE" id="bulletE5" src="resources/img/game/bullet.png"><input id="bulletE5X" type="hidden"><input id="bulletE5Y" type="hidden">
		<img class="bulletE" id="bulletE6" src="resources/img/game/bullet.png"><input id="bulletE6X" type="hidden"><input id="bulletE6Y" type="hidden">
		<img class="bulletE" id="bulletE7" src="resources/img/game/bullet.png"><input id="bulletE7X" type="hidden"><input id="bulletE7Y" type="hidden">
		<img class="bulletE" id="bulletE8" src="resources/img/game/bullet.png"><input id="bulletE8X" type="hidden"><input id="bulletE8Y" type="hidden">
		<img class="bulletE" id="bulletE9" src="resources/img/game/bullet.png"><input id="bulletE9X" type="hidden"><input id="bulletE9Y" type="hidden">
		<img class="bulletE" id="bulletE10" src="resources/img/game/bullet.png"><input id="bulletE10X" type="hidden"><input id="bulletE10Y" type="hidden">
		<img class="bulletE" id="bulletE11" src="resources/img/game/bullet.png"><input id="bulletE11X" type="hidden"><input id="bulletE11Y" type="hidden">
		<img class="bulletE" id="bulletE12" src="resources/img/game/bullet.png"><input id="bulletE12X" type="hidden"><input id="bulletE12Y" type="hidden">
		
		
		<img class="enemy meteor" id="meteor1" src="resources/img/game/meteor.png"><input id="meteor1X" type="hidden"><input id="meteor1Y" type="hidden"><input id="meteor1HP" type="hidden"><input id="m1n" type="hidden"><input id="meteor1s" type="hidden" value="1">
		<img class="enemy meteor" id="meteor2" src="resources/img/game/meteor.png"><input id="meteor2X" type="hidden"><input id="meteor2Y" type="hidden"><input id="meteor2HP" type="hidden"><input id="m2n" type="hidden"><input id="meteor2s" type="hidden" value="1">
		<img class="enemy meteor" id="meteor3" src="resources/img/game/meteor.png"><input id="meteor3X" type="hidden"><input id="meteor3Y" type="hidden"><input id="meteor3HP" type="hidden"><input id="m3n" type="hidden"><input id="meteor3s" type="hidden" value="1">
		<img class="enemy meteor" id="meteor4" src="resources/img/game/meteor.png"><input id="meteor4X" type="hidden"><input id="meteor4Y" type="hidden"><input id="meteor4HP" type="hidden"><input id="m4n" type="hidden"><input id="meteor4s" type="hidden" value="1">
		<img class="enemy meteor" id="meteor5" src="resources/img/game/meteor.png"><input id="meteor5X" type="hidden"><input id="meteor5Y" type="hidden"><input id="meteor5HP" type="hidden"><input id="m5n" type="hidden"><input id="meteor5s" type="hidden" value="1">
		<img class="enemy meteor" id="meteor6" src="resources/img/game/meteor.png"><input id="meteor6X" type="hidden"><input id="meteor6Y" type="hidden"><input id="meteor6HP" type="hidden"><input id="m6n" type="hidden"><input id="meteor6s" type="hidden" value="1">
		<img class="enemy meteor" id="meteor7" src="resources/img/game/meteor.png"><input id="meteor7X" type="hidden"><input id="meteor7Y" type="hidden"><input id="meteor7HP" type="hidden"><input id="m7n" type="hidden"><input id="meteor7s" type="hidden" value="1">
		<img class="enemy meteor" id="meteor8" src="resources/img/game/meteor.png"><input id="meteor8X" type="hidden"><input id="meteor8Y" type="hidden"><input id="meteor8HP" type="hidden"><input id="m8n" type="hidden"><input id="meteor8s" type="hidden" value="1">
		<img class="enemy meteor" id="meteor9" src="resources/img/game/meteor.png"><input id="meteor9X" type="hidden"><input id="meteor9Y" type="hidden"><input id="meteor9HP" type="hidden"><input id="m9n" type="hidden"><input id="meteor9s" type="hidden" value="1">
		<img class="enemy meteor" id="meteor10" src="resources/img/game/meteor2.png"><input id="meteor10X" type="hidden"><input id="meteor10Y" type="hidden"><input id="meteor10HP" type="hidden"><input id="m10n" type="hidden"><input id="meteor10s" type="hidden" value="1">
		<img class="enemy meteor" id="meteor11" src="resources/img/game/meteor2.png"><input id="meteor11X" type="hidden"><input id="meteor11Y" type="hidden"><input id="meteor11HP" type="hidden"><input id="m11n" type="hidden"><input id="meteor11s" type="hidden" value="1">
		<img class="enemy meteor" id="meteor12" src="resources/img/game/meteor2.png"><input id="meteor12X" type="hidden"><input id="meteor12Y" type="hidden"><input id="meteor12HP" type="hidden"><input id="m12n" type="hidden"><input id="meteor12s" type="hidden" value="1">
		<img class="enemy alien" id="alien1a" src="resources/img/game/a1.png"><input id="alien1aX" type="hidden"><input id="alien1aY" type="hidden"><input id="alien1aHP" type="hidden"><input id="a1an" type="hidden"><input id="alien1as" type="hidden" value="1" >
		<img class="enemy alien" id="alien1b" src="resources/img/game/a1.png"><input id="alien1bX" type="hidden"><input id="alien1bY" type="hidden"><input id="alien1bHP" type="hidden"><input id="a1bn" type="hidden"><input id="alien1bs" type="hidden" value="1">
		<img class="enemy alien" id="alien3" src="resources/img/game/a31.png"><input id="alien3X" type="hidden"><input id="alien3Y" type="hidden"><input id="alien3HP" type="hidden"><input id="a3n" type="hidden"><input id="alien3s" type="hidden" value="1">
		
		<img class="enemy cannon" id="cannon1" src="resources/img/game/cannon.png"><input id="cannon1X" type="hidden"><input id="cannon1Y" type="hidden"><input id="c1n" type="hidden"><input id="cannon1s" type="hidden" value="1">
		<img class="enemy cannon" id="cannon2" src="resources/img/game/cannon.png"><input id="cannon2X" type="hidden"><input id="cannon2Y" type="hidden"><input id="c2n" type="hidden"><input id="cannon2s" type="hidden" value="1">
		<img class="enemy cannon" id="cannon3" src="resources/img/game/cannon.png"><input id="cannon3X" type="hidden"><input id="cannon3Y" type="hidden"><input id="c3n" type="hidden"><input id="cannon3s" type="hidden" value="1">
		
		<img class="enemy cannon" id="cannon1B" src="resources/img/game/blast1.png">
		<img class="enemy cannon" id="cannon2B" src="resources/img/game/blast1.png">
		<img class="enemy cannon" id="cannon3B" src="resources/img/game/blast1.png">
		
		<div class="score" id="st">#1</div>
		<table class="score" id="s1t">
			<tr>
				<td rowspan="3" id="s1p" align="center">
					<img src="resources/img/${gameScore[0].s_photo }" width="80px" height="80px">
				</td>
				<td id="s1n">${gameScore[0].s_who }</td>
			</tr>
			<tr>
				<td id="s1s"><fmt:formatNumber value="${gameScore[0].s_score }" type="number"/></td>
			</tr>
			<tr>
				<td id="s1w"><fmt:formatDate value="${gameScore[0].s_when }" pattern="yyyy-MM-dd HH:mm:ss"/></td>
			</tr>
		</table>
		
		<div class="score" id="nd">#2</div>
		<table class="score" id="s2t">
			<tr>
				<td rowspan="3" id="s2p" align="center">
					<img src="resources/img/${gameScore[1].s_photo }" width="65px" height="65px">
				</td>
				<td id="s2n">${gameScore[1].s_who }</td>
			</tr>
			<tr>
				<td id="s2s"><fmt:formatNumber value="${gameScore[1].s_score }" type="number"/></td>
			</tr>
			<tr>
				<td id="s2w"><fmt:formatDate value="${gameScore[1].s_when }" pattern="yyyy-MM-dd HH:mm:ss"/></td>
			</tr>
		</table>
		
		<div class="score" id="rd">#3</div>
		<table class="score" id="s3t">
			<tr>
				<td rowspan="3" id="s3p" align="center">
					<img src="resources/img/${gameScore[2].s_photo }" width="50px" height="50px">
				</td>
				<td id="s3n">${gameScore[2].s_who }</td>
			</tr>
			<tr>
				<td id="s3s"><fmt:formatNumber value="${gameScore[2].s_score }" type="number"/></td>
			</tr>
			<tr>
				<td id="s3w"><fmt:formatDate value="${gameScore[2].s_when }" pattern="yyyy-MM-dd HH:mm:ss"/></td>
			</tr>
		</table>
		
		<table class="score" id="s4t">
			<tr>
				<td rowspan="3" id="s4p" align="center">
					<img src="resources/img/${gameScore[3].s_photo }" width="50px" height="50px">
				</td>
				<td id="s4n">${gameScore[3].s_who }</td>
			</tr>
			<tr>
				<td id="s4s"><fmt:formatNumber value="${gameScore[3].s_score }" type="number"/></td>
			</tr>
			<tr>
				<td id="s4w"><fmt:formatDate value="${gameScore[3].s_when }" pattern="yyyy-MM-dd HH:mm:ss"/></td>
			</tr>
		</table>
		
		<table class="score" id="s5t">
			<tr>
				<td rowspan="3" id="s5p" align="center">
					<img src="resources/img/${gameScore[4].s_photo }" width="50px" height="50px">
				</td>
				<td id="s5n">${gameScore[4].s_who }</td>
			</tr>
			<tr>
				<td id="s5s"><fmt:formatNumber value="${gameScore[4].s_score }" type="number"/></td>
			</tr>
			<tr>
				<td id="s5w"><fmt:formatDate value="${gameScore[4].s_when }" pattern="yyyy-MM-dd HH:mm:ss"/></td>
			</tr>
		</table>
		
		<button id="backBtn">BACK</button>
		
		
		
	</div>
	<input type="hidden" id="scoreRegR" value="${srs }">
</body>
</html>