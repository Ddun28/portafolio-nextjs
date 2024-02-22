'use client'

import Button from "@/components/shared/ui/button";

const Form = () => {
    return ( 
        <form className="max-w-2xl mx-auto">
        <div className="flex items-center gap-4 flex-col mb-5 lg:flex-row">
            <input type="text" className="w-full bg-dark-light outline-none py-3 px-4"
            placeholder="Name"
            />
             <input type="text" className="w-full bg-dark-light outline-none py-3 px-4"
            placeholder="Lastname"
            />
        </div>
        <div>
            <textarea 
            className="w-full bg-dark-light outline-none py-3 px-4 resize-none mb-5"
            placeholder="Message" rows={5}/>
        </div>
        <Button type='submit' label='Send Message' onClick={() => {}} />
    </form>        
     );
}
 
export default Form
;