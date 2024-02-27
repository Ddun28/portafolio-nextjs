import Image from "next/image";
import ButtonSocialMedia from "@/components/shared/ui/button-social-media";
import { information } from "@/assets/data";
import Container from "@/components/shared/ui/container";

const HeroSection = () => {
    return ( 
     <section id="home" className="border-b border-gray-500/30 py-10">
       <Container>
         <div className="space-y-10">
           <div className="relative w-24 h-24 ">
               <Image
               src={information.photo}
               alt="Image"
               fill
               className="object-cover rounded-xl grayscale"
                />
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl text-white max-w-3xl mb-5">{`Hey, I'm Daniel - I'm a Web Developer`}</h1>
                <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rerum cum tempora natus, expedita non aliquid quia corporis, molestiae veritatis atque error earum unde porro iure! Vitae nihil et aliquam!
                </p>
            </div>
            <div className="flex items-center gap-4">
                {information.socialMedia.map((social) => (
                <ButtonSocialMedia
                key={social.href} 
                href={social.href} 
                icon={social.icon} />))}
          </div>
       </div>
   </Container>
</section>
     );
}
 
export default HeroSection;