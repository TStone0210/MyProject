//enemy.js

function meteor1 () {
	$('#meteor1HP').val('2');
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeed = 1;
	let mA = 0;
	const md1 = new Audio('resources/audio/game/m1d.MP3');
	md1.volume = 0.05;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4) {
			$('#m1n').val(Math.round(Math.random()*20));
			miS = 1;
			$('#meteor1').css('left', '700px');
			$('#meteor1').css('top', Math.random()*370 + 60);
			setTimeout(() => {
				miS = 0;
			}, $('#enemyRegen').val());
		}
		
		if ($('#m1n').val() == 20 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#meteor1').css('opacity', '1');
			$('#meteor1').attr('src','resources/img/game/meteor.png');
			$('#meteor1HP').val(2);
		}
		
		if (miS2 == 1) {
			let mL = $('#meteor1').css('left').replace('px', '');
			mL -= mSpeed*$('#enemySpeed').val();
			$('#meteor1').css('left', mL + 'px');
		}
		
		if ($('#meteor1HP').val() <= 0 && mS == 1) {
			mS = 2;
			sc += 250;
			bs += 250;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			$('#meteor1s').val(0);
			setTimeout(() => {
				$('#meteor1').attr('src','resources/img/game/meteord1.png');
				md1.play();
				setTimeout(() => {
					$('#meteor1').attr('src','resources/img/game/meteord2.png');
					setTimeout(() => {
						$('#meteor1').attr('src','resources/img/game/meteord3.png');
						setTimeout(() => {
							$('#meteor1').css('opacity', '0');
						}, 75);
					}, 75);
				}, 75);
			}, 75);
		}
		
		if ($('#meteor1X').val() < -120 && mS != 0) {
			mA = Math.random()*180;
			mS = 0;
			miS2 = 0;
			$('#meteor1HP').val('2');
			$('#meteor1s').val(1);
		}
		
	}, 1);
	
	setInterval(() => {
		mA += 4;
		$('#meteor1').css('transform', 'translate(-50%, -50%) rotate(' + mA + "deg)");
		
	}, 5);
	
	setInterval(() => {
		$('#meteor1X').val($('#meteor1').css('left').replace('px', ''));
		$('#meteor1Y').val($('#meteor1').css('top').replace('px', ''));
	}, 1);
	
}

function meteor2 () {
	$('#meteor2HP').val('4');
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeed = 0.6;
	let mA = 0;
	const md2 = new Audio('resources/audio/game/m1d.MP3');
	md2.volume = 0.1;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4) {
			$('#m2n').val(Math.round(Math.random()*12));
			miS = 1;
			$('#meteor2').css('left', '740px');
			$('#meteor2').css('top', Math.random()*350 + 80);
			setTimeout(() => {
				miS = 0;
			}, $('#enemyRegen').val());
		}
		
		if ($('#m2n').val() == 12 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#meteor2').css('opacity', '1');
			$('#meteor2').attr('src','resources/img/game/meteor.png');
			$('#meteor2HP').val(4);
		}
		
		if (miS2 == 1) {
			let mL = $('#meteor2').css('left').replace('px', '');
			mL -= mSpeed*$('#enemySpeed').val();
			$('#meteor2').css('left', mL + 'px');
		}
		
		if ($('#meteor2HP').val() <= 0 && mS == 1) {
			mS = 2;
			$('#meteor2s').val(0);
			sc += 200;
			bs += 200;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			setTimeout(() => {
				$('#meteor2').attr('src','resources/img/game/meteord1.png');
				md2.play();
				setTimeout(() => {
					$('#meteor2').attr('src','resources/img/game/meteord2.png');
					setTimeout(() => {
						$('#meteor2').attr('src','resources/img/game/meteord3.png');
						setTimeout(() => {
							$('#meteor2').css('opacity', '0');
						}, 75);
					}, 75);
				}, 75);
			}, 75);
			
		}
		
		if ($('#meteor2X').val() < -120 && mS != 0) {
			mA = Math.random()*180;
			mS = 0;
			miS2 = 0;
			$('#meteor2HP').val('4');
			$('#meteor2s').val(1);
		}
		
	}, 1);
	
	
	setInterval(() => {
		mA += 2;
		$('#meteor2').css('transform', 'translate(-50%, -50%) rotate(' + mA + "deg)");
		
	}, 5);
	
	setInterval(() => {
		$('#meteor2X').val($('#meteor2').css('left').replace('px', ''));
		$('#meteor2Y').val($('#meteor2').css('top').replace('px', ''));
	}, 1);
	
}

function meteor3 () {
	$('#meteor3HP').val('4');
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeed = 0.6;
	let mA = 0;
	const md3 = new Audio('resources/audio/game/m1d.MP3');
	md3.volume = 0.1;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4) {
			$('#m3n').val(Math.round(Math.random()*12));
			miS = 1;
			$('#meteor3').css('left', '740px');
			$('#meteor3').css('top', Math.random()*350 + 80);
			setTimeout(() => {
				miS = 0;
			}, $('#enemyRegen').val());
		}
		
		if ($('#m3n').val() == 12 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#meteor3').css('opacity', '1');
			$('#meteor3').attr('src','resources/img/game/meteor.png');
			$('#meteor3HP').val(4);
		}
		
		if (miS2 == 1) {
			let mL = $('#meteor3').css('left').replace('px', '');
			mL -= mSpeed*$('#enemySpeed').val();
			$('#meteor3').css('left', mL + 'px');
		}
		
		if ($('#meteor3HP').val() <= 0 && mS == 1) {
			mS = 2;
			$('#meteor3s').val(0);
			sc += 200;
			bs += 200;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			setTimeout(() => {
				$('#meteor3').attr('src','resources/img/game/meteord1.png');
				md3.play();
				setTimeout(() => {
					$('#meteor3').attr('src','resources/img/game/meteord2.png');
					setTimeout(() => {
						$('#meteor3').attr('src','resources/img/game/meteord3.png');
						setTimeout(() => {
							$('#meteor3').css('opacity', '0');
						}, 75);
					}, 75);
				}, 75);
			}, 75);
			
		}
		
		if ($('#meteor3X').val() < -120 && mS != 0) {
			mA = Math.random()*180;
			mS = 0;
			miS2 = 0;
			$('#meteor3HP').val('4');
			$('#meteor3s').val(1);
		}
		
	}, 1);
	
	setInterval(() => {
		mA += 2;
		$('#meteor3').css('transform', 'translate(-50%, -50%) rotate(' + mA + "deg)");
		
	}, 5);
	
	setInterval(() => {
		$('#meteor3X').val($('#meteor3').css('left').replace('px', ''));
		$('#meteor3Y').val($('#meteor3').css('top').replace('px', ''));
	}, 1);
	
}

