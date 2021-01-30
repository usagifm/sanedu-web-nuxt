export { default as Logo } from '../../components/Logo.vue'
export { default as Header } from '../../components/layouts/Header.vue'
export { default as LandingHeader } from '../../components/layouts/LandingHeader.vue'
export { default as Sidebar } from '../../components/layouts/Sidebar.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyHeader = import('../../components/layouts/Header.vue' /* webpackChunkName: "components/layouts/Header" */).then(c => c.default || c)
export const LazyLandingHeader = import('../../components/layouts/LandingHeader.vue' /* webpackChunkName: "components/layouts/LandingHeader" */).then(c => c.default || c)
export const LazySidebar = import('../../components/layouts/Sidebar.vue' /* webpackChunkName: "components/layouts/Sidebar" */).then(c => c.default || c)
