import { siteConfig } from "@/config";

export default function Shop() {
  return (
    <main className="shop-page">
      <h2 className="shop-heading">shop</h2>
      {siteConfig.shop.length === 0 ? (
        <p className="shop-empty">coming soon</p>
      ) : (
        <div className="shop-grid">
          {siteConfig.shop.map((item) => (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shop-card"
            >
              {item.image && (
                <div className="shop-img-wrap">
                  <img src={item.image} alt={item.name} className="shop-img" />
                </div>
              )}
              <div className="shop-card-info">
                <span className="shop-item-name">{item.name}</span>
                <span className="shop-item-price">{item.price}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
