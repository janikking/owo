import logo from './logo.svg';
import './App.css';
import {Character, charVals} from './Character.js';
import {Weapons, Armour, Item} from './Item.js'
import React, {useState} from "react";
import { format } from 'react-string-format';
import {
    useHistory,
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useParams, useRouteMatch
} from "react-router-dom";

let characters = ["Glenn", "Billballs", "Ross"];
let items = [];
function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update the state to force render
}

function App(props) {
  return (
    <div className="App">
        <body>
            <Router>
                <header className="App-header">
                    <p1>TEST</p1>
                </header>
                <div className="container1">
                    <SideBar/>
                    <MainScreen/>
                </div>
            </Router>
        </body>
    </div>
  );
}

function MainScreen(props){

    return(
        <div className="mainScreen">
            <div className="mainContainer">
                <Switch>
                    <Route handler={App}>
                        <Route path="/characters" component={Characters}/>
                        <Route path="/creator" component={CharCreation}/>
                    </Route>

                </Switch>
            </div>

        </div>
    );
}




function Characters(props){
    let match = useRouteMatch();
    return(
            <div className="charMain">
                <div className="characters">
                    <div className="characterContainer">
                        <Link  to={"/creator"}>
                            <a href="javascript:void(0)"><p1>Create a new character</p1></a>
                        </Link>
                    </div>
                    {characters.map(char => (
                        <div className="characterContainer">
                            <Link  to={"/characters/" + char}>
                                <a  href="javascript:void(0)"><p1>{char}</p1></a>
                            </Link>
                        </div>
                    ))}

                </div>
                <div className="viewer">

                </div>
            </div>
    );
}


function CreateCharacter(char){

    let skills = {
        str: [char.str, char.strprof],
        con: [char.con, char.conprof],
        dex: [char.dex, char.dexprof],
        wis: [char.wis, char.wisprof],
        cha: [char.cha, char.chaprof],
    }

    let abilities = {
        "acrobatics" : char.acrobatics,
        "animalhandling" : char.animalhandling,
        "arcana" : char.arcana,
        "athletics" : char.athletics,
        "deception" : char.deception,
        "history" : char.history,
        "insight" : char.insight,
        "intimidation" : char.intimidation,
        "investigation" : char.investigation,
        "medicine" : char.medicine,
        "nature" : char.nature,
        "perception" : char.perception,
        "performance" : char.performance,
        "persuasion" : char.persuasion,
        "religion" : char.religion,
        "sleightofhand" : char.sleightofhand,
        "stealth" : char.stealth,
        "survival" : char.survival,
    }


    const x = new Character({
        name: char.name,
        age: char.age,
        background: null,
        level: char.level ,
        ac: char.ac ,
        hitpoints: char.hitpoints,
        movespeed: char.movespeed ,
        class: char.class ,
        race: char.race ,
        skills: skills,
        abilities: abilities,
        items: null,
        spells: null,
    });

    x.printhp();
    x.exportToJson();
}




