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
                    <Product title="The Bedsheet"
                    price={29.99}
                    image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg"
                    rating={4}/>
                    <Product/>

                </div>
                <div className="home_row">
                <Product/>
                <Product/>
                <Product/>
                </div>
                <div className="home_row">
                <Product/>
                    {/**Product */}

                </div>

            </div>
        </div>
    );
}

export default Home