function meteor4 () {
	$('#meteor4HP').val('7');
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeed = 0.4;
	let mA = 0;
	const md4 = new Audio('resources/audio/game/m1d.MP3');
	md4.volume = 0.15;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4) {
			$('#m4n').val(Math.round(Math.random()*16));
			miS = 1;
			$('#meteor4').css('left', '780px');
			$('#meteor4').css('top', Math.random()*340 + 90);
			setTimeout(() => {
				miS = 0;
			}, $('#enemyRegen').val());
		}
		
		if ($('#m4n').val() == 16 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#meteor4').css('opacity', '1');
			$('#meteor4').attr('src','resources/img/game/meteor.png');
			$('#meteor4HP').val(7);
		}
		
		if (miS2 == 1) {
			let mL = $('#meteor4').css('left').replace('px', '');
			mL -= mSpeed*$('#enemySpeed').val();
			$('#meteor4').css('left', mL + 'px');
		}
		
		if ($('#meteor4HP').val() <= 0 && mS == 1) {
			mS = 2;
			$('#meteor4s').val(0);
			sc += 300;
			bs += 300;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			setTimeout(() => {
				$('#meteor4').attr('src','resources/img/game/meteord1.png');
				md4.play();
				setTimeout(() => {
					$('#meteor4').attr('src','resources/img/game/meteord2.png');
					setTimeout(() => {
						$('#meteor4').attr('src','resources/img/game/meteord3.png');
						setTimeout(() => {
							$('#meteor4').css('opacity', '0');
						}, 75);
					}, 75);
				}, 75);
			}, 75);
			
		}
		
		if ($('#meteor4X').val() < -120 && mS != 0) {
			mA = Math.random()*180;
			mS = 0;
			miS2 = 0;
			$('#meteor4HP').val('7');
			$('#meteor4s').val(1);
		}
		
	}, 1);
	
	setInterval(() => {
		mA += 3;
		$('#meteor4').css('transform', 'translate(-50%, -50%) rotate(' + mA + "deg)");
		
	}, 10);
	
	setInterval(() => {
		$('#meteor4X').val($('#meteor4').css('left').replace('px', ''));
		$('#meteor4Y').val($('#meteor4').css('top').replace('px', ''));
	}, 1);
	
}

function meteor5 () {
	$('#meteor5HP').val('7');
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeed = 0.4;
	let mA = 0;
	const md5 = new Audio('resources/audio/game/m1d.MP3');
	md5.volume = 0.15;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4) {
			$('#m5n').val(Math.round(Math.random()*16));
			miS = 1;
			$('#meteor5').css('left', '780px');
			$('#meteor5').css('top', Math.random()*340 + 90);
			setTimeout(() => {
				miS = 0;
			}, $('#enemyRegen').val());
		}
		
		if ($('#m5n').val() == 16 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#meteor5').css('opacity', '1');
			$('#meteor5').attr('src','resources/img/game/meteor.png');
			$('#meteor5HP').val(7);
		}
		
		if (miS2 == 1) {
			let mL = $('#meteor5').css('left').replace('px', '');
			mL -= mSpeed*$('#enemySpeed').val();
			$('#meteor5').css('left', mL + 'px');
		}
		
		if ($('#meteor5HP').val() <= 0 && mS == 1) {
			mS = 2;
			$('#meteor5s').val(0);
			sc += 300;
			bs += 300;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			setTimeout(() => {
				$('#meteor5').attr('src','resources/img/game/meteord1.png');
				md5.play();
				setTimeout(() => {
					$('#meteor5').attr('src','resources/img/game/meteord2.png');
					setTimeout(() => {
						$('#meteor5').attr('src','resources/img/game/meteord3.png');
						setTimeout(() => {
							$('#meteor5').css('opacity', '0');
						}, 75);
					}, 75);
				}, 75);
			}, 75);
			
		}
		
		if ($('#meteor5X').val() < -120 && mS != 0) {
			mA = Math.random()*180;
			mS = 0;
			miS2 = 0;
			$('#meteor5HP').val('7');
			$('#meteor5s').val(1);
		}
		
	}, 1);
	
	setInterval(() => {
		mA += 3;
		$('#meteor5').css('transform', 'translate(-50%, -50%) rotate(' + mA + "deg)");
		
	}, 10);
	
	setInterval(() => {
		$('#meteor5X').val($('#meteor5').css('left').replace('px', ''));
		$('#meteor5Y').val($('#meteor5').css('top').replace('px', ''));
	}, 1);
	
}

