;!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="ffb7b631-a25a-4960-8278-0716a2e48e8d",e._sentryDebugIdIdentifier="sentry-dbid-ffb7b631-a25a-4960-8278-0716a2e48e8d")}catch(e){}}();import { $ as $$Image, d as getCollection, b as $$BaseLayout, e as $$Button } from './__CZ-lUUda.mjs';
import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, i as renderComponent, h as addAttribute } from '../astro_BgBX_Wl-.mjs';
/* empty css                          */

const $$Astro$6 = createAstro("https://possacode.netlify.app/");
const $$ArticleCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { post } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="space-y-6 rounded border p-6 shadow-md"> <div class="relative"> ${renderComponent($$result, "Image", $$Image, { "src": post.data.hero_image, "alt": post.data.hero_alt, "class": "aspect-video w-full rounded object-cover" })} <div class="absolute bottom-0 left-0 h-1/3 w-full bg-gradient-to-t from-[#F5A898] to-transparent"></div> </div> <div class="flex flex-col space-y-4"> <h2 class="text-xl font-semibold md:text-3xl"> ${post.data.title} </h2> <p class="flex-1">${post.data.description}</p> <p class="text-sm italic"> ${new Date(post.data.pubDate).toLocaleDateString()} </p> </div> </article>`;
}, "C:/Users/blond/Documents/possacode-site/src/components/ArticleCard.astro", void 0);

const $$Astro$5 = createAstro("https://possacode.netlify.app/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$1;
  const posts = (await getCollection("blog")).sort(
    (a2, b) => a2.data.pubDate.valueOf() - b.data.pubDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "PossaCode - Blog" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container max-w-6xl space-y-10 py-20 md:py-32"> <h2 class="text-healding-2 font-semibold uppercase">Evenements</h2> <p>
L'extrait standard de Lorem Ipsum utilisé depuis le XVIè siècle est
      reproduit ci-dessous pour les curieux. Les sections 1.10.32 et 1.10.33 du
      "De Finibus Bonorum et Malorum" de Cicéron sont aussi reproduites dans
      leur version originale, accompagnée de la traduction anglaise de H.
      Rackham (1914).
</p> <div class="grid grid-cols-1 gap-6 md:grid-cols-2"> ${posts.map((post) => renderTemplate`<a${addAttribute(`/blogs/${post.slug}`, "href")}> ${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "post": post })} </a>`)} </div> </div> ` })}`;
}, "C:/Users/blond/Documents/possacode-site/src/pages/blogs/index.astro", void 0);

const $$file$1 = "C:/Users/blond/Documents/possacode-site/src/pages/blogs/index.astro";
const $$url$1 = "/blogs";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://possacode.netlify.app/");
const $$CardValue = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CardValue;
  const { value, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`max-w-sm space-y-4 rounded-[49px] px-7 md:px-[45px] py-14 md:py-[65px]  ${index === 0 ? "bg-[#F5A898] text-zinc-950" : index === 1 ? "bg-[#E54D2E] text-white" : "bg-[#1A2251] text-white"}`, "class")}> <div class="flex items-center justify-between"> <h4 class="max-w-40 font-bold text-white">${value.title}</h4> ${renderComponent($$result, "Image", $$Image, { "src": value.icon, "alt": value.title, "class": "w-8", "loading": "eager", "format": "webp" })} </div> <p class="text-sm font-light">${value.content}</p> </div>`;
}, "C:/Users/blond/Documents/possacode-site/src/components/CardValue.astro", void 0);

const $$Astro$3 = createAstro("https://possacode.netlify.app/");
const $$CardImpact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardImpact;
  const { impact } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex flex-col items-center space-y-4 md:items-start"> ${renderComponent($$result, "Image", $$Image, { "src": impact.icon, "alt": impact.text, "format": "webp", "quality": "mid", "class": "size-12" })} <span class="text-4xl font-semibold">${impact.total}</span> <span class="inline-block max-w-28 text-center capitalize md:text-start"> ${impact.text} </span> </li>`;
}, "C:/Users/blond/Documents/possacode-site/src/components/CardImpact.astro", void 0);

