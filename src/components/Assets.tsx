import { WEAPON_TYPES } from "../types"
import Logo from "../assets/image/logo.png"
import Grid from "../assets/image/grid.png"
import Logo_9INE from "../assets/image/team/9INE.png"
import Logo_forZe from "../assets/image/team/forZe.png"
import Ancient_Map from "../assets/image/map/ancient_3.jpeg"
import Nuke_Map from "../assets/image/map/nuke_2.jpg"

// Weapons
import ak47_img from "../assets/image/weapons/images/ak47.png"
import aug_img from "../assets/image/weapons/images/aug.png"
import awp_img from "../assets/image/weapons/images/awp.png"
import bomb_img from "../assets/image/weapons/images/bomb.png"
import cz75a_img from "../assets/image/weapons/images/cz75a.png"
import deagle_img from "../assets/image/weapons/images/deagle.png"
import decoy_img from "../assets/image/weapons/images/decoy.png"
import defuser_img from "../assets/image/weapons/images/defuser.png"
import famas_img from "../assets/image/weapons/images/famas.png"
import fiveseven_img from "../assets/image/weapons/images/fiveseven.png"
import flashbang_img from "../assets/image/weapons/images/flashbang.png"
import galilar_img from "../assets/image/weapons/images/galilar.png"
import glock_img from "../assets/image/weapons/images/glock.png"
import hegrenade_img from "../assets/image/weapons/images/hegrenade.png"
import helm_img from "../assets/image/weapons/images/helm.png"
import hkp2000_img from "../assets/image/weapons/images/hkp2000.png"
import incgrenade_img from "../assets/image/weapons/images/incgrenade.png"
import kevlar_img from "../assets/image/weapons/images/kevlar.png"
import knife_ct_img from "../assets/image/weapons/images/knife_ct.png"
import knife_t_img from "../assets/image/weapons/images/knife_t.png"
import m4a1_img from "../assets/image/weapons/images/m4a1.png"
import m4a1_silencer_img from "../assets/image/weapons/images/m4a1_silencer.png"
import mac10_img from "../assets/image/weapons/images/mac10.png"
import mag7_img from "../assets/image/weapons/images/mag7.png"
import molotov_img from "../assets/image/weapons/images/molotov.png"
import mp9_img from "../assets/image/weapons/images/mp9.png"
import p250_img from "../assets/image/weapons/images/p250.png"
import sg556_img from "../assets/image/weapons/images/sg556.png"
import smokeGrenade_img from "../assets/image/weapons/images/smokeGrenade.png"
import ssg08_img from "../assets/image/weapons/images/ssg08.png"
import taser_img from "../assets/image/weapons/images/taser.png"
import tec9_img from "../assets/image/weapons/images/tec9.png"
import ump45_img from "../assets/image/weapons/images/ump45.png"
import usp_silencer_img from "../assets/image/weapons/images/usp_silencer.png"
import xm1014_img from "../assets/image/weapons/images/xm1014.png"
import elite_img from "../assets/image/weapons/images/elite.png"

