import React from 'react';
import styles from "./Brands.module.css";

const brands = [
    {image:"https://www.kalazad.com/uploads/images/brands/pril/pril-brand-t-450x200.png",id:0},
{image:"https://logos-download.com/wp-content/uploads/2016/12/Silicon_Power_logo_logotype.png",id:3},
{image:"https://zeevector.com/wp-content/uploads/Huawei-Logo-PNG-Colour@zeevector.com_.png",id:4},
{image:"https://www.pakservice.org/Files/Content/Media/3128-20200823151510022.png",id:5},
{image:"https://www.designbust.com/download/566/png/samsung_logo_icon512.png",id:6},
{image:"https://logohistory.net/wp-content/uploads/2022/09/Xiaomi-logo.png",id:7},
{image:"https://blog.okala.com/wholesale/wp-content/uploads/2021/12/%D9%BE%D8%B1%D8%B3%DB%8C%D9%84.png",id:1}];

const Brands = () => {
    return (
        <div className={styles.total}>
            <h2 className={styles.header}>Popular Brands</h2>
        <div className={styles.container}>
            {brands.map(item => <div key={item.id}>
                <img src={item.image} className={styles.brand}></img>
            </div>)}
        </div>
        </div>
    );
};

export default Brands;