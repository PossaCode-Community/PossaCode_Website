import { f as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DUL18hxm.mjs';
import 'clsx';

const html = "";

				const frontmatter = {"title":"PossaCode DevDay 2024","description":"PossaCode DevDay 2024 is an event organized by PossaCode Community including the ability to create events for developers and developers interested in developing.","hero_image":"@/content/images/heros/possacode-devday-2023.png","hero_alt":"PossaCode DevDay 2024","pubDate":"2022-05-04T00:00:00.000Z","updatedDate":"2023-06-04T00:00:00.000Z"};
				const file = "C:/Users/blond/Documents/possacode-site/src/content/blog/possacode-devday-2024.md";
				const url = undefined;
				function rawContent() {
					return "";
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
