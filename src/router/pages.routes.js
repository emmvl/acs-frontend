export default [{
  path: '/auth/signin',
  name: 'auth-signin',
  component: () => import(/* webpackChunkName: "auth-signin" */ '@/pages/auth/SigninPage.vue'),
  meta: {
    layout: 'auth',
    userNotAuth: true
  }
},
//{
//  path: '/auth/signup',
//  name: 'auth-signup',
//  component: () => import(/* webpackChunkName: "auth-signup" */ '@/pages/auth/SignupPage.vue'),
//  meta: {
//    layout: 'auth',
//    userNotAuth: true
//  }
//},
{
  path: '/profile',
  name: 'profile',
  component: () => import(/* webpackChunkName: "profile" */ '@/pages/profile/Index.vue'),
  meta: {
    userAuth: true
  }
}, {
  path: '/auth/verify-email',
  name: 'auth-verify-email',
  component: () => import(/* webpackChunkName: "auth-verify-email" */ '@/pages/auth/VerifyEmailPage.vue'),
  meta: {
    layout: 'auth'
  }
}, {
  path: '/auth/forgot-password',
  name: 'auth-forgot',
  component: () => import(/* webpackChunkName: "auth-forgot" */ '@/pages/auth/ForgotPage.vue'),
  meta: {
    layout: 'auth',
    userNotAuth: true
  }
}, {
  path: '/auth/reset-password',
  name: 'auth-reset',
  component: () => import(/* webpackChunkName: "auth-reset" */ '@/pages/auth/ResetPage.vue'),
  meta: {
    layout: 'auth'
  }
}, {
  path: '/error/not-found',
  name: 'error-not-found',
  component: () => import(/* webpackChunkName: "error-not-found" */ '@/pages/error/NotFoundPage.vue'),
  meta: {
    layout: 'error'
  }
}, {
  path: '/error/unexpected',
  name: 'error-unexpected',
  component: () => import(/* webpackChunkName: "error-unexpected" */ '@/pages/error/UnexpectedPage.vue'),
  meta: {
    layout: 'error'
  }
}, {
  path: '/utility/maintenance',
  name: 'utility-maintenance',
  component: () => import(/* webpackChunkName: "utility-maintenance" */ '@/pages/utility/MaintenancePage.vue'),
  meta: {
    layout: 'auth'
  }
}, {
  path: '/utility/coming-soon',
  name: 'utility-soon',
  component: () => import(/* webpackChunkName: "utility-soon" */ '@/pages/utility/SoonPage.vue'),
  meta: {
    layout: 'auth'
  }
}, {
  path: '/utility/help',
  name: 'utility-help',
  component: () => import(/* webpackChunkName: "utility-help" */ '@/pages/utility/HelpPage.vue')
}, {
  path: '/machine-mapping',
  name: 'machine-mapping',
  component: () => import(/* webpackChunkName: "machine-mapping" */ '@/pages/machine-mapping/index.vue'),
  meta: {
    customerAdmin: true
  }
}, {
  path: '/customer-assign',
  name: 'customer-assign',
  component: () => import(/* webpackChunkName: "customer-assign" */ '@/pages/machine-mapping/CustomerAssign.vue'),
  meta: {
    acsAdmin: true
  }
}, {
  path: '/locations-zones',
  name: 'locations-zones',
  component: () => import(/* webpackChunkName: "locations-zones" */ '@/pages/locations-zones/LocationsZones.vue'),
  meta: {
    customerAdmin: true
  }
}, {
  path: '/materials',
  name: 'materials',
  component: () => import(/* webpackChunkName: "materials" */ '@/pages/materials/MaterialLocations.vue'),
  meta: {
    acsAdmin: true
  }
}]