// Icons
import ak47_icons from "../assets/image/weapons/icons/ak47.png"
import aug_icons from "../assets/image/weapons/icons/aug.png"
import awp_icons from "../assets/image/weapons/icons/awp.png"
import bomb_icons from "../assets/image/weapons/icons/bomb.png"
import cz75a_icons from "../assets/image/weapons/icons/cz75a.png"
import deagle_icons from "../assets/image/weapons/icons/deagle.png"
import decoy_icons from "../assets/image/weapons/icons/decoy.png"
import defuser_icons from "../assets/image/weapons/icons/defuser.png"
import famas_icons from "../assets/image/weapons/icons/famas.png"
import fiveseven_icons from "../assets/image/weapons/icons/fiveseven.png"
import flashbang_icons from "../assets/image/weapons/icons/flashbang.png"
import galilar_icons from "../assets/image/weapons/icons/galilar.png"
import glock_icons from "../assets/image/weapons/icons/glock.png"
import hegrenade_icons from "../assets/image/weapons/icons/hegrenade.png"
import helm_icons from "../assets/image/weapons/icons/helm.png"
import hkp2000_icons from "../assets/image/weapons/icons/hkp2000.png"
import incgrenade_icons from "../assets/image/weapons/icons/incgrenade.png"
import kevlar_icons from "../assets/image/weapons/icons/kevlar.png"
import knife_ct_icons from "../assets/image/weapons/icons/knife_ct.png"
import knife_t_icons from "../assets/image/weapons/icons/knife_t.png"
import m4a1_icons from "../assets/image/weapons/icons/m4a1.png"
import m4a1_silencer_icons from "../assets/image/weapons/icons/m4a1_silencer.png"
import mac10_icons from "../assets/image/weapons/icons/mac10.png"
import mag7_icons from "../assets/image/weapons/icons/mag7.png"
import molotov_icons from "../assets/image/weapons/icons/molotov.png"
import mp9_icons from "../assets/image/weapons/icons/mp9.png"
import p250_icons from "../assets/image/weapons/icons/p250.png"
import sg556_icons from "../assets/image/weapons/icons/sg556.png"
import smokeGrenade_icons from "../assets/image/weapons/icons/smokeGrenade.png"
import ssg08_icons from "../assets/image/weapons/icons/ssg08.png"
import taser_icons from "../assets/image/weapons/icons/taser.png"
import tec9_icons from "../assets/image/weapons/icons/tec9.png"
import ump45_icons from "../assets/image/weapons/icons/ump45.png"
import usp_silencer_icons from "../assets/image/weapons/icons/usp_silencer.png"
import xm1014_icons from "../assets/image/weapons/icons/xm1014.png"
import elite_icons from "../assets/image/weapons/icons/elite.png"

import ImgGoofy from "../assets/image/player/Goofy.png"
import ImgHades from "../assets/image/player/hades.png"
import ImgJerry from "../assets/image/player/Jerry.png"
import ImgKei from "../assets/image/player/KEi.png"
import ImgKrad from "../assets/image/player/Krad.png"
import ImgKylar from "../assets/image/player/Kylar.png"
import ImgMynio from "../assets/image/player/mynio.png"
import ImgR3Salt from "../assets/image/player/r3salt.png"
import ImgShalfey from "../assets/image/player/shalfey.png"
import ImgZorte from "../assets/image/player/zorte.png"

export const Weapon_Images = {
  [WEAPON_TYPES.AK47]: ak47_img,
  [WEAPON_TYPES.AUG]: aug_img,
  [WEAPON_TYPES.AWP]: awp_img,
  [WEAPON_TYPES.BOMB]: bomb_img,
  [WEAPON_TYPES.CZ75A]: cz75a_img,
  [WEAPON_TYPES.DEAGLE]: deagle_img,
  [WEAPON_TYPES.DECOY]: decoy_img,
  [WEAPON_TYPES.DEFUSER]: defuser_img,
  [WEAPON_TYPES.ELITE]: elite_img,
  [WEAPON_TYPES.FAMAS]: famas_img,
  [WEAPON_TYPES.FIVESEVEN]: fiveseven_img,
  [WEAPON_TYPES.FLASHBANG]: flashbang_img,
  [WEAPON_TYPES.GALILAR]: galilar_img,
  [WEAPON_TYPES.GLOCK]: glock_img,
  [WEAPON_TYPES.HEGRENADE]: hegrenade_img,
  [WEAPON_TYPES.HELM]: helm_img,
  [WEAPON_TYPES.HKP2000]: hkp2000_img,
  [WEAPON_TYPES.INCGRENADE]: incgrenade_img,
  [WEAPON_TYPES.KEVLARVEST]: kevlar_img,
  [WEAPON_TYPES.KNIFE_CT]: knife_ct_img,
  [WEAPON_TYPES.KNIFE_T]: knife_t_img,
  [WEAPON_TYPES.M4A1]: m4a1_img,
  [WEAPON_TYPES.M4A1_SILENCER]: m4a1_silencer_img,
  [WEAPON_TYPES.MAC10]: mac10_img,
  [WEAPON_TYPES.MAG7]: mag7_img,
  [WEAPON_TYPES.MOLOTOV]: molotov_img,
  [WEAPON_TYPES.MP9]: mp9_img,
  [WEAPON_TYPES.P250]: p250_img,
  [WEAPON_TYPES.SG556]: sg556_img,
  [WEAPON_TYPES.SMOKEGRENADE]: smokeGrenade_img,
  [WEAPON_TYPES.SSG08]: ssg08_img,
  [WEAPON_TYPES.TASER]: taser_img,
  [WEAPON_TYPES.TEC9]: tec9_img,
  [WEAPON_TYPES.UMP45]: ump45_img,
  [WEAPON_TYPES.USP_SILENCER]: usp_silencer_img,
  [WEAPON_TYPES.XM1014]: xm1014_img,
}

