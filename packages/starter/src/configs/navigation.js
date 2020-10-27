import menuPages from './menus/pages.menu'

export default {
  // main navigation - side menu
  menu: [{
    text: '',
    key: '',
    items: [
      { icon: 'mdi-view-dashboard-outline', key: 'menu.dashboard', text: 'Machines', link: '/dashboard/analytics' },
      { icon: 'mdi-account-multiple', key: 'menu.userPages', text: 'User Access', link: '/users/list' },
      { icon: 'mdi-speedometer', key: 'menu.threshold', text: 'Threshold', regex: /^\/threshold/,
        items: [
          { key: 'menu.thresholdList', text: 'Thresholds', link: '/threshold/list' },
          { key: 'menu.thresholdAdd', text: 'Add Threshold', link: '/threshold/add' }
        ]
      },
      { icon: 'mdi-swap-horizontal', key: 'menu.machineMapping', text: '', link: '/machine-mapping' }
    ]
  }
  // {
  //   text: 'Pages',
  //   key: 'menu.pages',
  //   items: menuPages
  // }
  ],

  // footer links
  footer: [{
    text: 'Copyright',
    key: 'menu.parent',
    href: 'https://aecinternet.com',
    target: '_blank'
  }]
}
