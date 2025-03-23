import App from './App.svelte';
import './app.css';  // Ensure your CSS file is included

const app = new App({
  target: document.getElementById('app'),  // This should mount your app to the div with id="app"
});

export default app;
