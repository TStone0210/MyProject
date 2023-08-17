//player.js

function playerHit () {
	const blast = new Audio('resources/audio/game/cannonhit.mp3');
	setInterval(() => {
		$('#playerHBX').val($('#playerHB').css('left').replace('px',''));
		$('#playerHBY').val($('#playerHB').css('top').replace('px',''));
		
		let pHBX = Number($('#playerHBX').val());
		let pHBY = Number($('#playerHBY').val());
		
		let pStmt = Number($('#playerStmt').val());
		if (pHBX >= Number($('#meteor1X').val())-12 && $('#meteor1s').val() == 1 && pHBY >= Number($('#meteor1Y').val())-12 && pHBY <= Number($('#meteor1Y').val())+12  && pHBX <= Number($('#meteor1X').val())+12 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#meteor2X').val())-18 && $('#meteor2s').val() == 1 && pHBY >= Number($('#meteor2Y').val())-18 && pHBY <= Number($('#meteor2Y').val())+18  && pHBX <= Number($('#meteor2X').val())+18 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#meteor3X').val())-18 && $('#meteor3s').val() == 1 && pHBY >= Number($('#meteor3Y').val())-18 && pHBY <= Number($('#meteor3Y').val())+18  && pHBX <= Number($('#meteor3X').val())+18 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#meteor4X').val())-22 && $('#meteor4s').val() == 1 && pHBY >= Number($('#meteor4Y').val())-22 && pHBY <= Number($('#meteor4Y').val())+22  && pHBX <= Number($('#meteor4X').val())+22 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#meteor5X').val())-22 && $('#meteor5s').val() == 1 && pHBY >= Number($('#meteor5Y').val())-22 && pHBY <= Number($('#meteor5Y').val())+22  && pHBX <= Number($('#meteor5X').val())+22 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#meteor6X').val())-35 && $('#meteor6s').val() == 1 && pHBY >= Number($('#meteor6Y').val())-35 && pHBY <= Number($('#meteor6Y').val())+35  && pHBX <= Number($('#meteor6X').val())+35 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#meteor7X').val())-35 && $('#meteor7s').val() == 1 && pHBY >= Number($('#meteor7Y').val())-35 && pHBY <= Number($('#meteor7Y').val())+35  && pHBX <= Number($('#meteor7X').val())+35 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#meteor8X').val())-40 && $('#meteor8s').val() == 1 && pHBY >= Number($('#meteor8Y').val())-40 && pHBY <= Number($('#meteor8Y').val())+40  && pHBX <= Number($('#meteor8X').val())+40 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#meteor9X').val())-40 && $('#meteor9s').val() == 1 && pHBY >= Number($('#meteor9Y').val())-40 && pHBY <= Number($('#meteor9Y').val())+40  && pHBX <= Number($('#meteor9X').val())+40 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#meteor10X').val())-70 && $('#meteor10s').val() == 1 && pHBY >= Number($('#meteor10Y').val())-70 && pHBY <= Number($('#meteor10Y').val())+70  && pHBX <= Number($('#meteor10X').val())+70 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#meteor11X').val())-80 && $('#meteor11s').val() == 1 && pHBY >= Number($('#meteor11Y').val())-80 && pHBY <= Number($('#meteor11Y').val())+80  && pHBX <= Number($('#meteor11X').val())+80 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#meteor12X').val())-100 && $('#meteor12s').val() == 1 && pHBY >= Number($('#meteor12Y').val())-100 && pHBY <= Number($('#meteor12Y').val())+100  && pHBX <= Number($('#meteor12X').val())+100 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#alien1aX').val())-40 && $('#alien1as').val() == 1 && pHBY >= Number($('#alien1aY').val())-20 && pHBY <= Number($('#alien1aY').val())+20  && pHBX <= Number($('#alien1aX').val())+40 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#alien1bX').val())-40 && $('#alien1bs').val() == 1 && pHBY >= Number($('#alien1bY').val())-20 && pHBY <= Number($('#alien1bY').val())+20  && pHBX <= Number($('#alien1bX').val())+40 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#alien3X').val())-75 && $('#alien3s').val() == 1 && pHBY >= Number($('#alien3Y').val())-40 && pHBY <= Number($('#alien3Y').val())+40  && pHBX <= Number($('#alien3X').val())+75 && pStmt == 1) {
			$('#playerStmt').val(2);
		}
		if (pHBX >= Number($('#cannon1X').val())-30 && $('#cannon1s').val() == 2 && pHBY >= Number($('#cannon1Y').val())-10 && pHBY <= Number($('#cannon1Y').val())+10  && pHBX <= Number($('#cannon1X').val())+30 && pStmt == 1) {
			$('#playerStmt').val(2);
			blast.play();
			$('#cannon1s').val(3);
			$('#cannon1').css('opacity', '0');
			$('#cannon1B').css('display', 'block');
			$('#cannon1B').css('opacity', '1');
			$('#cannon1B').css('left', $('#cannon1X').val() + 'px');
			$('#cannon1B').css('top', $('#cannon1Y').val() + 'px');
			setTimeout(() => {
				$('#cannon1B').attr('src', 'resources/img/game/blast1.png');
				setTimeout(() => {
					$('#cannon1B').attr('src', 'resources/img/game/blast2.png');
					setTimeout(() => {
						$('#cannon1B').attr('src', 'resources/img/game/blast3.png');
						setTimeout(() => {
							$('#cannon1B').attr('src', 'resources/img/game/blast4.png');
							setTimeout(() => {
								$('#cannon1B').attr('src', 'resources/img/game/blast5.png');
								setTimeout(() => {
									$('#cannon1B').css('opacity', '0');
									$('#cannon1B').css('display', 'none');
								}, 50);
							}, 50);
						}, 50);
					}, 50);
				}, 50);
			}, 50);
		}
		if (pHBX >= Number($('#cannon2X').val())-30 && $('#cannon2s').val() == 2 && pHBY >= Number($('#cannon2Y').val())-10 && pHBY <= Number($('#cannon2Y').val())+10  && pHBX <= Number($('#cannon2X').val())+30 && pStmt == 1) {
			$('#playerStmt').val(2);
			blast.play();
			$('#cannon2s').val(3);
			$('#cannon2').css('opacity', '0');
			$('#cannon2B').css('display', 'block');
			$('#cannon2B').css('opacity', '1');
			$('#cannon2B').css('left', $('#cannon2X').val() + 'px');
			$('#cannon2B').css('top', $('#cannon2Y').val() + 'px');
			setTimeout(() => {
				$('#cannon2B').attr('src', 'resources/img/game/blast1.png');
				setTimeout(() => {
					$('#cannon2B').attr('src', 'resources/img/game/blast2.png');
					setTimeout(() => {
						$('#cannon2B').attr('src', 'resources/img/game/blast3.png');
						setTimeout(() => {
							$('#cannon2B').attr('src', 'resources/img/game/blast4.png');
							setTimeout(() => {
								$('#cannon2B').attr('src', 'resources/img/game/blast5.png');
								setTimeout(() => {
									$('#cannon2B').css('opacity', '0');
									$('#cannon2B').css('display', 'none');
								}, 50);
							}, 50);
						}, 50);
					}, 50);
				}, 50);
			}, 50);
		}
		if (pHBX >= Number($('#cannon3X').val())-30 && $('#cannon3s').val() == 2 && pHBY >= Number($('#cannon3Y').val())-10 && pHBY <= Number($('#cannon3Y').val())+10  && pHBX <= Number($('#cannon3X').val())+10 && pStmt == 1) {
			$('#playerStmt').val(2);
			blast.play();
			$('#cannon3s').val(3);
			$('#cannon3').css('opacity', '0');
			$('#cannon3B').css('display', 'block');
			$('#cannon3B').css('opacity', '1');
			$('#cannon3B').css('left', $('#cannon3X').val() + 'px');
			$('#cannon3B').css('top', $('#cannon3Y').val() + 'px');
			setTimeout(() => {
				$('#cannon3B').attr('src', 'resources/img/game/blast1.png');
				setTimeout(() => {
					$('#cannon3B').attr('src', 'resources/img/game/blast2.png');
					setTimeout(() => {
						$('#cannon3B').attr('src', 'resources/img/game/blast3.png');
						setTimeout(() => {
							$('#cannon3B').attr('src', 'resources/img/game/blast4.png');
							setTimeout(() => {
								$('#cannon3B').attr('src', 'resources/img/game/blast5.png');
								setTimeout(() => {
									$('#cannon3B').css('opacity', '0');
									$('#cannon3B').css('display', 'none');
								}, 50);
							}, 50);
						}, 50);
					}, 50);
				}, 50);
			}, 50);
		}
	}, 1);
		
}

