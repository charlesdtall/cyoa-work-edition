const textElement = document.getElementById('text');
const optionButtonsElement = document.getElementById('optionButtons');

let state = {}

function startGame() {
    state = {}
    showTextNode(1)
}

function showTextNode(textNodeIndex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
        if (showOption) {
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('button')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}

function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
} 

function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
        return startGame();
    }
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
}

const textNodes = [
    {
        id: 1,
        text: 'Is something on your calender right now?',
        options: [
            {
                text: 'yes',
                nextText: 2
            },
            {
                text: 'no',
                nextText: 3
            }
        ]
    },
    {
        id: 2,
        text: 'Do that thing until it\'s done',
        options: [
            {
                text: 'ok it\'s done',
                nextText: -1
            }
        ]
    },
    {
        id: 3,
        text: 'Great, check your reminders. Something there?',
        options: [
            {
                text: 'yes',
                nextText: 4
            },
            {
                text: 'no',
                nextText: 5
            }
        ]
    },
    {
        id: 4,
        text: 'Do or defer it immediately.',
        options: [
            {
                text: 'yup, did that',
                nextText: -1,
            }
        ]
    },
    {
        id: 5,
        text: 'Look at the first thing on your to-do list. Have you deffered it already?',
        options: [
            {
                text: 'yes',
                nextText: 6,
            },
            {
                text: 'no',
                nextText: 4
            },
            {
                text: 'I have nothing on my list!',
                nextText: 7,
            }
        ]
    },
    {
        id: 6,
        text: 'Just freakin do it.',
        options: [
            {
                text: 'fine, did that',
                nextText: -1,
            }
        ]
    },
    {
        id: 7,
        text: 'Now, look at your first active project. Still relevant?',
        options: [
            {
                text: 'yes',
                nextText: 8,
            },
            {
                text: 'no',
                nextText: 9
            },
            {
                text: 'I have none!',
                nextText: 10,
            }
        ]
    },
    {
        id: 8,
        text: 'Come up with something to move it forward. When should it be done?',
        options: [
            {
                text: 'specific day & time',
                nextText: 11,
            },
            {
                text: 'specific day or every day',
                nextText: 12
            },
            {
                text: 'anytime',
                nextText: 13,
            }
        ]
    },
    {
        id: 9,
        text: 'Archive it!',
        options: [
            {
                text: 'ok',
                nextText: 7,
            }
        ]
    },
    {
        id: 10,
        text: 'Start a new project!',
        options: [
            {
                text: 'ok!',
                nextText: 8,
            }
        ]
    },
    {
        id: 11,
        text: 'Put it in your calender',
        options: [
            {
                text: 'ok, done!',
                nextText: -1,
            }
        ]
    },
    {
        id: 12,
        text: 'Put it in your reminders',
        options: [
            {
                text: 'ok, it\'s there.',
                nextText: -1,
            }
        ]
    },
    {
        id: 13,
        text: 'Put it on your to-do list.',
        options: [
            {
                text: 'Ok, done.',
                nextText: -1,
            }
        ]
    },
    
]

startGame()