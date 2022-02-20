import { App } from './app';
import './config/database';

async function main() {
  const app = new App(3000);
  await app.listen();
}

main();
