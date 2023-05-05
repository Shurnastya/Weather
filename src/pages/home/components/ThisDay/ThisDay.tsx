import React from 'react';
import s from './ThisDay.module.scss';
import { GlobalSvgSelector } from '../../../../assets/icons/global/GlobalSvgSelector';
import { Weather } from '../../../../store/types/types';

interface Props {
    weather: Weather;
}

export const ThisDay = ({ weather }: Props) => {
    return (
      <div className={s.this__day}>
        <div className={s.top__block}>
          <div className={s.top__block_wrapper}>
            <div className={s.this__temp}>{Math.floor(weather.main.temp)}°</div>
            <div className={s.this__day_name}>Сегодня</div>
          </div>
          <GlobalSvgSelector id="sun" />
        </div>
        <div className={s.bottom__block}>
          <div className={s.this__city}>
            Город: <span>Париж</span>
          </div>
        </div>
      </div>
    );
};