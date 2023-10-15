interface Product {
  id: number;
  product_name: string;
  sku: string;
  quantity: number;
  in_stock: number;
  description: string;
  price: string;
  cost_price: string;
  alert_quantity: number;
  status: string;
  barcode_value: string;
  store_id: number;
  created_at: string;
  updated_at: string;
  images: Image[];
  variants: Variant[];
}

interface Image {
  id: number;
  path: string;
  product_id: number;
  created_at: string;
  updated_at: string;
}

interface Variant {
  id: number;
  option: string;
  value: string;
  quantity: number;
  product_id: number;
  created_at: string;
  updated_at: string;
}
