// yang_jQuery.js

function opening() {
	let opNum = 0;
	let opBright = 1;
	const opAudio = new Audio();
	opAudio.src = "resources/audio/lightup.mp3";
	$(document).mousedown((e) => {
		if ((e.button == 0 || e.button == 2) && opNum == 0) {
			opNum = 1;
			opAudio.play();
			$('#siteTitleTbl').css('margin-top', '30px');
			setTimeout(() => {
				$('#siteTitleTbl').css('transition', 'all 0.1s ease-in-out');
				$('#siteTitleTbl').css('opacity', '1');
				setTimeout(() => {
					$('#siteTitleTbl').css('transition', 'all 0.12s ease-in-out');
					$('#siteTitleTbl').css('opacity', '0');
					setTimeout(() => {
						$('#siteTitleTbl').css('transition', 'all 0.12s ease-in-out');
						$('#siteTitleTbl').css('opacity', '1');
						setTimeout(() => {
							$('#siteTitleTbl').css('transition', 'all 0.1s ease-in-out');
							$('#siteTitleTbl').css('opacity', '1');
							setTimeout(() => {
								$('#siteTitleTbl').css('transition', 'all 0.1s ease-in-out');
								$('#siteTitleTbl').css('opacity', '0');
								setTimeout(() => {
									$('#siteTitleTbl').css('transition', 'all 0.04s ease-in-out');
									$('#siteTitleTbl').css('opacity', '0.5');
									setTimeout(() => {
										$('#siteTitleTbl').css('transition', 'all 0.04s ease-in-out');
										$('#siteTitleTbl').css('opacity', '0');
										setTimeout(() => {
											$('#siteTitleTbl').css('transition', 'all 0.04s ease-in-out');
											$('#siteTitleTbl').css('opacity', '0.5');
											setTimeout(() => {
												$('#siteTitleTbl').css('transition', 'all 0.04s ease-in-out');
												$('#siteTitleTbl').css('opacity', '0');
												setTimeout(() => {
													$('#siteTitleTbl').css('transition', 'all 0.01s ease-in-out');
													$('#siteTitleTbl').css('opacity', '1');
													setTimeout(() => {
														$('#siteTitleTbl').css('transition', 'all 0.05s ease-in-out');
														$('#siteTitleTbl').css('opacity', '0');
														$('#opening').css('opacity', 1);
														setTimeout(() => {
															$('#siteTitleTbl').css('opacity', '1');
															$('#siteMenuTbl').css('opacity', '1');
															$('#siteLoginTbl').css('opacity', '1');
															$('#siteContentTbl').css('opacity', '1');
															$('#lightOff').css('opacity', '1');
															$('body').css('background-image', 'url("resources/img/background.jpg")');
															$('#t_cheese').css('text-shadow', 'orange 0px 0px 40px, orange 0px 0px 30px, orange 0px 0px 20px, #FFA50040 1px 1px 10px, #FFA50060 1px 1px 9px, #FFA50080 1px 1px 8px');
															$('#t_and').css('text-shadow', '#b9ffff 0px 0px 40px, #b9ffff 0px 0px 30px, #b9ffff 0px 0px 20px, #b9ffff40 1px 1px 10px, #b9ffff60 1px 1px 9px, #b9ffff80 1px 1px 8px');
															$('#t_wine').css('text-shadow', 'white 0px 0px 40px, white 0px 0px 30px, white 0px 0px 20px, #FFFFFF40 1px 1px 10px, #FFFFFF60 1px 1px 9px, #FFFFFF80 1px 1px 8px');
															setInterval(() => {
																if (opBright > 0) {
																	opBright -= 0.1;
																	$('#opening').css('opacity', opBright);
																	if (opBright <= 0) {
																		setTimeout(() => {
																			$('#opening').css('display', 'none');
																		}, 150);
																	}
																}
															}, 30);
														}, 250);
													}, 250);
												}, 100);
											}, 100);
										}, 100);
									}, 100);
								}, 150);
							}, 150);
						}, 300);
					}, 200);
				}, 600);
			}, 200);
		}
	});
}

