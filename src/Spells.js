import { GlobalContext } from "./Context/GlobalContext";
import { useContext } from "react";
import spellNames from "./Data/SpellsName";

const Spells = () => {

    const state = useContext(GlobalContext);
    const getSpellsByFirstLetter = [];

    for (let i = 97; i <= 122; i++) {
        getSpellsByFirstLetter.push(String.fromCharCode(i));
    }

    // href={'https://roll20.net/compendium/dnd5e/' + spell}
    return (
        <div>
            <h1>Spells</h1>
            {getSpellsByFirstLetter.map((letter, index) => {
                return (
                    <div key={index}>
                        <h2>{letter.toUpperCase()}</h2>
                        <div className="grid">
                            {spellNames.filter(name => name.charAt(0).toLowerCase() === letter).map((spell, index) =>
                                <p key={index} title={spell} className="individualSpells" onClick={() => {
                                    state.setModalPage("spells");
                                    state.setModalVisible(true);
                                    state.grabSpellData(spell);
                                }}>{spell}</p>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

// 'https://open5e.com/spells/'+spell.replace(/[\n\r\s\t]+/g, '-').replace('\'', '').toLowerCase()
export default Spells;