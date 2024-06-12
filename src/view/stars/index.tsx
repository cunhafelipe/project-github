import { useStore } from "../../store/useFavoritesStore";

export default function Stars() {
  const stars = useStore((state) => state.stars);

  console.log("Stars:", stars);

  return (
    <div>
      <h2>Starred Repositories</h2>
      <ul>
        {stars.map((repo) => (
          <li key={repo.id}>
            {repo.name} - {repo.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
