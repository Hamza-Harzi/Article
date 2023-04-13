 const useDarkMode = () => {

    const isDarkMode = useState('darkMode', () => false)

    const toggleDarckMode = () => {
        isDarkMode.value= !isDarkMode.value
    }

    return {
        isDarkMode,
        toggleDarckMode,
    };
};


export default useDarkMode