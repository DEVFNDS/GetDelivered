import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Catagories = () => {
  
  const categories = [
    { id: 1, name: 'Fruits', image: 'fruits.png' },
    { id: 2, name: 'Vegetables', image: 'vegetables.jpeg' },
    { id: 3, name: 'Dairy', image: 'dairy.jpeg' },
    { id: 4, name: 'Meat', image: 'meat.jpeg' },
    { id: 5, name: 'Fish', image: 'fish.jpeg' },
    { id: 6, name: 'Bakery', image: 'bakery.jpeg' },
    { id: 7, name: 'Pharmacy', image: 'pharmacy.jpeg' }
    
  ];
  const NextArrow = ({ onClick }) => <div className="arrow next" onClick={onClick}><i className="fa-solid fa-arrow-right fa-beat-fade" ></i></div>;
  const PrevArrow = ({ onClick }) => <div className="arrow prev" onClick={onClick} ><i className="fa-solid fa-arrow-left fa-beat-fade"></i></div>;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  


  return (
    <>
      <h3 className="product-header">Catagories</h3>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id} className="carousel-item">
            <img
              src={`/assets/${category.image}`}
              alt={category.name}
            />
            <div className="carousel-caption">
              <h3>{category.name}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Catagories;
