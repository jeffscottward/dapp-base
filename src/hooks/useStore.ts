import create from 'zustand'
// import { mountStoreDevtool } from 'simple-zustand-devtools';

interface AppState {
  count: number
  increaseCount: (by: number) => void
}

export const useStore = create<AppState>()((set) => ({
  count: 0,
  increaseCount: (by) => set((state) => ({ count: state.count + by })),
}))


if (process.env.NODE_ENV === 'development' && typeof document !== 'undefined') {
  // Waiting for this to get fixed
  // https://github.com/beerose/simple-zustand-devtools/pull/24
  // mountStoreDevtool('Store', useStore);
}