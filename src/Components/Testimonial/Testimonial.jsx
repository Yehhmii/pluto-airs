// import React from 'react';
import './Testimonial.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import test1 from '../../images/testimonial-1.jpg';
import test2 from '../../images/testimonial-2.jpg';
import test3 from '../../images/testimonial-3.jpg';
import test4 from '../../images/testimonial-4.jpg';

export default function Testimonial() {
    const testimonials = [
        { id: 1, name: "Jonny Berlin", text: "This is one of the best travel agency I have used in my entire travel journey, but for local and international travels", image: test1},
        { id: 2, name: "Abigail Mesail", text: "When it coomes to movement and best prices that have you covered and i can well atest to that nice work people.", image: test2},
        { id: 3, name: "Musa", text: "At first i thought they will never meet the hype but having used them for more that mutiple trips i can also just the hype and say they are the best.", image: test3},
        { id: 4, name: "Ricky Richard", text: "With satisfaction in my heart and after having a great discount with them they are the best in town if not nation wide.", image: test4}
    ];  

    const settings = {
        dots: true,
        Infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoPlaySpeed: 5000,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

  return (
    <div>
      <div className='testimonalCon'>
        <Slider {...settings}>
            { testimonials.map((testimony) => (
                <div className='tetty' key={testimony.id}>
                    <img src={testimony.image} alt={`Testimonial ${testimony.id}`} />
                    <p>{ testimony.text}</p>
                    <h3> { testimony.name } </h3>
                </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}


