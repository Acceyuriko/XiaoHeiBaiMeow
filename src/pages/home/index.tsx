export const Home = () => {
  return (
    <div className="bg-grey-4 -text-white h-10 w-10">
      test tailwindcss
      <button
        onClick={() => {
          const cls = document.querySelector(':root')?.classList;
          cls?.toggle('dark');
        }}
      >
        主题
      </button>
    </div>
  );
};
