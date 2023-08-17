//bomb.js

function bombItem () {
	let bombSwitch = 0;
	let imgS = 0;
	let bils = 1.0;
	let biX = 0;
	let biY = 0;
	const item = new Audio('resources/audio/game/item.mp3');
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		let sc = $('#scoreCalc2').val();
		let bs = $('#bombScore').val();
		let bomb = $('#bomb').val();
		if (gs == 4 || gs == 5) {
			if (bombSwitch == 0 && bs >= 7500) {
				bombSwitch = 1;
				bs = 0;
				$('#bombScore').val(bs);
			}
			
			if (bombSwitch != 0) {
				$('#bombScore').val(0);
			}
			
			if (bombSwitch == 1) {
				bombSwitch = 2;
				$('#bombItem').css('left', "700px");
				$('#bombItem').css('top', Math.random()*250 + 150 + 'px');
			}
			
			if (bombSwitch == 2) {
				let bil = $('#bombItem').css('left').replace('px', '');
				bil -= bils;
				$('#bombItem').css('left', bil);
				biX = $('#bombItem').css('left').replace('px', '');
				biY = $('#bombItem').css('top').replace('px', '');
			}
			
			if ($('#playerHBX').val() >= Number($('#bombItem').css('left').replace('px','')) - 40 && $('#playerHBX').val() <= Number($('#bombItem').css('left').replace('px','')) + 40 && $('#playerHBY').val() >= Number($('#bombItem').css('top').replace('px','')) - 30 && $('#playerHBY').val() <= Number($('#bombItem').css('top').replace('px','')) + 30 && $('#bsu').val() == 0) {
				bombSwitch = 3;
			}
			
			if (bombSwitch == 3) {
				bombSwitch = 4;
				item.play();
				$('#bombItem').css('left', "700px");
				if ($('#bomb').val() <= 2) {
					bomb ++;
					$('#bomb').val(bomb);
					$('#bombUp').css('display', 'block');
					$('#bombUp').css('left', biX+'px');
					$('#bombUp').css('top', biY-10+'px');
					setTimeout(() => {
						$('#bombUp').css('top', biY-20+'px');
						$('#bombUp').css('text-shadow', '#00ff0040 0px 0px 10px, #00ff0060 0px 0px 9px, #00ff0080 1px 1px 8px')
						setTimeout(() => {
							$('#bombUp').css('top', biY-30+'px');
							$('#bombUp').css('text-shadow', '#00ff0040 0px 0px 10px, #00ff0060 0px 0px 9px, #00ff0080 1px 1px 8px')
							setTimeout(() => {
								$('#bombUp').css('top', biY-40+'px');
								$('#bombUp').css('text-shadow', '#ff000040 0px 0px 10px, #ff000060 0px 0px 9px, #ff000080 1px 1px 8px')
								setTimeout(() => {
									$('#bombUp').css('top', biY-50+'px');
									$('#bombUp').css('text-shadow', '#b9ffff40 0px 0px 10px, #b9ffff60 0px 0px 9px, #b9ffff80 1px 1px 8px')
									$('#bombUp').css('display', 'none')
									bombSwitch = 0;
								}, 150);
							}, 150);
						}, 150);
					}, 150);
				} else if ($('#bomb').val() > 2) {
					sc += 2500;
					$('#scoreCalc2').val(sc);
					$('#score2500Up').css('display', 'block');
					$('#score2500Up').css('left', biX+'px');
					$('#score2500Up').css('top', biY-10+'px');
					setTimeout(() => {
						$('#score2500Up').css('top', biY-20+'px');
						$('#score2500Up').css('text-shadow', '#00ff0040 0px 0px 10px, #00ff0060 0px 0px 9px, #00ff0080 1px 1px 8px')
						setTimeout(() => {
							$('#score2500Up').css('top', biY-30+'px');
							$('#score2500Up').css('text-shadow', '#00ff0040 0px 0px 10px, #00ff0060 0px 0px 9px, #00ff0080 1px 1px 8px')
							setTimeout(() => {
								$('#score2500Up').css('top', biY-40+'px');
								$('#score2500Up').css('text-shadow', '#ff000040 0px 0px 10px, #ff000060 0px 0px 9px, #ff000080 1px 1px 8px')
								setTimeout(() => {
									$('#score2500Up').css('top', biY-50+'px');
									$('#score2500Up').css('text-shadow', '#b9ffff40 0px 0px 10px, #b9ffff60 0px 0px 9px, #b9ffff80 1px 1px 8px')
									$('#score2500Up').css('display', 'none')
									bombSwitch = 0;
								}, 150);
							}, 150);
						}, 150);
					}, 150);
				}
			}
			
			if (biX < -100) {
				$('#bombItem').css('left', "700px");
				bombSwitch = 0;
			}
			
			if (bombSwitch == 2 && imgS == 0) {
				imgS = 1;
				setTimeout(() => {
					$('#bombItem').attr('src', 'resources/img/game/b1.png');
					setTimeout(() => {
						$('#bombItem').attr('src', 'resources/img/game/b2.png');
						setTimeout(() => {
							$('#bombItem').attr('src', 'resources/img/game/b3.png');
							setTimeout(() => {
								$('#bombItem').attr('src', 'resources/img/game/b4.png');
								setTimeout(() => {
									$('#bombItem').attr('src', 'resources/img/game/b5.png');
									setTimeout(() => {
										$('#bombItem').attr('src', 'resources/img/game/b6.png');
										imgS = 0;
									}, 75);
								}, 75);
							}, 75);
						}, 75);
					}, 75);
				}, 75);
			}
			
		}
		
		
		
	}, 1);
}


