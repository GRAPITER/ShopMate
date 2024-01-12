 
export const Card = ({product}) => {

    return (
        

            <div className=' flex flex-col mt-6 p-5  rounded-lg flex-wrap car shadow-md'>

                <img className='w-full' src={product.image} alt="" />

                <p className='text-xl'>{product.name}</p>

                <div className='flex justify-between items-center pt-6  text-xl'>
                    <span>${product.price}</span>
                    <span className='border rounded-lg py-2  bg-blue-600 px-4 text-white  hover:bg-blue-700'>Add To Cart</span>
                </div>

            </div>

    )
}
