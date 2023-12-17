import { useContext, useState } from "react";
import "./BookSlider.css";
import Rating from "./Rating";
import Modal from "../modal/Modal";
import CartContext from "../../context/cartContext";
const BookSlider = ({ data }) => {
  const {addToCart} = useContext(CartContext)




  const [slideIndex, setSlideIndex] = useState(0);
  const [openModal,setOpenModal]=useState(false);
  const [bookData,setBookData]=useState(null);
  
//Handle Modal

const handleModal = (book)=>{
  setOpenModal(true);
  setBookData(book);
  
}
 

  //Handel Click

  const handelClick = (dirction) => {
    if (dirction === "left") {
      setSlideIndex(slideIndex - 1);
    } else {
      setSlideIndex(slideIndex + 1);
    }
  };

  return (
    <div className="book-slider-container">
      {slideIndex >= 0 && (
        <i
          onClick={() => handelClick("left")}
          className="bi bi-chevron-left book-slider-arrow-left"
        ></i>
      )}
      <div
        style={{ transform: `translateX(${slideIndex * -340}px)` }}
        className="book-slider-wrapper"
      >
        {data.map((item) => (
          <div key={item.id} className="book-slide-item">
            <img
              src={`/books/${item.image}`}
              alt={item.title}
              className="book-slide-item-img"
            />
            <h className="book-slide-item-title"> {item.title} </h>
            <Rating rating={item.rating} reviews={item.reviews} />
            <div className="book-slide-item-price">${item.price}</div>
            <div className="book-slider-icons-wrapper">
              <i onClick={()=>handleModal(item)}   className="bi bi-eye-fill"></i>
              <i onClick={()=>addToCart({...item,quantity:1})} className="bi bi-cart-plus"></i>
            </div>
          </div>
        ))}
      </div>
      {slideIndex <= data.length - 1 && 
        <i
          onClick={() => handelClick("right")}
          className="bi bi-chevron-right book-slider-arrow-right"></i>}
      
       {openModal&&<Modal bookData={bookData} setOpenModal={setOpenModal}/>}
    </div>
  );
};

export default BookSlider;
