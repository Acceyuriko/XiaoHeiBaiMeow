import clsx from 'classnames';
import React, { useCallback } from 'react';

export const Pagination = ({
  page,
  totalPage,
  onChange,
}: {
  page: number;
  totalPage: number;
  onChange: (next: number) => void;
}) => {
  const renderPageItem = useCallback(
    (children: React.ReactNode, active: boolean, onClick?: () => void) => {
      return (
        <div
          className={clsx(
            'rounded-[0.3125rem] px-3',
            'hover:text-grey-0',
            'hover:bg-[linear-gradient(to_right,var(--color-pink)_0,var(--color-orange)_100%)]',
            active
              ? clsx(
                  'bg-[linear-gradient(to_right,var(--color-pink)_0,var(--color-orange)_100%)]',
                  'shadow-[0_0_.75rem_var(--color-pink-a3)]',
                  'text-grey-0',
                  'hover:shadow-[0_0_.3125rem_var(--color-red);]',
                )
              : 'hover:shadow-[0_0_.75rem_var(--color-pink-a3)]',
            onClick ? 'cursor-pointer' : '',
          )}
          onClick={onClick}
          style={{
            transition: 'all .2s ease-in-out',
          }}
        >
          {children}
        </div>
      );
    },
    [],
  );

  if (totalPage <= 0) {
    return null;
  }

  return (
    <div className="flex select-none items-center justify-center gap-2.5 px-2.5 py-5 leading-[2] text-grey-5">
      {page !== 1 &&
        renderPageItem(<i className="ic i-angle-left" />, false, () => onChange(page - 1))}
      {renderPageItem(1, page === 1, () => onChange(1))}
      {page >= 4 && <div>…</div>}
      {page >= 3 && renderPageItem(page - 1, false, () => onChange(page - 1))}
      {page !== 1 && page !== totalPage && renderPageItem(page, true)}
      {page <= totalPage - 2 && renderPageItem(page + 1, false, () => onChange(page + 1))}
      {page <= totalPage - 3 && <div>…</div>}
      {totalPage !== 1 && renderPageItem(totalPage, page === totalPage, () => onChange(totalPage))}
      {page !== totalPage &&
        renderPageItem(<i className="ic i-angle-right" />, false, () => onChange(page + 1))}
    </div>
  );
};
