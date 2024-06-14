import { Repository } from "../../../service/types";
import { useData } from "../../../service/useGitHub";
import useRepository from "../../../stores/repository";
import StarIcon from "../star";

export default function Repositories() {
  const { data, isLoading } = useData();
  const { repositories, addRepository, removeRepository } = useRepository(
    (state) => ({
      repositories: state.repositories,
      addRepository: state.addRepository,
      removeRepository: state.removeRepository,
    })
  );

  if (isLoading) {
    return <div>loading...</div>;
  }

  const isRepositoryFavorited = (repo: Repository) => {
    return repositories.some((r) => r.id === repo.id);
  };

  const toggleFavorite = (repo: Repository) => {
    if (isRepositoryFavorited(repo)) {
      removeRepository(repo.id);
    } else {
      addRepository(repo);
    }
  };

  return (
    <div className="mt-10 flex flex-col gap-5 mb-10">
      {data?.map((repo: Repository) => (
        <div key={repo.id} className="text-white border border-slate-500 p-5">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-blue-500 font-bold">
              {repo.name}
              <span className="border rounded-xl p-1 text-[10px] text-white">
                {repo.private ? "Private" : "Public"}
              </span>
            </div>
            <button
              onClick={() => toggleFavorite(repo)}
              className="text-gray-400 hover:text-yellow-400"
            >
              <StarIcon filled={isRepositoryFavorited(repo)} />
            </button>
          </div>
          <span className="text-slate-300 flex mt-2">
            {repo.description ? repo.description : "No result"}
          </span>
        </div>
      ))}
    </div>
  );
}