function playerLife () {
	const pHit = new Audio('resources/audio/game/playerhit.mp3');
	const pDeath = new Audio('resources/audio/game/death.mp3');
	pHit.volume = 0.5;
	pDeath.volume = 0.5;
	setInterval(() => {
		let life = $('#playerLife').val();
		let bs = Number($('#bulletSpeed').val());
		if (life == 0) {
			$('#lifeBox').css('text-shadow', 'red 0px 0px 10px, red 0px 0px 9px, red 1px 1px 8px');
			$('#playerLife').css('text-shadow', 'red 0px 0px 10px, red 0px 0px 9px, red 1px 1px 8px');
		}
		if ($('#playerStmt').val() == 2 && life >0) {
			$('#playerStmt').val(3);
			life --;
			if (bs <= 150) {
				bs += 50;
				$('#bulletSpeed').val(bs);
			} else if (bs > 150) {
				$('#bulletSpeed').val(200);
			}
			$('#playerLife').val(life);
			pHit.play();
			$('#player').css('opacity', '0');
			$('#booster').css('opacity', '0');
			setTimeout(() => {
				$('#player').css('opacity', '1');
				$('#booster').css('opacity', '1');
				setTimeout(() => {
					$('#player').css('opacity', '0');
					$('#booster').css('opacity', '0');
					setTimeout(() => {
						$('#player').css('opacity', '1');
						$('#booster').css('opacity', '1');
						setTimeout(() => {
							$('#player').css('opacity', '0');
							$('#booster').css('opacity', '0');
							setTimeout(() => {
								$('#player').css('opacity', '1');
								$('#booster').css('opacity', '1');
								setTimeout(() => {
									$('#player').css('opacity', '0');
									$('#booster').css('opacity', '0');
									setTimeout(() => {
										$('#player').css('opacity', '1');
										$('#booster').css('opacity', '1');
										setTimeout(() => {
											$('#player').css('opacity', '0');
											$('#booster').css('opacity', '0');
											setTimeout(() => {
												$('#player').css('opacity', '1');
												$('#booster').css('opacity', '1');
												setTimeout(() => {
													$('#player').css('opacity', '0');
													$('#booster').css('opacity', '0');
													setTimeout(() => {
														$('#player').css('opacity', '1');
														$('#booster').css('opacity', '1');
														setTimeout(() => {
															$('#player').css('opacity', '0');
															$('#booster').css('opacity', '0');
															setTimeout(() => {
																$('#player').css('opacity', '1');
																$('#booster').css('opacity', '1');
																setTimeout(() => {
																	$('#player').css('opacity', '0');
																	$('#booster').css('opacity', '0');
																	setTimeout(() => {
																		$('#player').css('opacity', '1');
																		$('#booster').css('opacity', '1');
																		$('#playerStmt').val(1);
																	}, 135);
																}, 135);
															}, 135);
														}, 135);
													}, 135);
												}, 135);
											}, 135);
										}, 135);
									}, 135);
								}, 135);
							}, 135);
						}, 135);
					}, 135);
				}, 135);
			}, 135);
			
			}
		else if ($('#playerStmt').val() == 2 && life <= 0) {
			$('#gameStmt').val(5);
			$('#playerStmt').val(4);
			$('#bomb').val(0);
			pDeath.play();
			$('#booster').css('display', 'none');
			$('#player').attr('src', 'resources/img/game/p0d1.png');
			setTimeout(() => {
				$('#player').attr('src', 'resources/img/game/p0d2.png');
				setTimeout(() => {
					$('#player').attr('src', 'resources/img/game/p0d3.png');
					setTimeout(() => {
						$('#player').attr('src', 'resources/img/game/p0d4.png');
						setTimeout(() => {
							$('#player').attr('src', 'resources/img/game/p0d5.png');
							setTimeout(() => {
								$('#player').attr('src', 'resources/img/game/p0d6.png');
								setTimeout(() => {
									$('#player').css('display', 'none');
								}, 90);
							}, 90);
						}, 90);
					}, 90);
				}, 90);
			}, 90);
		}
		
		
		
	}, 1);
	
}



$(function () {
	playerHit();
	playerLife();
});