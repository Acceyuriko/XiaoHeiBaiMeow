import { useMutation } from '@tanstack/react-query';
import clsx from 'classnames';
import { ReactNode, useCallback, useEffect, useMemo, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import anime from 'theme-shokax-anime';

import { useNotes } from '@/hooks/useNotes';
import { useAppStore } from '@/store/app';

export const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isSidebarOpen, setIsSidebarOpen } = useAppStore();
  const { data } = useNotes();

  const sidebarRef = useRef<HTMLDivElement>(null);

  const { mutateAsync: closeSidebar } = useMutation({
    mutationKey: ['closeSidebar'],
    mutationFn: async () => {
      await new Promise<void>((resolve) => {
        anime({
          targets: sidebarRef.current!,
          duration: 200,
          easing: 'linear',
          translateX: ['0%', '100%'],
          opacity: [1, 0],
          complete: () => resolve(),
        }).play();
      });
      setIsSidebarOpen(false);
    },
  });

  const renderSocial = useCallback(
    ({ iconPath, bg, fill, to }: { iconPath: ReactNode; bg: string; fill: string; to: string }) => {
      return (
        <a
          className="group relative flex h-[30px] w-[30px] cursor-pointer items-center justify-center overflow-hidden rounded-[38%]"
          href={to}
          target="_blank"
        >
          <div
            className={clsx(
              'before absolute left-[-110%] top-[90%] h-[120%] w-[120%] rotate-45',
              bg,
              'group-hover:left-[-10%] group-hover:top-[-10%]',
            )}
            style={{
              transition: 'all .35s cubic-bezier(.31, -.105, .43, 1.59) 0s',
            }}
          ></div>
          <svg
            className={clsx(
              'h-[1.4em] w-[1.4em] scale-[0.8]',
              fill,
              'group-hover:scale-100 group-hover:fill-grey-0',
            )}
            style={{
              transition: 'all .35s cubic-bezier(.31, -.105, .43, 1.59) 0s',
            }}
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
          >
            {iconPath}
          </svg>
        </a>
      );
    },
    [],
  );

  const navs = useMemo(() => {
    return [
      {
        name: '首页',
        icon: <i className="ic i-home" />,
        to: '/',
        children: [],
      },
      {
        name: '关于',
        icon: <i className="ic i-user" />,
        to: '/about',
        children: [],
      },
      {
        name: '文章',
        icon: <i className="ic i-feather" />,
        to: '',
        children: [
          {
            name: '归档',
            icon: <i className="ic i-list-alt" />,
            to: '/archives',
          },
          {
            name: '标签',
            icon: <i className="ic i-tags" />,
            to: '/tags',
          },
        ],
      },
      {
        name: '宝库',
        icon: <i className="ic i-th" />,
        to: '/treasure',
        children: [],
      },
    ];
  }, []);

  useEffect(() => {
    const onResize = () => {
      setIsSidebarOpen(false);
      sidebarRef.current!.style.transform = 'translateX(0)';
      sidebarRef.current!.style.opacity = '1';
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [setIsSidebarOpen]);

  return (
    <>
      <div
        className={clsx(
          'fixed bottom-0 left-0 right-0 top-0 z-50 block bg-[#000] transition-[opacity] duration-1000 lg:hidden',
          isSidebarOpen ? 'block opacity-30' : 'hidden opacity-0',
        )}
        onClick={() => closeSidebar()}
      ></div>
      <div
        ref={sidebarRef}
        id="sidebar"
        className={clsx(
          'fixed right-0 top-0 z-[99] h-[100vh] w-[15rem] text-center text-grey-6',
          'shadow-[0_0.375rem_0.9375rem_0.3125rem_rgba(0,0,0,0.2)]',
          'bg-grey-1',
          isSidebarOpen ? 'flex' : 'hidden lg:flex',
          'lg:sticky lg:z-0 lg:bg-[transparent] lg:shadow-none',
        )}
        style={{
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <div className="absolute bottom-1 flex w-full justify-center">
          <div
            className="group h-[1.875rem] min-h-[1.875rem] w-[25%] cursor-pointer transition-all duration-200 ease-in-out"
            onClick={() => {
              anime({
                targets: document.documentElement,
                duration: 500,
                easing: 'easeInOutQuad',
                scrollTop: 0,
              }).play();
            }}
          >
            <i className="ic i-arrow-up group-hover:text-red" />
          </div>
          <div
            className="group h-[1.875rem] min-h-[1.875rem] w-[25%] cursor-pointer transition-all duration-200 ease-in-out"
            onClick={() => {
              anime({
                targets: document.documentElement,
                duration: 500,
                easing: 'easeInOutQuad',
                scrollTop: document.documentElement.scrollHeight,
              }).play();
            }}
          >
            <i className="ic i-arrow-down group-hover:text-red" />
          </div>
        </div>
        <div className="no-scrollbar relative mx-auto mb-8 mt-2.5 flex h-full animate-slide-up-big-in flex-col items-center overflow-auto px-[0.9375rem] pb-2 pt-[0.875rem]">
          <div className="author group flex flex-col items-center gap-[5px]">
            <img
              src="/icon.png"
              alt=""
              className="mx-auto my-0 block max-w-[10rem] animate-blur rounded-full p-[0.125rem] group-hover:animate-shake"
              style={{
                border: '.0625rem solid var(--body-bg-shadow)',
                boxShadow: '0 0 1rem .625rem var(--body-bg-shadow)',
              }}
            />
            <div className="text-center text-grey-7">江江酱酱</div>
            <div className="text-center text-grey-5">江江の装修日记</div>
          </div>
          <div className="state mt-[0.625rem] flex shrink-0 items-center justify-center divide-x divide-grey-4 overflow-hidden whitespace-nowrap text-center leading-[1.4]">
            <Link className="flex flex-col items-center px-[0.9375rem]" to="/archives">
              <div className="text-center text-[1.25em] font-semibold">{data?.notes.length}</div>
              <div className="text-center text-[0.875em]">文章</div>
            </Link>
            <Link className="flex flex-col items-center px-[0.9375rem]" to="/tags">
              <div className="text-center text-[1.25em] font-semibold">
                {data
                  ? data.notes.reduce((pre, cur) => {
                      for (const tag of cur.tags) {
                        pre.add(tag);
                      }
                      return pre;
                    }, new Set()).size
                  : 0}
              </div>
              <div className="text-center text-[0.875em]">标签</div>
            </Link>
          </div>
          <div className={clsx('social mt-[0.9375rem] flex items-center gap-2.5 text-[1.4em]')}>
            {renderSocial({
              iconPath: (
                <>
                  <path
                    d="M669.181367 366.290407c10.193153 0 20.38119 0.703011 30.569226 1.75804-27.406187-127.892809-164.087149-222.76148-320.087109-222.76148-174.277232 0-317.278133 118.759801-317.278133 269.846868 0 87.134523 47.431266 158.815075 126.83778 214.33046l-31.618115 95.566566 111.030769-55.864332c39.702234 7.730055 71.673389 15.807011 111.027699 15.807011 9.837042 0 19.676132-0.344854 29.514197-1.399883-6.327102-21.084201-9.838066-43.569308-9.838066-66.406432C399.339616 478.728222 518.451434 366.290407 669.181367 366.290407L669.181367 366.290407zM498.422262 280.20989c23.89113 0 39.702234 15.812127 39.702234 39.70428 0 23.89113-15.811104 39.703257-39.702234 39.703257-23.893176 0-47.784306-15.812127-47.784306-39.703257C450.989973 296.022017 474.880079 280.20989 498.422262 280.20989L498.422262 280.20989zM276.364817 359.617427c-23.893176 0-47.783283-15.812127-47.783283-39.703257 0-23.892153 23.890107-39.70428 47.783283-39.70428 23.890107 0 39.702234 15.812127 39.702234 39.70428C316.067051 343.453283 300.254923 359.617427 276.364817 359.617427L276.364817 359.617427zM276.364817 359.617427"
                    p-id="6540"
                  ></path>
                  <path
                    d="M958.70539 613.651145c0-126.84392-126.84392-230.143611-269.493827-230.143611-151.087067 0-269.844821 103.299691-269.844821 230.143611 0 127.190821 118.758778 230.140541 269.844821 230.140541 31.624255 0 63.594387-8.082072 95.219665-15.811104l87.134523 47.781236-23.892153-79.405491C911.269008 748.574067 958.70539 684.972517 958.70539 613.651145L958.70539 613.651145zM601.719906 573.947887c-15.807011 0-31.618115-15.812127-31.618115-31.624255s15.811104-31.619138 31.618115-31.619138c23.89727 0 39.709397 15.807011 39.709397 31.619138S625.616152 573.947887 601.719906 573.947887L601.719906 573.947887zM776.346085 573.947887c-15.807011 0-31.619138-15.812127-31.619138-31.624255s15.812127-31.619138 31.619138-31.619138c23.89727 0 39.70428 15.807011 39.70428 31.619138S799.891338 573.947887 776.346085 573.947887L776.346085 573.947887zM776.346085 573.947887"
                    p-id="6541"
                  ></path>
                </>
              ),
              bg: 'bg-[#0dd116]',
              fill: 'fill-[#0dd116]',
              to: '/about',
            })}
            {renderSocial({
              iconPath: (
                <path
                  d="M800 96a128 128 0 0 1 128 128v576a128 128 0 0 1-128 128h-576a128 128 0 0 1-128-128v-576a128 128 0 0 1 128-128h576z m-39.04 280h-51.072v16.064h-32.192v52.032h32.192v40.512h-51.072v52.032h51.072v111.104h51.072V536.64l73.216 0.384a12.48 12.48 0 0 1 9.152 9.6l0.256 57.152h-48.64c4.096 29.312 17.28 43.904 39.808 43.776l22.848-0.128A43.904 43.904 0 0 0 896 608l-0.128-78.4a50.944 50.944 0 0 0-45.888-44.8l-10.752-0.192V449.28c0-34.88-25.472-54.72-53.44-56.96l-24.832-0.192v-16.064z m-119.168 16.064H523.84v53.248h33.472v152.32h-49.536l-24.768 50.112h175.808v-50.112h-49.856v-152.32h32.832v-53.248z m-237.44 200l-25.984 49.792c3.072 3.712 6.336 5.568 9.664 5.568l67.712 0.32 27.52-51.968-72.576-0.32c-2.176 0-4.288-1.152-6.272-3.392zM280.064 375.68h-52.352v228.992H193.92c2.048 28.672 13.184 42.88 33.408 42.688H245.504c18.24 0 29.76-12.992 34.432-38.912V375.68zM193.92 445.248h-53.568c1.28 20.288 0.832 41.6-1.28 63.808-2.048 22.272-5.76 41.856-11.072 58.752l28.48 52.352c18.816-30.592 30.016-63.616 33.6-99.2 3.584-35.584 4.864-60.8 3.84-75.712z m173.312 0h-53.248c-0.128 30.272 0.896 56.128 3.072 77.632 4.16 41.216 15.552 73.6 34.112 97.28l28.48-52.352c-5.44-14.144-9.024-33.088-10.88-56.64a541.248 541.248 0 0 1-1.536-65.92z m123.52-69.632h-50.176l-43.328 87.424a45.696 45.696 0 0 0-4.096 15.168c-0.384 6.656 1.728 13.12 10.752 14.72l37.952 0.32-27.008 54.912a39.36 39.36 0 0 0-6.08 16.512c-0.32 6.528 3.584 12.288 12.48 13.952l61.12 0.32 23.232-41.728-30.848-0.512c-2.112 0-4.224-2.496-2.816-5.312l43.52-86.144h-50.112l-3.072 6.208c-7.36 0-10.112-1.92-8.32-5.76l36.8-70.08zM760.96 444.16h18.752c3.392 0.192 6.4 2.56 7.296 5.888l0.256 34.624h-26.304V444.16z m108.928-52.032c-12.8 0-23.616 9.792-25.152 22.272l-0.256 28.544 29.504-0.384a25.536 25.536 0 0 0 21.312-25.024 25.472 25.472 0 0 0-25.408-25.408z"
                  p-id="5189"
                ></path>
              ),
              bg: 'bg-[#ff2e4d]',
              fill: 'fill-[#ff2e4d]',
              to: 'https://www.xiaohongshu.com/user/profile/5ea3e858000000000100044d',
            })}
            {renderSocial({
              iconPath: (
                <path d="M777.514667 131.669333a53.333333 53.333333 0 0 1 0 75.434667L728.746667 255.829333h49.92A160 160 0 0 1 938.666667 415.872v320a160 160 0 0 1-160 160H245.333333A160 160 0 0 1 85.333333 735.872v-320a160 160 0 0 1 160-160h49.749334L246.4 207.146667a53.333333 53.333333 0 1 1 75.392-75.434667l113.152 113.152c3.370667 3.370667 6.186667 7.04 8.448 10.965333h137.088c2.261333-3.925333 5.12-7.68 8.490667-11.008l113.109333-113.152a53.333333 53.333333 0 0 1 75.434667 0z m1.152 231.253334H245.333333a53.333333 53.333333 0 0 0-53.205333 49.365333l-0.128 4.010667v320c0 28.117333 21.76 51.157333 49.365333 53.162666l3.968 0.170667h533.333334a53.333333 53.333333 0 0 0 53.205333-49.365333l0.128-3.968v-320c0-29.44-23.893333-53.333333-53.333333-53.333334z m-426.666667 106.666666c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z m320 0c29.44 0 53.333333 23.893333 53.333333 53.333334v53.333333a53.333333 53.333333 0 1 1-106.666666 0v-53.333333c0-29.44 23.893333-53.333333 53.333333-53.333334z"></path>
              ),
              bg: 'bg-[#20b0e3]',
              fill: 'fill-[#20b0e3]',
              to: 'https://space.bilibili.com/3546586202245200',
            })}
            {renderSocial({
              iconPath: (
                <path d="M618.666667 149.333333h-85.333334v512a128 128 0 1 1-85.333333-120.533333V452.266667a217.6 217.6 0 0 0-42.666667-4.266667 213.333333 213.333333 0 1 0 213.333334 213.333333V358.186667A298.666667 298.666667 0 0 0 832 448v-85.333333A213.333333 213.333333 0 0 1 618.666667 149.333333z"></path>
              ),
              bg: 'bg-[#000]',
              fill: 'fill-[#000]',
              to: 'https://www.douyin.com/user/MS4wLjABAAAAoiddU-8IucPLTcSpRjsxlWVSwn5qO2bxc-wdi_O2iE0',
            })}
          </div>
          <div className="menu mt-3 flex flex-col items-stretch gap-2.5 self-stretch p-5">
            {navs.map((nav) => {
              const isActive = nav.to === location.pathname;
              const isSubActive = nav.children.some((item) => item.to === location.pathname);

              return (
                <div
                  className={clsx(
                    'group relative flex flex-col items-stretch rounded-[0.9375rem] leading-[3]',
                    isActive
                      ? 'text-grey-0 shadow-[0_0_0.75rem_var(--color-pink-a3)] hover:shadow-[0_0_0.75rem_var(--color-pink)]'
                      : isSubActive
                        ? 'bg-[rgba(0,0,0,0.1)] text-[inherit]'
                        : 'text-grey-5 hover:bg-[rgba(0,0,0,0.1)] hover:text-[inherit]',
                  )}
                  style={{
                    transition: 'all 0.2s ease-in-out 0s',
                    ...(isActive
                      ? {
                          backgroundImage:
                            'linear-gradient(to right,var(--color-pink) 0,var(--color-orange) 100%)',
                        }
                      : {}),
                  }}
                  key={nav.name}
                >
                  <div
                    className={clsx('flex cursor-pointer items-center justify-center gap-2.5')}
                    style={{
                      transition: 'all .2s ease-in-out 0s',
                    }}
                    onClick={() => {
                      if (nav.to) {
                        navigate(nav.to);
                      }
                    }}
                  >
                    {nav.icon}
                    <span>{nav.name}</span>
                  </div>
                  <div
                    className={clsx(
                      'animate-slide-down-in flex-col items-stretch gap-2.5',
                      isSubActive ? 'flex' : 'hidden group-hover:flex',
                    )}
                  >
                    {nav.children.map((item) => {
                      const isActive = item.to === location.pathname;

                      return (
                        <div
                          key={item.name}
                          onClick={(e) => {
                            e.stopPropagation();
                            if (item.to) {
                              navigate(item.to);
                            }
                          }}
                          className={clsx(
                            'flex cursor-pointer items-center justify-center gap-2.5 rounded-[0.9375rem] leading-[3]',
                            isActive
                              ? 'text-grey-0 shadow-[0_0_0.75rem_var(--color-pink-a3)] hover:shadow-[0_0_0.75rem_var(--color-pink)]'
                              : 'text-grey-5 hover:bg-[rgba(0,0,0,0.1)] hover:text-[inherit]',
                          )}
                          style={{
                            transition: 'all .2s ease-in-out 0s',
                            ...(isActive
                              ? {
                                  backgroundImage:
                                    'linear-gradient(to right,var(--color-pink) 0,var(--color-orange) 100%)',
                                }
                              : {}),
                          }}
                        >
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
