import type { Route } from './+types/home';
// WIP: This is garbage, an example of routing only

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Ja!AI Chefmate' },
    { name: 'description', content: 'Welcome to AI Chefmate!' },
  ];
}

export default function Home() {
  return (
    <>
      jiji
    </>
  );
}
