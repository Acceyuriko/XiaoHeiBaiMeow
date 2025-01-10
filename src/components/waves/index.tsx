export const Waves = () => {
  return (
    <div className="waves">
      <svg
        className="waves relative mb-[-0.6875rem] h-[10vh] max-h-[9.375rem] min-h-[3.125rem] w-full md:h-[15vh]"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g className="parallax">
          <use
            className="animate-wave fill-grey-1/[0.7]"
            style={{
              animationDelay: '-2s',
              animationDuration: '7s',
            }}
            xlinkHref="#gentle-wave"
            x="48"
            y="0"
          ></use>
          <use
            className="animate-wave fill-grey-1/[0.5]"
            style={{
              animationDelay: '-3s',
              animationDuration: '10s',
            }}
            xlinkHref="#gentle-wave"
            x="48"
            y="3"
          ></use>
          <use
            className="animate-wave fill-grey-1/[0.3]"
            style={{
              animationDelay: '-4s',
              animationDuration: '13s',
            }}
            xlinkHref="#gentle-wave"
            x="48"
            y="5"
          ></use>
          <use
            className="animate-wave fill-grey-1"
            style={{
              animationDelay: '-5s',
              animationDuration: '20s',
            }}
            xlinkHref="#gentle-wave"
            x="48"
            y="7"
          ></use>
        </g>
      </svg>
    </div>
  );
};