const CommunityIcon = new Proxy({"src":"/_astro/community.ux6JHIK5.png","width":65,"height":65,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/icons/community.png";
							}
							
							return target[name];
						}
					});

const HandsIcon = new Proxy({"src":"/_astro/hands.CwSpfbD0.png","width":65,"height":65,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/icons/hands.png";
							}
							
							return target[name];
						}
					});

const $$Astro$2 = createAstro("https://possacode.netlify.app/");
const $$CardGoal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$CardGoal;
  const { goal, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex items-center space-x-4 text-white"> ${renderComponent($$result, "Image", $$Image, { "src": index === 0 ? CommunityIcon : HandsIcon, "alt": index === 0 ? "Coummunity Icon" : "Hands Icon", "loading": "eager", "format": "webp", "quality": "mid", "class": "size-12" })} <div class="flex flex-col space-y-0.5 text-sm md:text-base"> <span class="font-semibold text-orange">${goal.title}</span> <span class="inline-block max-w-32">${goal.content}</span> </div> </li>`;
}, "C:/Users/blond/Documents/possacode-site/src/components/CardGoal.astro", void 0);

const Code = new Proxy({"src":"/_astro/code.DQ6tOQWo.png","width":235,"height":164,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/images/code.png";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://possacode.netlify.app/");
const $$PostCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostCard;
  const { data, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex w-full flex-col gap-4 md:max-w-2xl md:flex-row md:items-center"> <div class="relative h-[200px] w-full overflow-hidden rounded-[31px] lg:max-w-[289px]"> ${renderComponent($$result, "Image", $$Image, { "src": data.hero_image, "alt": data.hero_alt, "format": "webp", "quality": "high", "loading": "eager", "class": "h-full w-full object-cover" })} </div> <div class="flex flex-col space-y-4 py-4 md:h-full"> <h3 class="text-xl font-semibold uppercase text-[#F5A898]">${data.title}</h3> <p class="flex-1 md:max-w-sm">${data.description}</p> ${renderComponent($$result, "Button", $$Button, { "href": `/blogs/${slug}`, "text": "Lire la suite", "className": "text-semibold w-fit border border-orange bg-[#f5a798a6] text-orange hover:bg-[#f5a7986e] dark:text-white" })} </div> </div>`;
}, "C:/Users/blond/Documents/possacode-site/src/components/PostCard.astro", void 0);

const RegionIcon = new Proxy({"src":"/_astro/region.DK3vVOqi.png","width":86,"height":86,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/icons/region.png";
							}
							
							return target[name];
						}
					});

const PeopleIcon = new Proxy({"src":"/_astro/people.JqCE2h4y.png","width":86,"height":86,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/icons/people.png";
							}
							
							return target[name];
						}
					});

const HumanIcon = new Proxy({"src":"/_astro/human.BaC7J5Sd.png","width":86,"height":86,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/icons/human.png";
							}
							
							return target[name];
						}
					});

const HandHartIcon = new Proxy({"src":"/_astro/hand.DDzS8_ic.png","width":55,"height":62,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/icons/hand.png";
							}
							
							return target[name];
						}
					});

const GroupPeopleIcon = new Proxy({"src":"/_astro/groupe.CvjktOVI.png","width":44,"height":44,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/icons/groupe.png";
							}
							
							return target[name];
						}
					});

const FaceEmojiIcon = new Proxy({"src":"/_astro/face-emoji.CAbKxP0G.png","width":39,"height":39,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/icons/face-emoji.png";
							}
							
							return target[name];
						}
					});

const CGDTLogo = new Proxy({"src":"/_astro/cgdt.CD1kMidt.png","width":320,"height":177,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/images/cgdt.png";
							}
							
							return target[name];
						}
					});

const SFALogo = new Proxy({"src":"/_astro/sfa.BkEe-dDW.png","width":324,"height":177,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/images/sfa.png";
							}
							
							return target[name];
						}
					});

