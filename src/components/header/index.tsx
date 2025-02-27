import { useMutation, useQuery } from '@tanstack/react-query';
import clsx from 'classnames';
import dayjs from 'dayjs';
import { shuffle, throttle } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import anime from 'theme-shokax-anime';

import AboutCover1 from './assets/covers/about_cover_1.jpg';
import AboutCover2 from './assets/covers/about_cover_2.jpg';
import AboutCover3 from './assets/covers/about_cover_3.jpg';
import AboutCover4 from './assets/covers/about_cover_4.jpg';
import AboutCover5 from './assets/covers/about_cover_5.jpg';
import AboutCover6 from './assets/covers/about_cover_6.jpg';
import Cover1 from './assets/covers/cover_1.jpg';
import Cover10 from './assets/covers/cover_10.jpg';
import Cover11 from './assets/covers/cover_11.jpg';
import Cover12 from './assets/covers/cover_12.jpg';
import Cover13 from './assets/covers/cover_13.jpg';
import Cover14 from './assets/covers/cover_14.jpg';
import Cover15 from './assets/covers/cover_15.jpg';
import Cover16 from './assets/covers/cover_16.jpg';
import Cover17 from './assets/covers/cover_17.jpg';
import Cover18 from './assets/covers/cover_18.jpg';
import Cover19 from './assets/covers/cover_19.jpg';
import Cover2 from './assets/covers/cover_2.jpg';
import Cover20 from './assets/covers/cover_20.jpg';
import Cover21 from './assets/covers/cover_21.jpg';
import Cover22 from './assets/covers/cover_22.jpg';
import Cover23 from './assets/covers/cover_23.jpg';
import Cover24 from './assets/covers/cover_24.jpg';
import Cover25 from './assets/covers/cover_25.jpg';
import Cover26 from './assets/covers/cover_26.jpg';
import Cover27 from './assets/covers/cover_27.jpg';
import Cover28 from './assets/covers/cover_28.jpg';
import Cover29 from './assets/covers/cover_29.jpg';
import Cover3 from './assets/covers/cover_3.jpg';
import Cover30 from './assets/covers/cover_30.jpg';
import Cover31 from './assets/covers/cover_31.jpg';
import Cover32 from './assets/covers/cover_32.jpg';
import Cover34 from './assets/covers/cover_34.jpg';
import Cover35 from './assets/covers/cover_35.jpg';
import Cover36 from './assets/covers/cover_36.jpg';
import Cover37 from './assets/covers/cover_37.jpg';
import Cover4 from './assets/covers/cover_4.jpg';
import Cover5 from './assets/covers/cover_5.jpg';
import Cover6 from './assets/covers/cover_6.jpg';
import Cover7 from './assets/covers/cover_7.jpg';
import Cover8 from './assets/covers/cover_8.jpg';
import Cover9 from './assets/covers/cover_9.jpg';
import CoverHelmet from './assets/covers/cover_helmet.jpg';
import Title from './assets/title.png';
import { ThemeNeko } from './components/theme-neko';
import { useAppStore } from '@/store/app';
import { READING_SPEED } from '@/utils/constants';
import { shortenNumber } from '@/utils/helper';

