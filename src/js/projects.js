import React from 'react';
import Container from '../components/container';
import styles from '../pages/styles.module.css';

const features = [
    {
        href: "/projects/thedesk",
        title: 'theDesk',
        imageUrl: 'img/thedesk.svg',
        featured: true,
        description: <>
            Desktop Environment
        </>
    },
    {
        href: "/projects/contemporary",
        title: 'Contemporary',
        imageUrl: 'img/contemporary.svg',
        description: <>
            Design Language
        </>
    },
    {
        href: "/projects/thebeat",
        title: 'theBeat',
        imageUrl: 'img/thebeat.svg',
        featured: true,
        description: <>
            Audio Player
        </>
    },
    {
        href: "/projects/theframe",
        title: 'theFrame',
        imageUrl: 'img/theframe.svg',
        description: <>
            Animation Tool
        </>
    },
    {
        href: "/projects/thepage",
        title: 'thePage',
        imageUrl: 'img/thepage.svg',
        description: <>
            Document Viewer
        </>
    },
    {
        href: "/projects/theslate",
        title: 'theSlate',
        imageUrl: 'img/theslate.svg',
        featured: true,
        description: <>
            Text Editor
        </>
    }
];

export default features;