const GalsenDevLogo = new Proxy({"src":"/_astro/galsen-dev.D5Yyiz4W.png","width":324,"height":177,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/images/galsen-dev.png";
							}
							
							return target[name];
						}
					});

const DevCastLogo = new Proxy({"src":"/_astro/devcast.CTOpbhbZ.png","width":324,"height":177,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/images/devcast.png";
							}
							
							return target[name];
						}
					});

const communityGoals = [
  {
    title: "Communauté",
    content: "1000 membres"
  },
  {
    title: "Formations",
    content: "For high-qualit opportunities."
  },
  {
    title: "Evenements",
    content: "1000 membres"
  },
  {
    title: "Impact",
    content: "1000 membres"
  }
];
const communityImpacts = [
  {
    icon: RegionIcon,
    total: 12,
    text: "délégations régionales"
  },
  {
    icon: HandsIcon,
    total: 22,
    text: "partenaires"
  },
  {
    icon: PeopleIcon,
    total: 2e3,
    text: "volontaires"
  },
  {
    icon: HumanIcon,
    total: 112,
    text: "élèves bénéficiaires"
  }
];
const communityValues = [
  {
    title: "AGIR AVEC GÉNÉROSITÉ",
    content: "Odio numquam consequuntur repellendus beatae rerum sed et. Exercitationem rem et doloribus pariatur ex ad. Labore assumenda magnam quae. Debitis quos distinctio et. Ipsam a doloremque et iste officia accusamus est quae. Molestiae quis modi ratione.Odio numquam consequuntur repellendus beatae rerum sed et. Exercitationem rem et doloribus pariatur ex ad. Labore assumenda",
    icon: HandHartIcon
  },
  {
    title: "AGIR EN COOPÉRATION",
    content: "Odio numquam consequuntur repellendus beatae rerum sed et. Exercitationem rem et doloribus pariatur ex ad. Labore assumenda magnam quae. Debitis quos distinctio et. Ipsam a doloremque et iste officia accusamus est quae. Molestiae quis modi ratione.Odio numquam consequuntur repellendus beatae rerum sed et. Exercitationem rem et doloribus pariatur ex ad. Labore assumenda",
    icon: GroupPeopleIcon
  },
  {
    title: "AVOIR DE L'IMPACT",
    content: "Odio numquam consequuntur repellendus beatae rerum sed et. Exercitationem rem et doloribus pariatur ex ad. Labore assumenda magnam quae. Debitis quos distinctio et. Ipsam a doloremque et iste officia accusamus est quae. Molestiae quis modi ratione.Odio numquam consequuntur repellendus beatae rerum sed et. Exercitationem rem et doloribus pariatur ex ad. Labore assumenda",
    icon: FaceEmojiIcon
  }
];
const CTA_LINKS = [
  {
    href: "./en-savoir-plus",
    text: "En savoir plus"
  },
  {
    href: "./devenir-membre",
    text: "Dévenir membre"
  },
  {
    href: "./faire-un-don",
    text: "Faire un don"
  }
];
const CommunityParteners = [
  CGDTLogo,
  SFALogo,
  GalsenDevLogo,
  DevCastLogo,
  CGDTLogo
];

const PossaCodeAfrica = new Proxy({"src":"/_astro/possacode-africa.CU3rorGc.png","width":491,"height":526,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/images/possacode-africa.png";
							}
							
							return target[name];
						}
					});

const TechoGroupeIcon1 = new Proxy({"src":"/_astro/techno-group-1.CI5lbDgT.png","width":146,"height":316,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/images/techno-group-1.png";
							}
							
							return target[name];
						}
					});

const TechoGroupeIcon2 = new Proxy({"src":"/_astro/techno-group-2.KndP1G3Z.png","width":256,"height":266,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/images/techno-group-2.png";
							}
							
							return target[name];
						}
					});

