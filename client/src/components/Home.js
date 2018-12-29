import React, { Component } from 'react';
import Slider from './Slider';
import HomePageitems from './HomePageItems';

class Home extends Component {
    
    render() {
        return (
            <div>

                <div style={{marginBottom:"2%"} }>
                    <Slider />
                </div>

                <HomePageitems/>

                
            </div>
        );
    }
}

export default Home;