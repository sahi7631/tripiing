import React from 'react';
import fordImage from '../../images/ford.jpg';

class CarListContainerAbstract extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: "Maruti Dzire",
                    rating: "3",
                    trip: "30",
                    price: "525",
                    image: fordImage
                },
                {
                    name: "Honda City",
                    rating: "4",
                    trip: "45",
                    price: "525",
                    image: fordImage
                },
                {
                    name: "Hyundai Verna",
                    rating: "5",
                    trip: "5",
                    price: "525",
                    images: fordImage
                },
                {
                    name: "Maruti Ciaz",
                    rating: "3.5",
                    trip: "54",
                    price: "525",
                    images: fordImage
                },
                {
                    name: "Honda Amaze",
                    rating: "4.5",
                    trip: "46",
                    price: "525",
                    images: fordImage
                },
                {
                    name: "Skoda Rapid",
                    rating: "5",
                    trip: "46",
                    price: "525",
                    images: fordImage
                },
                {
                    name: "Nissan Sunny",
                    rating: "3",
                    trip: "5",
                    price: "525",
                    images: fordImage
                },
                {
                    name: "Tata Tigor",
                    rating: "2",
                    trip: "45",
                    price: "525",
                    images: fordImage
                }
            ]
        }
    }

    callback = (key) => {
        console.log(key);
    }

    handleChange = (value) => {
        console.log(`selected ${value}`);
    }
    
    onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    }

    render() {
        return null;
    }
}

export default CarListContainerAbstract;