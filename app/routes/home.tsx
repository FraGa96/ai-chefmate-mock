import type { Route } from './+types/home';
import Landing from '~/screen/landing';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'AI Chefmate' },
    { name: 'description', content: 'Welcome to AI Chefmate!' },
  ];
}

export default function Home() {
  return <Landing />;
}
