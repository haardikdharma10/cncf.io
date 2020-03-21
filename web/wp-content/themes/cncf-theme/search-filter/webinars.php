<?php
/**
 * Search & Filter Pro
 *
 * Sample Results Template
 *
 * @package   Search_Filter
 * @author    Ross Morsali
 * @link      https://searchandfilter.com
 * @copyright 2018 Search & Filter
 *
 * Note: these templates are not full page templates, rather
 * just an encaspulation of the your results loop which should
 * be inserted in to other pages by using a shortcode - think
 * of it as a template part
 *
 * This template is an absolute base example showing you what
 * you can do, for more customisation see the WordPress docs
 * and using template tags -
 *
 * http://codex.wordpress.org/Template_Tags
 */

if ( $query->have_posts() ) {
	?>

	Found <?php echo esc_html( $query->found_posts ); ?> Webinars<br />
	<?php
	while ( $query->have_posts() ) {
		$query->the_post();
		?>
		<div class="result-item">
			<h2><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h2>
			<p><br /><?php the_excerpt(); ?></p>
			<?php
			if ( has_post_thumbnail() ) {
				echo '<p>';
				the_post_thumbnail( 'small' );
				echo '</p>';
			}
			?>
			<p><?php the_category(); ?></p>
			<p><?php the_tags(); ?></p>
			<p><small><?php the_date(); ?></small></p>
		</div>
		<hr />
		<?php
	}
} else {
	echo 'No Results Found';
}
