
const DescriptionCard = ({data}) => {
    
    return (
        <div className='h-70 w-40 border rounded-3xl'>
            <img  className="w-full " src={data.image} alt="" />
            <h>{data.title}</h>
        </div>
    );
};

export default DescriptionCard;