function meteor6 () {
	$('#meteor6HP').val('10');
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeed = 0.3;
	let mA = 0;
	const md6 = new Audio('resources/audio/game/m6d.MP3');
	md6.volume = 0.25;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4 && $('#timer').val() >= 30) {
			$('#m6n').val(Math.round(Math.random()*18));
			miS = 1;
			$('#meteor6').css('left', '800px');
			$('#meteor6').css('top', Math.random()*360 + 70);
			setTimeout(() => {
				miS = 0;
			}, $('#enemyRegen').val());
		}
		
		if ($('#m6n').val() == 16 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#meteor6').css('opacity', '1');
			$('#meteor6').attr('src','resources/img/game/meteor.png');
			$('#meteor6HP').val(10);
		}
		
		if (miS2 == 1) {
			let mL = $('#meteor6').css('left').replace('px', '');
			mL -= mSpeed*$('#enemySpeed').val();
			$('#meteor6').css('left', mL + 'px');
		}
		
		if ($('#meteor6HP').val() <= 0 && mS == 1) {
			mS = 2;
			$('#meteor6s').val(0);
			sc += 450;
			bs += 450;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			setTimeout(() => {
				$('#meteor6').attr('src','resources/img/game/meteord1.png');
				md6.play();
				setTimeout(() => {
					$('#meteor6').attr('src','resources/img/game/meteord2.png');
					setTimeout(() => {
						$('#meteor6').attr('src','resources/img/game/meteord3.png');
						setTimeout(() => {
							$('#meteor6').css('opacity', '0');
						}, 75);
					}, 75);
				}, 75);
			}, 75);
			
		}
		
		if ($('#meteor6X').val() < -120 && mS != 0) {
			mA = Math.random()*180;
			mS = 0;
			miS2 = 0;
			$('#meteor6HP').val('10');
			$('#meteor6s').val(1);
		}
		
	}, 1);
	
	setInterval(() => {
		mA += 2;
		$('#meteor6').css('transform', 'translate(-50%, -50%) rotate(' + mA + "deg)");
		
	}, 10);
	
	setInterval(() => {
		$('#meteor6X').val($('#meteor6').css('left').replace('px', ''));
		$('#meteor6Y').val($('#meteor6').css('top').replace('px', ''));
	}, 1);
	
}

function meteor7 () {
	$('#meteor7HP').val('10');
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeed = 0.3;
	let mA = 0;
	const md7 = new Audio('resources/audio/game/m6d.MP3');
	md7.volume = 0.25;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4 && $('#timer').val() >= 60) {
			$('#m7n').val(Math.round(Math.random()*18));
			miS = 1;
			$('#meteor7').css('left', '800px');
			$('#meteor7').css('top', Math.random()*360 + 70);
			setTimeout(() => {
				miS = 0;
			}, $('#enemyRegen').val());
		}
		
		if ($('#m7n').val() == 16 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#meteor7').css('opacity', '1');
			$('#meteor7').attr('src','resources/img/game/meteor.png');
			$('#meteor7HP').val(10);
		}
		
		if (miS2 == 1) {
			let mL = $('#meteor7').css('left').replace('px', '');
			mL -= mSpeed*$('#enemySpeed').val();
			$('#meteor7').css('left', mL + 'px');
		}
		
		if ($('#meteor7HP').val() <= 0 && mS == 1) {
			mS = 2;
			$('#meteor7s').val(0);
			sc += 450;
			bs += 450;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);

			setTimeout(() => {
				md7.play();
				$('#meteor7').attr('src','resources/img/game/meteord1.png');
				setTimeout(() => {
					$('#meteor7').attr('src','resources/img/game/meteord2.png');
					setTimeout(() => {
						$('#meteor7').attr('src','resources/img/game/meteord3.png');
						setTimeout(() => {
							$('#meteor7').css('opacity', '0');
						}, 75);
					}, 75);
				}, 75);
			}, 75);
			
		}
		
		if ($('#meteor7X').val() < -120 && mS != 0) {
			mA = Math.random()*180;
			mS = 0;
			miS2 = 0;
			$('#meteor7HP').val('10');
			$('#meteor7s').val(1);
		}
		
	}, 1);
	
	setInterval(() => {
		mA += 2;
		$('#meteor7').css('transform', 'translate(-50%, -50%) rotate(' + mA + "deg)");
		
	}, 10);
	
	setInterval(() => {
		$('#meteor7X').val($('#meteor7').css('left').replace('px', ''));
		$('#meteor7Y').val($('#meteor7').css('top').replace('px', ''));
	}, 1);
	
}

function meteor8 () {
	$('#meteor8HP').val('15');
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeed = 0.15;
	let mA = 0;
	const md8 = new Audio('resources/audio/game/m6d.MP3');
	md8.volume = 0.4;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4 && $('#timer').val() >= 60) {
			$('#m8n').val(Math.round(Math.random()*22));
			miS = 1;
			$('#meteor8').css('left', '840px');
			$('#meteor8').css('top', Math.random()*320 + 100);
			setTimeout(() => {
				miS = 0;
			}, $('#enemyRegen').val());
		}
		
		if ($('#m8n').val() == 22 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#meteor8').css('opacity', '1');
			$('#meteor8').attr('src','resources/img/game/meteor.png');
			$('#meteor8HP').val(15);
		}
		
		if (miS2 == 1) {
			let mL = $('#meteor8').css('left').replace('px', '');
			mL -= mSpeed*$('#enemySpeed').val();
			$('#meteor8').css('left', mL + 'px');
		}
		
		if ($('#meteor8HP').val() <= 0 && mS == 1) {
			mS = 2;
			$('#meteor8s').val(0);
			sc += 700;
			bs += 700;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			
			setTimeout(() => {
				md8.play();
				$('#meteor8').attr('src','resources/img/game/meteord1.png');
				setTimeout(() => {
					$('#meteor8').attr('src','resources/img/game/meteord2.png');
					setTimeout(() => {
						$('#meteor8').attr('src','resources/img/game/meteord3.png');
						setTimeout(() => {
							$('#meteor8').css('opacity', '0');
						}, 75);
					}, 75);
				}, 75);
			}, 75);
			
		}
		
		if ($('#meteor8X').val() < -150 && mS != 0) {
			mA = Math.random()*180;
			mS = 0;
			miS2 = 0;
			$('#meteor8HP').val('15');
			$('#meteor8s').val(1);
		}
		
	}, 1);
	
	setInterval(() => {
		mA += 1;
		$('#meteor8').css('transform', 'translate(-50%, -50%) rotate(' + mA + "deg)");
		
	}, 10);
	
	setInterval(() => {
		$('#meteor8X').val($('#meteor8').css('left').replace('px', ''));
		$('#meteor8Y').val($('#meteor8').css('top').replace('px', ''));
	}, 1);
	
}

