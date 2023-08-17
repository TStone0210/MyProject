//game.js

function gameReady () {
	$('#gameStmt').val("0");
	
}

function gameStart () {
	let gs = $('#gameStmt').val();
	let star = false;
	let gos = 0;
	const game1 = new Audio("resources/audio/game/game1.mp3");
	const game2 = new Audio("resources/audio/game/game2.mp3");
	game1.volume = 0.7;	
	game2.volume = 0.7;	
	$('#gameClick').click(function() {
		if (gs == 0) {
			gs ++;
			game1.loop = true;
			game1.play();
			$('#gameStmt').val(gs);
			$('#gameSpace').css('background-color', 'white');
			$('#gameClick').css('opacity', '0');
			setTimeout(() => {
				$('#gameClick').css('display', 'none');
				$('#gameDS').css('display', 'block');
				setTimeout(() => {
					$('#gameDS').css('opacity', '1');
				}, 500);
				setTimeout(() => {
					$('.title2').css('display', 'block');
					setTimeout(() => {
						$('.title2').css('opacity', '1');
						setTimeout(() => {
							gs = 2;
							$('#gameStmt').val(gs);
						}, 1000);
					}, 2000);
				}, 1000);
			}, 300);
		}
		
	});
	$('#gameGP').click(function() {
		if (gs == 2) {
			gs++;
			$('#gameStmt').val(gs);
			$('#gameControl').css('display', 'block');
			$('#gameDS').css('opacity', '0');
			$('.title2').css('opacity', '0');
			setTimeout(() => {
				$('#gameDS').css('display', 'none');
				$('#player').css('display', 'block');
				$('#booster').css('display', 'block');
				$('#player').css('transition', 'all 0.8s linear');
				$('#booster').css('transition', 'all 0.8s linear');
				$('#boosterStmt').val('pr');
				$('.star').css('opacity', '0.5');
				$('#gameControl').css('opacity', '1');
				$('#gameDS').css('display', 'none');
				$('.title2').css('display', 'none')
				game1.volume = 0.4;
				setTimeout(() => {
					$('#player').css('left', '800px');
					$('#booster').css('left', '735px');
					game1.volume = 0.2;
					$('.star').css('opacity', '0.25');
					setTimeout(() => {
						$('#player').css('transition', 'all 6s ease');
						$('#booster').css('transition', 'all 6s ease');
						$('#boosterStmt').val('pl');
						game1.volume = 0.1;
						$('.star').css('opacity', '0.075');
						setTimeout(() => {
							$('#player').css('left', '60px');
							$('#booster').css('left', '-5px');
							game1.volume = 0.05;
							setTimeout(() => {
								$('.star').css('opacity', '0');
								game1.pause();
								game2.loop = true;
								game2.play();
								setTimeout(() => {
									$('#player').css('transition', 'all 0s linear');
									$('#booster').css('transition', 'all 0s linear');
									$('#timer').css('display', 'block');
									$('#score').css('display', 'block');
									$('#lifeBox').css('display', 'block');
									$('#bombBox').css('display', 'block');
									$('#shade').css('display', 'block');
									$('.star').css('left', '1000px');
									gs++ ;
									$('#gameStmt').val(gs);
									$('#gameControl').css('opacity', '0');
									$('.star').css('opacity', '1');
									setTimeout(() => {
										$('#gameControl').css('display', 'none');
									}, 1000);
								}, 4500);
							}, 1500);
						}, 300);
					}, 2000);
				}, 2000);
			}, 1000);
		}
	});
	
	setInterval(() => {
		if ($('#gameStmt').val() == 5 && gos == 0) {
			gos = 1;
			game2.volume = 0.6;
			setTimeout(() => {
				game2.volume = 0.5;
				setTimeout(() => {
					game2.volume = 0.4;
					setTimeout(() => {
						game2.volume = 0.3;
						setTimeout(() => {
							game2.volume = 0.2;
							setTimeout(() => {
								game2.volume = 0.1;
								setTimeout(() => {
									game2.volume = 0;
								}, 750);
							}, 750);
						}, 750);
					}, 750);
				}, 750);
			}, 750);
		}
	}, 1);
	
}

