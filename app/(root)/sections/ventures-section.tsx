import Container from "@/components/shared/ui/container";
import Title from "@/components/shared/ui/title";
import ListVentures from "@/components/list-ventures";

const VenturesSection = () => {
    return ( 
    <section id="ventures" className="border-b border-gray-500/30 py-10">
           <Container>
             <Title title="Ventures"/>
              <ListVentures/>
           </Container>
    </section> 
    );
}
 
export default VenturesSection;