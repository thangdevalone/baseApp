import React from 'react';
import AlbumList from './components/AlbumList';


function AlbumFeature() {
    const Albums=[
        {
            id:1,
            title: 'Giọng Hát Mới Nổi Bật',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/e/5/0/3/e5034005b4cf89f687809eacd28818dc.jpg'
        },
        {
            id:2,
            title: 'Ballab Việt Ngày Nay',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/1/2/7/91279d5ac5a8da22a9d6b180b93cbcb6.jpg'
        },
        {
            id:3,
            title: 'Tâm Trạng Tan Chậm',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/f/7/c/3/f7c38da87602e0b6f59a6362d7d6bbdd.jpg'
        },
        {
            id:4,
            title: '2021 Top Songs',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/9/2/c/392cf8b379f658e8f282de38da6d0eea.jpg'
        }
        
    ]
    return (
        <div>
            <AlbumList Albums={Albums}/>
        </div>
    );
}

export default AlbumFeature;