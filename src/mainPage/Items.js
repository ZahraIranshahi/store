import React from 'react';
import styles from "./Items.module.css";

const listitems = [
    {image : "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png",id:0,name:"DigikalaJet"},
    {image :"https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png",id:1,name:"DigiStyle"},
    {image : "https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png",id:6,name:"DigiPay"},
    {image : "https://dkstatics-public.digikala.com/digikala-bellatrix/8eec245f74dc74cf91f9889e34c6188ac6dae5c8_1690139697.png",id:2,name:"AboutDigikala"},
    {image : "https://dkstatics-public.digikala.com/digikala-bellatrix/bfcafaf7f0afffbfd326adc48e29e3449dd69910_1688462197.png",id:3,name:"Delivery"},
    {image: "https://dkstatics-public.digikala.com/digikala-bellatrix/6c69096a524add2d4646cd162dfa5f66d4ddceac_1668952039.png",id:4,name:"DigikalaBusiness"},
    {image : "https://dkstatics-public.digikala.com/digikala-bellatrix/258db5bf0ff7b28dbae1bfb3dfaa71bfff32faf9_1686642108.png",id:5,name:"Offers"}
]

const Items = () => {
    return (
        <div>
            <div className={styles.container}>
                {listitems.map((item) => <div key={item.id} className={styles.items}>
                    <img src={item.image} className={styles.pic}/>
                    <span className={styles.names}>{item.name} </span>
                </div>
                
                )}
            </div>
            
        </div>
    );
};

export default Items;