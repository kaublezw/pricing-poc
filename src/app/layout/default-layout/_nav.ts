import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Data Foundations'
  },
  {
    name: 'Overview',
    url: '/data-foundations/overview',
    iconComponent: { name: 'cil-description' }
  },
  {
    name: 'Parts Master Explorer',
    url: '/data-foundations/parts-master',
    iconComponent: { name: 'cil-search' }
  },
  {
    name: 'Competitor Data Explorer',
    url: '/data-foundations/competitor-data',
    iconComponent: { name: 'cil-chart-line' }
  },
  {
    name: 'Sales Transactions',
    url: '/data-foundations/sales-transactions',
    iconComponent: { name: 'cil-list' }
  },
  {
    name: 'Vehicle UIO Mapping',
    url: '/data-foundations/uio-mapping',
    iconComponent: { name: 'cil-car-alt' }
  },
  {
    title: true,
    name: 'Pricing Logic & Rules'
  },
  {
    name: 'Pricing Rule Tables',
    url: '/pricing-logic/rules',
    iconComponent: { name: 'cil-settings' }
  },
  {
    title: true,
    name: 'Pricing Outcomes / Lists'
  },
  {
    name: 'Part Pricing Screen',
    url: '/pricing-outcomes/part-pricing',
    iconComponent: { name: 'cil-dollar' }
  },
  {
    name: 'Price List Screen',
    url: '/pricing-outcomes/price-list',
    iconComponent: { name: 'cil-spreadsheet' }
  },
  {
    title: true,
    name: 'Reporting & KPIs'
  },
  {
    name: 'Overall Metrics Dashboard',
    url: '/reporting/overall-metrics',
    iconComponent: { name: 'cil-graph' }
  },
  {
    name: 'PVM Bridge',
    url: '/reporting/pvm-bridge',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Margin Rate Bridge',
    url: '/reporting/margin-bridge',
    iconComponent: { name: 'cil-trending-up' }
  },
  {
    title: true,
    name: 'Alerts / Triggers'
  },
  {
    name: 'Alerts & Triggers Page',
    url: '/alerts-triggers',
    iconComponent: { name: 'cil-bell' }
  },
  {
    title: true,
    name: 'Configuration / Admin'
  },
  {
    name: 'Config / Permissions',
    url: '/config/permissions',
    iconComponent: { name: 'cil-user' }
  }
];
