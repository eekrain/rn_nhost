import numbro from 'numbro';

export const myNumberFormat = {
  thousandSeparated(num: number) {
    return numbro(num).format({
      thousandSeparated: true,
    });
  },
  rp(num: number) {
    return numbro(num).format({
      thousandSeparated: true,
      prefix: 'Rp ',
    });
  },
  rpDiscount(num: number) {
    return numbro(num).format({
      thousandSeparated: true,
      prefix: '- Rp ',
    });
  },
};