function afterOpening() {
	$('#siteTitleTbl').css('margin-top', '30px');
	$('#siteTitleTbl').css('opacity', '1');
	$('#siteMenuTbl').css('opacity', '1');
	$('#siteLoginTbl').css('opacity', '1');
	$('#siteMenuTbl').css('opacity', '1');
	$('#siteContentTbl').css('opacity', '1');
	$('#lightOff').css('opacity', '1');
	$('#t_cheese').css('text-shadow', 'orange 0px 0px 40px, orange 0px 0px 30px, orange 0px 0px 20px, #FFA50040 1px 1px 10px, #FFA50060 1px 1px 9px, #FFA50080 1px 1px 8px');
	$('#t_and').css('text-shadow', '#b9ffff 0px 0px 40px, #b9ffff 0px 0px 30px, #b9ffff 0px 0px 20px, #b9ffff40 1px 1px 10px, #b9ffff60 1px 1px 9px, #b9ffff80 1px 1px 8px');
	$('#t_wine').css('text-shadow', 'white 0px 0px 40px, white 0px 0px 30px, white 0px 0px 20px, #FFFFFF40 1px 1px 10px, #FFFFFF60 1px 1px 9px, #FFFFFF80 1px 1px 8px');
	$('body').css('background-image', 'url("resources/img/background.jpg")');
	$('#opening').css('display', 'none');
}

function titleBlink() {
	setInterval(() => {
		let bNum = Math.random() * 100;
		let oNum = Math.random() + 0.2;
		if (bNum < 1) {
			$('#t_cheese').css('opacity', oNum);
			$('#t_and').css('opacity', oNum);
			$('#t_wine').css('opacity', oNum);
			$('.neonTitle').css('opacity', oNum);
			$('.neon6').css('border', '6px solid rgba(0, 255, 255, ' + oNum + ')');
			$('.neon4').css('border', '4px solid rgba(0, 255, 255, ' + oNum + ')');
			setTimeout(() => {
				$('#t_cheese').css('opacity', '1');
				$('#t_and').css('opacity', '1');
				$('#t_wine').css('opacity', '1');
				$('.neonTitle').css('opacity', '1');
				$('.neon6').css('border', '6px solid rgba(0, 255, 255, 1)');
				$('.neon4').css('border', '4px solid rgba(0, 255, 255, 1)');
			}, 100);
		}
	}, 20);
}

function eatCheese() {
	let cNum = 5;
	let sw = 1;
	const eatAudio1 = new Audio();
	const eatAudio2 = new Audio();
	const eatAudio3 = new Audio();
	const eatAudio4 = new Audio();
	const eatAudio5 = new Audio();
	const ringAudio1 = new Audio();
	const ringAudio2 = new Audio();
	eatAudio1.src = "resources/audio/yum.mp3";
	eatAudio2.src = "resources/audio/yum.mp3";
	eatAudio3.src = "resources/audio/yum.mp3";
	eatAudio4.src = "resources/audio/yum.mp3";
	eatAudio5.src = "resources/audio/burp.mp3";
	ringAudio1.src = "resources/audio/ring.mp3";
	ringAudio2.src = "resources/audio/ring.mp3";
		$('#homeImg').click(() => {
			cNum++;
			if (cNum == 1 && sw == 1) {
				eatAudio1.play();
				$('#homeImg').attr('src', 'resources/img/cheese2.png');
			} else if (cNum == 2 && sw == 1) {
				eatAudio2.play();
				$('#homeImg').attr('src', 'resources/img/cheese3.png');
			} else if (cNum == 3 && sw == 1) {
				eatAudio3.play();
				$('#homeImg').attr('src', 'resources/img/cheese4.png');
			} else if (cNum == 4 && sw == 1) {
				eatAudio4.play();
				$('#homeImg').css('display', 'none');
				setTimeout(() => {
					eatAudio5.play();
					setTimeout(() => {
						$('#homeImg').attr('src', 'resources/img/bell.png');
						$('#homeImg').css('display', 'block');
						ringAudio1.play();
					}, 1200);
				}, 1000);
			} else if (cNum = 5  && sw == 1) {
				sw = 0;
				ringAudio2.play();
				setTimeout(() => {
					$('#homeImg').css('transform', 'scale(0.0001)');
					$('#homeImg').css('transition', 'transform 0.2s');
					setTimeout(() => {
						$('#homeImg').attr('src', 'resources/img/cheese1.png');
						$('#homeImg').css('transform', 'scale(1.2)');
						$('#homeImg').css('transition', 'transform 0.2s');
						setTimeout(() => {
							$('#homeImg').css('transform', 'scale(0.85)');
							$('#homeImg').css('transition', 'transform 0.1s');
							setTimeout(() => {
								$('#homeImg').css('transform', 'scale(1)');
								cNum = 0;
								sw = 1;
							}, 100);
						}, 200);
					}, 600);
				}, 1000);
				
			}
		});
	
}

