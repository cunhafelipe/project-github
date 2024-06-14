import { Frown } from "lucide-react";
import useRepository from "../../../stores/repository";

export default function Favorites() {
  const repositories = useRepository((state) => state.repositories);

  return (
    <div className="mt-10 flex flex-col gap-5 mb-10">
      {repositories.length === 0 ? (
        <div className="flex items-center justify-center mt-36">
          <h1 className="text-white font-semibold flex gap-2">
            <Frown />
            You don't have any favorites
          </h1>
        </div>
      ) : (
        repositories.map((repository) => (
          <div
            key={repository.id}
            className="text-white border border-slate-500 p-5"
          >
            <div className="flex justify-between items-center">
              <div className="flex gap-2 text-blue-500 font-bold">
                {repository.name}
                <span className="border rounded-xl p-1 text-[10px] text-white">
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
