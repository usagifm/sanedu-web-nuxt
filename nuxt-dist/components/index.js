export { default as AboutSection } from '../../components/AboutSection.vue'
export { default as ContactSection } from '../../components/ContactSection.vue'
export { default as DownloadSection } from '../../components/DownloadSection.vue'
export { default as Footer } from '../../components/Footer.vue'
export { default as HomeSection } from '../../components/HomeSection.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as Navigation } from '../../components/Navigation.vue'
export { default as PricingSection } from '../../components/PricingSection.vue'
export { default as Header } from '../../components/layouts/Header.vue'
export { default as LandingHeader } from '../../components/layouts/LandingHeader.vue'
export { default as Sidebar } from '../../components/layouts/Sidebar.vue'

export const LazyAboutSection = import('../../components/AboutSection.vue' /* webpackChunkName: "components/AboutSection" */).then(c => c.default || c)
export const LazyContactSection = import('../../components/ContactSection.vue' /* webpackChunkName: "components/ContactSection" */).then(c => c.default || c)
export const LazyDownloadSection = import('../../components/DownloadSection.vue' /* webpackChunkName: "components/DownloadSection" */).then(c => c.default || c)
export const LazyFooter = import('../../components/Footer.vue' /* webpackChunkName: "components/Footer" */).then(c => c.default || c)
export const LazyHomeSection = import('../../components/HomeSection.vue' /* webpackChunkName: "components/HomeSection" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyNavigation = import('../../components/Navigation.vue' /* webpackChunkName: "components/Navigation" */).then(c => c.default || c)
export const LazyPricingSection = import('../../components/PricingSection.vue' /* webpackChunkName: "components/PricingSection" */).then(c => c.default || c)
export const LazyHeader = import('../../components/layouts/Header.vue' /* webpackChunkName: "components/layouts/Header" */).then(c => c.default || c)
export const LazyLandingHeader = import('../../components/layouts/LandingHeader.vue' /* webpackChunkName: "components/layouts/LandingHeader" */).then(c => c.default || c)
export const LazySidebar = import('../../components/layouts/Sidebar.vue' /* webpackChunkName: "components/layouts/Sidebar" */).then(c => c.default || c)
