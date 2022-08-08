import ResponsiveAppBar from "../Navbar/Navbar"
import './ProductDetails.css'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState, useEffect } from "react";
import Carousel from "react-material-ui-carousel";
import SuccessModel from "../SuccessModel/successmodel";



export default function Product() {
  const product = {
    "name": "New Apple AirPods (3rd Generation)",
    "price": 1000,
    "category": "APPLE PRODUCTS",
    "description": [
      'Spatial audio with dynamic head tracking places sound all around you',
      'Adaptive EQ automatically tunes music to your ears',
      'All- new contoured design',
      'Force sensor lets you easily control your entertainment, answer or end calls, and more',
      'Sweat and water resistant',
      'Up to 6 hours of listening time with one charge',
      'Up to 30 hours of total listening time with the MagSafe Charging Case',
      'Quick access to Siri by saying “Hey Siri”',
      'Effortless setup, in -ear detection and automatic switching for a magical experience',
      'Easily share audio between two sets of AirPods on your iPhone, iPad, iPod touch or Apple TV'
    ],
  }
  const image = [
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73_AV1?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861333000",
    "https://rukminim1.flixcart.com/image/416/416/kwdv3bk0/headphone/5/9/2/-original-imag92pgraqqcg8u.jpeg?q=70",
    "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MME73_AV3?wid=572&hei=572&fmt=jpeg&qlt=95&.v=1632861336000",
    "https://rukminim1.flixcart.com/image/416/416/kwdv3bk0/headphone/y/0/k/-original-imag92pgh4eg3cnk.jpeg?q=70"
  ]
  const price = product['price']
  const [quantity, setQuantity] = useState(1)
  const checkout_url = "http://127.0.0.1:8000/checkout"
  const [open, setOpen] = useState(false)
  const addQuantity = () => {
    setQuantity(quantity + 1)
  }

  const subQuantity = () => {
    setQuantity(quantity - 1)
  }

  useEffect(() => {
    let urlMessage = new URLSearchParams(window.location.search)
    if (urlMessage.get("success")) {
      setOpen(true)
    }
  }, [])

  return (
    <div>
      <SuccessModel open={open} setOpen={setOpen} />
      <div className="header">
        <h6 className="day">Mon-Thus:9:00am-6:30pm</h6>
        <h6 className="contact">Call us: (00)1234 5678</h6>
      </div>
      <ResponsiveAppBar />
      <div className="topdiv">
        <div className="maindiv">
          <samp className="aboutproduct_1">About Product</samp>
          <div className="pricequantitydiv">
            <samp className="productprice">Price : <samp> ${price * quantity}</samp></samp>
            <div className="quantitydiv">

              <samp className="quantity">{quantity}</samp>
              <div>
                <ExpandLessIcon class='add_quantity' onClick={addQuantity} /><br />
                <ExpandMoreIcon class="sub_quantity" onClick={subQuantity} />
              </div>
            </div>
            <form className="buy_buttonform" action={`${checkout_url}/1/${quantity}`}>
              <button className="buy_button">Buy Now</button>
            </form>
          </div>

        </div>

        <div className="div">
          <samp className="aboutproduct_2">About Product</samp>
          <div className="productinfo">
            <p className="productcategory">{product['category']}</p>
            <h1 className="productname">{product['name']}</h1>
            <ul className="productdetails">
              {product['description'].map((item) =>
                <li>{item}</li>
              )}
            </ul>
            {/* <p className="productdetails">
              {product['description']}
            </p> */}
          </div>
          <Carousel
            navButtonsAlwaysInvisible={true}
            animation="slide"
            className="carousel"
            indicatorIconButtonProps={{
              style: {
                padding: '3px',
              }
            }}
            activeIndicatorIconButtonProps={{
              style: {
                color: 'blue',
                fontSize: '1rem'
              }
            }}
          >
            {
              image.map((item) =>
                <img className="carouselimg" src={item} alt="" />
              )
            }
          </Carousel>
        </div>
      </div>
    </div>
  )
}