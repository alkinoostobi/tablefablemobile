
const routes = [
  {
    path: '/',
    redirect: '/scores',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'scores', component: () => import('pages/IndexPage.vue') },
      { path: 'skills', component: () => import('pages/IndexPageSkills.vue') },
      { path: 'savings', component: () => import('pages/IndexPageSavings.vue') },
      { path: 'equipment', component: () => import('pages/IndexPageEquipments.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
