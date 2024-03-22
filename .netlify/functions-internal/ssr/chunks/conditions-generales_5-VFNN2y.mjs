export { renderers } from '../renderers.mjs';

const page = () => import('./pages/conditions-generales_BV20aHov.mjs').then(n => n.c);

export { page };
