export enum PaymentMethodEnum {
  cash = 'CASH',
  edcBRI = 'EDC|BRI',
  edcBCA = 'EDC|BCA',
  edcMANDIRI = 'EDC|MANDIRI',
  ewalletGOPAY = 'EWALLET|GOPAY',
  ewalletSHOPEEPAY = 'EWALLET|SHOPEEPAY',
  ewalletLINKAJA = 'EWALLET|LINKAJA',
}

export const PAYMENT_METHOD = {
  cash: {payment_type: PaymentMethodEnum.cash, title: 'Cash'},
  edc: [
    {payment_type: PaymentMethodEnum.edcBRI, title: 'BRI'},
    {payment_type: PaymentMethodEnum.edcBCA, title: 'BCA'},
    {payment_type: PaymentMethodEnum.edcMANDIRI, title: 'MANDIRI'},
  ],
  ewallet: [
    {payment_type: PaymentMethodEnum.ewalletGOPAY, title: 'GOPAY'},
    {payment_type: PaymentMethodEnum.ewalletSHOPEEPAY, title: 'SHOPEEPAY'},
    {payment_type: PaymentMethodEnum.ewalletLINKAJA, title: 'LINKAJA'},
  ],
};
