import { useQuery } from '@tanstack/react-query';
import clsx from 'classnames';
import { shuffle } from 'lodash';
import { useEffect, useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';

import Cover1 from '@/assets/covers/cover_1.jpg';
import Cover10 from '@/assets/covers/cover_10.jpg';
import Cover11 from '@/assets/covers/cover_11.jpg';
import Cover12 from '@/assets/covers/cover_12.jpg';
import Cover13 from '@/assets/covers/cover_13.jpg';
import Cover14 from '@/assets/covers/cover_14.jpg';
import Cover15 from '@/assets/covers/cover_15.jpg';
import Cover16 from '@/assets/covers/cover_16.jpg';
import Cover17 from '@/assets/covers/cover_17.jpg';
import Cover18 from '@/assets/covers/cover_18.jpg';
import Cover19 from '@/assets/covers/cover_19.jpg';
import Cover2 from '@/assets/covers/cover_2.jpg';
import Cover20 from '@/assets/covers/cover_20.jpg';
import Cover21 from '@/assets/covers/cover_21.jpg';
import Cover22 from '@/assets/covers/cover_22.jpg';
import Cover23 from '@/assets/covers/cover_23.jpg';
import Cover24 from '@/assets/covers/cover_24.jpg';
import Cover25 from '@/assets/covers/cover_25.jpg';
import Cover26 from '@/assets/covers/cover_26.jpg';
import Cover27 from '@/assets/covers/cover_27.jpg';
import Cover28 from '@/assets/covers/cover_28.jpg';
import Cover29 from '@/assets/covers/cover_29.jpg';
import Cover3 from '@/assets/covers/cover_3.jpg';
import Cover30 from '@/assets/covers/cover_30.jpg';
import Cover31 from '@/assets/covers/cover_31.jpg';
import Cover32 from '@/assets/covers/cover_32.jpg';
import Cover34 from '@/assets/covers/cover_34.jpg';
import Cover35 from '@/assets/covers/cover_35.jpg';
import Cover36 from '@/assets/covers/cover_36.jpg';
import Cover37 from '@/assets/covers/cover_37.jpg';
import Cover4 from '@/assets/covers/cover_4.jpg';
import Cover5 from '@/assets/covers/cover_5.jpg';
import Cover6 from '@/assets/covers/cover_6.jpg';
import Cover7 from '@/assets/covers/cover_7.jpg';
import Cover8 from '@/assets/covers/cover_8.jpg';
import Cover9 from '@/assets/covers/cover_9.jpg';
import CoverHelmet from '@/assets/covers/cover_helmet.jpg';
import { useAppStore } from '@/store/app';

const BASE_DURATION = 6;

export const Header = () => {
  const location = useLocation();
  const { setLoading } = useAppStore();

  const {
    data: covers,
    isFetching,
    isPending,
  } = useQuery({
    queryKey: ['listCovers', location.pathname],
    queryFn: async () => {
      let randomed = [CoverHelmet].concat(
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
    ];
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
      className="header relative mx-auto my-0 h-[50vh] w-full text-grey-0 dark:text-grey-9"
      style={{
        textShadow: '0 0.2rem 0.3rem rgba(0, 0, 0, 0.5)',
      }}
    >
      <div className="inner mx-auto my-0 w-full">
        <div className="brand fixed flex h-[50vh] min-h-[10rem] w-full flex-col items-center justify-center px-12 text-center">
          <div className="flex flex-col items-center justify-center">
            <div className="my-2.5 text-[1.5em] font-bold leading-normal tracking-[0.125rem] md:text-[2.5em]">
              江江酱酱の装修日记
            </div>
            <div className="m-0 text-[0.75em] md:text-[0.8125em]">= 得道多助，失道寡助 =</div>
          </div>
        </div>
        <div className="nav fixed h-[3.125rem] w-full transition-all delay-0 duration-200 ease-in-out">
          <div className="inner mx-auto my-0 flex h-full w-[calc(100%-0.625rem)] flex-nowrap">
            <div className="toggle flex cursor-pointer flex-col items-center justify-center leading-[0]">
              <div className="lines w-[1.375rem] p-5" style={{ boxSizing: 'unset' }}>
                {new Array(3).fill(0).map((_, index) => (
                  <span
                    key={index}
                    className="relative left-0 top-0 mt-[0.1875rem] inline-block h-0.5 w-full rounded-[0.0625rem] bg-grey-0 align-top transition-all duration-[400ms] dark:bg-grey-9"
                    style={{
                      boxShadow: '0 0 0.5rem rgba(0,0,0,.5)',
                    }}
                  />
                ))}
              </div>
            </div>
            <ul className="menu m-0 w-full px-0 py-2.5">
              {menus.map((menu, index) => {
                return (
                  <li
                    key={index}
                    className={clsx(
                      'relative px-2.5 text-center tracking-[0.0625rem]',
                      index > 0 ? 'hidden md:inline-block' : 'block md:inline-block',
                    )}
                  >
                    <Link to={menu.href} className="">
                      {menu.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <ul className="right inline-flex items-center justify-center">
              <li className="cursor-pointer px-2 py-2.5">
                <i className="ic i-sun" />
              </li>
            </ul>
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
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
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
