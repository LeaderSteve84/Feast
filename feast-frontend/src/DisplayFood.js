import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DisplayFood = () => {
  const foodImageData = [
    { src: require('./foodimages/banana-pancake.jpg'), alt: 'Eggless Banana Pancake', name: 'Eggless Banana Pancake' },
    { src: require('./foodimages/crispy.jpg'), alt: 'Crispy Calamari Rings', name: 'Crispy Calamari Rings' },
    { src: require('./foodimages/egusi-soup.jpeg'), alt: 'Egusi Soup', name: 'Egusi Soup' },
    { src: require('./foodimages/jollof-chicken.jpeg'), alt: 'Jollof Rice with Chicken', name: 'Jollof Rice with Chicken' },
    { src: require('./foodimages/jollof.jpeg'), alt: 'Jollof Rice', name: 'Jollof Rice' },
    { src: require('./foodimages/makhani.jpg'), alt: 'Vegan Dal Makhani', name: 'Vegan Dal Makhani' },
    { src: require('./foodimages/paratha.jpg'), alt: 'Moringa Paratha', name: 'Moringa Paratha' },
    { src: require('./foodimages/roasted-turkey.jpg'), alt: 'Roasted Turkey', name: 'Roasted Turkey' },
    { src: require('./foodimages/salad.jpg'), alt: 'Strawberry Basil Feta Salad', name: 'Strawberry Basil Feta Salad' },
    { src: require('./foodimages/tikka.jpg'), alt: 'Lemon Chicken Tikka', name: 'Lemon Chicken Tikka' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto">
      <Slider {...settings}>
        {foodImageData.map((item, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-800 font-semibold text-center">{item.name}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <p className="text-center text-gray-600 mt-6">
        Browse these mouthwatering dishes and more in our recipe collection!
      </p>
    </div>
  );
};

export default DisplayFood;