const PossaCodeMembers = new Proxy({"src":"/_astro/possacode-members.CK4DQPku.png","width":463,"height":442,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/images/possacode-members.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("https://possacode.netlify.app/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const LastFourPosts = (await getCollection("blog")).sort((a, b) => a.data.pubDate.valueOf() - b.data.pubDate.valueOf()).slice(0, 4);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="hero" data-astro-cid-j7pv25f6> <div class="flex min-h-screen w-full flex-col justify-between space-y-10" data-astro-cid-j7pv25f6> <div class="container mt-44 flex h-full flex-1 justify-center md:mt-0 md:items-center" data-astro-cid-j7pv25f6> <div class="flex flex-col items-center space-y-10" data-astro-cid-j7pv25f6> <h1 class="text-center text-healding-1 font-bold uppercase text-white" data-astro-cid-j7pv25f6>
Possa<span class="text-orange" data-astro-cid-j7pv25f6>Code</span>, une communauTé <br class="hidden md:block" data-astro-cid-j7pv25f6> des développeurs en Afrique
</h1> <p class="max-w-3xl text-center tracking-wider text-white" data-astro-cid-j7pv25f6>
© dynamique dédiée à la formation et à l'organisation d'événements
            de rencontre pour les développeurs en Afrique.
</p> </div> </div> <div class="bg-slate-900/40 py-5" data-astro-cid-j7pv25f6> <ul role="list" class="container grid w-full grid-cols-2 gap-4 md:grid-cols-4" data-astro-cid-j7pv25f6> ${communityGoals.map((goal, index) => renderTemplate`${renderComponent($$result2, "CardGoal", $$CardGoal, { "goal": goal, "index": index, "data-astro-cid-j7pv25f6": true })}`)} </ul> </div> </div> </section> <section id="notre-impact" data-astro-cid-j7pv25f6> <div class="container space-y-14 md:space-y-16" data-astro-cid-j7pv25f6> <div class="space-y-6" data-astro-cid-j7pv25f6> <h2 class="text-healding-2 font-semibold uppercase" data-astro-cid-j7pv25f6>Notre Impact</h2> <p class="max-w-4xl" data-astro-cid-j7pv25f6>
« Le programme accroît la moyenne scolaire. Les élèves sont plus
          disciplinés dans leur travail scolaire, plus dynamiques et
          enthousiastes vis-à-vis de l’acquisition de connaissances nouvelles,
          et moins impulsifs. Il y a un impact positif du programme sur les
          aspirations des élèves, à la fois en matière d’études et de
          profession. »*
</p> </div> <div class="flex flex-wrap items-center space-y-10 sm:space-y-0" data-astro-cid-j7pv25f6> <ul class="grid w-full grid-cols-2 gap-8 md:w-1/3" data-astro-cid-j7pv25f6> ${communityImpacts.map((impact) => renderTemplate`${renderComponent($$result2, "CardImpact", $$CardImpact, { "impact": impact, "data-astro-cid-j7pv25f6": true })}`)} </ul> <div class="relative flex w-full justify-center md:w-2/3" data-astro-cid-j7pv25f6> <div class="absolute -top-10 left-0 w-24 animate-ping-2 md:top-24 md:w-fit" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": TechoGroupeIcon1, "alt": "logo technos", "format": "webp", "quality": "high", "loading": "eager", "data-astro-cid-j7pv25f6": true })} </div> <div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": PossaCodeAfrica, "alt": "PossaCode in Africa", "format": "webp", "quality": "high", "loading": "eager", "data-astro-cid-j7pv25f6": true })} </div> <div class="absolute -bottom-10 right-12 w-36 animate-ping-2 md:bottom-12 md:w-fit" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": TechoGroupeIcon2, "alt": "icons technos", "format": "webp", "quality": "high", "loading": "eager", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> </div> </section> <section id="nos-valeurs" data-astro-cid-j7pv25f6> <div class="container relative space-y-12" data-astro-cid-j7pv25f6> <h2 class="text-healding-2 font-semibold" data-astro-cid-j7pv25f6>NOS VALEURS</h2> <p class="max-w-5xl" data-astro-cid-j7pv25f6>
Odio numquam consequuntur repellendus beatae rerum sed et.
        Exercitationem rem et doloribus pariatur ex ad. Labore assumenda magnam
        quae. Debitis quos distinctio et. Ipsam a doloremque et iste officia
        accusamus est quae. Molestiae quis modi ratione.Odio numquam
        consequuntur repellendus beatae rerum sed et. Exercitationem rem et
        doloribus pariatur ex ad. Labore assumenda magnam quae. Debitis quos
        distinctio et. Ipsam a doloremque et iste officia accusamus est quae.
        Molestiae quis modi ratione.
