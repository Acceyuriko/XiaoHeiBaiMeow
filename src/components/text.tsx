import React from 'react';

export const H1 = ({ children }: React.PropsWithChildren) => {
  return (
    <h1 className="border-b border-grey-3 text-[1.5em] font-bold">
      <i className="ic i-sakura mr-2 animate-spin text-[pink]" />
      {children}
    </h1>
  );
};

export const P = ({ children }: React.PropsWithChildren) => {
  return <p className="my-3">{children}</p>;
};

export const Ul = ({ children }: React.PropsWithChildren) => {
  return <ul className="my-2 py-[0.1em] pl-[1.4em] pr-[0.2em]">{children}</ul>;
};

export const Li = ({ children }: React.PropsWithChildren) => {
  return (
    <li className="relative list-none">
      <div className="absolute left-[-1em] top-[0.85em] h-[0.4em] w-[0.4em] rounded-full bg-red"></div>
      {children}
    </li>
  );
};
