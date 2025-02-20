import type { Route } from './+types/home';
import { Welcome } from '../welcome/welcome';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'AI Chefmate' },
    { name: 'description', content: 'Welcome to AI Chefmate!' },
  ];
}

export default function Home() {
  return <Welcome />;
}
