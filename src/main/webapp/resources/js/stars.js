//stars.js

function stars() {
	
	let star1 = 0;
	let star2 = 0;
	let star3 = 0;
	let star4 = 0;
	let star5 = 0;
	let star6 = 0;
	let star7 = 0;
	let star8 = 0;
	let star9 = 0;
	let star10 = 0;
	let star11 = 0;
	let star12 = 0;
	let star13 = 0;
	let star14 = 0;
	let star15 = 0;
	let star16 = 0;
	let star17 = 0;
	let star18 = 0;
	let star19 = 0;
	let star20 = 0;
	let star21 = 0;
	let star22 = 0;
	let star23 = 0;
	let star24 = 0;
	let star25 = 0;
	let star26 = 0;
	let star27 = 0;
	let star28 = 0;
	let star29 = 0;
	let star30 = 0;
	let star31 = 0;
	let star32 = 0;
	let star33 = 0;
	let star34 = 0;
	let star35 = 0;
	let star36 = 0;
	let star37 = 0;
	let star38 = 0;
	let star39 = 0;
	let star40 = 0;
	
	let sstar1 = 0;
	let sstar2 = 0;
	let sstar3 = 0;
	let sstar4 = 0;
	let sstar5 = 0;
	let sstar6 = 0;
	let sstar7 = 0;
	let sstar8 = 0;
	let sstar9 = 0;
	let sstar10 = 0;
	let sstar11 = 0;
	let sstar12 = 0;
	let sstar13 = 0;
	let sstar14 = 0;
	let sstar15 = 0;
	let sstar16 = 0;
	let sstar17 = 0;
	let sstar18 = 0;
	let sstar19 = 0;
	let sstar20 = 0;
	let sstar21 = 0;
	let sstar22 = 0;
	let sstar23 = 0;
	let sstar24 = 0;
	let sstar25 = 0;
	let sstar26 = 0;
	let sstar27 = 0;
	let sstar28 = 0;
	let sstar29 = 0;
	let sstar30 = 0;
	let sstar31 = 0;
	let sstar32 = 0;
	let sstar33 = 0;
	let sstar34 = 0;
	let sstar35 = 0;
	let sstar36 = 0;
	let sstar37 = 0;
	let sstar38 = 0;
	let sstar39 = 0;
	let sstar40 = 0;
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star1 == 0 && sstar1 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar1 = 1;
				star1 = 1;
				
				if (sstar1 == 1) {
					$('#star1').css('left', "-120px");
					$('#star1').css('top', sTop1+"%");
					$('#star1').css('width', sSize1);
					$('#star1').css('height', sSize1);
					setTimeout(() => {
						$('#star1').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star1').css('left', "660px");
						}, 100);
					}, 100);
				}
				
				}
			}
		let sR = $('#star1').css("left").replace('px','');
		if (sR >= 640) {
			$('#star1').css('transition', 'all 0s linear');
			star1 = 0;
			sstar1 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star2 == 0 && sstar2 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar2 = 1;
				star2 = 1;
				
				if (sstar2 == 1) {
					$('#star2').css('left', "-120px");
					$('#star2').css('top', sTop1+"%");
					$('#star2').css('width', sSize1);
					$('#star2').css('height', sSize1);
					setTimeout(() => {
						$('#star2').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star2').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star2').css("left").replace('px','');
		if (sR >= 640) {
			$('#star2').css('transition', 'all 0s linear');
			star2 = 0;
			sstar2 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star3 == 0 && sstar3 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar3 = 1;
				star3 = 1;
				
				if (sstar3 == 1) {
					$('#star3').css('left', "-120px");
					$('#star3').css('top', sTop1+"%");
					$('#star3').css('width', sSize1);
					$('#star3').css('height', sSize1);
					setTimeout(() => {
						$('#star3').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star3').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star3').css("left").replace('px','');
		if (sR >= 640) {
			$('#star3').css('transition', 'all 0s linear');
			star3 = 0;
			sstar3 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star4 == 0 && sstar4 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*4;
				let sTop1 = Math.random()*100;
				sstar4 = 1;
				star4 = 1;
				
				if (sstar4 == 1) {
					$('#star4').css('left', "-120px");
					$('#star4').css('top', sTop1+"%");
					$('#star4').css('width', sSize1);
					$('#star4').css('height', sSize1);
					setTimeout(() => {
						$('#star4').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star4').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star4').css("left").replace('px','');
		if (sR >= 640) {
			$('#star4').css('transition', 'all 0s linear');
			star4 = 0;
			sstar4 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star5 == 0 && sstar5 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar5 = 1;
				star5 = 1;
				
				if (sstar5 == 1) {
					$('#star5').css('left', "-120px");
					$('#star5').css('top', sTop1+"%");
					$('#star5').css('width', sSize1);
					$('#star5').css('height', sSize1);
					setTimeout(() => {
						$('#star5').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star5').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star5').css("left").replace('px','');
		if (sR >= 640) {
			$('#star5').css('transition', 'all 0s linear');
			star5 = 0;
			sstar5 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star6 == 0 && sstar6 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar6 = 1;
				star6 = 1;
				
				if (sstar6 == 1) {
					$('#star6').css('left', "-120px");
					$('#star6').css('top', sTop1+"%");
					$('#star6').css('width', sSize1);
					$('#star6').css('height', sSize1);
					setTimeout(() => {
						$('#star6').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star6').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star6').css("left").replace('px','');
		if (sR >= 640) {
			$('#star6').css('transition', 'all 0s linear');
			star6 = 0;
			sstar6 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star7 == 0 && sstar7 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar7 = 1;
				star7 = 1;
				
				if (sstar7 == 1) {
					$('#star7').css('left', "-120px");
					$('#star7').css('top', sTop1+"%");
					$('#star7').css('width', sSize1);
					$('#star7').css('height', sSize1);
					setTimeout(() => {
						$('#star7').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star7').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star7').css("left").replace('px','');
		if (sR >= 640) {
			$('#star7').css('transition', 'all 0s linear');
			star7 = 0;
			sstar7 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star8 == 0 && sstar8 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar8 = 1;
				star8 = 1;
				
				if (sstar8 == 1) {
					$('#star8').css('left', "-120px");
					$('#star8').css('top', sTop1+"%");
					$('#star8').css('width', sSize1);
					$('#star8').css('height', sSize1);
					setTimeout(() => {
						$('#star8').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star8').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star8').css("left").replace('px','');
		if (sR >= 640) {
			$('#star8').css('transition', 'all 0s linear');
			star8 = 0;
			sstar8 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star9 == 0 && sstar9 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar9 = 1;
				star9 = 1;
				
				if (sstar9 == 1) {
					$('#star9').css('left', "-120px");
					$('#star9').css('top', sTop1+"%");
					$('#star9').css('width', sSize1);
					$('#star9').css('height', sSize1);
					setTimeout(() => {
						$('#star9').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star9').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star9').css("left").replace('px','');
		if (sR >= 640) {
			$('#star9').css('transition', 'all 0s linear');
			star9 = 0;
			sstar9 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star10 == 0 && sstar10 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar10 = 1;
				star10 = 1;
				
				if (sstar10 == 1) {
					$('#star10').css('left', "-120px");
					$('#star10').css('top', sTop1+"%");
					$('#star10').css('width', sSize1);
					$('#star10').css('height', sSize1);
					setTimeout(() => {
						$('#star10').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star10').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star10').css("left").replace('px','');
		if (sR >= 640) {
			$('#star10').css('transition', 'all 0s linear');
			star10 = 0;
			sstar10 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star11 == 0 && sstar11 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar11 = 1;
				star11 = 1;
				
				if (sstar11 == 1) {
					$('#star11').css('left', "-120px");
					$('#star11').css('top', sTop1+"%");
					$('#star11').css('width', sSize1);
					$('#star11').css('height', sSize1);
					setTimeout(() => {
						$('#star11').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star11').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star11').css("left").replace('px','');
		if (sR >= 640) {
			$('#star11').css('transition', 'all 0s linear');
			star11 = 0;
			sstar11 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star12 == 0 && sstar12 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar12 = 1;
				star12 = 1;
				
				if (sstar12 == 1) {
					$('#star12').css('left', "-120px");
					$('#star12').css('top', sTop1+"%");
					$('#star12').css('width', sSize1);
					$('#star12').css('height', sSize1);
					setTimeout(() => {
						$('#star12').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star12').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star12').css("left").replace('px','');
		if (sR >= 640) {
			$('#star12').css('transition', 'all 0s linear');
			star12 = 0;
			sstar12 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star13 == 0 && sstar13 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar13 = 1;
				star13 = 1;
				
				if (sstar13 == 1) {
					$('#star13').css('left', "-120px");
					$('#star13').css('top', sTop1+"%");
					$('#star13').css('width', sSize1);
					$('#star13').css('height', sSize1);
					setTimeout(() => {
						$('#star13').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star13').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star13').css("left").replace('px','');
		if (sR >= 640) {
			$('#star13').css('transition', 'all 0s linear');
			star13 = 0;
			sstar13 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star14 == 0 && sstar14 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar14 = 1;
				star14 = 1;
				
				if (sstar14 == 1) {
					$('#star14').css('left', "-120px");
					$('#star14').css('top', sTop1+"%");
					$('#star14').css('width', sSize1);
					$('#star14').css('height', sSize1);
					setTimeout(() => {
						$('#star14').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star14').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star14').css("left").replace('px','');
		if (sR >= 640) {
			$('#star14').css('transition', 'all 0s linear');
			star14 = 0;
			sstar14 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star15 == 0 && sstar15 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar15 = 1;
				star15 = 1;
				
				if (sstar15 == 1) {
					$('#star15').css('left', "-120px");
					$('#star15').css('top', sTop1+"%");
					$('#star15').css('width', sSize1);
					$('#star15').css('height', sSize1);
					setTimeout(() => {
						$('#star15').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star15').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star15').css("left").replace('px','');
		if (sR >= 640) {
			$('#star15').css('transition', 'all 0s linear');
			star15 = 0;
			sstar15 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star16 == 0 && sstar16 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar16 = 1;
				star16 = 1;
				
				if (sstar16 == 1) {
					$('#star16').css('left', "-120px");
					$('#star16').css('top', sTop1+"%");
					$('#star16').css('width', sSize1);
					$('#star16').css('height', sSize1);
					setTimeout(() => {
						$('#star16').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star16').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star16').css("left").replace('px','');
		if (sR >= 640) {
			$('#star16').css('transition', 'all 0s linear');
			star16 = 0;
			sstar16 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star17 == 0 && sstar17 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar17 = 1;
				star17 = 1;
				
				if (sstar17 == 1) {
					$('#star17').css('left', "-120px");
					$('#star17').css('top', sTop1+"%");
					$('#star17').css('width', sSize1);
					$('#star17').css('height', sSize1);
					setTimeout(() => {
						$('#star17').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star17').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star17').css("left").replace('px','');
		if (sR >= 640) {
			$('#star17').css('transition', 'all 0s linear');
			star17 = 0;
			sstar17 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star18 == 0 && sstar18 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar18 = 1;
				star18 = 1;
				
				if (sstar18 == 1) {
					$('#star18').css('left', "-120px");
					$('#star18').css('top', sTop1+"%");
					$('#star18').css('width', sSize1);
					$('#star18').css('height', sSize1);
					setTimeout(() => {
						$('#star18').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star18').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star18').css("left").replace('px','');
		if (sR >= 640) {
			$('#star18').css('transition', 'all 0s linear');
			star18 = 0;
			sstar18 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star19 == 0 && sstar19 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar19 = 1;
				star19 = 1;
				
				if (sstar19 == 1) {
					$('#star19').css('left', "-120px");
					$('#star19').css('top', sTop1+"%");
					$('#star19').css('width', sSize1);
					$('#star19').css('height', sSize1);
					setTimeout(() => {
						$('#star19').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star19').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star19').css("left").replace('px','');
		if (sR >= 640) {
			$('#star19').css('transition', 'all 0s linear');
			star19 = 0;
			sstar19 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star20 == 0 && sstar20 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar20 = 1;
				star20 = 1;
				
				if (sstar20 == 1) {
					$('#star20').css('left', "-120px");
					$('#star20').css('top', sTop1+"%");
					$('#star20').css('width', sSize1);
					$('#star20').css('height', sSize1);
					setTimeout(() => {
						$('#star20').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star20').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star20').css("left").replace('px','');
		if (sR >= 640) {
			$('#star20').css('transition', 'all 0s linear');
			star20 = 0;
			sstar20 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star21 == 0 && sstar21 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar21 = 1;
				star21 = 1;
				
				if (sstar21 == 1) {
					$('#star21').css('left', "-120px");
					$('#star21').css('top', sTop1+"%");
					$('#star21').css('width', sSize1);
					$('#star21').css('height', sSize1);
					setTimeout(() => {
						$('#star21').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star21').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star21').css("left").replace('px','');
		if (sR >= 640) {
			$('#star21').css('transition', 'all 0s linear');
			star21 = 0;
			sstar21 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star22 == 0 && sstar22 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar22 = 1;
				star22 = 1;
				
				if (sstar22 == 1) {
					$('#star22').css('left', "-120px");
					$('#star22').css('top', sTop1+"%");
					$('#star22').css('width', sSize1);
					$('#star22').css('height', sSize1);
					setTimeout(() => {
						$('#star22').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star22').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star22').css("left").replace('px','');
		if (sR >= 640) {
			$('#star22').css('transition', 'all 0s linear');
			star22 = 0;
			sstar22 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star23 == 0 && sstar23 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar23 = 1;
				star23 = 1;
				
				if (sstar23 == 1) {
					$('#star23').css('left', "-120px");
					$('#star23').css('top', sTop1+"%");
					$('#star23').css('width', sSize1);
					$('#star23').css('height', sSize1);
					setTimeout(() => {
						$('#star23').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star23').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star23').css("left").replace('px','');
		if (sR >= 640) {
			$('#star23').css('transition', 'all 0s linear');
			star23 = 0;
			sstar23 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star24 == 0 && sstar24 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar24 = 1;
				star24 = 1;
				
				if (sstar24 == 1) {
					$('#star24').css('left', "-120px");
					$('#star24').css('top', sTop1+"%");
					$('#star24').css('width', sSize1);
					$('#star24').css('height', sSize1);
					setTimeout(() => {
						$('#star24').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star24').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star24').css("left").replace('px','');
		if (sR >= 640) {
			$('#star24').css('transition', 'all 0s linear');
			star24 = 0;
			sstar24 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star25 == 0 && sstar25 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar25 = 1;
				star25 = 1;
				
				if (sstar25 == 1) {
					$('#star25').css('left', "-120px");
					$('#star25').css('top', sTop1+"%");
					$('#star25').css('width', sSize1);
					$('#star25').css('height', sSize1);
					setTimeout(() => {
						$('#star25').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star25').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star25').css("left").replace('px','');
		if (sR >= 640) {
			$('#star25').css('transition', 'all 0s linear');
			star25 = 0;
			sstar25 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star26 == 0 && sstar26 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar26 = 1;
				star26 = 1;
				
				if (sstar26 == 1) {
					$('#star26').css('left', "-120px");
					$('#star26').css('top', sTop1+"%");
					$('#star26').css('width', sSize1);
					$('#star26').css('height', sSize1);
					setTimeout(() => {
						$('#star26').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star26').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star26').css("left").replace('px','');
		if (sR >= 640) {
			$('#star26').css('transition', 'all 0s linear');
			star26 = 0;
			sstar26 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star27 == 0 && sstar27 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar27 = 1;
				star27 = 1;
				
				if (sstar27 == 1) {
					$('#star27').css('left', "-120px");
					$('#star27').css('top', sTop1+"%");
					$('#star27').css('width', sSize1);
					$('#star27').css('height', sSize1);
					setTimeout(() => {
						$('#star27').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star27').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star27').css("left").replace('px','');
		if (sR >= 640) {
			$('#star27').css('transition', 'all 0s linear');
			star27 = 0;
			sstar27 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star28 == 0 && sstar28 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar28 = 1;
				star28 = 1;
				
				if (sstar28 == 1) {
					$('#star28').css('left', "-120px");
					$('#star28').css('top', sTop1+"%");
					$('#star28').css('width', sSize1);
					$('#star28').css('height', sSize1);
					setTimeout(() => {
						$('#star28').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star28').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star28').css("left").replace('px','');
		if (sR >= 640) {
			$('#star28').css('transition', 'all 0s linear');
			star28 = 0;
			sstar28 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star29 == 0 && sstar29 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar29 = 1;
				star29 = 1;
				
				if (sstar29 == 1) {
					$('#star29').css('left', "-120px");
					$('#star29').css('top', sTop1+"%");
					$('#star29').css('width', sSize1);
					$('#star29').css('height', sSize1);
					setTimeout(() => {
						$('#star29').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star29').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star29').css("left").replace('px','');
		if (sR >= 640) {
			$('#star29').css('transition', 'all 0s linear');
			star29 = 0;
			sstar29 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star30 == 0 && sstar30 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar30 = 1;
				star30 = 1;
				
				if (sstar30 == 1) {
					$('#star30').css('left', "-120px");
					$('#star30').css('top', sTop1+"%");
					$('#star30').css('width', sSize1);
					$('#star30').css('height', sSize1);
					setTimeout(() => {
						$('#star30').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star30').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star30').css("left").replace('px','');
		if (sR >= 640) {
			$('#star30').css('transition', 'all 0s linear');
			star30 = 0;
			sstar30 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star31 == 0 && sstar31 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar31 = 1;
				star31 = 1;
				
				if (sstar31 == 1) {
					$('#star31').css('left', "-120px");
					$('#star31').css('top', sTop1+"%");
					$('#star31').css('width', sSize1);
					$('#star31').css('height', sSize1);
					setTimeout(() => {
						$('#star31').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star31').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star31').css("left").replace('px','');
		if (sR >= 640) {
			$('#star31').css('transition', 'all 0s linear');
			star31 = 0;
			sstar31 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star32 == 0 && sstar32 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar32 = 1;
				star32 = 1;
				
				if (sstar32 == 1) {
					$('#star32').css('left', "-120px");
					$('#star32').css('top', sTop1+"%");
					$('#star32').css('width', sSize1);
					$('#star32').css('height', sSize1);
					setTimeout(() => {
						$('#star32').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star32').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star32').css("left").replace('px','');
		if (sR >= 640) {
			$('#star32').css('transition', 'all 0s linear');
			star32 = 0;
			sstar32 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star33 == 0 && sstar33 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar33 = 1;
				star33 = 1;
				
				if (sstar33 == 1) {
					$('#star33').css('left', "-120px");
					$('#star33').css('top', sTop1+"%");
					$('#star33').css('width', sSize1);
					$('#star33').css('height', sSize1);
					setTimeout(() => {
						$('#star33').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star33').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star33').css("left").replace('px','');
		if (sR >= 640) {
			$('#star33').css('transition', 'all 0s linear');
			star33 = 0;
			sstar33 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star34 == 0 && sstar34 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar34 = 1;
				star34 = 1;
				
				if (sstar34 == 1) {
					$('#star34').css('left', "-120px");
					$('#star34').css('top', sTop1+"%");
					$('#star34').css('width', sSize1);
					$('#star34').css('height', sSize1);
					setTimeout(() => {
						$('#star34').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star34').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star34').css("left").replace('px','');
		if (sR >= 640) {
			$('#star34').css('transition', 'all 0s linear');
			star34 = 0;
			sstar34 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star35 == 0 && sstar35 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar35 = 1;
				star35 = 1;
				
				if (sstar35 == 1) {
					$('#star35').css('left', "-120px");
					$('#star35').css('top', sTop1+"%");
					$('#star35').css('width', sSize1);
					$('#star35').css('height', sSize1);
					setTimeout(() => {
						$('#star35').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star35').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star35').css("left").replace('px','');
		if (sR >= 640) {
			$('#star35').css('transition', 'all 0s linear');
			star35 = 0;
			sstar35 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star36 == 0 && sstar36 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar36 = 1;
				star36 = 1;
				
				if (sstar36 == 1) {
					$('#star36').css('left', "-120px");
					$('#star36').css('top', sTop1+"%");
					$('#star36').css('width', sSize1);
					$('#star36').css('height', sSize1);
					setTimeout(() => {
						$('#star36').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star36').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star36').css("left").replace('px','');
		if (sR >= 640) {
			$('#star36').css('transition', 'all 0s linear');
			star36 = 0;
			sstar36 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star37 == 0 && sstar37 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar37 = 1;
				star37 = 1;
				
				if (sstar37 == 1) {
					$('#star37').css('left', "-120px");
					$('#star37').css('top', sTop1+"%");
					$('#star37').css('width', sSize1);
					$('#star37').css('height', sSize1);
					setTimeout(() => {
						$('#star37').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star37').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star37').css("left").replace('px','');
		if (sR >= 640) {
			$('#star37').css('transition', 'all 0s linear');
			star37 = 0;
			sstar37 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star38 == 0 && sstar38 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar38 = 1;
				star38 = 1;
				
				if (sstar38 == 1) {
					$('#star38').css('left', "-120px");
					$('#star38').css('top', sTop1+"%");
					$('#star38').css('width', sSize1);
					$('#star38').css('height', sSize1);
					setTimeout(() => {
						$('#star38').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star38').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star38').css("left").replace('px','');
		if (sR >= 640) {
			$('#star38').css('transition', 'all 0s linear');
			star38 = 0;
			sstar38 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star39 == 0 && sstar39 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar39 = 1;
				star39 = 1;
				
				if (sstar39 == 1) {
					$('#star39').css('left', "-120px");
					$('#star39').css('top', sTop1+"%");
					$('#star39').css('width', sSize1);
					$('#star39').css('height', sSize1);
					setTimeout(() => {
						$('#star39').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star39').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star39').css("left").replace('px','');
		if (sR >= 640) {
			$('#star39').css('transition', 'all 0s linear');
			star39 = 0;
			sstar39 = 0;
		}
	}, 500);
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 1 || gs == 2 || gs >= 100) {
			$('.star').css('display', 'block');
			if (star40 == 0 && sstar40 == 0) {
				let sSize1 = Math.random()*50 + 10;
				let sSpeed1 = Math.random()*8 + 0.5;
				let sTop1 = Math.random()*100;
				sstar40 = 1;
				star40 = 1;
				
				if (sstar40 == 1) {
					$('#star40').css('left', "-120px");
					$('#star40').css('top', sTop1+"%");
					$('#star40').css('width', sSize1);
					$('#star40').css('height', sSize1);
					setTimeout(() => {
						$('#star40').css('transition', 'all '+sSpeed1+'s linear');
						setTimeout(() => {
							$('#star40').css('left', "660px");
						}, 100);
					}, 100);
				}
				
			}
		}
		let sR = $('#star40').css("left").replace('px','');
		if (sR >= 640) {
			$('#star40').css('transition', 'all 0s linear');
			star40 = 0;
			sstar40 = 0;
		}
	}, 500);
	

}

$(function() {
	stars();
});