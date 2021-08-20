<?php
/*
Plugin Name:  Gutenberg Gifs
Plugin URI:	  https://fragmentwebworks.com/product/gutenberg-gifs/
Description:  Search and embed gifs from Tenor to Gutenberg enabled posts, pages and widgets
Version:	  1.0.0
Author:		  Fragment Web Works
Author URI:   https://fragmentwebworks.com
License:      GPL2
License URI:  https://www.gnu.org/licenses/gpl-2.0.html
Text Domain:  gg
Domain Path:  /languages
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

//define plugin dir 
define( 'GG_BLOCK_DIR', plugin_dir_url(__FILE__) );
define( 'GG_PLUGIN_DIR', dirname(__FILE__).'/' );

/*
 *
 * Require files for plugin functionality
 * 
 */ 
//settings files
require_once( GG_PLUGIN_DIR . '/includes/settings.php' );
//settings files
require_once( GG_PLUGIN_DIR . '/includes/rest.php' );

/**
 * callback function for registeing our block style
 * in both Gutemberg editor and frontend
 *
 * @return void
 */
function gg_block_assets() {
    
    // include css style which will be used on both block preview
    // inside Gutemberg block Editor and on the frontend
    wp_enqueue_style( 'gg-style-css', GG_BLOCK_DIR . 'src/style.css', array(), '1.0.0' );
} 
add_action( 'enqueue_block_assets', 'gg_block_assets' );


/**
 * Callback function for registering our block with Gutemberg
 *
 * @return void
 */
function gg_editor_assets() {
  
    // Scripts.
    wp_enqueue_script(
        'gg-block-js',
        GG_BLOCK_DIR . 'build/index.js',
        array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
        '1.0.0',
        true
    );
    //add localized settings
    wp_localize_script( 'gg-block-js', 'gg_settings',
        array( 
            'tenor_api_key' => get_option('gg_tenor_api_key'),
            'gg_settings_page' => menu_page_url( 'gutenberg-gifs', false ),
        )
    );
}
add_action( 'enqueue_block_editor_assets', 'gg_editor_assets' );