</p> <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-j7pv25f6> ${communityValues.map((value, index) => renderTemplate`${renderComponent($$result2, "CardValue", $$CardValue, { "value": value, "index": index, "data-astro-cid-j7pv25f6": true })}`)} </div> <div aria-hidden="true" class="absolute right-36 top-0 -z-10 hidden opacity-70 lg:block" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Code, "alt": "Code filligram", "loading": "eager", "format": "png", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> <section id="agir-avec-nous" data-astro-cid-j7pv25f6> <div class="bg-[#1A2251] px-6 py-16 text-white lg:container lg:rounded-[49px] lg:p-28" data-astro-cid-j7pv25f6> <div class="relative flex flex-col items-center gap-10 lg:flex-row" data-astro-cid-j7pv25f6> <div class="relative flex-1 space-y-10 md:space-y-16" data-astro-cid-j7pv25f6> <h2 class="relative inline-block text-healding-2 font-semibold text-white after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:bg-white" data-astro-cid-j7pv25f6>
AGIR AVEC NOUS
</h2> <div class="space-y-6" data-astro-cid-j7pv25f6> <p class="text-sm" data-astro-cid-j7pv25f6>
Odio numquam consequuntur repellendus beatae rerum sed et.
              Exercitationem rem et doloribus pariatur ex ad. Labore assumenda
              magnam quae. Debitis quos distinctio et. Ipsam a doloremque et
              iste officia accusamus est quae. Molestiae quis modi ratione.
</p> <p class="text-sm" data-astro-cid-j7pv25f6>
Odio numquam consequuntur repellendus beatae rerum sed et.
              Exercitationem rem et doloribus pariatur ex ad. Labore assumenda
              magnam quae. Debitis quos distinctio et. Ipsam a doloremque et
              iste officia accusamus est quae. Molestiae quis modi ratione.
