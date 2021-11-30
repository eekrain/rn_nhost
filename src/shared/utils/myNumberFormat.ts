import numbro from 'numbro';

export const myNumberFormat = {
  thousandSeparated(num?: number | null, options?: 'nullAsEmpty') {
    if (!num && options === 'nullAsEmpty') {
      return '';
    } else if (!num) num = 0;
    return numbro(num).format({
      thousandSeparated: true,
    });
  },
  rp(num?: number | null, options?: 'nullAsEmpty') {
    if (!num && options === 'nullAsEmpty') {
      return '';
    } else if (!num) num = 0;
    return numbro(num).format({
      thousandSeparated: true,
      prefix: 'Rp ',
    });
  },
  rpDiscount(num?: number | null, options?: 'nullAsEmpty') {
    if (!num && options === 'nullAsEmpty') {
      return '';
    } else if (!num) num = 0;
    return numbro(num).format({
      thousandSeparated: true,
      prefix: '- Rp ',
    });
  },
  percentageDiscount(num?: number | null, options?: 'nullAsEmpty') {
    if (!num && options === 'nullAsEmpty') {
      return '';
    } else if (!num) num = 0;
    return numbro(num).format({
      thousandSeparated: true,
      prefix: '- ',
      postfix: '%',
    });
  },
  unformat(
    strNum?: string | null,
    defaultValue?: number,
    minimumValue?: number,
  ) {
    const defaultVal = defaultValue ? defaultValue : 0;
    if (typeof strNum === 'string') {
      const temp = numbro.unformat(strNum);
      const temp2 = isNaN(temp) ? defaultVal : temp;
      const temp3 = minimumValue
        ? temp2 < minimumValue
          ? minimumValue
          : temp2
        : temp2;
      return temp3;
    } else return defaultVal;
  },
};