export const Weapon_Icons = {
  [WEAPON_TYPES.AK47]: ak47_icons,
  [WEAPON_TYPES.AUG]: aug_icons,
  [WEAPON_TYPES.AWP]: awp_icons,
  [WEAPON_TYPES.BOMB]: bomb_icons,
  [WEAPON_TYPES.CZ75A]: cz75a_icons,
  [WEAPON_TYPES.DEAGLE]: deagle_icons,
  [WEAPON_TYPES.DECOY]: decoy_icons,
  [WEAPON_TYPES.DEFUSER]: defuser_icons,
  [WEAPON_TYPES.ELITE]: elite_icons,
  [WEAPON_TYPES.FAMAS]: famas_icons,
  [WEAPON_TYPES.FIVESEVEN]: fiveseven_icons,
  [WEAPON_TYPES.FLASHBANG]: flashbang_icons,
  [WEAPON_TYPES.GALILAR]: galilar_icons,
  [WEAPON_TYPES.GLOCK]: glock_icons,
  [WEAPON_TYPES.HEGRENADE]: hegrenade_icons,
  [WEAPON_TYPES.HELM]: helm_icons,
  [WEAPON_TYPES.HKP2000]: hkp2000_icons,
  [WEAPON_TYPES.INCGRENADE]: incgrenade_icons,
  [WEAPON_TYPES.KEVLARVEST]: kevlar_icons,
  [WEAPON_TYPES.KNIFE_CT]: knife_ct_icons,
  [WEAPON_TYPES.KNIFE_T]: knife_t_icons,
  [WEAPON_TYPES.M4A1]: m4a1_icons,
  [WEAPON_TYPES.M4A1_SILENCER]: m4a1_silencer_icons,
  [WEAPON_TYPES.MAC10]: mac10_icons,
  [WEAPON_TYPES.MAG7]: mag7_icons,
  [WEAPON_TYPES.MOLOTOV]: molotov_icons,
  [WEAPON_TYPES.MP9]: mp9_icons,
  [WEAPON_TYPES.P250]: p250_icons,
  [WEAPON_TYPES.SG556]: sg556_icons,
  [WEAPON_TYPES.SMOKEGRENADE]: smokeGrenade_icons,
  [WEAPON_TYPES.SSG08]: ssg08_icons,
  [WEAPON_TYPES.TASER]: taser_icons,
  [WEAPON_TYPES.TEC9]: tec9_icons,
  [WEAPON_TYPES.UMP45]: ump45_icons,
  [WEAPON_TYPES.USP_SILENCER]: usp_silencer_icons,
  [WEAPON_TYPES.XM1014]: xm1014_icons,
}

export const Team_Logos = {
  forZe: Logo_forZe,
  "9INE": Logo_9INE,
}

export const Players_Image = {
  r3salt: ImgR3Salt,
  zorte: ImgZorte,
  shalfey: ImgShalfey,
  Jerry: ImgJerry,
  Krad: ImgKrad,
  Kylar: ImgKylar,
  Goofy: ImgGoofy,
  hades: ImgHades,
  KEi: ImgKei,
  mynio: ImgMynio,
}

export const Map_Image = {
  nuke: Nuke_Map,
  ancient: Ancient_Map,
}

export { Logo, Grid }