function meteor9 () {
	$('#meteor9HP').val('15');
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeed = 0.15;
	let mA = 0;
	const md9 = new Audio('resources/audio/game/m6d.MP3');
	md9.volume = 0.4;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4 && $('#timer').val() >= 90) {
			$('#m9n').val(Math.round(Math.random()*22));
			miS = 1;
			$('#meteor9').css('left', '840px');
			$('#meteor9').css('top', Math.random()*320 + 100);
			setTimeout(() => {
				miS = 0;
			}, $('#enemyRegen').val());
		}
		
		if ($('#m9n').val() == 22 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#meteor9').css('opacity', '1');
			$('#meteor9').attr('src','resources/img/game/meteor.png');
			$('#meteor9HP').val(15);
		}
		
		if (miS2 == 1) {
			let mL = $('#meteor9').css('left').replace('px', '');
			mL -= mSpeed*$('#enemySpeed').val();
			$('#meteor9').css('left', mL + 'px');
		}
		
		if ($('#meteor9HP').val() <= 0 && mS == 1) {
			mS = 2;
			$('#meteor9s').val(0);
			sc += 700;
			bs += 700;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			
			setTimeout(() => {
				md9.play();
				$('#meteor9').attr('src','resources/img/game/meteord1.png');
				setTimeout(() => {
					$('#meteor9').attr('src','resources/img/game/meteord2.png');
					setTimeout(() => {
						$('#meteor9').attr('src','resources/img/game/meteord3.png');
						setTimeout(() => {
							$('#meteor9').css('opacity', '0');
						}, 75);
					}, 75);
				}, 75);
			}, 75);
			
		}
		
		if ($('#meteor9X').val() < -150 && mS != 0) {
			mA = Math.random()*180;
			mS = 0;
			miS2 = 0;
			$('#meteor9HP').val('15');
			$('#meteor9s').val(1);
		}
		
	}, 1);
	
	setInterval(() => {
		mA += 1;
		$('#meteor9').css('transform', 'translate(-50%, -50%) rotate(' + mA + "deg)");
		
	}, 10);
	
	setInterval(() => {
		$('#meteor9X').val($('#meteor9').css('left').replace('px', ''));
		$('#meteor9Y').val($('#meteor9').css('top').replace('px', ''));
	}, 1);
	
}

function meteor10 () {
	$('#meteor10HP').val('25');
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeed = 0.10;
	let mA = 0;
	const md10 = new Audio('resources/audio/game/m10d.MP3');
	md10.volume = 0.5;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4) {
			$('#m10n').val(Math.round(Math.random()*20) && $('#timer').val() >= 120);
			miS = 1;
			$('#meteor10').css('left', '880px');
			$('#meteor10').css('top', Math.random()*240 + 120);
			setTimeout(() => {
				miS = 0;
			}, $('#enemyRegen').val());
		}
		
		if ($('#m10n').val() == 20 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#meteor10').css('opacity', '1');
			$('#meteor10').attr('src','resources/img/game/meteor2.png');
			$('#meteor10HP').val(25);
		}
		if ($('#meteor10HP').val() > 8 && $('#meteor10HP').val() <= 15) {
			$('#meteor10').attr('src','resources/img/game/meteor2c1.png');
		}
		
		if ($('#meteor10HP').val() > 0 && $('#meteor10HP').val() <= 8) {
			$('#meteor10').attr('src','resources/img/game/meteor2c2.png');
		}
		
		if (miS2 == 1) {
			let mL = $('#meteor10').css('left').replace('px', '');
			mL -= mSpeed*$('#enemySpeed').val();
			$('#meteor10').css('left', mL + 'px');
		}
		
		if ($('#meteor10HP').val() <= 0 && mS == 1) {
			mS = 2;
			$('#meteor10s').val(0);
			sc += 1000;
			bs += 1000;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			
			setTimeout(() => {
				md10.play();
				$('#meteor10').attr('src','resources/img/game/meteor2d1.png');
				setTimeout(() => {
					$('#meteor10').attr('src','resources/img/game/meteor2d2.png');
					setTimeout(() => {
						$('#meteor10').attr('src','resources/img/game/meteor2d3.png');
						setTimeout(() => {
							$('#meteor10').attr('src','resources/img/game/meteor2d4.png');
							setTimeout(() => {
								$('#meteor10').css('opacity', '0');
							}, 75);
						}, 75);
					}, 75);
				}, 75);
			}, 75);
			
		}
		
		if ($('#meteor10X').val() < -180 && mS != 0) {
			mA = Math.random()*180;
			mS = 0;
			miS2 = 0;
			$('#meteor10HP').val('25');
			$('#meteor10s').val(1);
		}
		
	}, 1);
	
	setInterval(() => {
		mA += 1;
		$('#meteor10').css('transform', 'translate(-50%, -50%) rotate(' + mA + "deg)");
		
	}, 20);
	
	setInterval(() => {
		$('#meteor10X').val($('#meteor10').css('left').replace('px', ''));
		$('#meteor10Y').val($('#meteor10').css('top').replace('px', ''));
	}, 1);
	
}