const BASE_DURATION = 3;

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setLoading, setIsSidebarOpen, note } = useAppStore();

  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [isNavVisible, setIsNavVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const preScrollTop = useRef(0);

  const {
    data: covers,
    isFetching,
    isPending,
  } = useQuery({
    queryKey: ['listCovers', location.pathname],
    queryFn: async () => {
      let randomed: string[] = [];
      if (/^\/about/.test(location.pathname)) {
        randomed = [AboutCover1, AboutCover2, AboutCover3, AboutCover4, AboutCover5, AboutCover6];
      } else {
        randomed = [CoverHelmet].concat(
          shuffle([
            Cover1,
            Cover2,
            Cover3,
            Cover4,
            Cover5,
            Cover6,
            Cover7,
            Cover8,
            Cover9,
            Cover10,
            Cover11,
            Cover12,
            Cover13,
            Cover14,
            Cover15,
            Cover16,
            Cover17,
            Cover18,
            Cover19,
            Cover20,
            Cover21,
            Cover22,
            Cover23,
            Cover24,
            Cover25,
            Cover26,
            Cover27,
            Cover28,
            Cover29,
            Cover30,
            Cover31,
            Cover32,
            Cover34,
            Cover35,
            Cover36,
            Cover37,
          ]).slice(0, 5),
        );
      }

      randomed = shuffle(randomed);

      await Promise.all(
        randomed.map((url) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.src = url;
          });
        }),
      );

      return randomed;
    },
  });

  const menus = useMemo(() => {
    return [
      {
        title: '江江酱酱（装修中）',
        href: '/',
        children: [],
      },
      {
        title: (
          <span>
            <i className="ic i-home mr-2" />
            首页
          </span>
        ),
        href: '/',
        children: [],
      },
      {
        title: (
          <span>
            <i className="ic i-user mr-2" />
            关于
          </span>
        ),
        href: '/about',
        children: [],
      },
      {
        title: (
          <span>
            <i className="ic i-feather mr-2" />
            文章
          </span>
        ),
        href: '',
        children: [
          {
            title: (
              <span>
                <i className="ic i-list-alt mr-2" />
                归档
              </span>
            ),
            href: '/archives',
          },
          {
            title: (
              <span>
                <i className="ic i-tags mr-2" />
                标签
              </span>
            ),
            href: '/tags',
          },
        ],
      },
      {
        title: (
          <span>
            <i className="ic i-th mr-2" />
            宝库
          </span>
        ),
        href: '/treasure',
        children: [],
      },
    ];
  }, []);

  const { mutateAsync: openSidebar } = useMutation({
    mutationKey: ['openSidebar'],
    mutationFn: async () => {
      setIsSidebarOpen(true);
      await new Promise<void>((resolve) => {
        anime({
          targets: document.querySelector('#sidebar')!,
          duration: 200,
          easing: 'linear',
          translateX: ['100%', '0%'],
          opacity: [0, 1],
          complete: () => resolve(),
        }).play();
      });
    },
  });

  useEffect(() => {
    const onScroll = throttle(() => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop - preScrollTop.current > 0) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      if (headerRef.current) {
        setIsNavVisible(scrollTop > headerRef.current.offsetHeight);
      }
      preScrollTop.current = scrollTop;
    }, 100);

    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    if (isPending || isFetching) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [setLoading, isPending, isFetching]);

  return (
    <div
      ref={headerRef}
      id="header"
      className="header relative mx-auto my-0 h-[50vh] w-full text-grey-0 dark:text-grey-9"
      style={{
        textShadow: '0 0.2rem 0.3rem rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="inner mx-auto my-0 w-full">
        <div className="brand fixed flex h-[50vh] min-h-[10rem] w-full flex-col items-center justify-center px-12 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="my-2.5">
              {note ? (
                <div className="my-2.5 text-[1.5em]/[1.5] font-bold tracking-[0.125rem] text-grey-0">
                  {note.title}
                </div>
              ) : (
                <img src={Title} alt="江江の装修日记" className="max-h-20" />
              )}
            </div>
            <div className="m-0 text-[0.75em] md:text-[0.8125em]">
              {note ? (
                <div className="flex flex-wrap items-center justify-end gap-2.5 leading-[2] text-grey-0">
                  <div className="flex items-center gap-1">
                    <i className="ic i-calendar" />
                    <span>{dayjs(note.createdAt).format('YYYY-MM-DD HH:mm')}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="ic i-pen" />
                    <span>{shortenNumber(note.charactors)}字</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <i className="ic i-clock" />
                    <span>{Math.ceil(note.charactors / READING_SPEED)}分钟</span>
                  </div>
                </div>
              ) : (
                '= 得道者多助，失道者寡助 ='
              )}
            </div>
          </div>
        </div>
        <div
          className={clsx(
            'nav fixed z-10 h-[3.125rem] w-full transition-all delay-0 duration-200 ease-in-out',
            isNavVisible
              ? 'bg-nav-bg text-grey-7 shadow-[0.1rem_0.1rem_0.2rem_rgb(var(--color-grey-9)/0.1)] [text-shadow:0_0_0.0625rem_rgb(var(--color-grey-9)/0.1)] dark:text-grey-5'
              : '',
            isNavVisible
              ? scrollDirection === 'up'
                ? 'translate-y-0'
                : 'translate-y-[-100%]'
              : '',
          )}
        >
          <div className="inner mx-auto my-0 flex h-full w-[calc(100%-0.625rem)] flex-nowrap">
            <div
              className="toggle flex cursor-pointer flex-col items-center justify-center leading-[0] lg:hidden"
              onClick={() => openSidebar()}
            >
              <div
                className="lines flex w-[1.375rem] flex-col gap-[0.1875rem] p-5"
                style={{ boxSizing: 'unset' }}
              >
                {new Array(3).fill(0).map((_, index) => (
                  <span
                    key={index}
                    className={clsx(
                      'relative left-0 top-0 inline-block h-0.5 w-full rounded-[0.0625rem] align-top transition-all duration-[400ms]',
                      isNavVisible
                        ? 'bg-grey-7 shadow-[0_0_0.0625rem_rgb(var(--color-grey-9)/0.1)] dark:bg-grey-5'
                        : 'bg-grey-0 shadow-[0_0_0.5rem_rgba(0,0,0,0.5)] dark:bg-grey-9',
                    )}
                  />
                ))}
              </div>
            </div>
            <div className="menu m-0 flex w-full items-center justify-center px-0 py-2.5 md:justify-start">
              {menus.map((menu, index) => {
                const isActive = menu.href === location.pathname;

                return (
                  <div
                    key={index}
                    className={clsx(
                      'group relative cursor-pointer items-center px-2.5 text-center tracking-[0.0625rem]',
                      index > 0 ? 'hidden md:flex' : 'flex',
                    )}
                    onClick={() => {
                      if (menu.href) {
                        if (menu.href === location.pathname) {
                          anime({
                            targets: document.documentElement,
                            duration: 500,
                            easing: 'easeInOutQuad',
                            scrollTop: 0,
                          }).play();
                        } else {
                          navigate(menu.href);
                        }
                      }
                    }}
                  >
                    {index > 0 && (
                      <div
                        className={clsx(
                          'absolute bottom-0 left-[50%] h-[0.1875rem] w-0 translate-x-[-50%] rounded-sm bg-[currentColor]',
                          isActive
                            ? 'w-[70%]'
                            : menu.children.length == 0
                              ? 'group-hover:w-[70%]'
                              : '',
                        )}
                        style={{
                          transition: 'all .4s ease-in-out 0s',
                        }}
                      />
                    )}
                    {menu.title}
                    {menu.children.length > 0 && (
                      <>
                        <div className="ml-[0.3rem] mt-[0.4rem] inline-block border-[0.3rem] border-[transparent] border-t-[currentColor] align-middle"></div>
                        <div className="absolute left-0 top-0">
                          <div
                            className="ml-2.5 mt-10 hidden w-max animate-slide-up-in flex-col overflow-hidden p-0 group-hover:flex"
                            style={{
                              backgroundColor: isNavVisible
                                ? 'rgb(var(--color-grey-1))'
                                : 'rgb(var(--color-grey-9) / 0.5)',
                              boxShadow: '0 .3125rem 1.25rem -.25rem var(--grey-9-a1)',
                              borderRadius: '0.625rem 0',
                            }}
                          >
                            {menu.children.map((item) => {
                              const isActive = item.href === location.pathname;
                              return (
                                <div
                                  key={item.href}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(item.href);
                                  }}
                                  className={clsx(
                                    'group/item flex h-11 items-center justify-center px-6',
                                    isActive
                                      ? clsx(
                                          'text-grey-0',
                                          'shadow-[0_0_0.75rem_var(--color-pink-a3)]',
                                          '[background:linear-gradient(to_right,var(--color-pink)_0,var(--color-orange)_100%)]',
                                        )
                                      : clsx(
                                          'hover:text-grey-0',
                                          'hover:shadow-[0_0_0.75rem_var(--color-pink-a3)]',
                                          'hover:[background:linear-gradient(to_right,var(--color-pink)_0,var(--color-orange)_100%)]',
                                        ),
                                  )}
                                >
                                  <div
                                    className="group-hover/item:translate-x-[0.3rem]"
                                    style={{
                                      transition: 'all .2s ease-in-out 0s',
                                    }}
                                  >
                                    {item.title}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="right inline-flex items-center justify-center">
              <ThemeNeko />
            </div>
          </div>
        </div>
      </div>
      <div className="imgs fixed left-0 top-0 -z-50 h-[70vh] min-h-[25rem] w-full bg-[#363636]">
        <ul>
          {covers?.map((url, index) => {
            return (
              <li
                key={url + index}
                className="absolute left-0 top-0 h-full w-full animate-image-animation"
                style={{
                  backgroundSize: 'contain',
                  backgroundPosition: 'top',
                  backgroundRepeat: 'repeat',
                  backgroundImage: `url(${url})`,
                  opacity: 0,
                  backfaceVisibility: 'hidden',
                  transformStyle: 'preserve-3d',
                  animationDelay: `${index * BASE_DURATION}s`,
                }}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