function playerMove () {
	let ud = 0;
	let px = 0;
	let py = 0;
	let pu = 0;
	let pd = 0;
	let pr = 0;
	let pl = 0;
	let pxx = 60;
	let pyy = 240;
	let bxx = -5;
	let byy = 245;
		$(document).keydown(function(e) {
			let gs = $('#gameStmt').val();
			if (e.keyCode == 38 && pd == 0 && gs == 4) {
				py = 38;
				pu = 1;
			} else if (e.keyCode == 38 && pd == 1 && gs == 4) {
				py = 38;
				pu = 1;
				pd = 2;
			} else if (e.keyCode == 40 && pu == 0 && gs == 4) {
				py = 40;
				pd = 1;
			} else if (e.keyCode == 40 && pu == 1 && gs == 4) {
				py = 40;
				pd = 1;
				pu = 2;
			} else if (e.keyCode == 37 && pr == 0 && gs == 4) {
				px = 37;
				pl = 1;
			} else if (e.keyCode == 37 && pr == 1 && gs == 4) {
				px = 37;
				pl = 1;
				pr = 2;
			} else if (e.keyCode == 39 && pl == 0 && gs == 4) {
				px = 39;
				pr = 1;
			} else if (e.keyCode == 39 && pl == 1 && gs == 4) {
				px = 39;
				pr = 1;
				pl = 2;
			} if (e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40) {
				return false;
			}
				
		});
			
		$(document).keyup(function(e) {
			let gs = $('#gameStmt').val();
			if (gs == 4) {
				if (e.keyCode == 38 && pd == 2 ) {
					py = 40;
					pu = 0;
					pd = 1;
				}
				
				if (e.keyCode == 38 && pd != 2) {
					py = 0;
					pu = 0;
				}
				
				if (e.keyCode == 40 && pu == 2 ) {
					py = 38;
					pd = 0;
					pu = 1;
				}
				
				if (e.keyCode == 40 && pu != 2) {
					py = 0;
					pd = 0;
				}
				
				if (e.keyCode == 37 && pr == 2 ) {
					px = 39;
					pl = 0;
					pr = 1;
				}
				
				if (e.keyCode == 37 && pr != 2) {
					px = 0;
					pl = 0;
				}
				
				if (e.keyCode == 39 && pl == 2 ) {
					px = 37;
					pr = 0;
					pl = 1;
				}
				
				if (e.keyCode == 39 && pl != 2) {
					px = 0;
					pr = 0;
				}
			}
		});
		
		
		setInterval(() => {
			let gs = $('#gameStmt').val();
			if (gs == 4) {
				if (pu == 1 && ud == 0) {
					ud ++;
					$('#player').attr('src', 'resources/img/game/pu1.png');
					$('#booster').css('z-index', '16');
				} else if (pu == 1 && ud == 1) {
					ud ++;
					$('#player').attr('src', 'resources/img/game/pu2.png');
					$('#booster').css('z-index', '16');
				} else if (pu == 1 && ud == 2) {
					ud ++;
					$('#player').attr('src', 'resources/img/game/pu3.png');
					$('#booster').css('z-index', '16');
				} else if (pd == 1 && ud == 3 && py != 38) {
					ud --;
					$('#player').attr('src', 'resources/img/game/pu2.png');
					$('#booster').css('z-index', '16');
				} else if (pd == 1 && ud == 2) {
					ud --;
					$('#player').attr('src', 'resources/img/game/pu1.png');
					$('#booster').css('z-index', '16');
				} else if (pd == 1 && ud == 1) {
					ud --;
					$('#player').attr('src', 'resources/img/game/p0.png');
					$('#booster').css('z-index', '5');
				} else if (pd == 1 && ud == 0) {
					ud --;
					$('#player').attr('src', 'resources/img/game/pd1.png');
					$('#booster').css('z-index', '5');
				} else if (pd == 1 && ud == -1) {
					ud --;
					$('#player').attr('src', 'resources/img/game/pd2.png');
					$('#booster').css('z-index', '5');
				} else if (pd == 1 && ud == -2) {
					ud --;
					$('#player').attr('src', 'resources/img/game/pd3.png');
					$('#booster').css('z-index', '5');
				} else if (pu == 1 && ud == -3  && py != 40) {
					ud ++;
					$('#player').attr('src', 'resources/img/game/pd2.png');
					$('#booster').css('z-index', '5');
				} else if (pu == 1 && ud == -2) {
					ud ++;
					$('#player').attr('src', 'resources/img/game/pd1.png');
					$('#booster').css('z-index', '5');
				} else if (pu == 1 && ud == -1) {
					ud ++;
					$('#player').attr('src', 'resources/img/game/p0.png');
					$('#booster').css('z-index', '5');
				} else if (py == 0 && ud == -1) {
					ud ++;
					$('#player').attr('src', 'resources/img/game/p0.png');
					$('#booster').css('z-index', '5');
				} else if (py == 0 && ud == -2) {
					ud ++;
					$('#player').attr('src', 'resources/img/game/pd1.png');
					$('#booster').css('z-index', '5');
				} else if (pu == 0 && pd == 0 && ud == -3) {
					ud ++;
					$('#player').attr('src', 'resources/img/game/pd2.png');
					$('#booster').css('z-index', '5');
				} else if (py == 0 && ud == 1) {
					ud --;
					$('#player').attr('src', 'resources/img/game/p0.png');
					$('#booster').css('z-index', '5');
				} else if (py == 0 && ud == 2) {
					ud --;
					$('#player').attr('src', 'resources/img/game/pu1.png');
					$('#booster').css('z-index', '16');
				} else if (pu == 0 && pd == 0 && ud == 3) {
					ud --;
					$('#player').attr('src', 'resources/img/game/pu2.png');
					$('#booster').css('z-index', '16');
				}
			}
		}, 75);
		
		setInterval(() => {
			let gs = $('#gameStmt').val();
			if (gs == 4) {
				if (pu == 1 && pyy > 80) {
					pyy -= 3;
					byy -= 3;
					$('#player').css('top', pyy);
					$('#booster').css('top', byy);
				} else if (pd == 1 && pyy < 450) {
					pyy += 3;
					byy += 3;
					$('#player').css('top', pyy);
					$('#booster').css('top', byy);
				} 
				$('#pY').val($('#player').css('top').replace('px', ''));
				$('#playerHB').css('top', Number($('#player').css('top').replace('px',''))+10 +'px');
			}
		}, 10);
		
		setInterval(() => {
			let gs = $('#gameStmt').val();
			if (gs == 4) {
				let gs = $('#gameStmt').val();
				if (pl == 1 && pxx > 60) {
					pxx -= 2;
					bxx -= 2;
					$('#player').css('left', pxx);
					$('#booster').css('left', bxx);
					$('#boosterStmt').val('pl');
				} else if (pr == 1 && pxx < 570) {
					pxx += 4;
					bxx += 4;
					$('#player').css('left', pxx);
					$('#booster').css('left', bxx);
					$('#boosterStmt').val('pr');
				} if (pl == 1 && gs == 4) {
					$('#boosterStmt').val('pl');
				} if (pr == 1 && gs == 4) {
					$('#boosterStmt').val('pr');
				} if (pr == 0 && pl == 0 && gs == 4) {
					$('#boosterStmt').val('0');
				}
				$('#pX').val($('#player').css('left').replace('px', ''));
				$('#playerHB').css('left', $('#player').css('left'));
			}
		}, 10);
		
		setInterval(() => {
				let bs = $('#boosterStmt').val();
				if (bs == 'pl') {
					setTimeout(() => {
						$('#booster').attr('src', 'resources/img/game/fl1.png');
						setTimeout(() => {
							$('#booster').attr('src', 'resources/img/game/fl2.png');
							setTimeout(() => {
								$('#booster').attr('src', 'resources/img/game/fl3.png');
							}, 75);
						}, 75);
					}, 75);
				}
				if (bs == 'pr') {
					setTimeout(() => {
						$('#booster').attr('src', 'resources/img/game/fr1.png');
						setTimeout(() => {
							$('#booster').attr('src', 'resources/img/game/fr2.png');
							setTimeout(() => {
								$('#booster').attr('src', 'resources/img/game/fr3.png');
							}, 75);
						}, 75);
					}, 75);
				}
				if (bs == 0) {
					setTimeout(() => {
						$('#booster').attr('src', 'resources/img/game/f01.png');
						setTimeout(() => {
							$('#booster').attr('src', 'resources/img/game/f02.png');
							setTimeout(() => {
								$('#booster').attr('src', 'resources/img/game/f03.png');
							}, 75);
						}, 75);
					}, 75);
				}
		}, 150);
}

