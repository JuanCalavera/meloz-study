export let data = [
    {
        'name': 'Juan SOlferini Jurado',
        'description': 'Lorem ipsum dolor et...'
    },
    {
        'name': 'Giovana',
        'description': 'Lorem ipsum dolor et...'
    },
    {
        'name': 'Douglas',
        'description': 'Lorem ipsum dolor et...'
    }
]

export const addData = (name, description) => {
    data.push({
        'name': name,
        'description': description
    })
}