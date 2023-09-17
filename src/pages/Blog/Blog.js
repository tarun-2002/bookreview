import React from 'react';
import './Blog.css'; // Import your CSS file

function Blog() {
  return (
    <div className="container-blog">
      <h1 style={{textAlign:"center"}}>Blog</h1>


      <section className="cards">
        <article className="horizontal card">
          <img className="card__img" src="https://media.istockphoto.com/id/613303526/photo/herbal-medicine-and-book-on-wooden-table-background.jpg?s=612x612&w=0&k=20&c=NNdB8r9NdNIvliC0Eo6vwFXodjsaUdl1T064Yjg7uI8=" alt="Card Image" />
          <div className="card__content">
            <div className="card__type">article</div>
            <div className="card__title">
            Naturopathy: Embracing Natural Healing 
            </div>
            <div className="card__date">Dr Tulika</div>
            <div className="card__excerpt">
            Discover the principles of Naturopathy, a holistic...
            </div>
            <div className="card__tags">
              <div className="tag"><i className="fa fa-tag"></i>Read More</div>
            </div>
          </div>
        </article>

        <article className="vertical card">
          <img className="card__img" src="https://www.ayurvedicpharmacompanies.com/wp-content/uploads/2019/07/List-Of-Unani-Medicine-Manufacturers-in-India.jpg" alt="Card Image" />
          <div className="card__content">
            <div className="card__type">article</div>
            <div className="card__title">
            Unani Medicine: Ancient Wisdom Meets Science
            </div>
            <div className="card__date"> Dr Tulika</div>
            <div className="card__excerpt">
            Delve into the world of Unani medicine, which combines...
            </div>
            <div className="card__tags">
              <div className="tag"><i className="fa fa-tag"></i>Read More</div>
            </div>
          </div>
        </article>

        <article className="vertical card">
          <img className="card__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTM7uWto3rNkKGSXcXcsT-g9ttqQv-yv0vIixtUcs3EAIKhKOlStQIrXemXAeKk0VLRCBA&usqp=CAU" alt="Card Image" />
          <div className="card__content">
            <div className="card__type">article</div>
            <div className="card__title">
              TestAyurveda and Stress Management
            </div>
            <div className="card__date">Dr Tulika</div>
            <div className="card__excerpt">
            Explore how Ayurveda addresses stress and anxiety through ...
            </div>
            <div className="card__tags">
              <div className="tag"><i className="fa fa-tag"></i>Read More</div>

            </div>
          </div>
        </article>

        <article className="vertical card">
          <img className="card__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7NFT0cGgMy1kUkBx9QWlqTU0h5NH1aBsiuw&usqp=CAU" />
          <div className="card__content">
            <div className="card__type">article</div>
            <div className="card__title">
            Naturopathy for Detoxification
            </div>
            <div className="card__date">Dr Tulika</div>
            <div className="card__excerpt">
            Learn about the detoxification principles of Naturopathy, including fasting, dietary...
            </div>
            <div className="card__tags">
              <div className="tag"><i className="fa fa-tag"></i>Read More</div>

            </div>
          </div>
        </article>

        <article className="horizontal card">
          <img className="card__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTypgrAwQRNEjqp2AkIJzV2MX9-X33Yzyw_jQ&usqp=CAU" alt="Card Image" />
          <div className="card__content">
            <div className="card__type">article</div>
            <div className="card__title">
            Holistic Healing with Ayurveda
            </div>
            <div className="card__date">Dr Tulika</div>
            <div className="card__excerpt">
            Explore the world of Ayurveda...
            </div>
            <div className="card__tags">
              <div className="tag"><i className="fa fa-tag"></i>Read More</div>

            </div>
          </div>
        </article>

        <article className="vertical card">
          <img className="card__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3AaFkO9HbFcft1aOmTOiWbVH020xLcvFSRg&usqp=CAU" alt="Card Image" />
          <div className="card__content">
            <div className="card__type">article</div>
            <div className="card__title">
            The Healing Wisdom of Ayurveda
            </div>
            <div className="card__date">Dr Tulika</div>
            <div className="card__excerpt">
            Explore the ancient wisdom of Ayurveda, which...
            </div>
            <div className="card__tags">
              <div className="tag"><i className="fa fa-tag"></i>Read More</div>
              
            </div>
          </div>
        </article>

        
        
      </section>
    </div>
  );
}

export default Blog;


