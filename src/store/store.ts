import create from 'zustand';

// https://github.com/react-spring/zustand

const [useStore] = create(set => ({
  count: 0,
  increase: () => set(state => ({ count: state.count + 1 })),
  rest: () => set({ count: 0 }),
}));

export default useStore;
