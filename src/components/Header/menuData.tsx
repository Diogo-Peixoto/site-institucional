import { Menu } from '@/types/menu'

const menuData: Menu[] = [
  {
    id: 1,
    title: 'Home',
    path: '/',
    active: true,
  },
  {
    id: 2,
    title: 'Quem sou eu',
    path: '/about',
    active: false,
  },
  {
    id: 33,
    title: 'Serviços',
    path: '/blog',
    active: false,
  },
  {
    id: 3,
    title: 'Depoimentos',
    path: '/contact',
    active: false,
  },
  {
    id: 4,
    title: 'Nosso Espaço',
    active: false,
  },
]
export default menuData
