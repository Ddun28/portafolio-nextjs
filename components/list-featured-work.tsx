import CardFeaturedWork from "./shared/ui/card-featured-work";

const ListFeaturedWork = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10'>
      <CardFeaturedWork
        href='/work/details'
        image='/BlueLogo.png'
        category='Application web'
        title='Medical Health'
      />
      <CardFeaturedWork
        href='/work/details'
        image='/cap-clone.png'
        category='Clone Site Web App '
        title='IMDb CLONE'
      />
      <CardFeaturedWork
        href='/work/details'
        image='/cap-res.png'
        category='Application Web'
        title='Restaurant App'
      />
    </div>
  );
};

export default ListFeaturedWork;