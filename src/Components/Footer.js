import React, {Component} from 'react';

export class Footer extends Component {
    render() {
        return(
            <div className='footer-container'>
                <div>
                    <p>&copy; 2020 Renee Labutay</p>
                </div>
                <div className='contact-links'>
                    <a href='https://www.linkedin.com/in/reneelabutay'>LinkedIn</a>
                    <a href="https://github.com/reneelabutay">Github</a>
                    <a href='mailto: reneelabutay@ucsb.edu'>Email</a>
                </div>
            </div>
        )
    }
}
export default Footer;