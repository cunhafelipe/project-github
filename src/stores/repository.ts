import create from "zustand";
import { persist } from "zustand/middleware";

type RepositoryType = {
  id: number;
  name: string;
  private: boolean;
  description: string;
};

type State = {
  repositories: RepositoryType[];
  addRepository: (repository: RepositoryType) => void;
};

const useRepository = create(
  persist<State>(
    (set) => ({
      repositories: [],
      addRepository: (repository: RepositoryType) => {
        set((state) => ({
          repositories: [...state.repositories, repository],
        }));
      },
    }),
    {
      name: "repository-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useRepository;
