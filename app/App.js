
import { Content } from "./components/Content.js";
import { Header } from "./components/Header.js";
import { Footer } from "./components/Footer.js";
import {Style} from "./components/Style.js";

export const App = () => {

    let divRoot = document.querySelector("#root")

    
    divRoot.append(Content())
    divRoot.append(Header())
    divRoot.append(Footer())
    divRoot.append(Style())
}