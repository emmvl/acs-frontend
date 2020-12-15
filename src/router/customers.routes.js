export default [{
  path: '/customers/list',
  name: 'customers-list',
  component: () => import(/* webpackChunkName: "customers-list" */ '@/pages/customers/Index.vue'),
  meta: {
    acsAdmin: true
  }
}, {
  path: '/customers/add',
  name: 'customers-add',
  component: () => import(/* webpackChunkName: "customers-add" */ '@/pages/customers/AddCustomer.vue'),
  meta: {
    acsAdmin: true
  }
}, {
  path: '/customers/edit/:id',
  name: 'customers-edit',
  component: () => import(/* webpackChunkName: "customers-edit" */ '@/pages/customers/EditCustomer.vue'),
  meta: {
    acsAdmin: true
  }
}, {
  path: '/customers/alarms',
  name: 'customers-alarms',
  component: () => import(/* webpackChunkName: "customers-alarms" */ '@/pages/customers/Alarms.vue'),
  meta: {
    acsAdmin: true
  }
}]
