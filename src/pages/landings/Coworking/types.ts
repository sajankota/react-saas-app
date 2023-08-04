export type Feature = {
    icon: string;
    title: string;
    description: string;
}

export type SpaceOption = {
    image: string;
    title: string;
    description: string;
    space: {
        icon: string;
        value: string;
    };
}

export type Testimonial = {
    statement: string;
    customer: {
        avatar: string;
        name: string;
        designation: string;
    };
    logo: string;
}
