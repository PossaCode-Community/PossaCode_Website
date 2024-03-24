;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="1ebf356e-c90a-48d9-90e2-54c01c26663f",e._sentryDebugIdIdentifier="sentry-dbid-1ebf356e-c90a-48d9-90e2-54c01c26663f")}catch(e){}}();import { g as getGithubUserName, a as getUserInfos, $ as $$Image, M as MetaData, b as $$BaseLayout } from './__CZ-lUUda.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute } from '../astro_BgBX_Wl-.mjs';
import { LucideLinkedin, LucideGithub, Mail } from 'lucide-react';

const HeroImage = new Proxy({"src":"/_astro/hero-bg.JICovHD4.png","width":1625,"height":862,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/images/hero-bg.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://possacode.netlify.app/");
const $$MemberCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MemberCard;
  const { member } = Astro2.props;
  const { github_url } = member;
  const userName = getGithubUserName(github_url);
  const { avatar_url } = await getUserInfos(userName);
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full flex-col items-center space-y-4"> ${renderComponent($$result, "Image", $$Image, { "src": avatar_url, "alt": "PossaCode", "class": "aspect-square size-36 rounded-full object-cover ring ring-orange ring-offset-4 ring-offset-white dark:ring-offset-slate-950", "loading": "eager", "width": 200, "height": 200 })} <div class="text-center"> <p class="font-semibold"> ${member.first_name} ${member.last_name} </p> <p>${member.role}</p> <p class="text-sm">${member.profession}</p> </div> <di class="flex items-center space-x-4"> <a${addAttribute(member.linkedin_url, "href")}> ${renderComponent($$result, "LucideLinkedin", LucideLinkedin, { "size": 20 })} </a> <a${addAttribute(member.github_url, "href")}> ${renderComponent($$result, "LucideGithub", LucideGithub, { "size": 20 })} </a> <a${addAttribute(`mailto:${member.email}`, "href")}> ${renderComponent($$result, "Mail", Mail, { "size": 20 })} </a> </di> </div>`;
}, "C:/Users/blond/Documents/possacode-site/src/components/MemberCard.astro", void 0);

const $$Astro = createAstro("https://possacode.netlify.app/");
const $$APropos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$APropos;
  const response = await fetch(`${Astro2.url.origin}/api/get-members.json`);
  const members = await response.json();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `A propos - ${MetaData.title}` }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex h-[250px] items-center justify-center md:h-[350px]"> <h2 class="absolute z-10 text-center text-healding-2 font-semibold uppercase text-white">
Qui sommes-nous ?
</h2> ${renderComponent($$result2, "Image", $$Image, { "src": HeroImage, "alt": "PossaCode", "class": "h-full w-full object-cover", "loading": "eager" })} <div class="absolute h-full w-full bg-black/60"></div> </div> <div class="w-full bg-[#FFDCD3] py-20"> <div class="container"> <p class="max-w-4xl text-slate-950 md:text-xl">
« Le programme accroît la moyenne scolaire. Les élèves sont plus
        disciplinés dans leur travail scolaire, plus dynamiques et enthousiastes
        vis-à-vis de l’acquisition de connaissances nouvelles, et moins
        impulsifs. Il y a un impact positif du programme sur les aspirations des
        élèves, à la fois en matière d’études et de profession. »*
</p> </div> </div> <div class="container space-y-20 py-20"> <div class="space-y-6"> <h2 class="text-healding-2 font-semibold uppercase">Notre mission</h2> <p class="max-w-5xl">
Notre combat, c’est la lutte pour l’égalité des chances par des actions
        de prévention du décrochage scolaire. Notre but est de permettre à tous
        les élèves d’aimer apprendre. Nous intervenons chaque année auprès de
        120 000 élèves du CM2 à la 3e , dans les territoires les moins favorisés
        mais aussi de plus en plus dans des territoires ruraux, partout où
        l’orientation des jeunes est contrainte par manque d’information, de
        soutien familial ou de modèles inspirants. Nous déployons des programmes
        pédagogiques très innovants, qui sont coanimés dans la salle de classe
        par un binôme de volontaires Énergie
</p> </div> <div class="space-y-10"> <h2 class="text-healding-2 font-semibold uppercase">Notre equipe</h2> <div class="grid grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-8"> ${members.map((member) => renderTemplate`${renderComponent($$result2, "MemberCard", $$MemberCard, { "member": member })}`)} </div> </div> </div> ` })}`;
}, "C:/Users/blond/Documents/possacode-site/src/pages/a-propos.astro", void 0);

const $$file = "C:/Users/blond/Documents/possacode-site/src/pages/a-propos.astro";
const $$url = "/a-propos";

export { $$APropos as default, $$file as file, $$url as url };
//# sourceMappingURL=a-propos_BpSL5Chk.mjs.map
