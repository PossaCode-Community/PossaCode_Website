;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="3be72ca3-4b39-4b2b-ac4a-9af0cf6bfbfb",e._sentryDebugIdIdentifier="sentry-dbid-3be72ca3-4b39-4b2b-ac4a-9af0cf6bfbfb")}catch(e){}}();import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_BgBX_Wl-.mjs';
import 'clsx';

const html = "<p>Qu’est-ce que le Lorem Ipsum?\r\nLe Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l’imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n’a pas fait que survivre cinq siècles, mais s’est aussi adapté à la bureautique informatique, sans que son contenu n’en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</p>";

				const frontmatter = {"title":"PossaCode DevDay 2024","description":"PossaCode DevDay 2024 is an event organized by PossaCode Community including the ability to create events for developers and developers interested in developing.","hero_image":"@/content/images/heros/possacode-devday-2023.png","hero_alt":"PossaCode DevDay 2024","pubDate":"2022-05-04T00:00:00.000Z","updatedDate":"2023-06-04T00:00:00.000Z"};
				const file = "C:/Users/blond/Documents/possacode-site/src/content/blog/possacode-devday-2024.md";
				const url = undefined;
				function rawContent() {
					return "\r\nQu'est-ce que le Lorem Ipsum?\r\nLe Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
//# sourceMappingURL=possacode-devday-2024_CYqtQ034.mjs.map
