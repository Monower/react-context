import { useThemeContext } from "../context/Theme/context";

const Card = () => {
    const theme = useThemeContext();
    console.log(theme);
    return (<>
        This is card {theme.theme}
        <button onClick={() => theme?.setTheme('red')}>change</button>
    </>)
};

export default Card;