import { useState } from 'react';

import Alipay from './assets/alipay.png';
import WechatPay from './assets/wechat_pay.png';

export const Appreciate = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="my-5 flex flex-col items-center justify-center py-2.5">
      <button
        className="flex cursor-pointer items-center gap-[0.3125rem] rounded-[0.3125rem] bg-red px-[0.9375rem] py-0 leading-[2] text-grey-0"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <i className="ic i-heartbeat" />
        <span>赞赏</span>
      </button>
      {isVisible && (
        <div className="mt-5 flex w-full items-center justify-around">
          <div className="flex max-w-full animate-blur flex-col items-center">
            <img className="max-h-80 w-full" src={WechatPay} />
            <div className="text-center text-[0.8125rem] text-grey-5">微信支付</div>
          </div>
          <div className="flex max-w-full animate-blur flex-col items-center">
            <img className="max-h-80 w-full" src={Alipay} />
            <div className="text-center text-[0.8125rem] text-grey-5">支付宝</div>
          </div>
        </div>
      )}
    </div>
  );
};
