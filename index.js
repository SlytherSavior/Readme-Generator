const getStackSource = (techstackInput) => `https://skillicons.dev/icons?i=${techstackInput}`;

const getAnimatedTyping = (data) => {
    console.log(encodeURIComponent(data).replace(/%20/g, '+'));
    const encodedData = encodeURIComponent(data) // using regex to search
        .replace(/%20/g, "+")
        .replace(/(?:\+%3B\+|\+%3B|%3B\+|%3B) ?/g, ';') //match various occurences of these pattern
    return encodedData;
}

