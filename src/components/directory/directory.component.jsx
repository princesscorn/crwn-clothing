import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

class Directory extends React.Component {
    constructor () {
        super();
        this.state = {
            sections: [
                {
                    title: 'Hats',
                    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                    id: 1
                },
                {   
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/snerkers.png',
                    id: 3
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5
                },
                {
                    title: 'Socks',
                    imageUrl: 'https://i.ibb.co/52RwkdN/socks.jpg',
                    //imageUrl: require('../../icon/socks.jpg'),
                    id: 6
                }
            ]
        };
    }

    render() {
        console.log ('wwk render()');
        return (
            <div className = 'directory-menu'>
                {this.state.sections.map(({title, imageUrl, id}) => (
                    <MenuItem key = {id} title = {title} imageUrl = {imageUrl}/>
                    //<MenuItem key = {id} imageUrl = {imageUrl}/>
                ))}
            </div>
        );
    }
}

export default Directory;