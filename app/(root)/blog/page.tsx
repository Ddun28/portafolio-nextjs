import ListBlog from "@/components/list-blog";
import Container from "@/components/shared/ui/container";
import Title from "@/components/shared/ui/title";

const BlogPage = () => {
    return ( 
        <main className="pb-10 border-b border-gray-500/30">
            <Container>
                <Title title="Blog"/>
                <ListBlog/>    
            </Container>
        </main>
     );
}
 
export default BlogPage;