import allProducts from "../assets/data/products.json";

export const productService = {
  getProducts,
  getById,
};
// min price max price min bedrooms max bedrooms location
function getProducts(filterBy = {}) {
  // console.log({ allProducts });
  let products = allProducts;
  if (filterBy.minPrice) {
    products = products.filter((p) => {
      return p.price >= filterBy.minPrice && p.price <= filterBy.maxPrice;
    });
  }
  if (filterBy.minRooms) {
    products = products.filter((p) => {
      return p.bedrooms >= filterBy.minRooms && p.bedrooms <= filterBy.maxRooms;
    });
  }
  if (filterBy.minDistance) {
    products = products.filter((p) => {
      return (
        p.distance >= filterBy.minDistance && p.distance <= filterBy.maxDistance
      );
    });
  }
  if (filterBy.location) {
    products = products.filter((p) => {
      return p.location.includes(filterBy.location);
    });
  }
  if (filterBy.type) {
    products = products.filter((p) => {
      return p.type.includes(filterBy.type);
    });
  }
  return products;
}

function getById(id) {
  return allProducts.find((p) => p.id === +id);
}
