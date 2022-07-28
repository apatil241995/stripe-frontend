import ResponsiveAppBar from "./Navbar"
import './ProductDetails.css'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Get_Product } from "../redux/actions";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function Productdetails(productData) {
  const product = {
    "name": "Boat Headphones",
    "price": 1000,
    "category": "Headphones",
    "description": "Plug Into Nirvana on your boAt Rockerz 255F Pro that comes equipped with the latest Bluetooth v5.0 QCC3003 chipset. cVc technology ensures you a seamless calling experience. The Bluetooth headset offers Fast Charging Technology meaning you can fully charge it in only 1 hour. It offers a playtime of up to 10 hours with its powerful battery for an extended immersive experience. It is IPX5 rated to offer protection against sweat and water scaresR",
    "image_1": "https://rukminim1.flixcart.com/image/416/416/kkimfm80/headphone/p/s/k/rockerz-255f-pro-boat-original-imafzu6kzrj4f6kc.jpeg?q=70",
    "image_2": "https://rukminim1.flixcart.com/image/416/416/l31x2fk0/headphone/s/s/k/-original-image9egcfurs8hn.jpeg?q=70",
    "image_3": "https://rukminim1.flixcart.com/image/416/416/l31x2fk0/headphone/s/a/a/-original-image9egs77ktp5h.jpeg?q=70",
    "image_4": "https://rukminim1.flixcart.com/image/416/416/l31x2fk0/headphone/m/a/f/-original-image9eg4bh7pqmr.jpeg?q=70"
  }
  const image = [
    "https://rukminim1.flixcart.com/image/416/416/kkimfm80/headphone/p/s/k/rockerz-255f-pro-boat-original-imafzu6kzrj4f6kc.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/l31x2fk0/headphone/s/s/k/-original-image9egcfurs8hn.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/l31x2fk0/headphone/s/a/a/-original-image9egs77ktp5h.jpeg?q=70",
    "https://rukminim1.flixcart.com/image/416/416/l31x2fk0/headphone/m/a/f/-original-image9eg4bh7pqmr.jpeg?q=70"
  ]
  const [price, setPrice] = useState(product['price'])
  const [quantity, setQuantity] = useState(1)
  const dispatch = useDispatch()
  const checkout_url = "http://127.0.0.1:8000/checkout"

  const addQuantity = () => {
    setQuantity(quantity + 1)
  }

  const subQuantity = () => {
    setQuantity(quantity - 1)
  }

  useEffect(() => {
    dispatch(Get_Product())
  }, [])

  return (
    <div>
      <div className="header">
        <h6 className="day">Mon-Thus:9:00am-6:30pm</h6>
        <h6 className="contact">Call us: (00)1234 5678</h6>
      </div>
      <ResponsiveAppBar />
      <div className="productinfo">
        <h5 className="h5">About Product</h5>
        <div className="price_div">
          <h4 className="h4">Price: {price * quantity}</h4>
          <div className="quantity_button">
            <div className="quantity">
              <samp>{quantity}</samp>
            </div>
            <div>
              <ExpandLessIcon class='add_quantity' onClick={addQuantity} /><br />
              <ExpandMoreIcon class="sub_quantity" onClick={subQuantity} />
            </div>
          </div>
          <form action={`${checkout_url}/1/${quantity}`}>
            <button className="buy_button">Buy Now</button>
          </form>
        </div>
      </div>

      <div className="detailsdiv">
        <div className="detailstext">
          <div className="productcategory">
            <p>{product['category']}</p>
          </div>
          <div className="productname">
            <p>{product['name']}</p>
          </div>
          <div className="productdetails">
            <p>
              {product['description']}
            </p>
          </div>
        </div>
        <div className="productimages">
          <Carousel
            navButtonsAlwaysInvisible={true}
            animation="slide"
            className="carousel"
          >
            {
              image.map((item) =>
                <img className="carouselimg" src={item} />
              )
            }
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default Productdetails;