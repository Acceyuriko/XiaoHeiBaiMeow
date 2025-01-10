export const CatLoading = () => {
  return (
    <div className="cat w-cat-loading-outer-r relative m-auto block h-full animate-loading-cat text-[10px] [&_*]:box-content">
      <div className="body w-cat-loading-outer-r h-cat-loading-outer-r bg-cat-loading-body absolute bottom-0 left-0 right-0 top-0 m-auto animate-loading-cat-body rounded-full"></div>
      <div className="head w-cat-loading-outer-r h-cat-loading-outer-r absolute bottom-0 left-0 right-0 top-0 m-auto rounded-full">
        <div
          className="head-before bg-cat-loading-headfoot absolute h-full w-full rounded-full"
          style={{
            clipPath: 'polygon(100% 20%, 50% 50%, 70% -10%)',
          }}
        ></div>
        <div className="face absolute left-[9.0625em] top-[1.8125em] h-[3.75em] w-[5em] rotate-[-47deg] [background:var(--bg-cat-face)]"></div>
        <div className="head-after bg-cat-loading-head-after absolute right-[3.9375em] top-[0.8125em] h-[2.5em] w-[4.125em] rotate-[-66deg]"></div>
      </div>
      <div className="foot w-cat-loading-outer-r h-cat-loading-outer-r absolute bottom-0 left-0 right-0 top-0 m-auto animate-loading-cat-foot rounded-full">
        <div
          className="foot-before bg-cat-loading-headfoot absolute h-full w-full rounded-full"
          style={{
            clipPath: 'polygon(50% 50%, 0% 50%, 0% 25%)',
          }}
        ></div>
        <div className="tummy-end w-cat-loading-tummy-w h-cat-loading-tummy-w bg-cat-loading-tummy absolute left-[1.1875em] top-[6.5625em] rounded-full"></div>
        <div className="bottom bg-cat-loading-body-color border-cat-loading-border absolute left-[0.75em] top-[4.875em] h-[0.9375em] w-[2.1875em] rotate-[21deg] rounded-full border-[0.375em] border-b-0 border-solid"></div>
        <div className="legs left bg-cat-loading-body-color absolute left-[3.125em] top-[4.0625em] h-[1.5625em] w-[0.625em] rotate-[25deg] rounded-[0.75em_0.75em_0_0] border-[length:var(--size-cat-border-w)] border-b-0 border-solid"></div>
        <div className="legs right bg-cat-loading-body-color border-cat-loading-border absolute left-[0.75em] top-[3.3125em] h-[1.5625em] w-[0.625em] rotate-[22deg] rounded-[0.75em_0.75em_0_0] border-[length:var(--size-cat-border-w)] border-b-0 border-solid"></div>
        <div
          className="foot-after border-cat-loading-border bg-cat-loading-tail absolute left-[2.5em] top-[2.625em] z-[-1] h-[2.5em] w-[0.9em] rotate-[25deg] rounded-[0.75em_0.75em_0_0] border-[length:var(--size-cat-border-w)] border-b-0 border-solid"
          style={{ boxSizing: 'border-box' }}
        ></div>
      </div>
      <div className="paw w-cat-loading-outer-r h-cat-loading-outer-r absolute bottom-0 left-0 right-0 top-0 m-auto rounded-full">
        <div className="hands left border-cat-loading-border bg-cat-loading-body-color absolute left-[13.1875em] top-[4.3em] h-[1.5625em] w-[0.625em] rotate-[-20deg] rounded-[0_0_0.75em_0.75em] border-[length:var(--size-cat-border-w)] border-t-0 border-solid"></div>
        <div className="hands right border-cat-loading-border bg-cat-loading-body-color absolute left-[10.975em] top-[5.125em] h-[1.5625em] w-[0.625em] rotate-[-25deg] rounded-[0_0_0.75em_0.75em] border-[length:var(--size-cat-border-w)] border-t-0 border-solid"></div>
      </div>
    </div>
  );
};
