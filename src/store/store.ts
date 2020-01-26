import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { ITimer } from 'types/timer';

// https://github.com/react-spring/zustand

const [useStore] = create<ITimer>(
  devtools(set => ({
    on: false,
    startEpoch: 0,
    timeElapsed: 0,
    timerLength: 30 * 1000,

    begin: () => set({ on: true, startEpoch: Date.now() }),
    tick: () => set(state => ({ timeElapsed: Date.now() - state.startEpoch })),
    pause: () => set({ on: false }),
    unpause: () => set({ on: true }),
    // rest: () => set({ count: 0 }),
  })),
);

export default useStore;
