import ListFeaturedWork from "@/components/list-featured-work";
import Button from "@/components/shared/ui/button";
import Container from "@/components/shared/ui/container";
import Title from "@/components/shared/ui/title";

const PageWork = () => {
    return ( 
        <Container>
        <Title title="Work" />
       <ListFeaturedWork/>
        </Container>
     );
}
 
export default PageWork;