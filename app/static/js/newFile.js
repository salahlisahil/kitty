const fs = require('fs')

// Örnek ürünler
const products = [
  {
    id: 1,
    fileName: "product1",
    name: "Commodo leo sed porta",
    price: '15.00',
    img1: "./assets/images/product-1.jpg",
    img2: "./assets/images/product-1_0.jpg",
    class: 'rating-wrapper',
    href: './components/products/product1.html'
  },
  // Diğer ürünler buraya eklenebilir
];

// Her ürün için dosya oluşturma fonksiyonu
function createHTMLFile(product) {
    const htmlContent = `
        <html>
        <head>
            <title>${product.name}</title>
        </head>
        <body>
            <h1>${product.name}</h1>
            <p>Price: ${product.price}</p>
            <img src="${product.img1}" alt="${product.name}">
            <!-- Diğer ürün bilgileri buraya eklenebilir -->
        </body>
        </html>
    `;

    // Dosya yolunu belirle
    const filePath = `${product.fileName}.html`;

    // Dosyayı oluştur
    fs.watchFile(filePath, htmlContent, (err) => {
        if (err) {
            console.error('Dosya oluşturma hatası:', err);
        } else {
            console.log(`${filePath} dosyası oluşturuldu.`);
        }
    });
}

// Ürünler için dosyaları oluştur
products.forEach(product => {
    createHTMLFile(product);
});
