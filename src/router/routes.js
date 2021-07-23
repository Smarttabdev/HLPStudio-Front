const routes = {
  entries: [
    {
      path: "*",
      name: "404 - Not found ...",
      component: () => import("@/Pages/ErrorPages/Error404"),
    },
  ],
  allowedRoutes: [],

  addDynamicRoutes(entries)
  {
    entries.forEach((entry) =>
    {
      this.allowedRoutes.push(entry.path);
      this.entries.push(entry);
    });
  },
  isRouteAllowed(path = null)
  {
    return path === "*"
      ? false
      : this.allowedRoutes.indexOf(path) === -1
        ? false
        : true;
  },
};

// Add routes after ...
routes.addDynamicRoutes([
  //Auth
  {
    path: '/',
    redirect: '/home',
    // name: 'calculator',
    // meta: { layout: 'apps' },
    // component: () => import('../Pages/UserPages/Calculator.vue'),
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: 'userpages' },
    component: () => import('../Pages/AuthPages/Login.vue'),
  },
  {
    path: '/register',
    name: 'register',
    meta: { layout: 'userpages' },
    component: () => import('../Pages/AuthPages/Register.vue'),
  },
  {
    path: '/pages/forgot-password',
    name: 'forgot-password',
    meta: { layout: 'userpages' },
    component: () => import('../Pages/AuthPages/ForgotPassword.vue'),
  },

  //User

  {
    path: '/home',
    name: 'home',
    meta: { layout: 'apps' },
    component: () => import('../Pages/UserPages/Home.vue')
  },
  {
    path: '/about-us',
    name: 'aboutUs',
    meta: { layout: 'apps' },
    component: () => import('../Pages/UserPages/AboutUs.vue')
  },
  {
    path: '/pricing',
    name: 'pricing',
    meta: { layout: 'apps' },
    component: () => import('../Pages/UserPages/Pricing.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    meta: { layout: 'apps' },
    component: () => import('../Pages/UserPages/Portfolio.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    meta: { layout: 'apps' },
    component: () => import('../Pages/UserPages/Blog.vue')
  },
  {
    path: '/contact-us',
    name: 'contactus',
    meta: { layout: 'apps' },
    component: () => import('../Pages/UserPages/ContactUs.vue')
  },

  // Admin

  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   meta: {
  //     layout: 'default',
  //     requiresAuth: true,
  //   },
  //   component: () => import('../Pages/AdminPages/Dashboard.vue')
  // },
  {
    path: '/chat',
    name: 'chat',
    meta: {
      layout: 'default',
      requiresAuth: true,
    },
    component: () => import('../Pages/AdminPages/Chat.vue')
  },
  {
    path: '/gallery',
    name: 'gallery',
    meta: {
      layout: 'default',
      requiresAuth: true,
    },
    component: () => import('../Pages/AdminPages/Gallery.vue')
  },

]);

export default routes;