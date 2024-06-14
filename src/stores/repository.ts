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
  removeRepository: (repositoryId: number) => void;
};

const useRepository = create(
  persist<State>(
    (set) => ({
      repositories: [],
      addRepository: (repository: RepositoryType) => {
        set((state) => {
          const exists = state.repositories.some(
            (repo) => repo.id === repository.id
          );
          if (!exists) {
            return { repositories: [...state.repositories, repository] };
          }
          return state;
        });
      },
      removeRepository: (repositoryId: number) => {
        set((state) => ({
          repositories: state.repositories.filter(
            (repo) => repo.id !== repositoryId
          ),
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
