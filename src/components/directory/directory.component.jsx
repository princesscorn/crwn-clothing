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
                    id: 1,
                    linkUrl: 'Hats'
                },
                {   
                    title: 'Jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'Jackets'
                },
                {
                    title: 'Sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/snerkers.png',
                    id: 3,
                    linkUrl: 'Sneakers'
                },
                {
                    title: 'Womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    linkUrl: 'Womens'
                },
                {
                    title: 'Mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    linkUrl: 'Mens'
                },
                {
                    title: 'Socks',
                    imageUrl: 'https://i.ibb.co/52RwkdN/socks.jpg',
                    //imageUrl: require('../../icon/socks.jpg'),
                    id: 6,
                    linkUrl: 'Socks'
                }
            ]
        };
    }

    render() {
        console.log ('wwk render()');
        return (
            <div className = 'directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps}) => (
                    //<MenuItem key = {id} title = {title} imageUrl = {imageUrl}, linkUrl = {linkUrl}/>
                    <MenuItem key = {id} {...otherSectionProps}/>
                ))}
            </div>
        );
    }
}

export default Directory;