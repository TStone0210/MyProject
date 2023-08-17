//score.js

function seeScore () {
	let sc1 = 0;
	$('#gameSC').click(function() {
		if ($('#gameStmt').val() == 2) {
			$('#gameStmt').val(100);
			$('.title2').css('opacity', '0');
			setTimeout(() => {
				$('#gameStmt').val(101);
				$('.title2').css('display', 'none');
			}, 1000);
		}
	});
		
	setInterval(() => {
		let gs = $('#gameStmt').val();
		if (gs == 101 && sc1 == 0) {
			sc1 = 1;
			$('#st').css('left', "6%");
			$('#s1t').css('left', "10%");
			setTimeout(() => {
				$('#nd').css('left', "14%");
				$('#s2t').css('left', "20%");
				setTimeout(() => {
					$('#rd').css('left', "24%");
					$('#s3t').css('left', "30%");
					setTimeout(() => {
						$('#s4t').css('left', "40%");
						setTimeout(() => {
							$('#s5t').css('left', "40%");
							setTimeout(() => {
								$('#backBtn').css('left', "15%");
							}, 200);
						}, 200);
					}, 200);
				}, 200);
			}, 200);
		}
	}, 1);
	$('#backBtn').click(function () {
		if ($('#gameStmt').val() == 101) {
			$('#gameStmt').val(102);
			$('#st').css('left', "700px");
			$('#s1t').css('left', "700px");
			$('#backBtn').css('left', '-100px');
			setTimeout(() => {
				$('#nd').css('left', "700px");
				$('#s2t').css('left', "700px");
				setTimeout(() => {
					$('#rd').css('left', "700px");
					$('#s3t').css('left', "700px");
					setTimeout(() => {
						$('#s4t').css('left', "700px");
						setTimeout(() => {
							$('#s5t').css('left', "700px");
							setTimeout(() => {
								$('.title2').css('display', 'block');
								setTimeout(() => {
									$('.title2').css('opacity', '1');
									sc1 = 0;
									setTimeout(() => {
										$('#gameStmt').val(2);
									}, 1000);
								}, 10);
							}, 1000);
						}, 200);
					}, 200);
				}, 200);
			}, 200);
		}
	});
	
}




$(function() {
	seeScore();
});