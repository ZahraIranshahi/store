import React , {useContext} from "react";
import { ProductsContext } from "../contextProvider/ProducteContextProvider";
import { showCategory } from "../contextProvider/CategoryShowProvider";
import { Link } from "react-router-dom";
import styles from "./Category.module.css";
const pictures = [
  {
    pic: "https://fdn.gsmarena.com/imgroot/static/headers/makers/apple-2023-1.jpg",
    id: 0,
    name: "Phone",
  },
  {
    pic: "https://cdn.takas.lk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/a/panasonic32inchhdledtv_pan-32j401.jpg",
    id: 1,
    name: "Electronics",
  },
  {
    pic: "https://images.squarespace-cdn.com/content/v1/535b85dbe4b08c41d0c218b8/1499431758356-0TQWBY7Z43CBBA7908W1/image-asset.jpeg",
    id: 2,
    name: "Home Appliances",
  },
  {
    pic: "https://m.media-amazon.com/images/I/51MQ4vLlMKL._AC_UF1000,1000_QL80_.jpg",
    id: 3,
    name: "Clothing",
  },
  {
    pic: "https://5.imimg.com/data5/SELLER/Default/2022/11/CF/WV/TO/48023543/whatsapp-image-2022-11-05-at-5-03-05-pm-5--500x500.jpeg",
    id: 4,
    name: "SuperMarket",
  },
  {
    pic: "https://img.freepik.com/premium-photo/pile-copybooks-stationery-isolated-white_185193-8960.jpg?w=2000",
    id: 5,
    name: "Stationery",
  },
  {
    pic: "https://toycouncil.kpf.ir/uploads/39/2021/Jul/06/toys.jpg",
    id: 6,
    name: "Toys",
  },
  {
    pic: "https://www.sephora.com/productimages/sku/s1609452-main-zoom.jpg",
    id: 7,
    name: "Perfume",
  },
  {
    pic: "https://dl.maghzabzar.ir/uploads/2019/01/cgaxis-models-volume-88-sport-equipment-3d-model-pack-preview-2.jpg",
    id: 8,
    name: "Sports",
  },
  {
    pic: "https://www.mteevanhire.co.uk/wp-content/uploads/2017/03/tools.jpg",
    id: 9,
    name: "Tools",
  },
  {
    pic: "https://cdp.azureedge.net/products/USA/MA/2022/MC/SPORT/TURISMO_VELOCE_RC_SCS/1000000002_480px.jpg",
    id: 10,
    name: "Motorcycle",
  },
  {
    pic: "https://www.jcojewellery.com/cdn/shop/files/H656H_78452f65-29c4-4ecc-bcd3-b3fd6a326ebe_500x.jpg?v=1691465672",
    id: 11,
    name: "Jewelery",
  },
  {
    pic: "https://laks.com/wp-content/uploads/2021/02/Golden-Gift-Card.jpg",
    id: 12,
    name: "Gift Card",
  },
];

const Category = () => {
  const items = useContext(ProductsContext);
  const [, setShowCategory] = useContext(showCategory);
  const itemHandle = (name) => {
    setShowCategory(
      items.filter((item) =>
        item.category.split(" ").includes(name.toLowerCase())
      )
    );
  };
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>DigiKala Category</h3>
      <div className={styles.images}>
        {pictures.map((item) => (
          <div key={item.id} className={styles.picAndName}>
            <Link to="/category">
              <img src={item.pic} onClick={() => itemHandle(item.name)} className={styles.image}></img>
            </Link>
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
