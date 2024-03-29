const routes = [
  {
    path: '/dm',
    redirect: '/scenes',
    component: () => import('layouts/DMLayout.vue'),
    children: [
      {path: 'npcs', component: () => import('pages/IndexPageNPCs.vue')},
      {path: 'scenes', component: () => import('pages/IndexPageScenes.vue')},
      {path: 'chars', component: () => import('pages/IndexPageChars.vue')},
      {path: 'equipments', component: () => import('pages/IndexPageEquipments.vue')},
    ]
  },

  {
    path: '/player',
    redirect: '/scores',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: 'scores', component: () => import('pages/IndexPage.vue')},
      {path: 'skills', component: () => import('pages/IndexPageSkills.vue')},
      {path: 'savings', component: () => import('pages/IndexPageSavings.vue')},
      {path: 'equipment', component: () => import('pages/IndexPageEquipments.vue')},
      {path: 'died', component: () => import('pages/YouDied.vue')},
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
