import { useState } from "react";
import { Frown } from "lucide-react";
import useRepository from "../../../stores/repository";
import SearchInput from "../input";

export default function Favorites() {
  const { repositories } = useRepository((state) => ({
    repositories: state.repositories,
  }));

  const [searchTerm, setSearchTerm] = useState("");

  const filteredRepositories = repositories.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mt-10 flex flex-col gap-5 mb-10">
      {filteredRepositories.length === 0 ? (
        <div className="flex items-center justify-center mt-36">
          <h1 className="text-white font-semibold flex gap-2">
            <Frown />
            No favorites found
          </h1>
        </div>
      ) : (
        filteredRepositories.map((repository) => (
          <div>
            <SearchInput
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <div
              key={repository.id}
              className="text-white border border-slate-500 p-5 mt-5"
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
                {repository.description
                  ? repository.description
                  : "No description"}
              </span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
