import { Link } from "react-router-dom";

const DescriptionCard = ({data}) => {
    
    return (
        <Link className="carousel w-full">
            <div  style={{
            backgroundImage: "url(" +data.image + ")"
        }} className='carousel-item relative   h-70  text-center font-bold  bg-cover bg-center w-30 md:w-40 border rounded-3xl'>
            
            <h1 className="relative top-60 text-xl text-black ">{data.title}</h1>
        </div>
        </Link>
    );
};

export default DescriptionCard;