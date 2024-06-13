import useRepository from "../../../stores/repository";

export default function Favorites() {
  const repositories = useRepository((state) => state.repositories);

  return (
    <div>
      {repositories.length === 0 ? (
        <p>Nenhum repositório favoritado.</p>
      ) : (
        repositories.map((repository) => (
          <div
            key={repository.id}
            className="text-white border border-slate-500 py-5"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2 text-blue-500 font-bold">
                {repository.name}
                <span className="border rounded-lg p-1 text-xs text-white font-medium">
                  {repository.private ? "Private" : "Public"}
                </span>
              </div>
            </div>
            <span className="text-slate-300 flex mt-2">
              {repository.description ? repository.description : "No result"}
            </span>
          </div>
        ))
      )}
    </div>
  );
}