function meteor11 () {
	$('#meteor11HP').val('40');
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeed = 0.05;
	let mA = 0;
	const md11 = new Audio('resources/audio/game/m10d.MP3');
	md11.volume = 0.7;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4 && $('#timer').val() >= 150) {
			$('#m11n').val(Math.round(Math.random()*30));
			miS = 1;
			$('#meteor11').css('left', '920px');
			$('#meteor11').css('top', Math.random()*200 + 140);
			setTimeout(() => {
				miS = 0;
			}, $('#enemyRegen').val());
		}
		
		if ($('#m11n').val() == 30 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#meteor11').css('opacity', '1');
			$('#meteor11').attr('src','resources/img/game/meteor2.png');
			$('#meteor11HP').val(40);
		}
		
		if ($('#meteor11HP').val() > 15 && $('#meteor11HP').val() <= 25) {
			$('#meteor11').attr('src','resources/img/game/meteor2c1.png');
		}
		
		if ($('#meteor11HP').val() > 0 && $('#meteor11HP').val() <= 15) {
			$('#meteor11').attr('src','resources/img/game/meteor2c2.png');
		}
		
		if (miS2 == 1) {
			let mL = $('#meteor11').css('left').replace('px', '');
			mL -= mSpeed*$('#enemySpeed').val();
			$('#meteor11').css('left', mL + 'px');
		}
		
		if ($('#meteor11HP').val() <= 0 && mS == 1) {
			mS = 2;
			$('#meteor11s').val(0);
			sc += 2000;
			bs += 2000;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			
			setTimeout(() => {
				md11.play();
				$('#meteor11').attr('src','resources/img/game/meteor2d1.png');
				setTimeout(() => {
					$('#meteor11').attr('src','resources/img/game/meteor2d2.png');
					setTimeout(() => {
						$('#meteor11').attr('src','resources/img/game/meteor2d3.png');
						setTimeout(() => {
							$('#meteor11').attr('src','resources/img/game/meteor2d4.png');
							setTimeout(() => {
								$('#meteor11').css('opacity', '0');
							}, 75);
						}, 75);
					}, 75);
				}, 75);
			}, 75);
			
		}
		
		if ($('#meteor11X').val() < -240 && mS != 0) {
			mA = Math.random()*180;
			mS = 0;
			miS2 = 0;
			$('#meteor11HP').val('40');
			$('#meteor11s').val(1);
		}
		
	}, 1);
	
	setInterval(() => {
		mA += 1;
		$('#meteor11').css('transform', 'translate(-50%, -50%) rotate(' + mA + "deg)");
		
	}, 25);
	
	setInterval(() => {
		$('#meteor11X').val($('#meteor11').css('left').replace('px', ''));
		$('#meteor11Y').val($('#meteor11').css('top').replace('px', ''));
	}, 1);
	
}

function meteor12 () {
	$('#meteor12HP').val('40');
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeed = 0.1;
	let mA = 0;
	const md12 = new Audio('resources/audio/game/m12d.MP3');
	md12.volume = 0.7;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4 && $('#timer').val() >= 120) {
			$('#m12n').val(Math.round(Math.random()*40));
			miS = 1;
			$('#meteor12').css('left', '880px');
			$('#meteor12').css('top', Math.random()*160 + 160);
			setTimeout(() => {
				miS = 0;
			}, 250);
		}
		
		if ($('#m12n').val() == 40 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#meteor12').css('opacity', '1');
			$('#meteor12').attr('src','resources/img/game/meteor2.png');
			let mh = 40;
			mh += Math.round(($('#enemySpeed').val() * 30));
			$('#meteor12HP').val(mh);
		}
		
		if (($('#meteor12HP').val()/(40+(30*($('#enemySpeed').val())))) > 0.33 && ($('#meteor12HP').val()/(40+(30*($('#enemySpeed').val())))) <= 0.7) {
			$('#meteor12').attr('src','resources/img/game/meteor2c1.png');
		}
		
		if ($('#meteor12HP').val() > 0 && ($('#meteor12HP').val()/(40+(30*($('#enemySpeed').val())))) <= 0.33) {
			$('#meteor12').attr('src','resources/img/game/meteor2c2.png');
		}
		
		if (miS2 == 1) {
			let mL = $('#meteor12').css('left').replace('px', '');
			mL -= mSpeed;
			$('#meteor12').css('left', mL + 'px');
		}
		
		if ($('#meteor12HP').val() <= 0 && mS == 1) {
			mS = 2;
			$('#meteor12s').val(0);
			sc += 4000;
			bs += 4000;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			
			setTimeout(() => {
				md12.play();
				$('#meteor12').attr('src','resources/img/game/meteor2d1.png');
				setTimeout(() => {
					$('#meteor12').attr('src','resources/img/game/meteor2d2.png');
					setTimeout(() => {
						$('#meteor12').attr('src','resources/img/game/meteor2d3.png');
						setTimeout(() => {
							$('#meteor12').attr('src','resources/img/game/meteor2d4.png');
							setTimeout(() => {
								$('#meteor12').css('opacity', '0');
							}, 75);
						}, 75);
					}, 75);
				}, 75);
			}, 75);
			
		}
		
		if ($('#meteor12X').val() < -240 && mS != 0) {
			mA = Math.random()*180;
			mS = 0;
			miS2 = 0;
			let mh = 40;
			mh += Math.round(($('#enemySpeed').val() * 30));
			$('#meteor12HP').val(mh);
			$('#meteor12s').val(1);
		}
		
	}, 1);
	
	setInterval(() => {
		mA += 0.5;
		$('#meteor12').css('transform', 'translate(-50%, -50%) rotate(' + mA + "deg)");
		
	}, 50);
	
	setInterval(() => {
		$('#meteor12X').val($('#meteor12').css('left').replace('px', ''));
		$('#meteor12Y').val($('#meteor12').css('top').replace('px', ''));
	}, 1);
	


}

