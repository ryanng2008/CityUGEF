interface Category {
    id: number;
    title: string;
    description: string;
    imageLink: string;
    tags: {
        curriculum: string;
        grade: string;
        author: string;
        subject: string;
    }
}

export const categories: Category[] = [
    {
        id: 1,
        title: 'Logarithms',
        description: 'hello hello',
        imageLink: '',
        tags: {
            curriculum: 'myp extmath',
            subject: 'math',
            grade: 'y11',
            author: 'Ryan Ng',
        }

    },
    {
        id: 2,
        title: 'Derivatives: Product Rule',
        description: 'Calculus I',
        imageLink: '',
        tags: {
            curriculum: 'igcse',
            subject: 'maths',
            grade: 'y12',
            author: 'John Smith'
        }

    },
    {
        id: 3,
        title: 'Series',
        description: 'Infinite series questions',
        imageLink: '',
        tags: {
            curriculum: 'ib',
            subject: 'maths aa hl',
            grade: 'y13',
            author: 'Anthony Lui'
        }

    },
    {
        id: 4,
        title: 'Fractions',
        description: 'I\'m not sure',
        imageLink: '',
        tags: {
            curriculum: 'myp stdmath',
            subject: 'math',
            grade: 'y10',
            author: 'John Brown'
        }

    },
    {
        id: 5,
        title: 'Binomial Expansion',
        description: 'expanding da bracketssss',
        imageLink: '',
        tags: {
            curriculum: 'general',
            subject: 'math',
            grade: 'y8',
            author: 'Ryan Ng'
        }

    },
    {
        id: 6,
        title: 'Quadratics',
        description: 'Quadratics',
        imageLink: '',
        tags: {
            curriculum: 'myp',
            subject: 'math',
            grade: 'y10',
            author: 'Ryan Ng'
        }

    },
    //{
    //    id: 0,
    //    title: '',
    //    description: '',
    //    imageLink: '',
    //    tags: {
    //        curriculum: '',
    //        subject: '',
    //        grade: '',
    //        author: ''
    //    }
    //
    //},
    
]

