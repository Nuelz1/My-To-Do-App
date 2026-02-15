import { create } from "zustand";

const useMessageStore = create((set) => ({
  message: "",
  type: "",
  show: false,

  setMessage: (message, type) =>
    set({ message, type, show: true }),

  clearMessage: () =>
    set({ message: "", type: "", show: false }),
}));

export default useMessageStore;
