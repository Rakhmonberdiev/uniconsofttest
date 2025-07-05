import { sidebarIcons } from './sidebar-icons';

export interface MenuItem {
  label: string;
  route: string;
  iconKey?: keyof typeof sidebarIcons;
  children?: MenuItem[];
}
export interface MenuSection {
  title: string;
  items: MenuItem[];
}
