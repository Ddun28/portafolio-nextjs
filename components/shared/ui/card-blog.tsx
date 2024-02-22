import Image from "next/image";
import Link from "next/link";

interface CardVenturesProps{
    href: string;
    image: string;
    title: string;
    category: string;
    ago: string;
}

const CardBlog = ({
    href,
    image,
    title,
    category,
    ago,
}: CardVenturesProps) => {
    return (
        <Link 
        href={href} 
        target='_blank' 
        className='group flex flex-col md:flex-row gap-5 md:items-center'>
        <div className='relative w-56 h-40 rounded-xl mb-5 overflow-hidden'>
          <Image
            src={image}
            alt='Image'
            fill
            className='object-cover rounded-xl group-hover:scale-110 transition-all duration-300'
          />
        </div>
        <div className="space-y-2">
            <p className="text-sm uppercase font-semibold tracking-widest text-gray-500">{category}</p>
        <h3 className='text-white text-2xl mb-2 group-hover:text-primary transition-colors duration-300'>
          {title}
        </h3>
        <p className='text-sm uppercase font-semibold tracking-widest text-gray-500'>{ago}</p>
        </div>
       
      </Link>
     );
}
 
export default CardBlog;