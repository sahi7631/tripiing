import React from 'react';
import ContactContainerAbstract from './ContactContainerAbstract';
import Header from '../Header';
import Footer from '../Footer';

class ContactContainer extends ContactContainerAbstract {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Header />
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <div id="contact" class="container-fluid bg-grey">
                        <h2 class="text-center">CONTACT</h2>
                        <div class="row">
                            <div class="col-sm-5">
                                <p>Contact us and we'll get back to you within 24 hours.</p>
                                <p><span class="glyphicon glyphicon-map-marker"></span> Jaipur, India</p>
                                <p><span class="glyphicon glyphicon-phone"></span> +0 9876543210</p>
                                <p><span class="glyphicon glyphicon-envelope"></span> myemail@something.com</p>
                            </div>
                            <div class="col-sm-7 slideanim">
                                <div class="row">
                                    <div class="col-sm-6 form-group">
                                        <input class="form-control" id="name" name="name" placeholder="Name" type="text" required />
                                    </div>
                                    <div class="col-sm-6 form-group">
                                        <input class="form-control" id="email" name="email" placeholder="Email" type="email" required />
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-sm-12 form-group">
                                        <input class="form-control" id="mobile" name="mobileNumber" placeholder="Mobile Number" type="text" required />
                                    </div>
                                </div>
                                <textarea class="form-control" id="comments" name="comments" placeholder="Comment" rows="5"></textarea><br />
                                <div class="row">
                                    <div class="col-sm-12 form-group">
                                        <button class="btn btn-default pull-right" type="submit">Send</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}

export default ContactContainer;