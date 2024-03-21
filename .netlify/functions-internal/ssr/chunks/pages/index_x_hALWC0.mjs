import { e as createAstro, f as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, i as addAttribute, j as renderComponent, k as renderHead, l as renderSlot } from '../astro_CJ8xYiaC.mjs';
import { $ as $$Image } from './generic_BHsWNEmD.mjs';
/* empty css                          */
import { clsx } from 'clsx';
import { Sun, Moon } from 'lucide-react';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';
import * as SheetPrimitive from '@radix-ui/react-dialog';

const MetaData = {
  title: "PossaCode Community",
  description: "PossaCode is a community of developers who share their knowledge and experience. We are here to help each other. Join us and let's build something great together!",
  ogImage: "/images/og.png"
};

const $$Astro$9 = createAstro();
const $$NavLink = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { text, href, ...rest } = Astro2.props;
  let isLinkActive = false;
  if (!href) {
    isLinkActive = false;
  } else if (href === "/") {
    isLinkActive = href === Astro2.url.pathname;
  } else {
    isLinkActive = Astro2.url.pathname.includes(
      typeof href === "string" ? href : href.href
    );
  }
  return renderTemplate`${maybeRenderHead()}<li${spreadAttributes(rest)}${addAttribute(isLinkActive && "page", "aria-current")} class="cursor-pointer text-base text-slate-900 transition-colors hover:text-orange"> <a${addAttribute(href, "href")}${addAttribute({ "text-orange": isLinkActive }, "class:list")}${addAttribute(`Go to ${text} page`, "aria-label")}>${text}</a> </li>`;
}, "C:/Users/blond/Documents/possacode-site/src/components/NavLink.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$8 = createAstro();
const $$ThemeToggle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  return renderTemplate(_a || (_a = __template(["", " <script>\n  const theme = (() => {\n    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {\n      return localStorage.getItem('theme')\n    }\n    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {\n      return 'dark'\n    }\n    return 'light'\n  })()\n\n  if (theme === 'light') {\n    document.documentElement.classList.remove('dark')\n  } else {\n    document.documentElement.classList.add('dark')\n  }\n\n  window.localStorage.setItem('theme', theme)\n\n  const handleToggleClick = () => {\n    const element = document.documentElement\n    element.classList.toggle('dark')\n\n    const isDark = element.classList.contains('dark')\n    localStorage.setItem('theme', isDark ? 'dark' : 'light')\n  }\n\n  document\n    .getElementById('themeToggle')\n    .addEventListener('click', handleToggleClick)\n<\/script>"])), renderComponent($$result, "Button", Button, { "variant": "ghost", "size": "icon", "id": "themeToggle", "className": "themeToggle hover:bg-[rgba(229,77,46,0.16)]" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Sun", Sun, { "className": "z-[2] size-[15px] text-white transition-colors duration-500 dark:text-slate-900" })} ${renderComponent($$result2, "Moon", Moon, { "className": "z-[2] size-[15px]  text-slate-900 transition-colors duration-500 dark:text-white" })} ${maybeRenderHead()}<span class="sr-only">Toggle theme</span> ` }));
}, "C:/Users/blond/Documents/possacode-site/src/components/ThemeToggle.astro", void 0);

const NavLinks = [
	{
		text: "Acceuil",
		href: "/"
	},
	{
		text: "Qui sommes-nous?",
		href: "qui-sommes-nous"
	},
	{
		text: "Evenements",
		href: "evenements"
	},
	{
		text: "Contact",
		href: "contact"
	}
];

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(
    SheetPrimitive.Content,
    {
      ref,
      className: cn(sheetVariants({ side }), className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm ring-offset-background transition-opacity  focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
          /* @__PURE__ */ jsx("img", { src: "./icons/close-menu.png", alt: "close the menu" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

const MobileNavigation = () => {
  return /* @__PURE__ */ jsxs(Sheet, { children: [
    /* @__PURE__ */ jsx(SheetTrigger, { className: "ml-6 lg:ml-0 lg:hidden", children: /* @__PURE__ */ jsx(
      "svg",
      {
        className: "size-8 text-slate-900",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /* @__PURE__ */ jsx(
          "path",
          {
            d: "M3.75 6.75H20.25M3.75 12H20.25M12 17.25H20.25",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxs(SheetContent, { className: "flex h-full w-full flex-col justify-start rounded-tl-[50px] px-11 pt-36", children: [
      /* @__PURE__ */ jsx("ul", { className: "flex flex-col space-y-6", children: NavLinks.map((navLink) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        "a",
        {
          className: "text-lg font-semibold text-darkBlue dark:text-inherit",
          href: navLink.href,
          children: navLink.text
        }
      ) }, navLink.href)) }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/devenir-membre",
          className: cn(
            buttonVariants({
              className: "mt-10 flex items-center justify-center"
            }),
            "max-w-48 rounded-[15px] bg-orange text-white hover:bg-[rgba(241,78,14,0.8)] md:hidden"
          ),
          children: "Devenir membre"
        }
      )
    ] })
  ] });
};

const $$Astro$7 = createAstro();
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Button;
  const { href, text, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(cn(
    buttonVariants({}),
    "rounded-[15px] bg-orange text-white hover:bg-[rgba(241,78,14,0.8)] cursor-pointer",
    className
  ), "class")}>${text}</a>`;
}, "C:/Users/blond/Documents/possacode-site/src/components/Button.astro", void 0);

const PossaCodeWhiteLogo = new Proxy({"src":"/_astro/possacode-logo-white.BdI_u7uq.png","width":182,"height":44,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/blond/Documents/possacode-site/src/content/images/possacode-logo-white.png";
							}
							
							return target[name];
						}
					});

const $$Astro$6 = createAstro();
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="fixed top-0 z-10 w-full py-4" data-astro-cid-3ef6ksr2> <nav class="container flex items-center justify-between" data-astro-cid-3ef6ksr2> <a href="/" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Image", $$Image, { "src": PossaCodeWhiteLogo, "alt": "PossaCode logo", "quality": "high", "format": "webp", "loading": "eager", "class": "w-32 md:w-40", "data-astro-cid-3ef6ksr2": true })} </a> <div class="flex items-center space-x-10" data-astro-cid-3ef6ksr2> <ul role="list" class="hidden items-center space-x-6 lg:flex" data-astro-cid-3ef6ksr2> ${NavLinks.map((navLink) => renderTemplate`${renderComponent($$result, "NavLink", $$NavLink, { ...navLink, "data-astro-cid-3ef6ksr2": true })}`)} </ul> ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, { "data-astro-cid-3ef6ksr2": true })} <p class="hidden md:inline-block" data-astro-cid-3ef6ksr2> ${renderComponent($$result, "Button", $$Button, { "href": "./devenir-membre", "text": "D\xE9venir membre", "data-astro-cid-3ef6ksr2": true })} </p> ${renderComponent($$result, "MobileNavigation", MobileNavigation, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/MobileNavigation", "client:component-export": "MobileNavigation", "data-astro-cid-3ef6ksr2": true })} </div> </nav> </header> `;
}, "C:/Users/blond/Documents/possacode-site/src/components/Header.astro", void 0);

const $$Astro$5 = createAstro();
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/blond/Documents/possacode-site/node_modules/.pnpm/astro@4.5.4_typescript@5.4.2/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$4 = createAstro();
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = MetaData.title,
    description = MetaData.description,
    ogImage = MetaData.ogImage
  } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description"${addAttribute(description, "content")}><title>${title}</title>${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/blond/Documents/possacode-site/src/layouts/BaseLayout.astro", void 0);

const $$Astro$3 = createAstro();
const $$CardValue = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardValue;
  const { value, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`max-w-sm space-y-4 rounded-[49px] px-7 md:px-[45px] py-14 md:py-[65px]  ${index === 0 ? "bg-[#F5A898] text-zinc-950" : index === 1 ? "bg-[#E54D2E] text-white" : "bg-[#1A2251] text-white"}`, "class")}> <div class="flex items-center justify-between"> <h4 class="max-w-40 font-bold text-white">${value.title}</h4> ${renderComponent($$result, "Image", $$Image, { "src": value.icon, "alt": value.title, "class": "w-8", "loading": "eager", "format": "webp" })} </div> <p class="text-sm font-light">${value.content}</p> </div>`;
}, "C:/Users/blond/Documents/possacode-site/src/components/CardValue.astro", void 0);

const $$Astro$2 = createAstro();
const $$CardImpact = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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

const $$Astro$1 = createAstro();
const $$CardGoal = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardGoal;
  const { goal, index } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex items-center space-x-4 text-white"> ${renderComponent($$result, "Image", $$Image, { "src": index === 0 ? CommunityIcon : HandsIcon, "alt": index === 0 ? "Coummunity Icon" : "Hands Icon", "loading": "eager", "format": "webp", "quality": "mid", "class": "size-12" })} <div class="flex flex-col space-y-0.5"> <span class="font-semibold text-orange">${goal.title}</span> <span>${goal.content}</span> </div> </li>`;
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
  CGDTLogo,
  SFALogo,
  GalsenDevLogo,
  DevCastLogo
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

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "data-astro-cid-j7pv25f6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="hero" data-astro-cid-j7pv25f6> <div class="flex min-h-screen w-full flex-col justify-between space-y-10" data-astro-cid-j7pv25f6> <div class="container mt-44 flex h-full flex-1 justify-center md:mt-0 md:items-center" data-astro-cid-j7pv25f6> <div class="flex flex-col items-center space-y-10" data-astro-cid-j7pv25f6> <h1 class="text-center text-healding-1 font-bold uppercase text-white" data-astro-cid-j7pv25f6>
Possa<span class="text-orange" data-astro-cid-j7pv25f6>Code</span>, une communauTé <br class="hidden md:block" data-astro-cid-j7pv25f6> des développeurs en Afrique
</h1> <p class="max-w-3xl text-center tracking-wider text-white" data-astro-cid-j7pv25f6>
© dynamique dédiée à la formation et à l'organisation d'événements
            de rencontre pour les développeurs en Afrique.
</p> </div> </div> <div class="bg-slate-900/40 py-5" data-astro-cid-j7pv25f6> <ul role="list" class="container grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4" data-astro-cid-j7pv25f6> ${communityGoals.map((goal, index) => renderTemplate`${renderComponent($$result2, "CardGoal", $$CardGoal, { "goal": goal, "index": index, "data-astro-cid-j7pv25f6": true })}`)} </ul> </div> </div> </section> <section id="notre-impact" data-astro-cid-j7pv25f6> <div class="container space-y-14 md:space-y-16" data-astro-cid-j7pv25f6> <div class="space-y-6" data-astro-cid-j7pv25f6> <h2 class="text-healding-2 font-semibold uppercase" data-astro-cid-j7pv25f6>Notre Impact</h2> <p class="max-w-4xl" data-astro-cid-j7pv25f6>
« Le programme accroît la moyenne scolaire. Les élèves sont plus
          disciplinés dans leur travail scolaire, plus dynamiques et
          enthousiastes vis-à-vis de l’acquisition de connaissances nouvelles,
          et moins impulsifs. Il y a un impact positif du programme sur les
          aspirations des élèves, à la fois en matière d’études et de
          profession. »*
</p> </div> <div class="flex flex-wrap items-center space-y-10 sm:space-y-0" data-astro-cid-j7pv25f6> <ul class="grid w-full grid-cols-2 gap-8 md:w-1/3" data-astro-cid-j7pv25f6> ${communityImpacts.map((impact) => renderTemplate`${renderComponent($$result2, "CardImpact", $$CardImpact, { "impact": impact, "data-astro-cid-j7pv25f6": true })}`)} </ul> <div class="relative flex w-full justify-center md:w-2/3" data-astro-cid-j7pv25f6> <div class="animate-ping-2 absolute -top-10 left-0 w-24 md:top-24 md:w-fit" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": TechoGroupeIcon1, "alt": "logo technos", "format": "webp", "quality": "high", "loading": "eager", "data-astro-cid-j7pv25f6": true })} </div> <div data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": PossaCodeAfrica, "alt": "PossaCode in Africa", "format": "webp", "quality": "high", "loading": "eager", "data-astro-cid-j7pv25f6": true })} </div> <div class="animate-ping-2 absolute -bottom-10 right-12 w-36 md:bottom-12 md:w-fit" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": TechoGroupeIcon2, "alt": "icons technos", "format": "webp", "quality": "high", "loading": "eager", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> </div> </section> <section id="nos-valeurs" data-astro-cid-j7pv25f6> <div class="container relative space-y-12" data-astro-cid-j7pv25f6> <h2 class="text-healding-2 font-semibold" data-astro-cid-j7pv25f6>NOS VALEURS</h2> <p class="max-w-5xl" data-astro-cid-j7pv25f6>
Odio numquam consequuntur repellendus beatae rerum sed et.
        Exercitationem rem et doloribus pariatur ex ad. Labore assumenda magnam
        quae. Debitis quos distinctio et. Ipsam a doloremque et iste officia
        accusamus est quae. Molestiae quis modi ratione.Odio numquam
        consequuntur repellendus beatae rerum sed et. Exercitationem rem et
        doloribus pariatur ex ad. Labore assumenda magnam quae. Debitis quos
        distinctio et. Ipsam a doloremque et iste officia accusamus est quae.
        Molestiae quis modi ratione.
