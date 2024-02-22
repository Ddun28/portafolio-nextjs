'use client'

import ListBlog from "@/components/list-blog";
import Button from "@/components/shared/ui/button";
import Container from "@/components/shared/ui/container";
import Title from "@/components/shared/ui/title";
import { useRouter } from "next/navigation";

const BlogSection = () => {

  const router = useRouter();

    return ( 
        <section id="blog" className="border-b border-gray-500/30 py-10">
            <Container>
                <Title title="Blog"/>
                <ListBlog/>
                <Button type='button' label="View All Post" onClick={() => router.push('/wblog')} />
            </Container>
        </section>
     );
}
 
export default BlogSection;