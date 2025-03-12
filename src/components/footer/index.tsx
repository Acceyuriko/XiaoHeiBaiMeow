export const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center bg-[var(--body-bg-shadow)] pb-2.5 pt-8 text-[0.875rem] text-grey-5">
      <div>
        © 2025 – 2025 <i className="ic i-sakura animate-spin text-[pink]" />
        @江江大佬
      </div>
      <div className="">
        基于 Theme.<a href="https://github.com/amehime/hexo-theme-shoka">Shoka</a>
      </div>
      <div className="flex items-center">
        <a className="px-1" href="https://beian.miit.gov.cn/" target="_blank">
          浙ICP备2025155856号
        </a>
        {/* <i className="ic i-sakura animate-spin text-[pink]" />
        <a className="px-1" href="https://beian.miit.gov.cn/" target="_blank">
          浙ICP备2025155856号
        </a> */}
      </div>
    </div>
  );
};
