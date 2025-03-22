import App from './App.svelte';
import './app.css'; // or './global.css'


const app = new App({
  target: document.getElementById('app')
});

export default app;
