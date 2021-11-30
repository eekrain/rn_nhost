import create from 'zustand';
import {createTrackedSelector} from 'react-tracked';

export interface ICartItem {
  id: string;
  product_name: string;
  variant: string;
  product_photo_url: string;
  selling_price: number;
  discount: number;
  qty?: number;
}

export interface ICart {
  cartItems: ICartItem[];
  total_price: number;
  total_items: number;
  payment_type: 'cash' | 'credit card' | null;
  handleAddToCart: (newItem: ICartItem) => void;
  handleRemoveFromCart: (removeItemId: string) => void;
}

const zustandCartStore = create<ICart>((set, get) => ({
  cartItems: [],
  total_price: 0,
  total_items: 0,
  payment_type: null,
  handleAddToCart: newItem => {
    const isItemInCart = get().cartItems.find(item => item.id === newItem.id);

    if (isItemInCart) {
      set(state => ({
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === newItem.id
            ? {...item, qty: item.qty ? item.qty++ : item.qty}
            : item,
        ),
      }));
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
        if (item.id === removeItemId) {
          if (item?.qty === 1) return prevVal;
          return [...prevVal, {...item, qty: item.qty ? item.qty-- : item.qty}];
        } else {
          return [...prevVal, item];
        }
      }, [] as ICartItem[]),
    }));
  },
}));

export const useMyCart = createTrackedSelector(zustandCartStore);
