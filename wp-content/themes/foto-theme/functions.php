<?php
// Remove all default WP template redirects/lookups
remove_action( 'template_redirect', 'redirect_canonical' );

// Redirect all requests to index.php so the Vue app is loaded and 404s aren't thrown
function remove_redirects() {
	add_rewrite_rule( '^/(.+)/?', 'index.php', 'top' );
}
add_action( 'init', 'remove_redirects' );

// Load scripts
function load_vue_scripts() {
	wp_enqueue_script(
		'vuejs-wordpress-theme-starter-js',
		get_stylesheet_directory_uri() . '/dist/scripts/index.min.bundle.js',
		array( 'jquery' ),
		filemtime( get_stylesheet_directory() . '/dist/scripts/index.min.bundle.js' ),
		true
	);

//	wp_enqueue_style(
//		'vuejs-wordpress-theme-starter-css',
//		get_stylesheet_directory_uri() . '/dist/styles.css',
//		null,
//		filemtime( get_stylesheet_directory() . '/dist/styles.css' )
//	);
}
add_action( 'wp_enqueue_scripts', 'load_vue_scripts', 100 );


add_action('rest_api_init', function () {
    register_rest_route('buro/v1', '/create-review', array(
        'methods' => 'POST',
        'callback' => 'create_review',
    ));
});

function create_review(WP_REST_Request $request) {
    $name = $request['name'];
    $email = $request['email'];
    $city = $request['city'];
    $text = $request['text'];
    $phone = $request['phone'];

    $message = <<<HTML
        <p>Имя: $name</p>
        <p>Email: $email</p>
        <p>Город: $city</p>
        <p>Телефон: $phone</p>
        <p>Текст отзыва: $text</p>
HTML;


    $response = wp_mail('buketnoe_buro@mail.ru', 'Новый отзыв', $message);

    return $response;
}