function alien1a () {
	$('#alien1aHP').val(6);
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeedX = 0.3;
	let ys = 0;
	let yss = 0;
	const a1ad = new Audio('resources/audio/game/a1d.MP3');
	a1ad.volume = 0.105;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		let yg = Math.round($('#playerHBY').val() - $('#alien1aY').val())/1000;
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4) {
			$('#a1an').val(Math.round(Math.random()*15));
			miS = 1;
			$('#alien1a').css('left', '800px');
			$('#alien1a').css('top', Math.random()*1080 - 300);
			setTimeout(() => {
				miS = 0;
			}, 250);
		}
		
		if ($('#a1an').val() == 15 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#alien1a').css('opacity', '1');
			$('#alien1a').attr('src','resources/img/game/a1.png');
			$('#alien1aHP').val(6);
		}
		
		if (miS2 == 1) {
			let mL = $('#alien1a').css('left').replace('px', '');
			let mT = Number($('#alien1a').css('top').replace('px', ''));
			mL -= mSpeedX*$('#enemySpeed').val();
			$('#alien1a').css('left', mL + 'px');
			if (mL > $('#playerHBX').val()) {
				mT += yg*$('#enemySpeed').val();
				$('#alien1a').css('top', mT + 'px');
			}
			if (mL < $('#playerHBX').val() && yss == 0) {
				yss = 1;
				ys = yg;
				
			}
			if (yss == 1) {
				mT += ys*$('#enemySpeed').val();
				$('#alien1a').css('top', mT + 'px');
			}
		}
		
		if ($('#alien1aHP').val() <= 0 && mS == 1) {
			mS = 2;
			sc += 750;
			bs += 750;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			
			setTimeout(() => {
				$('#alien1a').attr('src','resources/img/game/a1d1.png');
				setTimeout(() => {
					$('#alien1a').attr('src','resources/img/game/a1d2.png');
					setTimeout(() => {
						$('#alien1a').attr('src','resources/img/game/a1d3.png');
						setTimeout(() => {
							$('#alien1a').attr('src','resources/img/game/a1d4.png');
							setTimeout(() => {
								$('#alien1a').attr('src','resources/img/game/a1d5.png');
								setTimeout(() => {
									$('#alien1a').attr('src','resources/img/game/a1d6.png');
									$('#alien1as').val(0);
									a1ad.play();
									setTimeout(() => {
										$('#alien1a').attr('src','resources/img/game/a1d7.png');
										setTimeout(() => {
											$('#alien1a').attr('src','resources/img/game/a1d8.png');
											setTimeout(() => {
												$('#alien1a').attr('src','resources/img/game/a1d9.png');
												setTimeout(() => {
													$('#alien1a').css('opacity','0');
												}, 40);
											}, 40);
										}, 40);
									}, 40);
								}, 480);
							}, 40);
						}, 40);
					}, 40);
				}, 40);
			}, 40);
			
		}
		
		if ($('#alien1aX').val() < -240 && mS != 0) {
			mS = 0;
			miS2 = 0;
			yss = 0;
			$('#alien1aHP').val(6);
			$('#alien1as').val(1);
		}
		
	}, 1);
	
	
	setInterval(() => {
		$('#alien1aX').val($('#alien1a').css('left').replace('px', ''));
		$('#alien1aY').val($('#alien1a').css('top').replace('px', ''));
	}, 1);
	


}

function alien1b () {
	$('#alien1bHP').val(6);
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeedX = 0.3;
	let ys = 0;
	let yss = 0;
	const a1bd = new Audio('resources/audio/game/a1d2.MP3');
	a1bd.volume = 0.10;
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		let yg = Math.round($('#playerHBY').val() - $('#alien1bY').val())/1000;
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4 && $('#timer').val() >= 60) {
			$('#a1bn').val(Math.round(Math.random()*15));
			miS = 1;
			$('#alien1b').css('left', '800px');
			$('#alien1b').css('top', Math.random()*1080 - 300);
			setTimeout(() => {
				miS = 0;
			}, 250);
		}
		
		if ($('#a1bn').val() == 15 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			$('#alien1b').css('opacity', '1');
			$('#alien1b').attr('src','resources/img/game/a1.png');
			$('#alien1bHP').val(6);
		}
		
		if (miS2 == 1) {
			let mL = $('#alien1b').css('left').replace('px', '');
			let mT = Number($('#alien1b').css('top').replace('px', ''));
			mL -= mSpeedX*$('#enemySpeed').val();
			$('#alien1b').css('left', mL + 'px');
			if (mL > $('#playerHBX').val()) {
				mT += yg*$('#enemySpeed').val();
				$('#alien1b').css('top', mT + 'px');
			}
			if (mL < $('#playerHBX').val() && yss == 0) {
				yss = 1;
				ys = yg;
				
			}
			if (yss == 1) {
				mT += ys*$('#enemySpeed').val();
				$('#alien1b').css('top', mT + 'px');
			}
		}
		
		if ($('#alien1bHP').val() <= 0 && mS == 1) {
			mS = 2;
			sc += 750;
			bs += 750;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			
			setTimeout(() => {
				$('#alien1b').attr('src','resources/img/game/a1d1.png');
				setTimeout(() => {
					$('#alien1b').attr('src','resources/img/game/a1d2.png');
					setTimeout(() => {
						$('#alien1b').attr('src','resources/img/game/a1d3.png');
						setTimeout(() => {
							$('#alien1b').attr('src','resources/img/game/a1d4.png');
							setTimeout(() => {
								$('#alien1b').attr('src','resources/img/game/a1d5.png');
								setTimeout(() => {
									$('#alien1b').attr('src','resources/img/game/a1d6.png');
									$('#alien1bs').val(0);
									a1bd.play();
									setTimeout(() => {
										$('#alien1b').attr('src','resources/img/game/a1d7.png');
										setTimeout(() => {
											$('#alien1b').attr('src','resources/img/game/a1d8.png');
											setTimeout(() => {
												$('#alien1b').attr('src','resources/img/game/a1d9.png');
												setTimeout(() => {
													$('#alien1b').css('opacity','0');
												}, 60);
											}, 40);
										}, 40);
									}, 40);
								}, 480);
							}, 40);
						}, 40);
					}, 40);
				}, 40);
			}, 40);
			
		}
		
		if ($('#alien1bX').val() < -240 && mS != 0) {
			mS = 0;
			miS2 = 0;
			yss = 0;
			$('#alien1bHP').val(6);
			$('#alien1bs').val(1);
		}
		
	}, 1);
	
	
	setInterval(() => {
		$('#alien1bX').val($('#alien1b').css('left').replace('px', ''));
		$('#alien1bY').val($('#alien1b').css('top').replace('px', ''));
	}, 1);
	


}