function loginAlert() {
		let loginR = $('#loginR').val();
		if (loginR != "") {
			alert(loginR);
			$('#loginR').val("");
		}
}

function searchAddress() {
	$('#signupAddr1, #signupAddr2').click(function() {
		new daum.Postcode({
			oncomplete: function(data) {
				$('#signupAddr1').val(data.zonecode);
				$('#signupAddr2').val(data.roadAddress)
			}
		}).open();
	});
	
	$('#iuAddr1, #iuAddr2').click(function() {
		new daum.Postcode({
			oncomplete: function(data) {
				$('#iuAddr1').val(data.zonecode);
				$('#iuAddr2').val(data.roadAddress)
			}
		}).open();
	});
}

function idCheck() {
	$('#signupId').keyup(function() {
		let m_id = $('#signupId').val();
		$.getJSON("member.id.check?m_id=" + m_id, function(idChk) {
			if (idChk.member[0] == null) {
				$('#signupIdChk').css('opacity', '0');
			} else {
				$('#signupIdChk').css('opacity', '1');
			}
		});
	});
}

function nicknameCheck() {
	$('#signupNickname').keyup(function() {
		let m_nickname = $('#signupNickname').val();
		$.getJSON("member.nickname.check?m_nickname=" + m_nickname, function(nicknameChk) {
			if (nicknameChk.member[0] == null) {
				$('#signupNicknameChk').css('opacity', '0');
			} else {
				$('#signupNicknameChk').css('opacity', '1');
			}
		});
	});
	$('#iuNickname').keyup(function() {
		let m_nickname = $('#iuNickname').val();
		let m_nicknameNow = $('#iuNicknameNow').val();
		$.getJSON("member.nickname.check?m_nickname=" + m_nickname, function(iuNicknameChk) {
			if (iuNicknameChk.member[0] == null || m_nickname == m_nicknameNow) {
				$('#iuNicknameChk').css('opacity', '0');
			} else if(iuNicknameChk.member[0] != null) {
				$('#iuNicknameChk').css('opacity', '1');
			}
		});
	});
}

function keydownf5() {
	$(document).keydown(function(e) {
		if (e.keyCode == 116) {
			let t = confirm('불을 끄시겠습니까?');
			if (t) {
				location.href = "lightOff.go";
				return false;
			} else {
				return false;
			}
		}
	});
}

function windowWidth () {
	$(window).resize(function () {
		let wWidth = $(window).width();
		if (wWidth < 900) {
			$('#siteLoginTbl').css('left', '765px');
			$('#lightOff').css('left', '810px');
			$('#siteContentTbl').css('width', '720px')
			$('#brTbl').css('width', '500px')
			$('#bwTbl').css('width', '500px')
			$('#buTbl').css('width', '500px')
			$('.rTbl').css('width', '450px')
		} else {
			$('#siteLoginTbl').css('left', '85%');
			$('#lightOff').css('left', '90%');
			$('#siteContentTbl').css('width', '80%')
			$('#brTbl').css('width', '69.45%')
			$('#bwTbl').css('width', '69.45%')
			$('#buTbl').css('width', '69.45%')
			$('.rTbl').css('width', '62.5%')
		}
	});
}

function windowLocation () {
	let wWidth = $(window).width();
	if (wWidth < 900) {
		$('#siteLoginTbl').css('left', '765px');
		$('#lightOff').css('left', '810px');
		$('#siteContentTbl').css('width', '720px')
		$('#brTbl').css('width', '500px')
		$('#bwTbl').css('width', '500px')
		$('#buTbl').css('width', '500px')
		$('.rTbl').css('width', '450px')
	} else {
		$('#siteLoginTbl').css('left', '85%');
		$('#lightOff').css('left', '90%');
		$('#siteContentTbl').css('width', '80%')
		$('#brTbl').css('width', '69.45%')
		$('#bwTbl').css('width', '69.45%')
		$('#buTbl').css('width', '69.45%')
		$('.rTbl').css('width', '62.5%')
	}
}

