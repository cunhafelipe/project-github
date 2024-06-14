import React from "react";

type SearchInputProps = {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput: React.FC<SearchInputProps> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <input
      type="text"
      placeholder="Search repository by name..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="px-3 py-2 rounded-smfocus:outline-none bg-[#141414] text-slate-300 w-full"
    />
  );
};

export default SearchInput;
