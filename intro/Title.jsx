import styleObj from './Title.module.css'

function Title() {
  return (
    <>
      <h3 className="bg-yellow">Title page</h3>
      <p className={styleObj.gbGreen}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
        impedit voluptatibus itaque facere laboriosam officiis voluptate vero,
        nulla, repudiandae voluptates alias similique dolor hic? Dolorum
        mollitia facere laudantium consequatur perferendis nesciunt itaque atque
        dolorem animi aperiam, nulla repellat unde beatae praesentium modi
        obcaecati deleniti, sint fugit incidunt. Sed, rem excepturi!
      </p>

      <h4 id={styleObj['titleEle']}></h4>
    </>
  );
}
export default Title
