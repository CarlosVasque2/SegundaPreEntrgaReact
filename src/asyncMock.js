const products = [
    {
      id: "1",
      name: "iphone 12",
      price: 1000,
      category: "celular",
      img: "https://d1aqw5mz0wngqe.cloudfront.net/images/spree/images/1766170/attachments/large/Apple_iPhone_12_Black_1.jpg?1659970997",
      stock: 25,
      description: "Descripcion de Iphone 12",
    },
    {
      id: "2",
      name: "samsung s21",
      price: 800,
      category: "celular",
      img: "https://images.samsung.com/is/image/samsung/p6pim/ar/galaxy-s21/gallery/ar-galaxy-s21-5g-g991-sm-g991bzalaro-thumb-368338803",
      stock: 16,
      description: "Descripcion de Samsung s21",
    },
    {
      id: "3",
      name: "Ipad 8va generacion",
      price: 1200,
      category: "tablet",
      img: "https://medias.musimundo.com/medias/00406046-143516-143516-01-143516-01.jpg-size515?context=bWFzdGVyfGltYWdlc3w1MjI1MnxpbWFnZS9qcGVnfGhjMC9oYWMvMTAyODM0OTc0NTU2NDYvMDA0MDYwNDYtMTQzNTE2LTE0MzUxNl8wMS0xNDM1MTZfMDEuanBnX3NpemU1MTV8MzA0NmMzNGFhZjUwMDY2YjY5MjU0MjlkMGJlYWMxODAxZjE5ODJhZmJlOTczZThmZjE2NTQxMjU5NjE2OTA4Yw",
      stock: 3,
      description: "Descripcion de Ipad",
    },
    {
        id: "4",
        name: "Macbook Pro",
        price: 1200,
        category: "computer",
        img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS-nam-byTpCXNFBAc0Xh53wyPGjwTDQXaBsux77taBUI_VO1Gg8KffgwUL8SqfSHjgEioO9UxqMb2D4ljLgKE8Wu9GpN8sdyJeLt2w1RGABjeIsoLKeL-6wA&usqp=CAc",
        stock: 10,
        description: "Descripcion de Ipad",
      },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 1000);
    });
  };
  
  export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.filter((prod) => prod.category === categoryId));
      }, 1000);
    });
  };
  
  export const getProductById = (productoId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products.find((prod) => prod.id === productoId));
      }, 1000);
    });
  };