<?php

	sleep(3);

	$retArr = array(
		'data' => array(
			0 => array(
				'name' => 'gautam',
				'designation' => 'Front end develoeper',
				'team' => 'Buzzwize'
			)
		)
	);

	header('Content-Type: application/json');
	print json_encode($retArr);

?>