import axios from "axios";
import { useQuery } from "react-query";
import { FindAllInput } from "./types";

const API_URL = "https://api.github.com/users/cunhafelipe/repos";

async function fetchData(): Promise<FindAllInput> {
  const response = await axios.get<FindAllInput>(API_URL);
  return response.data;
}

export function useData() {
  const query = useQuery<FindAllInput>({
    queryFn: fetchData,
    queryKey: ["data-github"],
  });

  return query;
}
