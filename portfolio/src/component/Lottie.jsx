import React, { memo } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Lottie = () => {
  return (
<div class="h-full">

    <DotLottieReact
      src="/Welcome.lottie"
      loop
      autoplay
      />
      </div>
  );
};
export default memo( Lottie)