</p> <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" data-astro-cid-j7pv25f6> ${communityValues.map((value, index) => renderTemplate`${renderComponent($$result2, "CardValue", $$CardValue, { "value": value, "index": index, "data-astro-cid-j7pv25f6": true })}`)} </div> <div aria-hidden="true" class="absolute right-36 top-0 -z-10 hidden opacity-70 lg:block" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Code, "alt": "Code filligram", "loading": "eager", "format": "png", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> <section id="agir-avec-nous" data-astro-cid-j7pv25f6> <div class="bg-[#1A2251] px-4 py-16 text-white lg:container lg:rounded-[49px] lg:p-28" data-astro-cid-j7pv25f6> <div class="relative flex flex-col items-center gap-10 lg:flex-row" data-astro-cid-j7pv25f6> <div class="relative flex-1 space-y-10 md:space-y-16" data-astro-cid-j7pv25f6> <h2 class="relative inline-block text-healding-2 text-white after:absolute after:bottom-0 after:left-0 after:h-1 after:w-1/2 after:bg-white" data-astro-cid-j7pv25f6>
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
</p> </div> <div class="relative z-[2] flex flex-wrap gap-5" data-astro-cid-j7pv25f6> ${CTA_LINKS.map((link) => renderTemplate`${renderComponent($$result2, "Button", $$Button, { ...link, "data-astro-cid-j7pv25f6": true })}`)} </div> </div> <div class="relative mt-10 lg:mt-0" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": PossaCodeMembers, "loading": "eager", "format": "webp", "quality": "high", "alt": "PossaCode  DevDay 2023", "class": "relative z-[2] w-11/12 max-w-[463px] md:w-full", "data-astro-cid-j7pv25f6": true })} <div class="absolute -right-0.5 -top-5 h-full w-11/12 rounded-[20px] border-2 border-white md:-right-10 md:-top-10 md:w-full" data-astro-cid-j7pv25f6></div> </div> <!-- Code fillgram hidden for screen reader--> <div aria-hidden="true" class="absolute -left-8 -top-4 hidden lg:block" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Code, "alt": "Code filligram", "loading": "eager", "format": "png", "data-astro-cid-j7pv25f6": true })} </div> <div aria-hidden="true" class="absolute -bottom-4 left-12 hidden lg:block" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Code, "alt": "Code filligram", "loading": "eager", "format": "png", "data-astro-cid-j7pv25f6": true })} </div> <div aria-hidden="true" class="absolute left-1/2 top-0 hidden lg:block" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Code, "alt": "Code filligram", "loading": "eager", "format": "png", "data-astro-cid-j7pv25f6": true })} </div> <div aria-hidden="true" class="absolute -right-16 -top-16 hidden lg:block" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": Code, "alt": "Code filligram", "loading": "eager", "format": "png", "data-astro-cid-j7pv25f6": true })} </div> </div> </div> </section> <section id="notre-actualité" data-astro-cid-j7pv25f6> <div class="container space-y-10" data-astro-cid-j7pv25f6> <h2 class="text-healding-2 font-semibold" data-astro-cid-j7pv25f6>NOS ACTUALITÉS</h2> <div class="actuality w-full" data-astro-cid-j7pv25f6> <div class="max-w-[290px] space-y-4 rounded-[30px] bg-[#1A2251] px-[30px] py-[50px] text-white md:max-w-[607px] md:p-14" data-astro-cid-j7pv25f6> <h3 class="max-w-sm text-xl uppercase md:text-4xl" data-astro-cid-j7pv25f6>
Le programme accroît la moyenne scolaire.
</h3> <p class="text-sm" data-astro-cid-j7pv25f6>
« Le programme accroît la moyenne scolaire. Les élèves sont plus
            disciplinés dans leur travail scolaire, plus dynamiques et
            enthousiastes vis-à-vis de l’acquisition de connaissances nouvelles,
            et moins impulsifs. Il y a un impact positif du programme sur les
            aspirations des élèves, à la fois en matière d’études et de
            profession. »*
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/", "text": "Lire la suite", "className": "max-w-[142px] border-[0.7px] border-white/50 bg-white/15 transition hover:bg-white/20", "data-astro-cid-j7pv25f6": true })} </div> </div> <!-- Events --> <!-- TODO: Here will display latest events after fetching them from the database --> </div> </section> <section data-astro-cid-j7pv25f6> <div class="container space-y-14 md:space-y-20" data-astro-cid-j7pv25f6> <h2 class="text-healding-2 font-semibold uppercase" data-astro-cid-j7pv25f6>
Partenaires <span class="text-orange" data-astro-cid-j7pv25f6>&</span> Sponsors
</h2> <ul class="flex snap-x snap-mandatory gap-x-10 overflow-auto py-4" data-astro-cid-j7pv25f6> ${CommunityParteners.map((parterner) => renderTemplate`<li class="flex-[0_0_200px] snap-center" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Image", $$Image, { "src": parterner, "alt": "logo partenaire de PossaCode", "format": "webp", "quality": "high", "loading": "lazy", "data-astro-cid-j7pv25f6": true })} </li>`)} </ul> <div id="partenairs" class="space-y-4 rounded-[49px] p-8 text-white md:space-y-8 md:p-16" data-astro-cid-j7pv25f6> <h4 class="text-healding-2 font-bold" data-astro-cid-j7pv25f6>PossaCode</h4> <p class="max-w-prose text-sm" data-astro-cid-j7pv25f6>
Odio numquam consequuntur repellendus beatae rerum sed et.
          Exercitationem rem et doloribus pariatur ex ad. Labore assumenda
          magnam quae. Debitis quos distinctio et. Ipsam a doloremque et iste
          officia accusamus est quae. Molestiae quis modi ratione.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "./devenir-membre", "text": "D\xE9venir membre", "className": "bg-white text-orange transition hover:bg-white/90", "data-astro-cid-j7pv25f6": true })} </div> </div> </section> ` })} `;
}, "C:/Users/blond/Documents/possacode-site/src/pages/index.astro", void 0);

const $$file = "C:/Users/blond/Documents/possacode-site/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
