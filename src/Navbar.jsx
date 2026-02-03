import { X } from "lucide-react";
import { SearchIcon, ShoppingCart, MenuIcon, XIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { SearchResults } from "./SearchResults";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchName, setSearchName] = useState("");

  function handleClearAll() {
    setIsMenuOpen(false);
    setShowSearch(false);
    setSearchName("");
  }

  useEffect(() => {
    if (showSearch || isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showSearch, isMenuOpen]);

  return (
    <>
      <nav className="font-display relative">
        <div className="flex justify-between items-center p-2 md:p-4  text-gray-800">
          <div className="md:flex gap-2 items-center ml-1.5">
            <img
              className="hidden md:flex w-12"
              src="/public/assets/img/cokeyro-logo.png"
              alt="logo"
            />
            <a href="/">
              <h1 className="text-2xl font-bold tracking-tighter text-[#726a1a]">
                COKEYRO
              </h1>
            </a>
          </div>

          {/* MENU DESKTOP */}
          <div className="hidden md:flex gap-6 font-display md:text-xl">
            <a href="#">Masculino</a>
            <a href="#">Feminino</a>
          </div>

          {/* ICONS */}
          <div className="flex gap-4 mr-2 items-center">
            <ShoppingCart />
            <SearchIcon onClick={() => setShowSearch(!showSearch)} />

            {/* BOTÃO PARA ABRIR O MENU*/}
            <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <MenuIcon />
            </button>
          </div>
        </div>
        {/* {SEÇÃO DE RESULTADOS DA PESQUISA} */}

        <div
          className={`bg-white w-[80%] z-60 absolute overflow-scroll transition-all ease-in-out duration-500 scale-y-0 ${showSearch ? "scale-y-100" : ""}`}
        >
          <SearchResults value={searchName} onChange={setSearchName} />
        </div>
      </nav>

      {/* FUNDO ESCURO - OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMenuOpen || showSearch
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => handleClearAll()}
      ></div>

      {/* Menu gaveta- lateral */}
      <div
        className={`font-display fixed top-0 left-0 h-full w-[80%] max-w-sm bg-white text-black z-50 shadow-xl transition-transform
      duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* {Cabeçalho do menu gaveta} */}
        <div className="flex justify-between p-4">
          <span className="font-bold text-xl">MENU</span>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-1 hover:bg-gray-100 rounded"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        {/* {links} */}
        <div className="flex flex-col p-4 gap-4 ml-4">
          <a href="#" className="text-lg font-medium hover:text-gray-600">
            Masculino
          </a>
          <a href="#" className="text-lg font-medium hover:text-gray-600">
            Feminino
          </a>
          <a href="#" className="text-lg font-medium hover:text-gray-600">
            Contato
          </a>
        </div>
      </div>
    </>
  );
}