function seePW () {
	$('#seePW').mouseenter(function() {
		$('#infoPW').removeAttr("type");
		$('#infoPW').css('font-family', '"b"');
	});
	$('#seePW').mouseleave(function() {
		$('#infoPW').attr("type", "password");
		$('#infoPW').css('font-family', '"a"');
	});
}

function menuSlide () {
	$('#siteMenuTbl').mouseenter(function() {
			$('#siteMenuTbl').css('left', '-50px');
	});
	$('#siteMenuTbl').mouseleave(function() {
		$('#siteMenuTbl').css('left', '-200px');
	});
}

function boardPerPage () {
	$('#bPP').change(function () {
		$('#sBtn button').trigger('click');
	});
}

function deleteConfirm () {
	$('#boardDeleteBtn').click(function() {
		let t = confirm('게시글을 삭제하시겠습니까?');
		if (t) {
			return true;
		}
		else {
			return false;
		}
	});
	$('.replyDeleteBtn').click(function() {
		let t = confirm('답글을 삭제하시겠습니까?');
		if (t) {
			return true;
		}
		else {
			return false;
		}
	});
}

function updateConfirm () {
	$('#updateBtn').click(function() {
		let t = confirm('게시글을 수정하시겠습니까?');
		if (t) {
			return true;
		}
		else {
			return false;
		}
	});
}

function cheesePopup () {
	let cNo = 1;
	let sw = 0;
		$('.cheeseTbl').click(function () {
			if (cNo == 1 && sw == 0) {
			cNo = 2;
			sw = 1;
			let c_photo = $(this).find('#c_photo').val();
			let c_name = $(this).find('#c_name').val();
			let c_fname = $(this).find('#c_fname').val();
			let c_where = $(this).find('#c_where').val();
			let c_fat = $(this).find('#c_fat').val();
			let c_time = $(this).find('#c_time').val();
			
			$('#cheeseTblB').css("display", "block");
			$('#cheeseTblB').css("opacity", "1");
			$('#cheeseTblB').css("top", "50%");
			$('#cheeseTblB').css("left", "50%");
			$('#cheeseTblB').css("transform", "translate(-50%, -50%)");
			$('.cheeseTbl').css("filter", "blur(6px)");
			$('#lightOff').css("filter", "blur(6px)");
			$('#csTbl').css("filter", "blur(6px)");
			$('.neon4').css("filter", "blur(6px)");
			$('.neon6').css("filter", "blur(6px)");
			$('#c_photoV').attr("src", "resources/img/cheese/" + c_photo);
			$('#toGoogle').attr("href", "https://www.google.com/search?q=" + c_name + " 치즈");
			$('#toGoogle').attr("target", "_blank");
			$('#c_nameV').val(c_name);
			$('#c_fnameV').val(c_fname);
			$('#c_whereV').val(c_where);
			$('#c_fatV').val(c_fat + "%");
			$('#c_timeV').val(c_time);
			
			
			
			} 
		});
		
	
		$('#cheeseTblBBtn').mousedown(function(e) {
			if (e.button == 0 || e.button == 2) {
				if (cNo == 2 && sw == 1) {
				sw = 0;
				$('#cheeseTblB').css("opacity", "0");
				$('.cheeseTbl').css("filter", "blur(0px)");
				$('#csTbl').css("filter", "blur(0px)");
				$('#lightOff').css("filter", "blur(0px)");
				$('.neon4').css("filter", "blur(0px)");
				$('.neon6').css("filter", "blur(0px)");
				setTimeout(() => {
					$('#cheeseTblB').css("display", "none");
					cNo = 1;
				}, 400);
				
				}
			}
		});
	
}


$(function () {
	if ($('#openNum').val() == 1) {
		opening();
	}
	if ($('#openNum').val() != 1) {
		afterOpening();
	}
	windowLocation();
	titleBlink();
	eatCheese();
	loginAlert();
	searchAddress();
	idCheck();
	nicknameCheck();
	keydownf5();
	windowWidth();
	seePW();
	menuSlide();
	boardPerPage();
	deleteConfirm();
	updateConfirm();
	cheesePopup();
});