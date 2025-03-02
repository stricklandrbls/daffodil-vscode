import { mount, SvelteComponent, type ComponentType } from 'svelte' // Causing Browser TypeErrors
// import { createClassComponent } from 'svelte/legacy'
import App from './App.svelte'

/**
 * Svelte version < 4
 * - Requires DOM target
 */
// const app = new App({
//   target: document.getElementById('app')!,
// })

const app = mount(App as ComponentType, {
  target: document.getElementById('app')!,
})

// const app = createClassComponent({
//   component: App,
//   target: document.getElementById('app')!,
// })
export default app
