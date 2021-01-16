import React from 'react';
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
            <div className="home_container">
                <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/Mseries_newlaunch/12thjan_Saleon/D19805912_IN_WLME_SamsungGalaxy_M02s_New_Launch_DesktopTallHero_1500x600._CB412082589_.jpg" 
                alt=""/>
                <div className="home_row">
                    <Product
                    id="123456" 
                    title="The Bedsheet"
                    price={9.99}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg"
                    rating={4}/>
                    <Product
                    id="654321" 
                    title="Racket Grips"
                    price={4.99}
                    image="https://m.media-amazon.com/images/I/41Nqa6Z+rwL._AC_SY200_.jpg"
                    rating={3}/>
                </div>
                <div className="home_row">
                    <Product
                    id="789456" 
                    title="Sanitizer and Gloves"
                    price={1.99}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Biss/2020/GW/PSS_260x260._SY304_CB429046195_.jpg"
                    rating={4}/>
                    <Product
                    id="654987" 
                    title="iPhone"
                    price={299.99}
                    image="https://m.media-amazon.com/images/I/31348z5DSJL.__AC_SY200_.jpg"
                    rating={4}/>
                    <Product
                    id="741258" 
                    title="Ear-buds"
                    price={15.99}
                    image="https://m.media-amazon.com/images/I/31COjvjl+cL.__AC_SY200_.jpg"
                    rating={4}/>
                </div>
                <div className="home_row">
                    <Product
                    id="258963" 
                    title="Samsung Odessy"
                    price={29.99}
                    image="data:image/webp;base64,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"
                    rating={4}/>
                </div>

            </div>
        </div>
    );
}

export default Home
