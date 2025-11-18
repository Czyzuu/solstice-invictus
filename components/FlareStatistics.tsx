import Image from 'next/image';
import React from 'react';
import WinterSolsticeCountdown from './WinterSolsticeCountdown';
import './FlareStatistics.css';

const FlareStatistics: React.FC = () => {
  return (
    <div className="flare-statistics-wrapper">
      <Image
        alt=""
        loading="lazy"
        width={717}
        height={507}
        decoding="async"
        data-nimg="1"
        className="flare-statistics-graphic scale-140 xl-scale-100 animate-slow-spin select-none"
        src="/rewards_tvl_flares_animation_graphic.svg"
        style={{ color: 'transparent' }}
      />
      <WinterSolsticeCountdown />
    </div>
  );
};

export default FlareStatistics;

