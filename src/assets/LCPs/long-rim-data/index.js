"use strict"
import f from "./frames.json"
import s from "./systems.json"
import w from "./weapons.json"
import t from "./talents.json"

const data = {
  frames: f,
  pilot_gear: [], // no pilot_gear.json in this LCP
  systems: s,
  weapons: w,
  talents: t,
}

export default data;
