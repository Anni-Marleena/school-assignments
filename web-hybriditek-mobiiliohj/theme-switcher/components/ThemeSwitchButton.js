import React from "react";
import { Switch } from "react-native-paper";
import { useTheme } from "../context/UseTheme";

export default function ThemeSwitchButton() {
    const { isDarkMode, toggleDarkmode } = useTheme()

    return (
        <Switch value={isDarkMode} onValueChange={toggleDarkmode}/>
    )

}