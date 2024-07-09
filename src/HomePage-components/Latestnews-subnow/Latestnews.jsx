import React from 'react'
import './latestnews-subnow.css'

function Latestnews() {
  return (
    <div>
        <div>

        </div>
        <div className="container mt-5">
        {/* <!-- Latest News Section --> */}
        <section className="latest-news mb-5">
            <h2 className="text-center mb-4">Latest News</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card news-card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Revolutionizing Data Labeling Techniques</h5>
                            <p className="card-text">Discover the latest innovations in data labeling that are enhancing the accuracy and efficiency of machine learning models. Our new techniques reduce errors and save time, ensuring high-quality annotated data for various AI applications.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card news-card h-100">
                        <div className="card-body">
                            <h5 className="card-title">AI in 2024: Trends and Predictions</h5>
                            <p className="card-text">As artificial intelligence continues to evolve, stay informed about the key trends and predictions for 2024. From advancements in natural language processing to breakthroughs in computer vision, our insights help you stay ahead in the AI race.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card news-card h-100">
                        <div className="card-body">
                            <h5 className="card-title">Success Stories from Our Clients</h5>
                            <p className="card-text">Read about how our clients have successfully integrated our data labeling solutions into their workflows. Our case studies highlight the benefits and impact of our services, showcasing real-world applications and outcomes.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-primary btn-lg">Read More</button>
            </div>
        </section>

        {/* <!-- Subscribe Now Section --> */}
        <section className="subscribe p-5 bg-light rounded">
            <h2 className="text-center mb-4">Subscribe Now</h2>
            <p className="text-center mb-4">Join our newsletter to receive the latest updates, exclusive insights, and special offers directly in your inbox. Stay connected with the cutting-edge developments in data labeling and AI.</p>
            <ul className="list-unstyled text-center mb-4">
                <li className="mb-2">📬 Exclusive insights and updates on AI and data labeling</li>
                <li className="mb-2">🎉 Early access to new features and services</li>
                <li className="mb-2">💸 Special offers and promotions</li>
                <li className="mb-2">📅 Invitations to webinars and events</li>
            </ul>
            <form className="form-inline justify-content-center">
                <div className="form-group mb-2">
                    <input type="email" className="form-control form-control-lg" placeholder="Enter your email" required />
                </div>
                <button type="submit" className="btn btn-success btn-lg mb-2 ml-2">Subscribe</button>
            </form>
        </section>
    </div>
    </div>
  )
}

export default Latestnews;