</p> </div> <div class="relative z-[2] flex flex-wrap gap-5" data-astro-cid-j7pv25f6> ${CTA_LINKS.map((link) => renderTemplate`${renderComponent($$result2, "Button", $$Button, { ...link, "data-astro-cid-j7pv25f6": true })}`)} </div> </div> <div class="relative mt-10 lg:mt-0" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": PossaCodeMembers, "loading": "eager", "format": "webp", "quality": "high", "alt": "PossaCode  DevDay 2023", "class": "relative z-[2] w-11/12 max-w-[463px] md:w-full", "data-astro-cid-j7pv25f6": true })} <div class="absolute -right-0.5 -top-5 h-full w-11/12 rounded-[20px] border-2 border-white md:-right-10 md:-top-10 md:w-full" data-astro-cid-j7pv25f6></div> </div> <!-- Code fillgram hidden for screen reader--> <div aria-hidden="true" class="absolute -left-8 -top-4 hidden lg:block" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Code, "alt": "Code filligram", "loading": "eager", "format": "png", "data-astro-cid-j7pv25f6": true })} </div> <div aria-hidden="true" class="absolute -bottom-4 left-12 hidden lg:block" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Code, "alt": "Code filligram", "loading": "eager", "format": "png", "data-astro-cid-j7pv25f6": true })} </div> <div aria-hidden="true" class="absolute left-1/2 top-0 hidden lg:block" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Code, "alt": "Code filligram", "loading": "eager", "format": "png", "data-astro-cid-j7pv25f6": true })} </div> <div aria-hidden="true" class="absolute -right-16 -top-16 hidden lg:block" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Code, "alt": "Code filligram", "loading": "eager", "format": "png", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> </section> <section id="notre-actualité" data-astro-cid-j7pv25f6> <div class="container space-y-20" data-astro-cid-j7pv25f6> <h2 class="text-healding-2 font-semibold" data-astro-cid-j7pv25f6>NOS ACTUALITÉS</h2> <div class="actuality w-full" data-astro-cid-j7pv25f6> <div class="max-w-[290px] space-y-4 rounded-[30px] bg-[#1A2251] px-[30px] py-[50px] text-white md:max-w-[607px] md:p-14" data-astro-cid-j7pv25f6> <h3 class="max-w-sm text-xl font-semibold uppercase md:text-4xl" data-astro-cid-j7pv25f6>
Le programme accroît la moyenne scolaire.
</h3> <p class="text-sm" data-astro-cid-j7pv25f6>
« Le programme accroît la moyenne scolaire. Les élèves sont plus
            disciplinés dans leur travail scolaire, plus dynamiques et
            enthousiastes vis-à-vis de l’acquisition de connaissances nouvelles,
            et moins impulsifs. Il y a un impact positif du programme sur les
            aspirations des élèves, à la fois en matière d’études et de
            profession. »*
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/", "text": "Lire la suite", "className": "max-w-[142px] border-[0.7px] border-white/50 bg-white/15 transition hover:bg-white/20", "data-astro-cid-j7pv25f6": true })} </div> </div> <div class="grid grid-cols-1 gap-10 md:grid-cols-2" data-astro-cid-j7pv25f6> ${LastFourPosts.map((post) => renderTemplate`${renderComponent($$result2, "PostCard", $$PostCard, { ...post, "data-astro-cid-j7pv25f6": true })}`)} </div> ${LastFourPosts.length >= 2 && renderTemplate`${renderComponent($$result2, "Button", $$Button, { "href": "/blogs/", "text": "Toutes les actualis\xE9s", "className": "mx-auto block w-fit", "data-astro-cid-j7pv25f6": true })}`} </div> </section> <section id="sponsors" class="pb-10 md:pb-44" data-astro-cid-j7pv25f6> <div class="container space-y-14 md:space-y-20" data-astro-cid-j7pv25f6> <h2 class="text-healding-2 font-semibold uppercase" data-astro-cid-j7pv25f6>
Partenaires <span class="text-orange" data-astro-cid-j7pv25f6>&</span> Sponsors
</h2> <ul class="flex snap-x snap-mandatory gap-x-8 overflow-auto py-4" data-astro-cid-j7pv25f6> ${CommunityParteners.map((parterner) => renderTemplate`<li class="flex-[0_0_200px] snap-center snap-always" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": parterner, "alt": "logo partenaire de PossaCode", "format": "webp", "quality": "high", "loading": "lazy", "data-astro-cid-j7pv25f6": true })} </li>`)} </ul> <div id="partenairs" class="space-y-4 rounded-[49px] p-8 text-white md:space-y-8 md:p-16" data-astro-cid-j7pv25f6> <h4 class="text-healding-2 font-bold" data-astro-cid-j7pv25f6>PossaCode</h4> <p class="max-w-prose text-sm" data-astro-cid-j7pv25f6>
Odio numquam consequuntur repellendus beatae rerum sed et.
          Exercitationem rem et doloribus pariatur ex ad. Labore assumenda
          magnam quae. Debitis quos distinctio et. Ipsam a doloremque et iste
          officia accusamus est quae. Molestiae quis modi ratione.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "./devenir-membre", "text": "D\xE9venir membre", "className": "bg-white text-orange transition hover:bg-white/90", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> ` })} `;
}, "C:/Users/blond/Documents/possacode-site/src/pages/index.astro", void 0);

const $$file = "C:/Users/blond/Documents/possacode-site/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
//# sourceMappingURL=index_BSuuOfYM.mjs.map
