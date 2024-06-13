import { Repository } from "../../../service/types";
import { useData } from "../../../service/useGitHub";
import useRepository from "../../../stores/repository";

export default function Repositories() {
  const { data, isLoading } = useData();
  const addRepository = useRepository((state) => state.addRepository);

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <div className="mt-10 flex flex-col gap-5 mb-10">
      {data?.map((repo: Repository) => (
        <div key={repo.id} className="text-white border border-slate-500 p-5">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-blue-500 font-bold">
              {repo.name}
              <span className="border rounded-lg p-1 text-xs text-white font-medium">
                {repo.private ? "Private" : "Public"}
              </span>
            </div>
            <button
              onClick={() => {
                addRepository(repo);
                console.log("Adicionou ao favoritos:", repo);
                const currentRepositories =
                  useRepository.getState().repositories;
                console.log(
                  "Estado atual dos favoritos após adicionar:",
                  currentRepositories
                );
              }}
              className="text-gray-400 hover:text-yellow-400"
            >
              ⭐
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