function alien3 () {
	$('#alien3HP').val(50);
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let mSpeedX = 0.06;
	let imgS = 0;
	let cs = 0;
	const destroy = new Audio('resources/audio/game/explosion.mp3');
	setInterval(() => {
		let sc = Number($('#scoreCalc2').val());
		let bs = Number($('#bombScore').val());
		let gs = $('#gameStmt').val();
		if (mS == 0 && miS == 0 && miS2 == 0 && gs == 4 && $('#timer').val() >= 90) {
			$('#a3n').val(Math.round(Math.random()*25));
			miS = 1;
			$('#alien3').css('left', '900px');
			$('#alien3').css('top', Math.random()*300 + 120);
			setTimeout(() => {
				miS = 0;
			}, 250);
		}
		
		if ($('#a3n').val() == 25 && miS2 == 0 ) {
			miS2 = 1;
			mS = 1;
			cs = 0;
			$('#alien3').css('opacity', '1');
			$('#alien3').attr('src','resources/img/game/a1.png');
			$('#alien3HP').val(50);
		}
		
		if (miS2 == 1 && $('#alien3X').val() > 550) {
			let mL = $('#alien3').css('left').replace('px', '');
			mL -= (mSpeedX+($('#enemySpeed').val()*0.035));
			$('#alien3').css('left', mL + 'px');
				
		}
		
		if ($('#alien3HP').val() > 0 && imgS == 0) {
			imgS = 1;
				$('#alien3').attr('src','resources/img/game/a31.png');
				setTimeout(() => {
					$('#alien3').attr('src','resources/img/game/a32.png');
					setTimeout(() => {
						$('#alien3').attr('src','resources/img/game/a33.png');
						setTimeout(() => {
							$('#alien3').attr('src','resources/img/game/a34.png');
							setTimeout(() => {
								imgS = 0;
							}, 125);
						}, 125);
					}, 125);
				}, 125);
		}
		
		if ($('#alien3X').val() <= 560 && $('#alien3HP').val() > 0) {
			$('#alien3s').val(2);
			if (cs == 0) {
				cs = 1;
				$('#cannon1s').val(1);
				$('#cannon2s').val(1);
				$('#cannon3s').val(1);
			}
		} else if ($('#alien3X').val() > 560) {
			$('#alien3s').val(1);
		}
		
		if ($('#alien3HP').val() <= 0 && mS == 1) {
			mS = 2;
			$('#alien3s').val(3);
			sc += 3000;
			bs += 3000;
			$('#scoreCalc2').val(sc);
			$('#bombScore').val(bs);
			
			setTimeout(() => {
				$('#alien3').attr('src','resources/img/game/a3d1.png');
				setTimeout(() => {
					$('#alien3').attr('src','resources/img/game/a3d2.png');
					setTimeout(() => {
						$('#alien3').attr('src','resources/img/game/a3d3.png');
						setTimeout(() => {
							$('#alien3').attr('src','resources/img/game/a3d4.png');
							setTimeout(() => {
								$('#alien3').attr('src','resources/img/game/a3d5.png');
								setTimeout(() => {
									$('#alien3').attr('src','resources/img/game/a3d6.png');
									setTimeout(() => {
										$('#alien3').attr('src','resources/img/game/a3d7.png');
										$('#alien3s').val(0);
										destroy.play();
										setTimeout(() => {
											$('#alien3').attr('src','resources/img/game/a3d8.png');
											setTimeout(() => {
												$('#alien3').attr('src','resources/img/game/a3d9.png');
												setTimeout(() => {
													$('#alien3').attr('src','resources/img/game/a3d10.png');
													setTimeout(() => {
														$('#alien3').attr('src','resources/img/game/a3d11.png');
														setTimeout(() => {
															mS = 0;
															miS = 0;
															miS2 = 0;
															$('#alien3').css('opacity','0');
															$('#alien3HP').val(50);
															$('#alien3s').val(0);
															$('#alien3').css('left', '1000px');
														}, 60);
													}, 60);
												}, 60);
											}, 60);
										}, 60);
									}, 600);
								}, 60);
							}, 60);
						}, 60);
					}, 60);
				}, 60);
			}, 60);
			
		}
		
		
	}, 1);
	
	
	setInterval(() => {
		$('#alien3X').val($('#alien3').css('left').replace('px', ''));
		$('#alien3Y').val($('#alien3').css('top').replace('px', ''));
	}, 1);
	


}

