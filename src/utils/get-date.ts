import { isPt } from '@/constants/language';

export enum MONTH {
  JANUARY,
  FEBRUARY,
  MARCH,
  APRIL,
  MAY,
  JUNE,
  JULY,
  AUGUST,
  SEPTEMBER,
  OCTOBER,
  NOVEMBER,
  DECEMBER
}

export const getDate = (month: MONTH, year: number): string => {
  let monthLabel = '';
  switch (month) {
    case MONTH.JANUARY:
      monthLabel = isPt ? 'janeiro' : 'january';
      break;
    case MONTH.FEBRUARY:
      monthLabel = isPt ? 'fevereiro' : 'february';
      break;
    case MONTH.MARCH:
      monthLabel = isPt ? 'março' : 'march';
      break;
    case MONTH.APRIL:
      monthLabel = isPt ? 'abril' : 'april';
      break;
    case MONTH.MAY:
      monthLabel = isPt ? 'maio' : 'may';
      break;
    case MONTH.JUNE:
      monthLabel = isPt ? 'junho' : 'june';
      break;
    case MONTH.JULY:
      monthLabel = isPt ? 'julho' : 'july';
      break;
    case MONTH.AUGUST:
      monthLabel = isPt ? 'agosto' : 'august';
      break;
    case MONTH.SEPTEMBER:
      monthLabel = isPt ? 'setembro' : 'september';
      break;
    case MONTH.OCTOBER:
      monthLabel = isPt ? 'outubro' : 'october';
      break;
    case MONTH.NOVEMBER:
      monthLabel = isPt ? 'novembro' : 'november';
      break;
    case MONTH.DECEMBER:
      monthLabel = isPt ? 'dezembro' : 'december';
      break;
  }

  return `${monthLabel} ${year}`;
};
