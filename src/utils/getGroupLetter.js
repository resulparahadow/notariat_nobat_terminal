const getGroupLetter = (id) => {
    let letter;
    switch (id) {
        case 1:
            letter = 'a'
            break;
        case 2:
            letter = 'b'
            break;
        case 3:
            letter = 'ç'
            break;
        case 4:
            letter = 'd'
            break;
        default:
            letter = 'not found'
            break;
    }

    return letter;
}

export default getGroupLetter;