export interface IProductInventoryDefaultValues {
  product_search_term: string;
  product_id: string | null;
  enabled_variations: string[];
  variation_values: {variation_title: string; variant_metadata_id?: string}[];
  override_capital_price: string;
  override_selling_price: string;
  override_discount: string;
  available_qty: string;
  min_available_qty: string;
}
