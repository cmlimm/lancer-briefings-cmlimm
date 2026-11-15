"use strict"
import f from "./frames.json"
import p from "./pilot_gear.json"
import s from "./systems.json"

const data = {
  frames: f,
  pilot_gear: p,
  systems: s,
  weapons: [], // no weapons.json in this LCP
  talents: [], // no talents.json in this LCP
}

export default data;
