import Container from "@/components/shared/ui/container";
import Title from "@/components/shared/ui/title";
import Image from "next/image";

const AboutPage = () => {
    return ( 
        <main className="border-b border-gray-500/30 pb-10">
            <Container>
                <Title title="About Dundev"/>
                <div className="relative w-full h-[500px] rounded-xl">
                    <Image src='/imgDun.jpg'
                    alt='image'
                    fill
                    className="object-cover rounded-xl"
                    />
                </div>
                <div className="mt-10 space-y-10">
                    <p className="text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores culpa, mollitia quasi illum iste laborum voluptas, asperiores repellat at ea pariatur qui minus porro. Qui fuga et libero magnam natus.
                    </p>
                    <p className="text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores culpa, mollitia quasi illum iste laborum voluptas, asperiores repellat at ea pariatur qui minus porro. Qui fuga et libero magnam natus.
                    </p>
                    <p className="text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores culpa, mollitia quasi illum iste laborum voluptas, asperiores repellat at ea pariatur qui minus porro. Qui fuga et libero magnam natus.
                    </p>
                    <p className="text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores culpa, mollitia quasi illum iste laborum voluptas, asperiores repellat at ea pariatur qui minus porro. Qui fuga et libero magnam natus.
                    </p>
                    <p className="text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores culpa, mollitia quasi illum iste laborum voluptas, asperiores repellat at ea pariatur qui minus porro. Qui fuga et libero magnam natus.
                    </p>
                </div>
            </Container>
        </main>
     );
}
 
export default AboutPage