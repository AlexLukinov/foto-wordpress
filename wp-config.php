<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
define( 'FS_METHOD', 'direct' );

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'foto' );

/** MySQL database username */
define( 'DB_USER', 'admin' );

/** MySQL database password */
define( 'DB_PASSWORD', 'jkKut734Jdk*fD34' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'K06^=Q$+~{`FW K-KbJg|@X{NK8ShO<>.VkH?z~QkmV}sB`R+XL%BJpqvS|y22mQ' );
define( 'SECURE_AUTH_KEY',  'L?CH_3j#AwprJ@sNUGE/v_G6av@#`9<8fcjqY|X^9 oyXrW(A&JsK,i`1)&hMRN2' );
define( 'LOGGED_IN_KEY',    'rL@m?GrTj,UgIq~V^R~.Ep8+BUn_m6C~?23fqFdL^KFfn?|&N6FxQU0.{X:d||.#' );
define( 'NONCE_KEY',        'J`vm%$+-2lB1;Qd5kwb:N3Fe N-3.-tT~d!e03tyJqBnIJS!o3lV*`EtC&~?_r)?' );
define( 'AUTH_SALT',        't|XXzq!gTS~k2;H?oq.qb3ZzpY]v^7@Ta/&H{}cGn0K]L6<d+_N:;<m^C?6Ms`v=' );
define( 'SECURE_AUTH_SALT', 'Ltom+t$Zj/3kf5aSEDGPqKVy ^|b J TQ@CWr)xqm!R+3x9$zr!T-5:W27FPeIW6' );
define( 'LOGGED_IN_SALT',   'YDA=~~t%a*4>XrY8~2Lh7Fz_38AxG(53[,cUuJ}UZSV#p&%UsZ}DY!r}Cf1a5SCf' );
define( 'NONCE_SALT',       ']b*<-23Z5@5Ik$KxABVzyqVh(a/,[-UHeFDuln`#Yf-7ViRkB5FSG_Ke-&B]WwT1' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
