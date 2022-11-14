import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import Book from '../book.webp'


const About = () => {


    return (
        <>

        <Carousel >
            <Carousel.Item>
                <Carousel.Caption style={{color:'white', textAlign:'center',textShadow:'2px 2px 4px #000000'}}>
                <h1> <b>Welcome to Netlab Bookstore</b></h1>
                </Carousel.Caption>
                <img
                className=" w-100 h-50"
                src={Book}
                alt="First slide"
                fluid="true"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={Book}
                alt="Second slide"
                />
                <Carousel.Caption style={{color:'white', textAlign:'center',textShadow:'2px 2px 4px #000000'}}>
                <h1>Netlab Bookstore merupakan sebuah toko buku yang memiliki berbagai macam buku yang dapat kamu cari!</h1>
                <h1>Dapatkan buku Anda sekarang di Netlab Bookstore!</h1>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        </>
    )
  };
  
  export default About;