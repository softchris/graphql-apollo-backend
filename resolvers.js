let products = [];

const getProducts = () => {
  return Promise.resolve(products);
}

const getProductById = ({
  productId
}) => {
  return Promise.resolve(product.find(p => p.id === productId));
}

const createProduct = ({ product }) => {
  const newId = products.length === 0 ? 1: products[products.length-1].id + 1;
  products = [ ...products, { ...product, id: newId}];
  return Promise.resolve('success')
}

module.exports = {
  Query: {
    products: async () => getProducts(),
    product: async (_, { id }) => getProductById({ productId: id })
  },
  Mutation: {
    createProduct: async (_, { product }) => createProduct({ product })
  }
};
