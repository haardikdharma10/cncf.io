/**
 * Register block JS
 *
 * @package WordPress
 * @since 1.0.0
 *
 * @tags
 * @phpcs:disable WordPress.WhiteSpace.OperatorSpacing.NoSpaceAfter
 * @phpcs:disable WordPress.WhiteSpace.OperatorSpacing.NoSpaceBefore
 * @phpcs:disable Generic.WhiteSpace.ScopeIndent.IncorrectExact
 * @phpcs:disable Generic.WhiteSpace.ScopeIndent.Incorrect
 * @phpcs:disable PEAR.Functions.FunctionCallSignature.Indent
 */

// Import CSS.
import './editor.scss';
import './style.scss';
import Inspector from './inspector';

const { __ } = wp.i18n;
const { Fragment } = wp.element;
const { Placeholder } = wp.components;
const { registerBlockType } = wp.blocks;

const LandscapeIcon = {
	background: 'white',
	foreground: 'black',
	src: <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="2.70 4.20 210.34 210.34"><path d="M143.4 50.6c12.4-.1 22.1 9.7 22.1 22.2 0 12-10 22-22 22-12.3 0-22.2-9.7-22.4-22.1-.1-12.1 9.9-22 22.3-22.1z" opacity=".5" /><path d="M145.9 124.2c-5.9 4.9-12.2 9.4-18.2 14.2-2.6 2.1-4.4 2-6.7-.4-10.9-11.1-22.1-22-33-33.1-2.8-2.8-4.7-2.9-7.7-.4-14.7 12.1-29.6 24.2-44.5 36.2v41h80.6l25.3-.2.2.2h38.3v-38.3l-.2-.2v-.6c-8.5-6.1-17-12.3-25.3-18.5-3.2-2.4-5.6-2.6-8.8.1z" opacity=".61" /><path d="M74.3 181.7H35.8v-38.5H6.9v67.4h67.4zM180 143.2l.2.2v38.3h-38.3l-.2-.2v29.1h67.4v-67.4zM36 75.8l-.2-.3V37.2h38.3l.2.3V8.4H6.9v67.4zM141.7 8.4v28.8h38.5v38.6h28.9V8.4z" opacity=".81" /><path d="M74.3 37.5l25.3-.3h42.1V8.4H74.3zm67.4 144l-25.3.2H74.3v28.9h67.4zm38.5-105.7v42l-.2 24.8v.6h29.1V75.8zM35.8 143.2v-42.1l.2-25.3H6.9v67.4z" /></svg>,
};

registerBlockType(
	'lf/landscape',
	{
		title: __( 'LF | Landscape' ),
		description: __( 'iFrame embed for responsively resized CNCF Landscape' ),
		icon: LandscapeIcon,
		category: 'cncf',
		keywords: [
			__( 'landscape' ),
			__( 'projects' ),
			__( 'iframe' ),
			__( 'cncf' ),
		],
		example: {},
		attributes: {
			iframeSrc: {
				type: 'string',
			},
			iframeWidth: {
				type: 'string',
			},
			iframeHeight: {
				type: 'string',
			},
		},

		edit: function( props ) {
			const { attributes } = props;

			const iframeStyle = {
				width: attributes.iframeWidth || '1px',
				maxWidth: attributes.iframeWidth || '',
				height: attributes.iframeHeight || '',
				minWidth: '100%',
				zIndex: '-1',
			};

			const block = attributes.iframeSrc ?
				<div className={ props.className }>
					<div className="iframe-overlay"></div>
					<iframe
						title="landscape"
						id="landscape"
						src={ attributes.iframeSrc }
						style={ iframeStyle }
						frameBorder="0"></iframe></div> :
				<Placeholder
					icon={ LandscapeIcon.src }
					label={ __( 'Enter the landscape URL to embed in the sidebar' ) }
				/>;

			return (
				<Fragment>
					<Inspector { ...props } />
					{ block }
				</Fragment>
			);
		},

		save: function( props ) {
			const { attributes } = props;

			const iframeStyle = {
				width: attributes.iframeWidth || '1px',
				maxWidth: attributes.iframeWidth || '',
				height: attributes.iframeHeight || '',
				minWidth: '100%',
			};

			return (
				<Fragment>
					<iframe
						title="landscape"
						id="landscape"
						src={ attributes.iframeSrc }
						style={ iframeStyle }
						frameBorder="0"
						scrolling="no"
					></iframe>
				</Fragment>
			);
		},
	}
	);
