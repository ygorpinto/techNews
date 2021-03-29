import { Route, Switch } from 'react-router-dom'
import { Artigos } from './pages/Artigos/Artigos'
import { Home } from './pages/Home/Home'
import { Sobre } from './pages/Sobre/Sobre'
import { Tecnologias } from './pages/Tecnologias/Tecnologias'

export default function MainRoutes() {
    return (
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <Sobre />
                </Route>
                <Route path="/tech">
                    <Tecnologias />
                </Route>
                <Route path="/articles">
                    <Artigos />
                </Route>
            </Switch>
    )
}