function enemy () {
	let es = 1;
	let er = 250;
	$('#enemySpeed').val(es);
	$('#enemyRegen').val(er);
	setInterval(() => {
		if ($('#gameStmt').val() == 4) {
			if (es < 4) {
				es += 0.12;
				$('#enemySpeed').val(es);
			}
			else if (es >= 4) {
				es += 0.03;
				$('#enemySpeed').val(es);
			}
			if (er > 50) {
				er -= 8;
			$('#enemyRegen').val(er);
			}
			else if (er > 20 && er <= 50) {
				er -= 3;
				$('#enemyRegen').val(er);
			}
		}
	}, 10000);
}

function timer() {
	let time = 0;
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 4) {
			time ++;
			$('#timer').val(time);
		}
	}, 1000);
}

function score() {
	let score = 0;
	setInterval(() => {
		let scoreCalc = Number($('#scoreCalc').val());
		let scoreCalc2 = Number($('#scoreCalc2').val());
		scoreCalc += scoreCalc2;
		$('#scoreCalc').val(scoreCalc);
		scoreCalc2 = 0;
		$('#scoreCalc2').val(scoreCalc2);
		if (scoreCalc >= 1 && scoreCalc < 500) {
			scoreCalc -= 1;
			$('#scoreCalc').val(scoreCalc);
			score += 1;
			$('#score').val(score);
		} else if (scoreCalc >= 500) {
			scoreCalc -= 5;
			$('#scoreCalc').val(scoreCalc);
			score += 5;
			$('#score').val(score);
		}
	}, 1);
}


$(function () {
	gameReady();
	gameStart();
	playerMove();
	enemy();
	timer();
	score();
});