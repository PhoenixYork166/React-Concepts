import './category-item.styles.scss';

const CategoryItem = ( { category } ) => {

    const { imageUrl, title } = category;

    return (
    
        <div className="category-container">
            <div 
            className="background-image"
            style={{
                backgroundImage: `URL(${imageUrl})`,
            }}
            >
            {/* <img src={imageUrl} alt="Category Item" /> */}
            </div>
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    
    )
}

export default CategoryItem;