import clsx from 'classnames';
import dayjs from 'dayjs';
import React from 'react';

export interface TimelineProps {
  data: {
    content: React.ReactNode;
    time: number;
  }[];
}

const Row = ({
  children,
  isTime,
  isLast,
}: React.PropsWithChildren & { isTime?: boolean; isLast?: boolean }) => {
  return (
    <div className={clsx('group relative px-[30px]', isTime ? 'py-5' : 'py-2.5')}>
      <div
        className={clsx(
          'absolute left-[2px] h-2.5 w-2.5 rounded-full border-[2px] border-red group-hover:border-blue',
          isTime ? 'top-[30px] bg-grey-1' : 'top-[22px] bg-red group-hover:bg-blue',
        )}
      />
      {children}
      {!isLast && (
        <div
          className={clsx(
            'border-red-a3 absolute bottom-[-30px] left-[6px] top-[30px] border-l-[3px]',
            isTime ? 'border-dashed' : 'border-solid',
          )}
        />
      )}
    </div>
  );
};

export const Timeline = ({ data }: TimelineProps) => {
  return (
    <div className="flex flex-col items-stretch">
      {data.map((item, index) => (
        <React.Fragment key={item.time}>
          {index === 0 || dayjs(item.time).month() !== dayjs(data[index - 1].time).month() ? (
            <Row isTime>
              <span className="border-b border-dashed border-grey-4 text-[1.17em]/[1.5] font-bold">
                {dayjs(item.time).format('YYYY 年 MM 月')}
              </span>
            </Row>
          ) : null}
          <Row isLast={index === data.length - 1}>{item.content}</Row>
        </React.Fragment>
      ))}
    </div>
  );
};