function CharCreation(props){

    const update = useForceUpdate();

    const history = useHistory();

    let handleEnter = (e) => {
        if(e.key === 'Enter'){
            let x = e.target.value;
            items.push(x);
            e.target.value = "";
            console.log(items.length);
            update()
        }
    }



    let OnCharSubmit = (event) => {
        event.preventDefault();
        let stats = charVals;
        let x = stats.length;
        let z = 0;
        let b, p;
        for(let i in stats){
            b = event.target[z];
            if(b.type === "checkbox"){
                if(b.checked){
                    p = true;
                }
                else{
                    p=false;
                }
            }
            else{
                p = b.value;
            }
            stats[i] = p.toString();
            console.log(format('({0}-{1})', i, stats[i]));
            z++;
        }
        CreateCharacter(stats);
        history.goBack();
    }

    return(
        <div className="charCreate">
            <form className="charForm" onSubmit={OnCharSubmit}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <tr>
                                    <td><label>Name:</label></td>
                                    <td><input required type="text" name="name" /></td>
                                </tr>
                                <tr>
                                    <td><label>Age:</label></td>
                                    <td><input required type="number" name="age"/></td>
                                </tr>
                                <tr>
                                    <td><label>Background:</label></td>
                                    <td><input required type="text" name="background"/></td>
                                </tr>
                                <tr>
                                    <td><label>Level:</label></td>
                                    <td><input required type="number" name="level"/></td>
                                </tr>

                                <tr>
                                    <td><label>AC</label></td>
                                    <td><input required type="number" name="ac"/></td>
                                </tr>
                                <tr>
                                    <td><label>Hitpoints:</label></td>
                                    <td><input required type="number" name="hitpoints"/></td>
                                </tr>
                                <tr>
                                    <td><label>Movement speed</label></td>
                                    <td><input required type="number" name="movespeed"/></td>
                                </tr>
                                <tr>
                                    <td><label>Class:</label></td>
                                    <td>
                                        <div>
                                            <select required name="class" onChange={(e) => console.log(e.target.value)}>
                                                <option value="0">Select Race</option>
                                                <option value="paladin">Paladin</option>
                                                <option value="fighter">Fighter</option>
                                                <option value="barbarian">Barbarian</option>
                                                <option value="rogue">Rogue</option>
                                                <option value="ranger">Ranger</option>
                                                <option value="bard">Bard</option>
                                                <option value="wizard">Wizard</option>
                                                <option value="sorcerer">Sorcerer</option>
                                                <option value="cleric">Cleric</option>
                                                <option value="druid">Druid</option>
                                                <option value="artificer">Artificer</option>
                                                <option value="monk">Monk</option>
                                                <option value="bloodhunter">Blood Hunter</option>
                                            </select>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td><label>Race:</label></td>
                                    <td>
                                        <div>
                                            <select required name="race" onChange={(e) => console.log(e.target.value)}>
                                                <option value="0">Select Race</option>
                                                <option value="human">Human</option>
                                                <option value="Elf">Elf</option>
                                                <option value="Half-Elf">Half-Elf</option>
                                                <option value="Dwarf">Dwarf</option>
                                                <option value="Gnome">Gnome</option>
                                                <option value="Half-Orc">Half-Orc</option>
                                                <option value="Tiefling">Tiefling</option>
                                                <option value="Halfling">Halfling</option>
                                                <option value="Other">Other</option>
                                            </select>
                                        </div>
                                    </td>

                                </tr>
                                <tr>

                                </tr>
                            </td>
                            <td className="abilities">
                                <tr>
                                    <td><label>Strength:</label></td>
                                    <td> <input required id="xx" type="number" name="str"/></td>
                                    <td> <label>Proficient: </label></td>
                                    <td> <input type="checkbox"  name="strprof" value={ (e) => e.checked}/></td>
                                </tr>
                                <tr>
                                    <td><label>Dexterity:</label></td>
                                    <td> <input required id="xx" type="number" name="dex"/></td>
                                    <td> <label>Proficient: </label></td>
                                    <td> <input type="checkbox" name="dexprof" value={ (e) => e.checked}/></td>
                                </tr>
                                <tr>
                                    <td><label>Constitution:</label></td>
                                    <td> <input required id="xx" type="number" name="con"/></td>
                                    <td> <label>Proficient: </label></td>
                                    <td> <input type="checkbox" name="conprof" /></td>
                                </tr>
                                <tr>
                                    <td><label>Intelligence:</label></td>
                                    <td> <input required id="xx" type="number" name="int"/></td>
                                    <td> <label>Proficient: </label></td>
                                    <td> <input type="checkbox" name="intprof" value={ (e) => e.checked}/></td>
                                </tr>
                                <tr>
                                    <td><label>Wisdom:</label></td>
                                    <td> <input required id="xx" type="number" name="wis"/></td>
                                    <td> <label>Proficient: </label></td>
                                    <td> <input type="checkbox" name="wisprof" value={ (e) => e.checked}/></td>
                                </tr>
                                <tr>
                                    <td><label>Charisma:</label></td>
                                    <td> <input required id="xx" type="number" name="cha"/></td>
                                    <td> <label>Proficient: </label></td>
                                    <td> <input type="checkbox" name="chaprof" value={ (e) => e.checked}/></td>
                                </tr>
                            </td>

                            <td className="charSkills">
                                <tr>
                                    <td><label>Acrobatics</label></td>
                                    <td><input type="checkbox" name="arcobatics"/></td>
                                </tr>
                                <tr>
                                    <td><label>Animal Handling</label></td>
                                    <td><input type="checkbox" name="animalhandling"/></td>
                                </tr>
                                <tr>
                                    <td><label>Arcana</label></td>
                                    <td><input type="checkbox" name="arcana"/></td>
                                </tr>
                                <tr>
                                    <td><label>Athletics</label></td>
                                    <td><input type="checkbox" name="athletics"/></td>
                                </tr>
                                <tr>
                                    <td><label>Deception</label></td>
                                    <td><input type="checkbox" name="deception"/></td>
                                </tr>
                                <tr>
                                    <td><label>History</label></td>
                                    <td><input type="checkbox" name="history"/></td>
                                </tr>
                                <tr>
                                    <td><label>Insight</label></td>
                                    <td><input type="checkbox" name="insight"/></td>
                                </tr>
                                <tr>
                                    <td><label>Intimidation</label></td>
                                    <td><input type="checkbox" name="intimidation"/></td>
                                </tr>
                                <tr>
                                    <td><label>Investigation</label></td>
                                    <td><input type="checkbox" name="investigation"/></td>
                                </tr>
                                <tr>
                                    <td><label>Medicine</label></td>
                                    <td><input type="checkbox" name="medicine"/></td>
                                </tr>
                                <tr>
                                    <td><label>Nature</label></td>
                                    <td><input type="checkbox" name="nature"/></td>
                                </tr>
                                <tr>
                                    <td><label>Perception</label></td>
                                    <td><input type="checkbox" name="perception"/></td>
                                </tr>
                                <tr>
                                    <td><label>Performance</label></td>
                                    <td><input type="checkbox" name="performance"/></td>
                                </tr>
                                <tr>
                                    <td><label>Persuasion</label></td>
                                    <td><input type="checkbox" name="persuasion"/></td>
                                </tr>
                                <tr>
                                    <td><label>Religion</label></td>
                                    <td><input type="checkbox" name="religion"/></td>
                                </tr>
                                <tr>
                                    <td><label>Sleight of Hand</label></td>
                                    <td><input type="checkbox" name="sleightofhand"/></td>
                                </tr>
                                <tr>
                                    <td><label>Stealth</label></td>
                                    <td><input type="checkbox" name="stealth"/></td>
                                </tr>
                                <tr>
                                    <td><label>Survival</label></td>
                                    <td><input type="checkbox" name="survival"/></td>
                                </tr>
                            </td>
                        </tr>
                        <tr>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                    {/*<th>*/}
                    {/*    <tr>*/}
                    {/*        <td><input list="text" onKeyDown={handleEnter}/></td>*/}
                    {/*    </tr>*/}
                    {/*    {items.map(item => (*/}
                    {/*        <tr>*/}
                    {/*            <p1>{item}</p1>*/}
                    {/*        </tr>*/}
                    {/*    ))}*/}
                    {/*</th>*/}
                </table>
                <input  type="submit" value="Create character!"/>
            </form>
        </div>
    );

}

function SideBar(props){
    return(


            <div className="sideBar">
                <Link className="sideBarItems" to="/characters">
                    <a  href="javascript:void(0)" ><p1>Characters</p1></a>
                </Link>
                <Link className="sideBarItems" to="/spells">
                    <a href="javascript:void(0)" ><p1>Spells</p1></a>
                </Link>
                <Link className="sideBarItems" to="/monsters">
                    <a href="javascript:void(0)" ><p1>Monsters</p1></a>
                </Link>
                <Link className="sideBarItems" to="/items">
                    <a href="javascript:void(0)" ><p1>Items</p1></a>
                </Link>
                <Link className="sideBarItems" to="/npcs">
                    <a href="javascript:void(0)" ><p1>Npcs</p1></a>
                </Link>
                <Link className="sideBarItems" to="/world">
                    <a href="javascript:void(0)" ><p1>World</p1></a>
                </Link>

            </div>


    );
}


export default App;
