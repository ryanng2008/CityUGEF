
interface QuestionObject {
    index: number,
    question: string,
    vars: string[][]
}

// ADD INDEX 2 IN THE VAR ARRAY, add 'm' 
// QUESTIONS IN LATEX FORMAT IF WANTED

const logarithms: QuestionObject[] = [
    { // THIS IS A BUG BECAUSE OF STRICT MODE
        index: 1, 
        question: 'Evaluate $\\log_{{:1:}} {{:2:}}^{{:3:}}$',
        vars: [
            ['{:1:}','rand(2,20)'],
            ['{:2:}','{:1:}'],
            ['{:3:}','rand(6,24)'],
        ]
    },
    //{
    //    index: 2,
    //    question: '',
    //    vars: [
    //        [],
    //    ]
    //}
]

const derivativesProductRule: QuestionObject[] = [
    {
        index: 1,
        question: 'Given that $f(x) = x^{{:1:}}sin^{{:2:}}(x)$, find $f\'(x).$',
        vars: [
            ['{:1:}','rand(1,4)','m'],
            ['{:2:}','rand(1,4)','m'],
        ]
    },
    {
        index: 2,
        question: '',
        vars: [
            [],
        ]
    },
]

const series: QuestionObject[] = [
    {
        index: 1,
        question: 'Find the value of $S$, where $S = \\sum_{n=1}^{\\infty} (\\frac{1}{{:1:}})^{n} $',
        vars: [
            ['{:1:}','rand(2,10)'],
        ]
    },
    {
        index: 2,
        question: '',
        vars: [
            [],
        ]
    },
]

const fractions: QuestionObject[] = [
    {
        index: 1,
        question: 'Simplify $\\dfrac{{:4:}}{{:5:}}$',
        vars: [
            ['{:1:}','rand(1, 20)'],
            ['{:2:}','rand(1, 20)'],
            ['{:3:}','rand(5,37)'],
            ['{:4:}','{:1:}*{:3:}'],
            ['{:5:}','{:2:}*{:3:}'],
        ]
    },
]

const binomialExpansion: QuestionObject[] = [
    {
        index: 1,
        question: 'Simplify $({:1:} + \\sqrt{{:2:}})^{{:3:}}.$',
        vars: [
            ['{:1:}', 'rand(5, 10)'],
            ['{:2:}', '{:1:} - rand(2, 3)'],
            ['{:3:}', 'rand(2, 6)']
        ],
    },
    {
        index: 2,
        question: 'Expand $(x + {:1:})^{{:2:}}.$',
        vars: [
            ['{:1:}', 'rand(5, 9)'],
            ['{:2:}', 'rand(2,7)']
        ],
    }
]

const quadratics: QuestionObject[] = [
    {
        index: 1,
        question: 'Solve the equation $\\sqrt{{:1:}x {:6:} {:2:}} + \\sqrt{{:3:}x {:7:} {:4:}} = {:5:}. $',
        vars: [
            ['{:1:}','rand(1,8)','m'],
            ['{:2:}','rand(1, 8)'],
            ['{:3:}','rand(1,6)','m'],
            ['{:4:}','rand(1, 8)'],
            ['{:5:}','rand(4, 12)'],
            ['{:6:}','rsign()'],
            ['{:7:}','rsign()'],
        ]
    }, 
    {
        index: 2,
        question: 'Find the intersection point of the equations ${:1:}x^{2} {:2:} {:3:}x {:4:} {:5:} $ and ${:6:}x + {:7:}.$',
        vars: [
            ['{:1:}','rand(1,3)','m'],
            ['{:2:}','rsign()'],
            ['{:3:}','rand(1,10)','m'],
            ['{:4:}','rsign()'],
            ['{:5:}','rand(1,16)'],
            ['{:6:}','rand(1,9)','m'],
            ['{:7:}','rand(8,20)'],
              ]
    },
    {
        index: 3,
        question: '',
        vars: [
            [],
        ]
    },
]




interface GlobalList {
    [key: string]: QuestionObject[];
}

export const globalList: GlobalList = {
    '1': logarithms,
    '2': derivativesProductRule,
    '3': series,
    '4': fractions,
    '5': binomialExpansion,
    '6': quadratics,
}
