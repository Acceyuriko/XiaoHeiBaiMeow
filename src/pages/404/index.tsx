import Lottie from 'lottie-react';

import Anime404 from './assets/404.json';
import { Body } from '@/components/body';

export const Page404 = () => {
  return (
    <Body isLoading={false}>
      <div className="flex items-center justify-center">
        <Lottie className="my-10" animationData={Anime404} />
      </div>
    </Body>
  );
};
