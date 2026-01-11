import { create } from 'zustand';

interface LoadingState {
   isLoading: boolean;
   show: () => void;
   hide: () => void;
}

const useLoadingStore = create<LoadingState>((set) => ({
   isLoading: false,
   show: () => set({ isLoading: true }),
   hide: () => set({ isLoading: false }),
}));

export default useLoadingStore;
