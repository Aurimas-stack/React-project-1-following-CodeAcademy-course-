import React from 'react';
import './business.css';

class Business extends React.Component {
    render () {
        return (
        <div className="Business">
            <div className="image-container">
                <a className='business_url' href={this.props.business.businessUrl} target='_blank' rel="noreferrer noopener">
                    <img src={this.props.business.imageSrc} alt=''/>
                </a>
            </div>
            <h2>{this.props.business.name}</h2>
            <div className="Business-information">
                <div className="Business-address">
                    <a 
                    href={'https://maps.google.com/?q=' + this.props.business.city + this.props.business.address} 
                    target = "_blank"
                    rel="noreferrer noopener">
                    Address: {this.props.business.address}
                    </a>
                    <p>City: {this.props.business.city}</p>
                    <p>State:{`${this.props.business.state}, zipCode: ${this.props.business.zipCode}`}</p>
                </div>
                <div className="Business-reviews">
                    <h3>Category: {this.props.business.category}</h3>
                    <h3 className="rating">Rating: {this.props.business.rating}</h3>
                    <p>Review Count: {this.props.business.reviewCount}</p>
                </div>
            </div>
        </div>
        )
    }
}
export default Business;