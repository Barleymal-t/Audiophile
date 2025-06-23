import { create } from 'zustand'

type ModalStore = {
  modalOpen:boolean,
  toggleModal:()=>void
}

export const useModalStore = create<ModalStore>((set) => ({
  modalOpen:false,
  toggleModal:()=>set((modalOpen)=>({modalOpen:!modalOpen}))
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
//   updateBears: (newBears) => set({ bears: newBears }),
}))
