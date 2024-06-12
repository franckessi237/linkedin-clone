import React from 'react';
import '../Sass/HomeComponent.scss';
import PostStatus from './common/PostUpdate';

function HomeComponent() {
    return (
        <div className='home-component'>
            <PostStatus />
        </div>
    );
}

export default HomeComponent;