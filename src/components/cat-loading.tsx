export const CatLoading = () => {
  const bodyColor = 'rgb(237, 166, 93)';
  const tailColor = 'rgb(198, 130, 59)';
  const tummyColor = 'rgb(242, 192, 137)';
  const borderColor = 'rgb(56, 60, 75)';
  const headFootColor = `radial-gradient(transparent 0%, transparent 35%, ${borderColor} 35%, ${borderColor} 39%, ${bodyColor} 39%, ${bodyColor} 67%, ${borderColor} 67%, ${borderColor} 100%)`;
  const outterR = '15em';
  const tummyWidth = '1.5em';
  const borderWidth = '0.375em';

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-50 bg-grey-1">
      <div
        className="cat animate-loading-cat relative m-auto block h-full text-[10px] [&_*]:box-content"
        style={{ width: outterR }}
      >
        <div
          className="body animate-loading-cat-body absolute bottom-0 left-0 right-0 top-0 m-auto rounded-full"
          style={{
            width: outterR,
            height: outterR,
            backgroundImage: `radial-gradient(transparent 0%, transparent 35%, ${borderColor} 35%, ${borderColor} 39%, ${bodyColor} 39%, ${bodyColor} 46%, ${tummyColor} 46%, ${tummyColor} 60%, ${bodyColor} 60%, ${bodyColor} 67%, ${borderColor} 67%, ${borderColor} 100%)`,
          }}
        ></div>
        <div
          className="head absolute bottom-0 left-0 right-0 top-0 m-auto rounded-full"
          style={{ width: outterR, height: outterR }}
        >
          <div
            className="head-before absolute h-full w-full rounded-full"
            style={{
              backgroundImage: headFootColor,
              clipPath: 'polygon(100% 20%, 50% 50%, 70% -10%)',
            }}
          ></div>
          <div
            className="face absolute rotate-[-47deg]"
            style={{
              width: '5em',
              height: '3.75em',
              left: '9.0625em',
              top: '1.8125em',
              background:
                `radial-gradient(circle, ${tummyColor} 0%, ${tummyColor} 23%, transparent 23%) -0.1875em 1.0625em no-repeat,` +
                `radial-gradient(circle, ${borderColor} 0%, ${borderColor} 6%, transparent 6%) 0.75em -0.75em no-repeat,` +
                `radial-gradient(circle, ${borderColor} 0%, ${borderColor} 6%, transparent 6%) -0.75em -0.75em no-repeat,` +
                `radial-gradient(${bodyColor} 0%, ${bodyColor} 15%, transparent 15%) 0 -0.6875em no-repeat,` +
                `radial-gradient(circle, transparent 5%, ${borderColor} 5%, ${borderColor} 10%, transparent 10%) -0.1875em -0.3125em no-repeat,` +
                `radial-gradient(circle, transparent 5%, ${borderColor} 5%, ${borderColor} 10%, transparent 10%) 0.1875em -0.3125em no-repeat,` +
                `radial-gradient(circle, ${bodyColor} 45%, transparent 45%) 0 -0.1875em,` +
                `linear-gradient(transparent 35%, ${borderColor} 35%, ${borderColor} 41%, transparent 41%, transparent 44%, ${borderColor} 44%, ${borderColor} 50%, transparent 50%, transparent 53%, ${borderColor} 53%, ${borderColor} 59%, transparent 59%)`,
            }}
          ></div>
          <div
            className="head-after absolute rotate-[-66deg]"
            style={{
              right: '3.9375em',
              top: '0.8125em',
              height: '2.5em',
              width: '4.125em',
              backgroundImage: `linear-gradient(rgb(var(--color-grey-1)) 65%, transparent 65%), radial-gradient(rgb(var(--color-grey-1)) 51%, ${borderColor} 55%, ${borderColor} 68%, transparent 70%)`,
            }}
          ></div>
        </div>
        <div
          className="foot animate-loading-cat-foot absolute bottom-0 left-0 right-0 top-0 m-auto rounded-full"
          style={{ width: outterR, height: outterR }}
        >
          <div
            className="foot-before absolute h-full w-full rounded-full"
            style={{ backgroundImage: headFootColor, clipPath: 'polygon(50% 50%, 0% 50%, 0% 25%)' }}
          ></div>
          <div
            className="tummy-end absolute rounded-full"
            style={{
              left: '1.1875em',
              top: '6.5625em',
              width: tummyWidth,
              height: tummyWidth,
              backgroundColor: tummyColor,
            }}
          ></div>
          <div
            className="bottom absolute rotate-[21deg] rounded-full"
            style={{
              width: '2.1875em',
              height: '0.9375em',
              top: '4.875em',
              left: '0.75em',
              border: `0.375em solid ${borderColor}`,
              borderBottom: 0,
              background: bodyColor,
            }}
          ></div>
          <div
            className="legs left absolute rotate-[25deg]"
            style={{
              top: '4.0625em',
              left: '3.125em',
              width: '0.625em',
              height: '1.5625em',
              border: `${borderWidth} solid ${borderColor}`,
              backgroundColor: bodyColor,
              borderBottom: 0,
              borderRadius: '0.75em 0.75em 0 0',
            }}
          ></div>
          <div
            className="legs right absolute rotate-[22deg]"
            style={{
              top: '3.3125em',
              left: '0.75em',
              width: '0.625em',
              height: '1.5625em',
              border: `${borderWidth} solid ${borderColor}`,
              backgroundColor: bodyColor,
              borderBottom: 0,
              borderRadius: '0.75em 0.75em 0 0',
            }}
          ></div>
          <div
            className="foot-after absolute rotate-[25deg]"
            style={{
              top: '2.625em',
              left: '2.5em',
              width: '0.9em',
              height: '2.5em',
              border: `${borderWidth} solid ${borderColor}`,
              backgroundColor: tailColor,
              borderBottom: 0,
              borderRadius: '0.75em 0.75em 0 0',
              zIndex: -1,
            }}
          ></div>
        </div>
        <div
          className="paw absolute bottom-0 left-0 right-0 top-0 m-auto rounded-full"
          style={{ width: outterR, height: outterR }}
        >
          <div
            className="hands left absolute rotate-[-20deg]"
            style={{
              top: '4.3em',
              left: '13.1875em',
              width: '0.625em',
              height: '1.5625em',
              border: `${borderWidth} solid ${borderColor}`,
              backgroundColor: bodyColor,
              borderTop: 0,
              borderRadius: '0 0 0.75em 0.75em',
            }}
          ></div>
          <div
            className="hands right absolute rotate-[-25deg]"
            style={{
              top: '5.125em',
              left: '10.975em',
              width: '0.625em',
              height: '1.5625em',
              border: `${borderWidth} solid ${borderColor}`,
              backgroundColor: bodyColor,
              borderTop: 0,
              borderRadius: '0 0 0.75em 0.75em',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