function bombExplode () {
	let beSwitch = 0;
	let bomb = 0;
	let pX = 0;
	let pY = 0;
	let bombX = 0;
	let bombY = 0;
	let beD = 0;
	
	const bShot = new Audio('resources/audio/game/bombShot.mp3');
	bShot.volume = 0.2;
	const bE1 = new Audio('resources/audio/game/bombexplode.mp3');
	const bE2 = new Audio('resources/audio/game/bombexplode.mp3');
	const bE3 = new Audio('resources/audio/game/bombexplode.mp3');
	const bE4 = new Audio('resources/audio/game/bombexplode.mp3');
	const bE5 = new Audio('resources/audio/game/bombexplode.mp3');
	const bE6 = new Audio('resources/audio/game/bombexplode.mp3');
	const bE7 = new Audio('resources/audio/game/bombexplode.mp3');
	const bE8 = new Audio('resources/audio/game/bombexplode.mp3');
	
	setInterval(() => {
		let gs = $('#gameStmt').val();
		bomb = Number($('#bomb').val());
		$(document).keydown(function(e) {
			if (e.keyCode == 67 && bomb != 0 && beSwitch == 0 && gs == 4) {
				beSwitch = 1;
				bShot.play();
				bomb -= 1;
				$('#bomb').val(bomb);
				pX = Number($('#playerHBX').val());
				pY = Number($('#playerHBY').val());
				$('#bombShot').css('left', pX+20 +'px');
				$('#bombShot').css('top', pY +'px');
			} else if (e.keyCode == 67 && bomb == 0 && beSwitch == 0 && gs == 4) {
				beSwitch = 0;
			}
		});
			if (beSwitch == 1) {
				beSwitch = 2;
				bombX = Number($('#bombShot').css('left').replace('px',''));
				bombY = Number($('#bombShot').css('top').replace('px',''));
				$('#bombShot').css('left', bombX+35 + 'px');
				setTimeout(() => {
					bombX = Number($('#bombShot').css('left').replace('px',''));
					bombY = Number($('#bombShot').css('top').replace('px',''));
					$('#bombShot').css('left', bombX+33 + 'px');
						setTimeout(() => {
							bombX = Number($('#bombShot').css('left').replace('px',''));
							bombY = Number($('#bombShot').css('top').replace('px',''));
							$('#bombShot').css('left', bombX+31 + 'px');
							$('#bombShot').attr('src', 'resources/img/game/bs2.png');
							setTimeout(() => {
									bombX = Number($('#bombShot').css('left').replace('px',''));
									bombY = Number($('#bombShot').css('top').replace('px',''));
									$('#bombShot').css('left', bombX+29 + 'px');
									setTimeout(() => {
											bombX = Number($('#bombShot').css('left').replace('px',''));
											bombY = Number($('#bombShot').css('top').replace('px',''));
											$('#bombShot').css('left', bombX+26 + 'px');
											$('#bombShot').attr('src', 'resources/img/game/bs3.png');
											setTimeout(() => {
													bombX = Number($('#bombShot').css('left').replace('px',''));
													bombY = Number($('#bombShot').css('top').replace('px',''));
													$('#bombShot').css('left', bombX+23 + 'px');
													setTimeout(() => {
															bombX = Number($('#bombShot').css('left').replace('px',''));
															bombY = Number($('#bombShot').css('top').replace('px',''));
															$('#bombShot').css('left', bombX+20 + 'px');
															$('#bombShot').attr('src', 'resources/img/game/bs4.png');
															setTimeout(() => {
																	bombX = Number($('#bombShot').css('left').replace('px',''));
																	bombY = Number($('#bombShot').css('top').replace('px',''));
																	$('#bombShot').css('left', bombX+17 + 'px');
																	setTimeout(() => {
																			bombX = Number($('#bombShot').css('left').replace('px',''));
																			bombY = Number($('#bombShot').css('top').replace('px',''));
																			$('#bombShot').css('left', bombX+14 + 'px');
																			$('#bombShot').attr('src', 'resources/img/game/bs5.png');
																			setTimeout(() => {
																					bombX = Number($('#bombShot').css('left').replace('px',''));
																					bombY = Number($('#bombShot').css('top').replace('px',''));
																					$('#bombShot').css('left', bombX+11 + 'px');
																					setTimeout(() => {
																							bombX = Number($('#bombShot').css('left').replace('px',''));
																							bombY = Number($('#bombShot').css('top').replace('px',''));
																							$('#bombShot').css('left', bombX+8 + 'px');
																							$('#bombShot').attr('src', 'resources/img/game/bs6.png');
																							setTimeout(() => {
																									bombX = Number($('#bombShot').css('left').replace('px',''));
																									bombY = Number($('#bombShot').css('top').replace('px',''));
																									$('#bombShot').css('left', bombX+5 + 'px');
																									setTimeout(() => {
																											bombX = Number($('#bombShot').css('left').replace('px',''));
																											bombY = Number($('#bombShot').css('top').replace('px',''));
																											$('#bombShot').css('left', bombX+2 + 'px');
																											$('#bombShot').attr('src', 'resources/img/game/bs7.png');
																											setTimeout(() => {
																													bombX = Number($('#bombShot').css('left').replace('px',''));
																													bombY = Number($('#bombShot').css('top').replace('px',''));
																													$('#bombShot').css('left', bombX+1 + 'px');
																													setTimeout(() => {
																															bombX = Number($('#bombShot').css('left').replace('px',''));
																															bombY = Number($('#bombShot').css('top').replace('px',''));
																															$('#bombShot').css('left', bombX+1 + 'px');
																															setTimeout(() => {
																																beSwitch = 3;
																															}, 25);			
																													}, 25);			
																											}, 25);		
																									}, 25);	
																							}, 25);
																					}, 25);
																			}, 25);
																	}, 25);
															}, 25);
													}, 25);
											}, 25);
									}, 25);
							}, 25);
					}, 25);
				}, 25);
			}
			
			if (beSwitch == 3) {
				beSwitch = 4;
				$('#bombShot').css('left', '700px');
				let ex1 = Number(Math.round(Math.random()*120) - 60);
				let ey1 = Number(Math.round(Math.random()*120) - 60);
				$('#bombE1').css('display', 'block');
				$('#bombE1').css('left', bombX + ex1 + 'px');
				$('#bombE1').css('top', bombY + ey1 + 'px');
				bE1.play();
				setTimeout(() => {
					$('#bombE1').attr('src', 'resources/img/game/be1.png');
					setTimeout(() => {
						$('#bombE1').attr('src', 'resources/img/game/be2.png');
						setTimeout(() => {
							$('#bombE1').attr('src', 'resources/img/game/be3.png');
							setTimeout(() => {
								$('#bombE1').attr('src', 'resources/img/game/be4.png');
								setTimeout(() => {
									$('#bombE1').attr('src', 'resources/img/game/be5.png');
									setTimeout(() => {
										$('#bombE1').attr('src', 'resources/img/game/be6.png');
										setTimeout(() => {
											$('#bombE1').attr('src', 'resources/img/game/be7.png');
											setTimeout(() => {
												$('#bombE1').css('left', '700px');
												$('#bombE1').css('display', 'none');
											}, 50);
										}, 50);
									}, 50);
								}, 50);
							}, 50);
						}, 50);
					}, 50);
				}, 50);
				setTimeout(() => {
					$('#bombShot').css('left', '700px');
					let ex2 = Number(Math.round(Math.random()*120) - 60);
					let ey1 = Number(Math.round(Math.random()*120) - 60);
					$('#bombE2').css('display', 'block');
					$('#bombE2').css('left', bombX + ex2 + 'px');
					$('#bombE2').css('top', bombY + ey1 + 'px');
					bE2.play();
					setTimeout(() => {
						$('#bombE2').attr('src', 'resources/img/game/be1.png');
						setTimeout(() => {
							$('#bombE2').attr('src', 'resources/img/game/be2.png');
							setTimeout(() => {
								$('#bombE2').attr('src', 'resources/img/game/be3.png');
								setTimeout(() => {
									$('#bombE2').attr('src', 'resources/img/game/be4.png');
									setTimeout(() => {
										$('#bombE2').attr('src', 'resources/img/game/be5.png');
										setTimeout(() => {
											$('#bombE2').attr('src', 'resources/img/game/be6.png');
											setTimeout(() => {
												$('#bombE2').attr('src', 'resources/img/game/be7.png');
												setTimeout(() => {
													$('#bombE2').css('left', '700px');
													$('#bombE2').css('display', 'none');
												}, 50);
											}, 50);
										}, 50);
									}, 50);
								}, 50);
							}, 50);
						}, 50);
					}, 50);
					setTimeout(() => {
						$('#bombShot').css('left', '700px');
						let ex3 = Number(Math.round(Math.random()*120) - 60);
						let ey1 = Number(Math.round(Math.random()*120) - 60);
						$('#bombE3').css('display', 'block');
						$('#bombE3').css('left', bombX + ex3 + 'px');
						$('#bombE3').css('top', bombY + ey1 + 'px');
						bE3.play();
						setTimeout(() => {
							$('#bombE3').attr('src', 'resources/img/game/be1.png');
							setTimeout(() => {
								$('#bombE3').attr('src', 'resources/img/game/be2.png');
								setTimeout(() => {
									$('#bombE3').attr('src', 'resources/img/game/be3.png');
									setTimeout(() => {
										$('#bombE3').attr('src', 'resources/img/game/be4.png');
										setTimeout(() => {
											$('#bombE3').attr('src', 'resources/img/game/be5.png');
											setTimeout(() => {
												$('#bombE3').attr('src', 'resources/img/game/be6.png');
												setTimeout(() => {
													$('#bombE3').attr('src', 'resources/img/game/be7.png');
													setTimeout(() => {
														$('#bombE3').css('left', '700px');
														$('#bombE3').css('display', 'none');
													}, 50);
												}, 50);
											}, 50);
										}, 50);
									}, 50);
								}, 50);
							}, 50);
						}, 50);
						setTimeout(() => {
							$('#bombShot').css('left', '700px');
							let ex4 = Number(Math.round(Math.random()*120) - 60);
							let ey1 = Number(Math.round(Math.random()*120) - 60);
							$('#bombE4').css('display', 'block');
							$('#bombE4').css('left', bombX + ex4 + 'px');
							$('#bombE4').css('top', bombY + ey1 + 'px');
							bE4.play();
							setTimeout(() => {
								$('#bombE4').attr('src', 'resources/img/game/be1.png');
								setTimeout(() => {
									$('#bombE4').attr('src', 'resources/img/game/be2.png');
									setTimeout(() => {
										$('#bombE4').attr('src', 'resources/img/game/be3.png');
										setTimeout(() => {
											$('#bombE4').attr('src', 'resources/img/game/be4.png');
											setTimeout(() => {
												$('#bombE4').attr('src', 'resources/img/game/be5.png');
												setTimeout(() => {
													$('#bombE4').attr('src', 'resources/img/game/be6.png');
													setTimeout(() => {
														$('#bombE4').attr('src', 'resources/img/game/be7.png');
														setTimeout(() => {
															$('#bombE4').css('left', '700px');
															$('#bombE4').css('display', 'none');
														}, 50);
													}, 50);
												}, 50);
											}, 50);
										}, 50);
									}, 50);
								}, 50);
							}, 50);
							setTimeout(() => {
								$('#bombShot').css('left', '700px');
								let ex5 = Number(Math.round(Math.random()*120) - 60);
								let ey1 = Number(Math.round(Math.random()*120) - 60);
								$('#bombE5').css('display', 'block');
								$('#bombE5').css('left', bombX + ex5 + 'px');
								$('#bombE5').css('top', bombY + ey1 + 'px');
								bE5.play();
								setTimeout(() => {
									$('#bombE5').attr('src', 'resources/img/game/be1.png');
									setTimeout(() => {
										$('#bombE5').attr('src', 'resources/img/game/be2.png');
										setTimeout(() => {
											$('#bombE5').attr('src', 'resources/img/game/be3.png');
											setTimeout(() => {
												$('#bombE5').attr('src', 'resources/img/game/be4.png');
												setTimeout(() => {
													$('#bombE5').attr('src', 'resources/img/game/be5.png');
													setTimeout(() => {
														$('#bombE5').attr('src', 'resources/img/game/be6.png');
														setTimeout(() => {
															$('#bombE5').attr('src', 'resources/img/game/be7.png');
															setTimeout(() => {
																$('#bombE5').css('left', '700px');
																$('#bombE5').css('display', 'none');
															}, 50);
														}, 50);
													}, 50);
												}, 50);
											}, 50);
										}, 50);
									}, 50);
								}, 50);
								setTimeout(() => {
									$('#bombShot').css('left', '700px');
									let ex6 = Number(Math.round(Math.random()*120) - 60);
									let ey1 = Number(Math.round(Math.random()*120) - 60);
									$('#bombE6').css('display', 'block');
									$('#bombE6').css('left', bombX + ex6 + 'px');
									$('#bombE6').css('top', bombY + ey1 + 'px');
									bE6.play();
									setTimeout(() => {
										$('#bombE6').attr('src', 'resources/img/game/be1.png');
										setTimeout(() => {
											$('#bombE6').attr('src', 'resources/img/game/be2.png');
											setTimeout(() => {
												$('#bombE6').attr('src', 'resources/img/game/be3.png');
												setTimeout(() => {
													$('#bombE6').attr('src', 'resources/img/game/be4.png');
													setTimeout(() => {
														$('#bombE6').attr('src', 'resources/img/game/be5.png');
														setTimeout(() => {
															$('#bombE6').attr('src', 'resources/img/game/be6.png');
															setTimeout(() => {
																$('#bombE6').attr('src', 'resources/img/game/be7.png');
																setTimeout(() => {
																	$('#bombE6').css('left', '700px');
																	$('#bombE6').css('display', 'none');
																}, 50);
															}, 50);
														}, 50);
													}, 50);
												}, 50);
											}, 50);
										}, 50);
									}, 50);
									setTimeout(() => {
										$('#bombShot').css('left', '700px');
										let ex7 = Number(Math.round(Math.random()*120) - 60);
										let ey1 = Number(Math.round(Math.random()*120) - 60);
										$('#bombE7').css('display', 'block');
										$('#bombE7').css('left', bombX + ex7 + 'px');
										$('#bombE7').css('top', bombY + ey1 + 'px');
										bE7.play();
										setTimeout(() => {
											$('#bombE7').attr('src', 'resources/img/game/be1.png');
											setTimeout(() => {
												$('#bombE7').attr('src', 'resources/img/game/be2.png');
												setTimeout(() => {
													$('#bombE7').attr('src', 'resources/img/game/be3.png');
													setTimeout(() => {
														$('#bombE7').attr('src', 'resources/img/game/be4.png');
														setTimeout(() => {
															$('#bombE7').attr('src', 'resources/img/game/be5.png');
															setTimeout(() => {
																$('#bombE7').attr('src', 'resources/img/game/be6.png');
																setTimeout(() => {
																	$('#bombE7').attr('src', 'resources/img/game/be7.png');
																	setTimeout(() => {
																		$('#bombE7').css('left', '700px');
																		$('#bombE7').css('display', 'none');
																	}, 50);
																}, 50);
															}, 50);
														}, 50);
													}, 50);
												}, 50);
											}, 50);
										}, 50);
										setTimeout(() => {
											$('#bombShot').css('left', '700px');
											let ex8 = Number(Math.round(Math.random()*120) - 60);
											let ey1 = Number(Math.round(Math.random()*120) - 60);
											$('#bombE8').css('display', 'block');
											$('#bombE8').css('left', bombX + ex8 + 'px');
											$('#bombE8').css('top', bombY + ey1 + 'px');
											bE8.play();
											setTimeout(() => {
												$('#bombE8').attr('src', 'resources/img/game/be1.png');
												setTimeout(() => {
													$('#bombE8').attr('src', 'resources/img/game/be2.png');
													setTimeout(() => {
														$('#bombE8').attr('src', 'resources/img/game/be3.png');
														setTimeout(() => {
															$('#bombE8').attr('src', 'resources/img/game/be4.png');
															setTimeout(() => {
																$('#bombE8').attr('src', 'resources/img/game/be5.png');
																setTimeout(() => {
																	$('#bombE8').attr('src', 'resources/img/game/be6.png');
																	setTimeout(() => {
																		$('#bombE8').attr('src', 'resources/img/game/be7.png');
																		setTimeout(() => {
																			$('#bombE8').css('left', '700px');
																			$('#bombE8').css('display', 'none');
																		}, 50);
																	}, 50);
																}, 50);
															}, 50);
														}, 50);
													}, 50);
												}, 50);
											}, 50);
											setTimeout(() => {
												beSwitch = 0;
											}, 150);
										}, 150);
									}, 150);
								}, 150);
							}, 150);
						}, 150);
					}, 150);
				}, 150);
			}
			
			if (beSwitch == 4 && beD == 0) {
				beD = 1;
				if (Math.abs(Math.round($('#meteor1X').val() - bombX)) <= 120 && Math.abs(Math.round($('#meteor1Y').val() - bombY)) <= 120) {
					let hp = Number($('#meteor1HP').val());
					hp -= 5;
					$('#meteor1HP').val(hp);
				}
				if (Math.abs(Math.round($('#meteor2X').val() - bombX)) <= 120 && Math.abs(Math.round($('#meteor2Y').val() - bombY)) <= 120) {
					let hp = Number($('#meteor2HP').val());
					hp -= 5;
					$('#meteor2HP').val(hp);
				}
				if (Math.abs(Math.round($('#meteor3X').val() - bombX)) <= 120 && Math.abs(Math.round($('#meteor3Y').val() - bombY)) <= 120) {
					let hp = Number($('#meteor3HP').val());
					hp -= 5;
					$('#meteor3HP').val(hp);
				}
				if (Math.abs(Math.round($('#meteor4X').val() - bombX)) <= 120 && Math.abs(Math.round($('#meteor4Y').val() - bombY)) <= 120) {
					let hp = Number($('#meteor4HP').val());
					hp -= 5;
					$('#meteor4HP').val(hp);
				}
				if (Math.abs(Math.round($('#meteor5X').val() - bombX)) <= 120 && Math.abs(Math.round($('#meteor5Y').val() - bombY)) <= 120) {
					let hp = Number($('#meteor5HP').val());
					hp -= 5;
					$('#meteor5HP').val(hp);
				}
				if (Math.abs(Math.round($('#meteor6X').val() - bombX)) <= 120 && Math.abs(Math.round($('#meteor6Y').val() - bombY)) <= 120) {
					let hp = Number($('#meteor6HP').val());
					hp -= 5;
					$('#meteor6HP').val(hp);
				}
				if (Math.abs(Math.round($('#meteor7X').val() - bombX)) <= 120 && Math.abs(Math.round($('#meteor7Y').val() - bombY)) <= 120) {
					let hp = Number($('#meteor7HP').val());
					hp -= 5;
					$('#meteor7HP').val(hp);
				}
				if (Math.abs(Math.round($('#meteor8X').val() - bombX)) <= 120 && Math.abs(Math.round($('#meteor8Y').val() - bombY)) <= 120) {
					let hp = Number($('#meteor8HP').val());
					hp -= 5;
					$('#meteor8HP').val(hp);
				}
				if (Math.abs(Math.round($('#meteor9X').val() - bombX)) <= 140 && Math.abs(Math.round($('#meteor9Y').val() - bombY)) <= 140) {
					let hp = Number($('#meteor9HP').val());
					hp -= 5;
					$('#meteor9HP').val(hp);
				}
				if (Math.abs(Math.round($('#meteor10X').val() - bombX)) <= 180 && Math.abs(Math.round($('#meteor10Y').val() - bombY)) <= 180) {
					let hp = Number($('#meteor10HP').val());
					hp -= 5;
					$('#meteor10HP').val(hp);
				}
				if (Math.abs(Math.round($('#meteor11X').val() - bombX)) <= 210 && Math.abs(Math.round($('#meteor11Y').val() - bombY)) <= 210) {
					let hp = Number($('#meteor11HP').val());
					hp -= 5;
					$('#meteor11HP').val(hp);
				}
				if (Math.abs(Math.round($('#meteor12X').val() - bombX)) <= 240 && Math.abs(Math.round($('#meteor12Y').val() - bombY)) <= 240) {
					let hp = Number($('#meteor12HP').val());
					let dm = Math.round((40 + 30*Number($('#enemySpeed').val()))*0.05);
					hp -= (5 + dm);
					$('#meteor12HP').val(hp);
				}
				if (Math.abs(Math.round($('#alien1aX').val() - bombX)) <= 120 && Math.abs(Math.round($('#alien1aY').val() - bombY)) <= 120) {
					let hp = Number($('#alien1aHP').val());
					hp -= 5;
					$('#alien1aHP').val(hp);
				}
				if (Math.abs(Math.round($('#alien1bX').val() - bombX)) <= 120 && Math.abs(Math.round($('#alien1bY').val() - bombY)) <= 120) {
					let hp = Number($('#alien1bHP').val());
					hp -= 5;
					$('#alien1bHP').val(hp);
				}
				if (Math.abs(Math.round($('#alien3X').val() - bombX)) <= 150 && Math.abs(Math.round($('#alien3Y').val() - bombY)) <= 150) {
					let hp = Number($('#alien3HP').val());
					hp -= 3;
					$('#alien3HP').val(hp);
				}
				setTimeout(() => {
					beD = 0;
				}, 150);
			}
			
		
	}, 1);
}








$(function () {
	bombItem();
	bombExplode();
});