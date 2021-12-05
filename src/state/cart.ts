import create from 'zustand';
import {createTrackedSelector} from 'react-tracked';
import {PaymentMethodEnum} from '../shared/constants';

export interface ICartItem {
  product_photo_url: string;
  product_inventory_id: string;
  product_name: string;
  variant: string;
  capital_price: number;
  selling_price: number;
  discount: number;
  available_qty: number;
  qty?: number;
  product_updated_at: any;
  inventory_product_updated_at: any;
}

export interface ICart {
  cartItems: ICartItem[];
  payment_type: PaymentMethodEnum | null;
  cash_in_amount: number | null;
  handleAddToCart: (newItem: ICartItem) => void;
  handleRemoveFromCart: (removeItemId: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalItem: () => number;
  setPaymentType: (newPaymentType: PaymentMethodEnum | null) => void;
  setCashInAmount: (newCashAmount: number | null) => void;
}

const zustandCartStore = create<ICart>((set, get) => ({
  cartItems: [],
  payment_type: null,
  cash_in_amount: null,
  handleAddToCart: newItem => {
    const isItemInCart = get().cartItems.find(
      item => item.product_inventory_id === newItem.product_inventory_id,
    );

    if (isItemInCart) {
      if (isItemInCart?.qty && isItemInCart?.qty < isItemInCart.available_qty) {
        set(state => ({
          ...state,
          cartItems: state.cartItems.map(item =>
            item.product_inventory_id === newItem.product_inventory_id
              ? {...item, qty: item.qty ? item.qty + 1 : item.qty}
              : item,
          ),
        }));
      }
    } else {
      // First time the item is added
      set(state => ({
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            ...newItem,
            qty: 1,
          },
        ],
      }));
    }
  },
  handleRemoveFromCart: removeItemId => {
    set(state => ({
      ...state,
      cartItems: state.cartItems.reduce((prevVal, item) => {
        if (item.product_inventory_id === removeItemId) {
          if (item?.qty === 1) return prevVal;
          return [
            ...prevVal,
            {...item, qty: item.qty ? item.qty - 1 : item.qty},
          ];
        } else {
          return [...prevVal, item];
        }
      }, [] as ICartItem[]),
    }));
  },
  clearCart: () => {
    set(state => ({
      ...state,
      cartItems: [],
    }));
  },
  getTotalPrice: () => {
    const total = get().cartItems.reduce((prevVal: number, item) => {
      const subTotal = item?.qty ? item.selling_price * item.qty : 0;

      if (item.discount !== 0 && item.qty) {
        return (
          prevVal +
          subTotal -
          (item.selling_price * item.qty * item.discount) / 100
        );
      }
      return prevVal + subTotal;
    }, 0);
    return total;
  },
  getTotalItem: () => {
    const total = get().cartItems.reduce(
      (prevVal: number, item) => (item.qty ? prevVal + item.qty : prevVal + 0),
      0,
    );
    return total;
  },
  setPaymentType: newPaymentType => {
    set(state => ({
      ...state,
      payment_type:
        state.payment_type === newPaymentType ? null : newPaymentType,
    }));
  },
  setCashInAmount: newCashAmount => {
    set(state => ({...state, cash_in_amount: newCashAmount}));
  },
}));

export const useMyCart = createTrackedSelector(zustandCartStore);
