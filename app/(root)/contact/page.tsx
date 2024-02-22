import Container from "@/components/shared/ui/container";
import Title from "@/components/shared/ui/title";
import Form from "../blog/components/form";

const ContactPage = () => {
    return ( 
        <main className="pb-10 border-b border-gray-500/30">
            <Container>
                <Title title="Lets Chat"/>
                <p className="text-gray-500 mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo perspiciatis molestias distinctio beatae mollitia doloribus dolores repudiandae odio iure dolorem laudantium voluptates tempora optio <span className="text-white">danieldum28@gmail.com</span>
                </p>        
                <Form/>    
            </Container>
        </main>
     );
}
 
export default ContactPage;