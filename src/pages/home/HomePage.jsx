import HeadingTitle from '../../Components/heading-title/HeadingTitle';
import Services from '../../Components/services/Services';
import Slider from '../../Components/slider/Slider';
import {books} from  '../../data/books'
import BookSlider from '../../Components/books-slider/BookSlider';






const HomePage=()=>{
    return(
        <div className="home">
            <Slider/>
    <Services/>
   <HeadingTitle title = "Most gifted"/>
    <BookSlider data = {books}/>
    <HeadingTitle title = "Best  seller"/>
    <BookSlider data = {books}/>
    <HeadingTitle title = "Most wished for"/>
    <BookSlider data = {books}/>
        </div>
    )
}


export default HomePage;