import {Weapons, Item, Armour} from "./Item";
import {format} from "react-string-format";
import {useState} from "react";
//import '../resources/Characters.json';
export class Character{

    // files;
    // name ;
    // age ;
    // background;
    // level ;
    // ac ;
    // hitpoints;
    // movespeed ;
    // class ;
    // race ;
    // skills;
    // abilities;
    // items ;
    // spells ;



    constructor(props){
        this._files = props;
        this._name = props.name;
        this._age = props.age;
        this._background = props.background;
        this._level = props.level;
        this._ac = props.ac;
        this._hitpoints = props.hitpoints;
        this._movespeed = props.movespeed;
        this._class = props.class;
        this._race = props.race;
        this._skills = props.skills;
        this._abilities = props.abilities;
        this._items = null;
        this._spells = null;
    }


    exportToJson(){
        let x = JSON.stringify(this._files);
        let fs = require("fs");
        let s = format('{0}_character.json', this._name);
        fs.writeFile(s, x);
    }

    printhp(){
        console.log(this.hitpoints, this._name);
    }


    get files() {
        return this._files;
    }

    set files(value) {
        this._files = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }

    get background() {
        return this._background;
    }

    set background(value) {
        this._background = value;
    }

    get level() {
        return this._level;
    }

    set level(value) {
        this._level = value;
    }

    get ac() {
        return this._ac;
    }

    set ac(value) {
        this._ac = value;
    }

    get hitpoints() {
        return this._hitpoints;
    }

    set hitpoints(value) {
        this._hitpoints = value;
    }

    get movespeed() {
        return this._movespeed;
    }

    set movespeed(value) {
        this._movespeed = value;
    }

    get class() {
        return this._class;
    }

    set class(value) {
        this._class = value;
    }

    get race() {
        return this._race;
    }

    set race(value) {
        this._race = value;
    }

    get skills() {
        return this._skills;
    }

    set skills(value) {
        this._skills = value;
    }

    get abilities() {
        return this._abilities;
    }

    set abilities(value) {
        this._abilities = value;
    }

    get items() {
        return this._items;
    }

    set items(value) {
        this._items = value;
    }

    get spells() {
        return this._spells;
    }

    set spells(value) {
        this._spells = value;
    }





}

export const charVals = {
    "name" : "",
    "age" : "",
    "background" : "",
    "level" : "",
    "ac" : "",
    "hitpoints" : "",
    "movespeed" : "",
    "class" : "",
    "race" : "",
    "str" : "",
    "strprof" : "",
    "dex" : "",
    "dexprof" : "",
    "con" : "",
    "conprof" : "",
    "int" : "",
    "intprof" : "",
    "wis" : "",
    "wisprof" : "",
    "cha" : "",
    "chaprof" : "",
    "acrobatics" : "",
    "animalhandling" : "",
    "arcana" : "",
    "athletics" : "",
    "deception" : "",
    "history" : "",
    "insight" : "",
    "intimidation" : "",
    "investigation" : "",
    "medicine" : "",
    "nature" : "",
    "perception" : "",
    "performance" : "",
    "persuasion" : "",
    "religion" : "",
    "sleightofhand" : "",
    "stealth" : "",
    "survival" : "",
};
