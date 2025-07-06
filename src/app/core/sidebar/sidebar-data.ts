import { MenuSection } from './sidebar-nav-model';

export const SIDEBAR_NAV_DATA: MenuSection[] = [
  {
    title: 'ICHKI HUJJATLAR',
    items: [
      { label: 'Bosh sahifa', route: '/home', iconKey: 'home' },
      { label: 'Taqvim', route: '/calendar', iconKey: 'calendar' },
      { label: 'Mening hujjatlar', route: '/my-documents', iconKey: 'myDoc' },
      {
        label: 'Yuborilgan',
        route: '/sent-documents',
        iconKey: 'sendedDoc',
        children: [
          { label: 'Yuborilgan A', route: '/sent-documents/section-a' },
          { label: 'Yuborilgan B', route: '/sent-documents/section-b' },
          { label: 'Yuborilgan C', route: '/sent-documents/section-c' },
        ],
      },
      {
        label: 'Kelib tushgan',
        route: '/incoming-documents',
        iconKey: 'recivedDoc',
        children: [
          { label: 'Kelib tushgan A', route: '/incoming-documents/section-a' },
          { label: 'Kelib tushgan B', route: '/incoming-documents/section-b' },
          { label: 'Kelib tushgan C', route: '/incoming-documents/section-c' },
        ],
      },
      {
        label: 'Kelishish uchun',
        route: '/for-approval',
        iconKey: 'forContract',
      },
      {
        label: 'Rezolyutsiya',
        route: '/resolutions',
        iconKey: 'rezolyutsiya',
      },
      { label: 'Imzolash uchun', route: '/to-sign', iconKey: 'toSign' },
      {
        label: 'Sektor fishka',
        route: '/sector-requests',
        iconKey: 'sector',
        children: [
          { label: 'Sektor fishka A', route: '/sector-requests/section-a' },
          { label: 'Sektor fishka B', route: '/sector-requests/section-b' },
        ],
      },
      {
        label: 'Bo’limim hujjatlari',
        route: '/department-documents',
        iconKey: 'departmentDoc',
      },
      { label: 'Tahrirchi', route: '/editor', iconKey: 'editor' },
    ],
  },
  {
    title: 'STATISTIKA',
    items: [
      {
        label: 'Statistika',
        route: '/app-statistics',
        iconKey: 'statics',
        children: [
          { label: 'Bolim A', route: '/app-statistics/section-a' },
          { label: 'Bolim B', route: '/app-statistics/section-b' },
          { label: 'Bolim C', route: '/app-statistics/section-c' },
        ],
      },
      {
        label: 'Hisobotlar',
        route: '/reports',
        iconKey: 'report',
        children: [
          { label: 'Hisobot A', route: '/reports/report-a' },
          { label: 'Hisobot B', route: '/reports/report-b' },
          { label: 'Hisobot C', route: '/reports/report-c' },
        ],
      },
    ],
  },
];
