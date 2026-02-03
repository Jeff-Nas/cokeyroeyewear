import { CardMini } from "./CardMini";
import { useState } from "react";
import { useProducts } from "./ProductsProvider";

export function SearchResults({ value, onChange }) {
  const { displayed } = useProducts(); //useContext(ProductsContext)
  const searchDemos = displayed.slice(0, 3);

  const searchTerm = value.trim().toLocaleLowerCase();

  const searchResults =
    searchTerm === ""
      ? []
      : displayed.filter((item) =>
          item.name.toLocaleLowerCase().includes(searchTerm),
        );

  return (
    <div className="p-3 min-h-150 md:min-h-200 w-full">
      <input
        className="block p-1 mb-4 w-full md:w-3/4 mx-auto border border-gray-400 rounded"
        type="text"
        value={value}
        placeholder="Pesquise por um modelo"
        onChange={(e) => onChange(e.target.value)}
      />
      {!searchTerm ? (
        <div>
          <h2 className="mb-3 pb-2 text-gray-800 border-b border-gray-100">
            Sugestões
          </h2>
          <div className="flex flex-col gap-4">
            {searchDemos.map((item) => (
              <button key={item.id}>
                <CardMini image={item.images.gallery[0]} name={item.name} />
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {searchResults.length > 0 ? (
            searchResults.map((item) => (
              <button key={`result-${item.id}`}>
                <CardMini image={item.images.cover} name={item.name} />
              </button>
            ))
          ) : (
            <p>Resulatado não encontrado!</p>
          )}
        </div>
      )}
    </div>
  );
}
