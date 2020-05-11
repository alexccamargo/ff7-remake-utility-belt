import React, { useState } from 'react'

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';

import { makeStyles } from '@material-ui/core/styles';
import { effectFactory } from '../models/effect';

import './Weapon.css'

const useStyles = makeStyles((theme) => ({
    listRoot: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
    },
}));


export const Weapon = (props) => {
    const classes = useStyles();

    const character = props.character
    const weapon = (character.weapons || []).find(w => w.id === props.selectedWeapon)
    const effects = new Map((weapon.cores || []).flatMap(c => c.effects).map(e => [e.id, effectFactory(e)]))

    const [selectedEffect, setSelectedEffect] = useState([]);

    const handleToggle = (event) => {
        let newEffectList = [...selectedEffect];
        if (!event.target.checked) {
            newEffectList = newEffectList.filter(se => se !== event.target.name)
        } else {
            newEffectList.push(event.target.name)
        }
        setSelectedEffect(newEffectList)
    };

    const renderEffects = (core) => {
        if (!core.effects)
            return <p>No effects found.</p>

        return (
            <List className={classes.listRoot}>
                {
                    core.effects.map(e => {
                        const effect = effects.get(e.id) || {}

                        return (
                            <ListItem key={effect.id}>
                                <ListItemText id={`lable-${effect.id}`} primary={effect.name} />
                                <ListItemSecondaryAction>
                                    <Switch
                                        edge="end"
                                        onChange={handleToggle}
                                        name={effect.id}
                                        checked={selectedEffect[effect.id]}
                                        inputProps={{ 'aria-labelledby': `lable-${effect.id}` }}
                                    />
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })
                }
            </List>
        );
    }

    const renderCores = () => {
        if (!weapon.cores)
            return <p>No cores</p>

        return (
            weapon.cores.map(core => (
                <ExpansionPanel key={core.id}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={core.id}
                        id={core.id}
                    >
                        {core.name}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        {renderEffects(core)}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            ))
        )

    }

    const calculateStats = (selectedEffect) => {
        let stats = {
            attackPower: weapon.attackPower,
            magicAttackPower: weapon.magicAttackPower,
            defense: weapon.defense,
            magicDefense: weapon.magicDefense
        }

        selectedEffect.forEach((effect) => {
            stats = effects.get(effect).applyEffect(stats)
        });

        return stats;
    }

    const renderWeaponStats = (selectedEffect) => {
        const stats = calculateStats(selectedEffect);
        return (
            <table className="weapon-stats">
                <thead>
                    <tr>
                        <th>AP</th>
                        <th>MP</th>
                        <th>Def</th>
                        <th>MDef</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{stats.attackPower}</td>
                        <td>{stats.magicAttackPower}</td>
                        <td>{stats.defense}</td>
                        <td>{stats.magicDefense}</td>
                    </tr>
                </tbody>
            </table>
        )

    }

    return (
        <div>
            <h1>{character.name}</h1>
            <h2>{weapon.name}</h2>
            {renderWeaponStats(selectedEffect)}
            {renderCores()}
        </div>
    )
}
