const INITIAL_STATE = {
    sections: [{
        title: 'Casual Shirts',
        imageUrl: "/assets/images/casual_shirts/img2.jpg",
        id: 1,
        linkUrl: 'shop/casual shirts'
    },
    {
        title: 'Our Best',
        imageUrl: '/assets/images/our_best/img1.jpg',
        id: 2,
        linkUrl: 'shop/our best'
    },
    {
        title: 'Professional Shirts',
        imageUrl: "/assets/images/professional_shirts/img2.jpg",
        id: 3,
        linkUrl: 'shop/professional shirts'
    },
    {
        title: 'Casual Shoes',
        imageUrl: "/assets/images/casual_shoes/img1.jpg",
        size: 'large',
        id: 4,
        linkUrl: 'shop/casual shoes'
    },
    {
        title: 'Professional Shoes',
        imageUrl: '/assets/images/professional_shoes/img2.jpg',
        size: 'large',
        id: 5,
        linkUrl: 'shop/professional shoes'
    }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default directoryReducer;