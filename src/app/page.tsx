export default function Home() {
  return (
    <main>
      {/* First row of cards */}
      <div className="flex w-full justify-center mt-20 space-x-4 px-10">
        <div className="bg-slate-800 h-60 w-4/12"></div>
        <div className="bg-stone-700 h-60 w-4/12"></div>
        <div className="bg-pink-600 h-60 w-4/12"></div>
      </div>

      {/* Second row of cards */}
      <div className="flex w-full justify-center mt-6 space-x-4 px-10">
        <div className="bg-red-800 h-60 w-6/12"></div>
        <div className="bg-blue-700 h-60 w-6/12"></div>
      </div>
    </main>
  );
}