//gameover.js

function gameover () {
	let gos = 0;
	let scs = 0;
	let scoring = 0;
	let calcs = 0;
	let finishs = 0;
	let wells = 0;
	const gameover = new Audio('resources/audio/game/game3.mp3');
	const ending = new Audio('resources/audio/game/ending.mp3');
	setInterval(() => {
		gameover.volume = 0.5;
		ending.volume = 0.5;
		let gs = $('#gameStmt').val();
		if (gs == 5 && gos == 0) {
			gos = 1;
			setTimeout(() => {
				$('#gameSpace').css('background-color', '#AAAAAA');
				$('.enemy').css('opacity', '0.9');
				$('.item').css('opacity', '0.9');
				$('.star').css('opacity', '0.9');
				setTimeout(() => {
					$('#gameSpace').css('background-color', '#999999');
					$('.enemy').css('opacity', '0.8');
					$('.item').css('opacity', '0.8');
					$('.star').css('opacity', '0.8');
					setTimeout(() => {
						$('#gameSpace').css('background-color', '#888888');
						$('.enemy').css('opacity', '0.7');
						$('.item').css('opacity', '0.7');
						$('.star').css('opacity', '0.7');
						setTimeout(() => {
							$('#gameSpace').css('background-color', '#777777');
							$('.enemy').css('opacity', '0.6');
							$('.item').css('opacity', '0.6');
							$('.star').css('opacity', '0.6');
							setTimeout(() => {
								$('#gameSpace').css('background-color', '#666666');
								$('.enemy').css('opacity', '0.5');
								$('.item').css('opacity', '0.5');
								$('.star').css('opacity', '0.5');
								setTimeout(() => {
									$('#gameSpace').css('background-color', '#555555');
									$('.enemy').css('opacity', '0.4');
									$('.item').css('opacity', '0.4');
									$('.star').css('opacity', '0.4');
									setTimeout(() => {
										$('#gameSpace').css('background-color', '#444444');
										$('.enemy').css('opacity', '0.3');
										$('.item').css('opacity', '0.3');
										$('.star').css('opacity', '0.3');
										setTimeout(() => {
											$('#gameSpace').css('background-color', '#333333');
											$('.enemy').css('opacity', '0.2');
											$('.item').css('opacity', '0.2');
											$('.star').css('opacity', '0.27');
											setTimeout(() => {
												$('#gameSpace').css('background-color', '#222222');
												$('.enemy').css('opacity', '0.1');
												$('.item').css('opacity', '0.1');
												$('.star').css('opacity', '0.1');
												setTimeout(() => {
													$('#gameSpace').css('background-color', '#111111');
													$('.enemy').css('opacity', '0');
													$('.item').css('opacity', '0');
													$('.star').css('opacity', '0');
													setTimeout(() => {
														$('#gameSpace').css('background-color', '#000000');
														$('.status').css('display', 'none');
														$('#timer').css('display', 'none');
														$('#score').css('display', 'none');
														setTimeout(() => {
															$('#gameStmt').val(6);
														}, 1000);
													}, 200);
												}, 200);
											}, 200);
										}, 200);
									}, 200);
								}, 200);
							}, 200);
						}, 200);
					}, 200);
				}, 20);
			}, 2000);
		}
		
		if (gs == 6 && scs == 0) {
			scs = 1;
			gameover.play();
			setTimeout(() => {
				ending.play();
			}, 24000);
			$('#gameover').css('display', 'block');
			setTimeout(() => {
				$('#gameover').css('display', 'none');
				setTimeout(() => {
					$('#gameover').css('display', 'block');
					setTimeout(() => {
						$('#gameover').css('display', 'none');
						setTimeout(() => {
							$('#gameover').css('display', 'block');
							setTimeout(() => {
								$('#gameover').css('display', 'none');
								setTimeout(() => {
									$('#gameover').css('display', 'block');
									setTimeout(() => {
										$('#gameStmt').val(7);
									}, 2000);
								}, 450);
							}, 450);
						}, 450);
					}, 450);
				}, 450);
			}, 450);
		}
		
		if (gs == 7 & calcs == 0) {
			calcs = 1;
			$('.result').css('display', 'block');
			$('#timerR').val($('#timer').val());
			$('#scoreR').val($('#score').val());
			setTimeout(() => {
				$('#gameStmt').val(8);
			}, 1000);
		}
		
		
		if (gs == 8) {
			let tr = Number($('#timerR').val());
			let sr = Number($('#scoreR').val());
			
			if (tr > 0 && tr < 100 && scoring == 0) {
				scoring = 1;
				tr --;
				sr += 200;
				$('#timerR').val(tr);
				$('#scoreR').val(sr);
				setTimeout(() => {
					scoring = 0;
				}, 25);
			}
			
			if (tr >= 100 && tr < 300 && scoring == 0) {
				scoring = 1;
				tr -- ;
				sr += 200;
				$('#timerR').val(tr);
				$('#scoreR').val(sr);
				setTimeout(() => {
					scoring = 0;
				}, 2);
			}
			
			if (tr >= 400 && scoring == 0) {
				scoring = 1;
				tr -- ;
				sr += 200;
				$('#timerR').val(tr);
				$('#scoreR').val(sr);
				setTimeout(() => {
					scoring = 0;
				}, 1);
			}
			
			
			if (tr == 0 && finishs == 0) {
				finishs = 1;
				setTimeout(() => {
					$('#gameStmt').val(9);
				}, 2000);
			}
			
		}
		
		if (gs == 9 && wells == 0) {
			wells = 1;
			$('#regScoreBtn').css('display', 'block');
			$('#noReg').css('display', 'block');
			setTimeout(() => {
				$('.welldone').css('opacity', '0');
				setTimeout(() => {
					$('.welldone').css('opacity', '1');
					wells = 0;
				}, 650);
			}, 850);
		}
		
	}, 1);
}

function scoreRegButton () {
	$('#regScoreBtn').click(() => {
		let t = confirm('점수를 등록하시겠습니까?');
		if (t == true) {
			return true;
		} else if (t == false) {
			return false;
		}
	});
}

function scoreReg () {
	let scoreR = $('#scoreRegR').val();
	if (scoreR != "") {
		alert(scoreR);
		$('#scoreRegR').val("");
		location.href="game.go";
	}
}

$(function() {
	gameover();
	scoreRegButton();
	scoreReg();
});