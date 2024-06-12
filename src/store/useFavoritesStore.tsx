import create from "zustand";

type RepositoriesProps = {
  id: number;
  name: string;
  private: boolean;
  description?: string;
};

type AcitonsProps = {
  addRepositorie: (repositorie: RepositoriesProps) => void;
};

type StoreProps = {
  state: {
    repositories: RepositoriesProps[];
  };
  actions: AcitonsProps;
};

export const useRepositoriesSotre = create<StoreProps>((set) => ({
  state: {
    repositories: [],
  },
  actions: {
    addRepositorie: (repositorie) =>
      set((state) => ({
        state: { repositories: [...state.state.repositories, repositorie] },
      })),
  },
}));