function cannon () {
	let mS = 0;
	let miS = 0;
	let miS2 = 0;
	let rX = 0;
	let rY = 0;
	let r = 0;
	let angleX = 0;
	let angleY = 0;
	let fr = 0;
	let timer = 0;
	let timer2 = 0;
	let c1ud = 0;
	let c2ud = 0;
	let c3ud = 0;
	let c1xr = 0;
	let c1yr = 0;
	let c2xr = 0;
	let c2yr = 0;
	let c3xr = 0;
	let c3yr = 0;
	const fire1 = new Audio('resources/audio/game/cannonfire.mp3');
	const fire2 = new Audio('resources/audio/game/cannonfire.mp3');
	const fire3 = new Audio('resources/audio/game/cannonfire.mp3');
	
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		let a3s = $('#alien3s').val();
			rX = ($('#alien3X').val() - $('#playerHBX').val()).toFixed(3);
			rY = ($('#alien3Y').val() - $('#playerHBY').val()).toFixed(3);
			r = Math.sqrt(Math.pow(rX, 2) + Math.pow(rY, 2)).toFixed(3);
			angleX = Math.abs((rX / r).toFixed(3));
			angleY = Math.abs((rY / r).toFixed(3));
			
			if (mS == 0 && miS == 0 && miS2 == 0 && $('#alien3s').val()==2 && $('#cannon3s').val()==1 && gs == 4) {
				miS = 1;
				fr++;
				setTimeout(() => {
					miS = 0;
				}, 450 + Number(($('#enemyRegen').val()*2)));
			}
			
			if ($('#cannon3s').val()>=2 && timer == 0) {
				timer++;
				timer2++;
				setTimeout(() => {
					timer = 0;
				}, 1000);
			}
			
			if (fr == 2 && $('#cannon1s').val()==1 ) {
				$('#cannon1s').val(2);
				fire1.play();
				$('#cannon1').css('opacity', '1');
				$('#cannon1').attr('src','resources/img/game/cannon.png');
				$('#cannon1').css('left', $('#alien3X').val()+15 + 'px');
				$('#cannon1').css('top', $('#alien3Y').val()+30 + 'px');
				c1xr = angleX;
				c1yr = angleY;
				if (rY >= 0) {
					c1ud = 1;
				}
				if (rY < 0) {
					c1ud = 0;
				}
			}
			
			if ($('#cannon1s').val()==2 ) {
				let c1X = Number($('#cannon1').css('left').replace('px', ''));
				let c1Y = Number($('#cannon1').css('top').replace('px', ''));
				c1X -= c1xr*$('#enemySpeed').val()*0.6;
				if (c1ud == 1) {
					c1Y -= c1yr*$('#enemySpeed').val()*0.6;
				}
				if (c1ud == 0) {
					c1Y += c1yr*$('#enemySpeed').val()*0.6;
				}
				$('#cannon1').css('left', c1X + 'px');
				$('#cannon1').css('top', c1Y + 'px');
			}
			
			if (fr == 3 && $('#cannon2s').val()==1 ) {
				$('#cannon2s').val(2);
				fire2.play();
				$('#cannon2').css('opacity', '1');
				$('#cannon2').attr('src','resources/img/game/cannon.png');
				$('#cannon2').css('left', $('#alien3X').val()+15 + 'px');
				$('#cannon2').css('top', $('#alien3Y').val()+30 + 'px');
				c2xr = angleX;
				c2yr = angleY;
				if (rY >= 0) {
					c2ud = 1;
				}
				if (rY < 0) {
					c2ud = 0;
				}
			}
			
			if ($('#cannon2s').val()==2 ) {
				let c2X = Number($('#cannon2').css('left').replace('px', ''));
				let c2Y = Number($('#cannon2').css('top').replace('px', ''));
				c2X -= c2xr*$('#enemySpeed').val()*0.6;
				if (c2ud == 1) {
					c2Y -= c2yr*$('#enemySpeed').val()*0.6;
				}
				if (c2ud == 0) {
					c2Y += c2yr*$('#enemySpeed').val()*0.6;
				}
				$('#cannon2').css('left', c2X + 'px');
				$('#cannon2').css('top', c2Y + 'px');
			}
			
			if (fr == 4 && $('#cannon3s').val()==1 ) {
				$('#cannon3s').val(2);
				fire3.play();
				$('#cannon3').css('opacity', '1');
				$('#cannon3').attr('src','resources/img/game/cannon.png');
				$('#cannon3').css('left', $('#alien3X').val()+15 + 'px');
				$('#cannon3').css('top', $('#alien3Y').val()+30 + 'px');
				c3xr = angleX;
				c3yr = angleY;
				if (rY >= 0) {
					c3ud = 1;
				}
				if (rY < 0) {
					c3ud = 0;
				}
			}
			
			if ($('#cannon3s').val()==2 ) {
				let c3X = Number($('#cannon3').css('left').replace('px', ''));
				let c3Y = Number($('#cannon3').css('top').replace('px', ''));
				c3X -= c3xr*$('#enemySpeed').val()*0.6;
				if (c3ud == 1) {
					c3Y -= c3yr*$('#enemySpeed').val()*0.6;
				}
				if (c3ud == 0) {
					c3Y += c3yr*$('#enemySpeed').val()*0.6;
				}
				$('#cannon3').css('left', c3X + 'px');
				$('#cannon3').css('top', c3Y + 'px');
			}
			
			if (timer2 >= 9 - $('#enemySpeed').val()) {
				$('#cannon1s').val(1);
				$('#cannon2s').val(1);
				$('#cannon3s').val(1);
				fr = 0;
				timer2 = 0;
			}
			
			if ($('#alien3s').val() == 3 || $('#alien3s').val() == 0) {
				fr = 0;
				timer2 = 0;
			}
			
			
			
		}, 1);
		
		setInterval(() => {
			if ($('#cannon1s').val() == 2) {
				$('#cannon1X').val($('#cannon1').css('left').replace('px', ''));
				$('#cannon1Y').val($('#cannon1').css('top').replace('px', ''));
			}
			if ($('#cannon2s').val() == 2) {
				$('#cannon2X').val($('#cannon2').css('left').replace('px', ''));
				$('#cannon2Y').val($('#cannon2').css('top').replace('px', ''));
			}
			if ($('#cannon3s').val() == 2) {
				$('#cannon3X').val($('#cannon3').css('left').replace('px', ''));
				$('#cannon3Y').val($('#cannon3').css('top').replace('px', ''));
			}
		}, 1);

	
}






$(function() {
	meteor1();
	meteor2();
	meteor3();
	meteor4();
	meteor5();
	meteor6();
	meteor7();
	meteor8();
	meteor9();
	meteor10();
	meteor11();
	meteor12();
	alien1a();
	alien1b();
	alien3();
	cannon();
});