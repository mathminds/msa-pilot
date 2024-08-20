import React from 'react'
import ProductLists from './ProductsList'

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Classic Hoodie',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Classic Hoodie in gray.",
    price: '$50',
    color: 'Gray',
  },
  {
    id: 3,
    name: 'Denim Jacket',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Front of men's Denim Jacket in blue.",
    price: '$80',
    color: 'Blue',
  },
  {
    id: 4,
    name: 'Leather Wallet',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: "Front of men's Leather Wallet in brown.",
    price: '$25',
    color: 'Brown',
  },
  {
    id: 5,
    name: 'Sneakers',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-05.jpg',
    imageAlt: "Front of men's Sneakers in white.",
    price: '$70',
    color: 'White',
  },
  {
    id: 6,
    name: 'Sports Watch',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-06.jpg',
    imageAlt: "Front of men's Sports Watch in black.",
    price: '$100',
    color: 'Black',
  },
  {
    id: 7,
    name: 'Casual Shirt',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-02-related-product-01.jpg',
    imageAlt: "Front of men's Casual Shirt in blue.",
    price: '$45',
    color: 'Blue',
  },
  {
    id: 8,
    name: 'Slim Fit Jeans',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-08.jpg',
    imageAlt: "Front of men's Slim Fit Jeans in black.",
    price: '$60',
    color: 'Black',
  },
  {
    id: 9,
    name: 'Leather Belt',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-09.jpg',
    imageAlt: "Front of men's Leather Belt in brown.",
    price: '$30',
    color: 'Brown',
  },
  {
    id: 10,
    name: 'Formal Shoes',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-10.jpg',
    imageAlt: "Front of men's Formal Shoes in black.",
    price: '$90',
    color: 'Black',
  },
  {
    id: 11,
    name: 'Backpack',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-11.jpg',
    imageAlt: "Front of men's Backpack in gray.",
    price: '$55',
    color: 'Gray',
  },
]
  
  export default function ProductsList() {
    return (
      <div className="bg-white">
   

        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative bg-purple-400">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }