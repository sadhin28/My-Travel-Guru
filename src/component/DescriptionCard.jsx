import { Link } from "react-router-dom";

const DescriptionCard = ({data}) => {
    
    return (
        <Link>
            <div style={{
            backgroundImage: "url(" +data.image + ")"
        }} className='h-70  bg-cover bg-center w-30 md:w-40 border rounded-3xl'>
           
            <h>{data.title}</h>
        </div>
        </Link>
    );
};

export default DescriptionCard;