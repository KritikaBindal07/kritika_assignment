import Image from "next/image";
const Appbar = () => {
  return (
    <nav className="bg-white p-4 px-6 border-b flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-md"
          priority
        />
        <h1 className="text-3xl text-black font-bold">WhatBytes</h1>
      </div>
      <div className="flex items-center space-x-2 border-b rounded-lg shadow-lg p-2">
       
        <img
          className="w-8 h-8 rounded-full"
          src="/avatar.png"
          alt="Kritika Bindal"
        />
        <h1 className="font-bold">Kritika Bindal</h1>
      </div>
    </nav>
  );
};
export default Appbar;
