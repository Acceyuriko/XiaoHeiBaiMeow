import { useMutation } from '@tanstack/react-query';
import clsx from 'classnames';
import { useRef } from 'react';
import { createPortal } from 'react-dom';
import anime from 'theme-shokax-anime';

import { usePersistStore } from '@/store/persist';

export const ThemeNeko = () => {
  const { theme, setTheme } = usePersistStore();
  const isDark = theme === 'dark';
  const nekoRef = useRef<HTMLDivElement>(null);

  const { mutateAsync: changeTheme } = useMutation({
    mutationKey: ['changeTheme'],
    mutationFn: async () => {
      if (!nekoRef.current) {
        return;
      }
      nekoRef.current.style.display = 'block';
      await new Promise((resolve) => {
        anime({
          targets: nekoRef.current!,
          duration: 200,
          easing: 'linear',
          opacity: [0, 1],
          complete: () => {
            resolve(true);
          },
        }).play();
      });
      await new Promise<void>((resolve) => setTimeout(resolve, 210));
      if (isDark) {
        document.documentElement.classList.remove('dark');
        setTheme('light');
      } else {
        document.documentElement.classList.add('dark');
        setTheme('dark');
      }
      await new Promise<void>((resolve) => {
        anime({
          targets: nekoRef.current!,
          duration: 200,
          easing: 'linear',
          delay: 2500,
          opacity: 0,
          complete: () => {
            resolve();
          },
        }).play();
      });
      nekoRef.current.style.display = 'none';
    },
  });

  return (
    <>
      <li className="cursor-pointer px-2 py-2.5" onClick={() => changeTheme()}>
        <i className={clsx('ic', isDark ? 'i-moon' : 'i-sun')} />
      </li>
      {createPortal(
        <div
          id="neko"
          className={clsx(
            'fixed bottom-0 left-0 right-0 top-0 z-50 hidden opacity-0',
            isDark ? 'dark' : '',
          )}
          style={{
            background: 'linear-gradient(to top, #fddb92 0%, #d1fdff 80%)',
          }}
          ref={nekoRef}
        >
          <div
            className="before absolute bottom-0 left-0 right-0 top-0 opacity-0 transition-all duration-[2s] ease-[ease] dark:opacity-100"
            style={{
              background: 'linear-gradient(to top, #30cfd0 0%, #330867 100%)',
            }}
          ></div>
          <div className="planet animate-theme-neko-rotate fixed left-[-50%] top-[-50%] h-[200%] w-[200%] origin-bottom">
            <div
              className="sun absolute left-[55%] top-[32%] h-10 w-10 rounded-full bg-[#ffee94] opacity-100 dark:opacity-0"
              style={{ boxShadow: '0 0 40px #ffee94' }}
            ></div>
            <div
              className="moon absolute left-[55%] top-[32%] h-6 w-6 rounded-full bg-[#eee] opacity-0 dark:opacity-100"
              style={{
                boxShadow: '0 0 20px #fff',
              }}
            ></div>
          </div>
          <div
            className="body animate-slide-up-big-in absolute bottom-[-20px] left-[50%] ml-[-100px] h-[140px] w-[135px] bg-[#777] transition-all duration-[250ms] ease-in-out dark:bg-[#444]"
            style={{
              animationDuration: '1s',
            }}
          >
            <div className="before absolute left-0 top-[-20px] h-0 w-0 border-b-[20px] border-r-[30px] border-[#777] border-r-[transparent] transition-all duration-[250ms] ease-in-out dark:border-b-[#444]"></div>
            <div className="face">
              <section className="eyes left absolute bottom-20 left-3 h-10 w-10 rounded-full bg-[#ffee94]">
                <span className="pupil relative mx-auto my-0 block h-full w-[5px] rounded-full bg-[#ffb399] transition-[width] delay-500 duration-1000 ease-in-out dark:my-[5%] dark:h-[90%] dark:w-[34px]"></span>
              </section>
              <section className="eyes right absolute bottom-20 right-3 h-10 w-10 rounded-full bg-[#ffee94]">
                <span className="pupil relative mx-auto my-0 block h-full w-[5px] rounded-full bg-[#ffb399] transition-[width] delay-500 duration-1000 ease-in-out dark:my-[5%] dark:h-[90%] dark:w-[34px]"></span>
              </section>
              <span className="nose relative top-[45px] mx-auto my-0 block h-2.5 w-2.5 rounded-full bg-[#ffb399]"></span>
            </div>
            <div className="after absolute right-0 top-[-20px] h-0 w-0 border-b-[20px] border-l-[30px] border-[#777] border-l-[transparent] transition-all duration-[250ms] ease-in-out dark:border-b-[#444]"></div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
};
