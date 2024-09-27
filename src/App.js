import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import shoe from './shoe.jpg'; // Main product image
import shoe1 from './shoe1.png'; // Additional image 1
import shoe2 from './shoe2.jpg'; // Additional image 2
import shoe3 from './shoe3.jpeg'; // Additional image 3

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center p-4">
      <div className="bg-black rounded-lg shadow-lg overflow-hidden max-w-5xl w-full p-6">
        
        {/* Product Header */}
        <header className="text-center">
          <h1 className="text-3xl font-bold text-gray-100">Nike Air Shoes</h1>
          <p className="text-gray-100 mt-2">Experience comfort and style with every step.</p>
        </header>

        {/* Product Section */}
        <section className="mt-8 flex flex-col lg:flex-row items-center justify-center">
          
          {/* Product Images */}
          <div className="w-full lg:w-1/2 p-4 lg:mb-0 mb-4">
            <img
              src={shoe}
              alt="Nike Air Shoes"
              className="w-full object-cover rounded-lg"
            />
          </div>
          
          {/* Product Details */}
          <div className="w-full lg:w-1/2 p-4 text-center lg:text-left">
            <h2 className="text-2xl font-semibold text-gray-100">Product Description</h2>
            <p className="text-gray-100 mt-2">
              The Nike Air shoes offer premium comfort and style. Designed with the latest
              technology to provide the best support for your feet.
            </p>
            
            {/* Pricing */}
            <div className="text-3xl font-bold text-green-600 mt-4">$120.00</div>
            
            {/* CTA Button */}
            <button className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-full shadow-md transition-all duration-300 ease-linear hover:bg-green-600">
              Buy Now
            </button>
          </div>
        </section>

        {/* Additional Images Section */}
        <section className="mt-2 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">More Views</h3>
          <div className="flex justify-center space-x-2">
            <img
              src={shoe1}
              alt="Additional view of Nike Air Shoes 1"
              className="w-38 h-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={shoe2}
              alt="Additional view of Nike Air Shoes 2"
              className="w-38 h-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
            <img
              src={shoe3}
              alt="Additional view of Nike Air Shoes 3"
              className="w-38 h-32 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>
        </section>

        {/* Testimonial Section with Carousel */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold text-gray-100 text-center">Customer Reviews</h3>
          <div className="mt-4">
            <Slider {...settings}>
              <div className="text-center p-4">
                <p className="text-gray-100">
                  "These shoes are incredibly comfortable and stylish!" - Doe
                </p>
              </div>
              <div className="text-center p-4">
                <p className="text-gray-100">
                  "I love the design and quality. They fit perfectly and are very durable." - Smith
                </p>
              </div>
              <div className="text-center p-4">
                <p className="text-gray-100">
                  "The best shoes I've ever purchased. Great support for my daily runs." - Emily Johnson
                </p>
              </div>
              <div className="text-center p-4">
                <p className="text-gray-100">
                  "These shoes are worth every penny. I would definitely buy them again!" - Michael Brown
                </p>
              </div>
              <div className="text-center p-4">
                <p className="text-gray-100">
                  "Comfortable, stylish, and affordable. Highly recommend!" - Sarah Williams
                </p>
              </div>
            </Slider>
          </div>
        </section>

        {/* Additional Links */}
        <div className="flex justify-center mt-8 space-x-4">
          <a href="#" className="text-blue-500 hover:underline">Learn More</a>
          <a href="#" className="text-blue-500 hover:underline">Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default App;
