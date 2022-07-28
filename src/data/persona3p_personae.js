// Derived from:
//  http://www.gamefaqs.com/ps2/937269-shin-megami-tensei-persona-3-fes/faqs/52659
//  http://www.gamefaqs.com/ps2/937269-shin-megami-tensei-persona-3-fes/faqs/53404
//  http://www.gamefaqs.com/ps2/937269-shin-megami-tensei-persona-3-fes/faqs/52531
//  http://db.gamefaqs.com//portable/psp//file/persona_3_portable_fusion.png

const personae = [
    { 'name': 'Orpheus', 'level': 1, 'arcana': 'Fool', 'special': true },
    { 'name': 'Slime', 'level': 12, 'arcana': 'Fool' },
    { 'name': 'Legion', 'level': 22, 'arcana': 'Fool' },
    { 'name': 'Black Frost', 'level': 34, 'arcana': 'Fool', 'special': true },
    { 'name': 'Ose', 'level': 44, 'arcana': 'Fool' },
    { 'name': 'Decarabia', 'level': 50, 'arcana': 'Fool' },
    { 'name': 'Loki', 'level': 58, 'arcana': 'Fool' },
    { 'name': 'Susano-o', 'level': 76, 'arcana': 'Fool', 'max': true, 'special': true },
    { 'name': 'Orpheus Telos', 'level': 90, 'arcana': 'Fool', 'special': true },
    { 'name': 'Nekomata', 'level': 5, 'arcana': 'Magician' },
    { 'name': 'Jack Frost', 'level': 8, 'arcana': 'Magician' },
    { 'name': 'Pyro Jack', 'level': 14, 'arcana': 'Magician' },
    { 'name': 'Hua Po', 'level': 20, 'arcana': 'Magician', 'item': true },
    { 'name': 'Sati', 'level': 28, 'arcana': 'Magician' },
    { 'name': 'Orobas', 'level': 34, 'arcana': 'Magician' },
    { 'name': 'Rangda', 'level': 40, 'arcana': 'Magician' },
    { 'name': 'Surt', 'level': 52, 'arcana': 'Magician', 'max': true },
    { 'name': 'Apsaras', 'level': 3, 'arcana': 'Priestess' },
    { 'name': 'Unicorn', 'level': 11, 'arcana': 'Priestess' },
    { 'name': 'High Pixie', 'level': 21, 'arcana': 'Priestess' },
    { 'name': 'Sarasvati', 'level': 27, 'arcana': 'Priestess' },
    { 'name': 'Ganga', 'level': 35, 'arcana': 'Priestess' },
    { 'name': 'Parvati', 'level': 47, 'arcana': 'Priestess' },
    { 'name': 'Kikuri-hime', 'level': 53, 'arcana': 'Priestess' },
    { 'name': 'Scathach', 'level': 64, 'arcana': 'Priestess', 'max': true },
    { 'name': 'Leanan Sidhe', 'level': 33, 'arcana': 'Empress' },
    { 'name': 'Yaksini', 'level': 50, 'arcana': 'Empress' },
    { 'name': 'Laksmi', 'level': 57, 'arcana': 'Empress' },
    { 'name': 'Hariti', 'level': 62, 'arcana': 'Empress' },
    { 'name': 'Gabriel', 'level': 69, 'arcana': 'Empress' },
    { 'name': 'Mother Harlot', 'level': 74, 'arcana': 'Empress' },
    { 'name': 'Skadi', 'level': 80, 'arcana': 'Empress' },
    { 'name': 'Alilat', 'level': 84, 'arcana': 'Empress', 'max': true },
    { 'name': 'Forneus', 'level': 7, 'arcana': 'Emperor' },
    { 'name': 'Oberon', 'level': 15, 'arcana': 'Emperor' },
    { 'name': 'Take-mikazuchi', 'level': 24, 'arcana': 'Emperor' },
    { 'name': 'King Frost', 'level': 30, 'arcana': 'Emperor', 'item': true },
    { 'name': 'Raja Naga', 'level': 36, 'arcana': 'Emperor' },
    { 'name': 'Kingu', 'level': 46, 'arcana': 'Emperor' },
    { 'name': 'Barong', 'level': 52, 'arcana': 'Emperor' },
    { 'name': 'Odin', 'level': 57, 'arcana': 'Emperor', 'max': true },
    { 'name': 'Omoikane', 'level': 7, 'arcana': 'Hierophant' },
    { 'name': 'Berith', 'level': 13, 'arcana': 'Hierophant' },
    { 'name': 'Shiisaa', 'level': 26, 'arcana': 'Hierophant' },
    { 'name': 'Flauros', 'level': 33, 'arcana': 'Hierophant' },
    { 'name': 'Thoth', 'level': 41, 'arcana': 'Hierophant', 'item': true },
    { 'name': 'Hokuto Seikun', 'level': 47, 'arcana': 'Hierophant' },
    { 'name': 'Daisoujou', 'level': 53, 'arcana': 'Hierophant', 'special': true },
    { 'name': 'Kohryu', 'level': 66, 'arcana': 'Hierophant', 'max': true, 'special': true },
    { 'name': 'Pixie', 'level': 2, 'arcana': 'Lovers' },
    { 'name': 'Alp', 'level': 6, 'arcana': 'Lovers' },
    { 'name': 'Tam Lin', 'level': 13, 'arcana': 'Lovers' },
    { 'name': 'Narcissus', 'level': 20, 'arcana': 'Lovers' },
    { 'name': 'Queen Mab', 'level': 27, 'arcana': 'Lovers' },
    { 'name': 'Saki Mitama', 'level': 39, 'arcana': 'Lovers' },
    { 'name': 'Titania', 'level': 48, 'arcana': 'Lovers' },
    { 'name': 'Raphael', 'level': 61, 'arcana': 'Lovers' },
    { 'name': 'Cybele', 'level': 68, 'arcana': 'Lovers', 'max': true },
    { 'name': 'Ara Mitama', 'level': 6, 'arcana': 'Chariot' },
    { 'name': 'Chimera', 'level': 9, 'arcana': 'Chariot' },
    { 'name': 'Zouchouten', 'level': 14, 'arcana': 'Chariot' },
    { 'name': 'Ares', 'level': 19, 'arcana': 'Chariot' },
    { 'name': 'Oumitsunu', 'level': 30, 'arcana': 'Chariot' },
    { 'name': 'Nata Taishi', 'level': 37, 'arcana': 'Chariot', 'item': true },
    { 'name': 'Koumokuten', 'level': 43, 'arcana': 'Chariot' },
    { 'name': 'Thor', 'level': 53, 'arcana': 'Chariot', 'max': true },
    { 'name': 'Angel', 'level': 4, 'arcana': 'Justice' },
    { 'name': 'Archangel', 'level': 10, 'arcana': 'Justice' },
    { 'name': 'Principality', 'level': 16, 'arcana': 'Justice' },
    { 'name': 'Power', 'level': 25, 'arcana': 'Justice' },
    { 'name': 'Virtue', 'level': 32, 'arcana': 'Justice' },
    { 'name': 'Dominion', 'level': 42, 'arcana': 'Justice' },
    { 'name': 'Throne', 'level': 51, 'arcana': 'Justice' },
    { 'name': 'Melchizedek', 'level': 59, 'arcana': 'Justice', 'max': true },
    { 'name': 'Yomotsu Shikome', 'level': 9, 'arcana': 'Hermit' },
    { 'name': 'Naga', 'level': 17, 'arcana': 'Hermit' },
    { 'name': 'Lamia', 'level': 25, 'arcana': 'Hermit' },
    { 'name': 'Mothman', 'level': 32, 'arcana': 'Hermit' },
    { 'name': 'Taraka', 'level': 38, 'arcana': 'Hermit' },
    { 'name': 'Kurama Tengu', 'level': 44, 'arcana': 'Hermit' },
    { 'name': 'Nebiros', 'level': 50, 'arcana': 'Hermit', 'item': true },
    { 'name': 'Kumbhanda', 'level': 56, 'arcana': 'Hermit' },
    { 'name': 'Arahabaki', 'level': 60, 'arcana': 'Hermit', 'max': true, 'special': true },
    { 'name': 'Fortuna', 'level': 17, 'arcana': 'Fortune' },
    { 'name': 'Empusa', 'level': 23, 'arcana': 'Fortune', 'item': true },
    { 'name': 'Kusi Mitama', 'level': 29, 'arcana': 'Fortune' },
    { 'name': 'Clotho', 'level': 38, 'arcana': 'Fortune' },
    { 'name': 'Lachesis', 'level': 45, 'arcana': 'Fortune' },
    { 'name': 'Atropos', 'level': 54, 'arcana': 'Fortune' },
    { 'name': 'Norn', 'level': 62, 'arcana': 'Fortune', 'max': true, 'special': true },
    { 'name': 'Valkyrie', 'level': 11, 'arcana': 'Strength' },
    { 'name': 'Rakshasa', 'level': 16, 'arcana': 'Strength' },
    { 'name': 'Titan', 'level': 23, 'arcana': 'Strength' },
    { 'name': 'Jikokuten', 'level': 29, 'arcana': 'Strength' },
    { 'name': 'Hanuman', 'level': 37, 'arcana': 'Strength' },
    { 'name': 'Narasimha', 'level': 46, 'arcana': 'Strength' },
    { 'name': 'Kali', 'level': 55, 'arcana': 'Strength' },
    { 'name': 'Siegfried', 'level': 59, 'arcana': 'Strength', 'max': true },
    { 'name': 'Inugami', 'level': 10, 'arcana': 'Hanged Man' },
    { 'name': 'Take-minakata', 'level': 21, 'arcana': 'Hanged Man' },
    { 'name': 'Orthrus', 'level': 28, 'arcana': 'Hanged Man' },
    { 'name': 'Vasuki', 'level': 38, 'arcana': 'Hanged Man' },
    { 'name': 'Ubelluris', 'level': 48, 'arcana': 'Hanged Man' },
    { 'name': 'Hecatoncheires', 'level': 54, 'arcana': 'Hanged Man' },
    { 'name': 'Hell Biker', 'level': 60, 'arcana': 'Hanged Man', 'item': true },
    { 'name': 'Attis', 'level': 67, 'arcana': 'Hanged Man', 'max': true, 'special': true },
    { 'name': 'Ghoul', 'level': 18, 'arcana': 'Death' },
    { 'name': 'Pale Rider', 'level': 24, 'arcana': 'Death', 'item': true },
    { 'name': 'Loa', 'level': 31, 'arcana': 'Death' },
    { 'name': 'Samael', 'level': 37, 'arcana': 'Death' },
    { 'name': 'Mot', 'level': 45, 'arcana': 'Death' },
    { 'name': 'Alice', 'level': 56, 'arcana': 'Death', 'special': true },
    { 'name': 'Thanatos', 'level': 64, 'arcana': 'Death', 'max': true, 'special': true },
    { 'name': 'Nigi Mitama', 'level': 12, 'arcana': 'Temperance' },
    { 'name': 'Mithra', 'level': 22, 'arcana': 'Temperance' },
    { 'name': 'Genbu', 'level': 29, 'arcana': 'Temperance' },
    { 'name': 'Seiryuu', 'level': 36, 'arcana': 'Temperance' },
    { 'name': 'Okuninushi', 'level': 44, 'arcana': 'Temperance' },
    { 'name': 'Suzaku', 'level': 51, 'arcana': 'Temperance' },
    { 'name': 'Byakko', 'level': 57, 'arcana': 'Temperance' },
    { 'name': 'Yurlungur', 'level': 64, 'arcana': 'Temperance', 'max': true },
    { 'name': 'Lilim', 'level': 8, 'arcana': 'Devil' },
    { 'name': 'Mokoi', 'level': 18, 'arcana': 'Devil' },
    { 'name': 'Vetala', 'level': 24, 'arcana': 'Devil' },
    { 'name': 'Incubus', 'level': 34, 'arcana': 'Devil' },
    { 'name': 'Succubus', 'level': 43, 'arcana': 'Devil' },
    { 'name': 'Pazuzu', 'level': 52, 'arcana': 'Devil' },
    { 'name': 'Lilith', 'level': 61, 'arcana': 'Devil', 'item': true, 'special': true },
    { 'name': 'Abaddon', 'level': 68, 'arcana': 'Devil' },
    { 'name': 'Beelzebub', 'level': 81, 'arcana': 'Devil', 'max': true, 'special': true },
    { 'name': 'Eligor', 'level': 31, 'arcana': 'Tower' },
    { 'name': 'Cu Chulainn', 'level': 40, 'arcana': 'Tower' },
    { 'name': 'Bishamonten', 'level': 60, 'arcana': 'Tower' },
    { 'name': 'Seiten Taisei', 'level': 67, 'arcana': 'Tower' },
    { 'name': 'Masakado', 'level': 73, 'arcana': 'Tower', 'item': true, 'special': true },
    { 'name': 'Mara', 'level': 77, 'arcana': 'Tower', 'special': true },
    { 'name': 'Shiva', 'level': 82, 'arcana': 'Tower', 'special': true },
    { 'name': 'Chi You', 'level': 86, 'arcana': 'Tower', 'max': true },
    { 'name': 'Neko Shogun', 'level': 19, 'arcana': 'Star' },
    { 'name': 'Setanta', 'level': 28, 'arcana': 'Star' },
    { 'name': 'Nandi', 'level': 39, 'arcana': 'Star' },
    { 'name': 'Kaiwan', 'level': 49, 'arcana': 'Star' },
    { 'name': 'Ganesha', 'level': 58, 'arcana': 'Star' },
    { 'name': 'Garuda', 'level': 65, 'arcana': 'Star' },
    { 'name': 'Kartikeya', 'level': 70, 'arcana': 'Star', 'item': true },
    { 'name': 'Saturnus', 'level': 78, 'arcana': 'Star' },
    { 'name': 'Helel', 'level': 88, 'arcana': 'Star', 'max': true },
    { 'name': 'Gurr', 'level': 15, 'arcana': 'Moon' },
    { 'name': 'Yamatano-orochi', 'level': 26, 'arcana': 'Moon' },
    { 'name': 'Girimehkala', 'level': 42, 'arcana': 'Moon', 'special': true },
    { 'name': 'Dionysus', 'level': 48, 'arcana': 'Moon' },
    { 'name': 'Chernobog', 'level': 58, 'arcana': 'Moon' },
    { 'name': 'Seth', 'level': 66, 'arcana': 'Moon' },
    { 'name': 'Baal Zebul', 'level': 71, 'arcana': 'Moon' },
    { 'name': 'Sandalphon', 'level': 74, 'arcana': 'Moon', 'max': true, 'special': true },
    { 'name': 'Yatagarasu', 'level': 30, 'arcana': 'Sun' },
    { 'name': 'Quetzalcoatl', 'level': 43, 'arcana': 'Sun' },
    { 'name': 'Jatayu', 'level': 55, 'arcana': 'Sun' },
    { 'name': 'Horus', 'level': 63, 'arcana': 'Sun' },
    { 'name': 'Suparna', 'level': 70, 'arcana': 'Sun' },
    { 'name': 'Vishnu', 'level': 78, 'arcana': 'Sun' },
    { 'name': 'Asura', 'level': 85, 'arcana': 'Sun', 'max': true, 'special': true },
    { 'name': 'Anubis', 'level': 59, 'arcana': 'Judgement' },
    { 'name': 'Trumpeter', 'level': 65, 'arcana': 'Judgement' },
    { 'name': 'Michael', 'level': 72, 'arcana': 'Judgement' },
    { 'name': 'Satan', 'level': 79, 'arcana': 'Judgement' },
    { 'name': 'Lucifer', 'level': 89, 'arcana': 'Judgement', 'special': true },
    { 'name': 'Messiah', 'level': 90, 'arcana': 'Judgement', 'max': true, 'special': true },
    { 'name': 'Uriel', 'level': 63, 'arcana': 'Aeon' },
    { 'name': 'Nidhoggr', 'level': 69, 'arcana': 'Aeon' },
    { 'name': 'Ananta', 'level': 75, 'arcana': 'Aeon' },
    { 'name': 'Atavaka', 'level': 80, 'arcana': 'Aeon' },
    { 'name': 'Metatron', 'level': 87, 'arcana': 'Aeon', 'max': true, 'special': true },
];

const persona = [
    {
        "name": "Orpheus",
        "level": 1,
        "arcana": "Fool",
        "special": true
    },
    {
        "name": "Slime",
        "level": 12,
        "arcana": "Fool"
    },
    {
        "name": "Legion",
        "level": 22,
        "arcana": "Fool"
    },
    {
        "name": "Black Frost",
        "level": 34,
        "arcana": "Fool",
        "special": true
    },
    {
        "name": "Ose",
        "level": 44,
        "arcana": "Fool"
    },
    {
        "name": "Decarabia",
        "level": 50,
        "arcana": "Fool"
    },
    {
        "name": "Loki",
        "level": 58,
        "arcana": "Fool"
    },
    {
        "name": "Susano-o",
        "level": 76,
        "arcana": "Fool",
        "max": true,
        "special": true
    },
    {
        "name": "Orpheus Telos",
        "level": 90,
        "arcana": "Fool",
        "special": true
    },
    {
        "name": "Nekomata",
        "level": 5,
        "arcana": "Magician"
    },
    {
        "name": "Jack Frost",
        "level": 8,
        "arcana": "Magician"
    },
    {
        "name": "Pyro Jack",
        "level": 14,
        "arcana": "Magician"
    },
    {
        "name": "Hua Po",
        "level": 20,
        "arcana": "Magician",
        "item": true
    },
    {
        "name": "Sati",
        "level": 28,
        "arcana": "Magician"
    },
    {
        "name": "Orobas",
        "level": 34,
        "arcana": "Magician"
    },
    {
        "name": "Rangda",
        "level": 40,
        "arcana": "Magician"
    },
    {
        "name": "Surt",
        "level": 52,
        "arcana": "Magician",
        "max": true
    },
    {
        "name": "Apsaras",
        "level": 3,
        "arcana": "Priestess"
    },
    {
        "name": "Unicorn",
        "level": 11,
        "arcana": "Priestess"
    },
    {
        "name": "High Pixie",
        "level": 21,
        "arcana": "Priestess"
    },
    {
        "name": "Sarasvati",
        "level": 27,
        "arcana": "Priestess"
    },
    {
        "name": "Ganga",
        "level": 35,
        "arcana": "Priestess"
    },
    {
        "name": "Parvati",
        "level": 47,
        "arcana": "Priestess"
    },
    {
        "name": "Kikuri-hime",
        "level": 53,
        "arcana": "Priestess"
    },
    {
        "name": "Scathach",
        "level": 64,
        "arcana": "Priestess",
        "max": true
    },
    {
        "name": "Leanan Sidhe",
        "level": 33,
        "arcana": "Empress"
    },
    {
        "name": "Yaksini",
        "level": 50,
        "arcana": "Empress"
    },
    {
        "name": "Laksmi",
        "level": 57,
        "arcana": "Empress"
    },
    {
        "name": "Hariti",
        "level": 62,
        "arcana": "Empress"
    },
    {
        "name": "Gabriel",
        "level": 69,
        "arcana": "Empress"
    },
    {
        "name": "Mother Harlot",
        "level": 74,
        "arcana": "Empress"
    },
    {
        "name": "Skadi",
        "level": 80,
        "arcana": "Empress"
    },
    {
        "name": "Alilat",
        "level": 84,
        "arcana": "Empress",
        "max": true
    },
    {
        "name": "Forneus",
        "level": 7,
        "arcana": "Emperor"
    },
    {
        "name": "Oberon",
        "level": 15,
        "arcana": "Emperor"
    },
    {
        "name": "Take-mikazuchi",
        "level": 24,
        "arcana": "Emperor"
    },
    {
        "name": "King Frost",
        "level": 30,
        "arcana": "Emperor",
        "item": true
    },
    {
        "name": "Raja Naga",
        "level": 36,
        "arcana": "Emperor"
    },
    {
        "name": "Kingu",
        "level": 46,
        "arcana": "Emperor"
    },
    {
        "name": "Barong",
        "level": 52,
        "arcana": "Emperor"
    },
    {
        "name": "Odin",
        "level": 57,
        "arcana": "Emperor",
        "max": true
    },
    {
        "name": "Omoikane",
        "level": 7,
        "arcana": "Hierophant"
    },
    {
        "name": "Berith",
        "level": 13,
        "arcana": "Hierophant"
    },
    {
        "name": "Shiisaa",
        "level": 26,
        "arcana": "Hierophant"
    },
    {
        "name": "Flauros",
        "level": 33,
        "arcana": "Hierophant"
    },
    {
        "name": "Thoth",
        "level": 41,
        "arcana": "Hierophant",
        "item": true
    },
    {
        "name": "Hokuto Seikun",
        "level": 47,
        "arcana": "Hierophant"
    },
    {
        "name": "Daisoujou",
        "level": 53,
        "arcana": "Hierophant",
        "special": true
    },
    {
        "name": "Kohryu",
        "level": 66,
        "arcana": "Hierophant",
        "max": true,
        "special": true
    },
    {
        "name": "Pixie",
        "level": 2,
        "arcana": "Lovers"
    },
    {
        "name": "Alp",
        "level": 6,
        "arcana": "Lovers"
    },
    {
        "name": "Tam Lin",
        "level": 13,
        "arcana": "Lovers"
    },
    {
        "name": "Narcissus",
        "level": 20,
        "arcana": "Lovers"
    },
    {
        "name": "Queen Mab",
        "level": 27,
        "arcana": "Lovers"
    },
    {
        "name": "Saki Mitama",
        "level": 39,
        "arcana": "Lovers"
    },
    {
        "name": "Titania",
        "level": 48,
        "arcana": "Lovers"
    },
    {
        "name": "Raphael",
        "level": 61,
        "arcana": "Lovers"
    },
    {
        "name": "Cybele",
        "level": 68,
        "arcana": "Lovers",
        "max": true
    },
    {
        "name": "Ara Mitama",
        "level": 6,
        "arcana": "Chariot"
    },
    {
        "name": "Chimera",
        "level": 9,
        "arcana": "Chariot"
    },
    {
        "name": "Zouchouten",
        "level": 14,
        "arcana": "Chariot"
    },
    {
        "name": "Ares",
        "level": 19,
        "arcana": "Chariot"
    },
    {
        "name": "Oumitsunu",
        "level": 30,
        "arcana": "Chariot"
    },
    {
        "name": "Nata Taishi",
        "level": 37,
        "arcana": "Chariot",
        "item": true
    },
    {
        "name": "Koumokuten",
        "level": 43,
        "arcana": "Chariot"
    },
    {
        "name": "Thor",
        "level": 53,
        "arcana": "Chariot",
        "max": true
    },
    {
        "name": "Angel",
        "level": 4,
        "arcana": "Justice"
    },
    {
        "name": "Archangel",
        "level": 10,
        "arcana": "Justice"
    },
    {
        "name": "Principality",
        "level": 16,
        "arcana": "Justice"
    },
    {
        "name": "Power",
        "level": 25,
        "arcana": "Justice"
    },
    {
        "name": "Virtue",
        "level": 32,
        "arcana": "Justice"
    },
    {
        "name": "Dominion",
        "level": 42,
        "arcana": "Justice"
    },
    {
        "name": "Throne",
        "level": 51,
        "arcana": "Justice"
    },
    {
        "name": "Melchizedek",
        "level": 59,
        "arcana": "Justice",
        "max": true
    },
    {
        "name": "Yomotsu Shikome",
        "level": 9,
        "arcana": "Hermit"
    },
    {
        "name": "Naga",
        "level": 17,
        "arcana": "Hermit"
    },
    {
        "name": "Lamia",
        "level": 25,
        "arcana": "Hermit"
    },
    {
        "name": "Mothman",
        "level": 32,
        "arcana": "Hermit"
    },
    {
        "name": "Taraka",
        "level": 38,
        "arcana": "Hermit"
    },
    {
        "name": "Kurama Tengu",
        "level": 44,
        "arcana": "Hermit"
    },
    {
        "name": "Nebiros",
        "level": 50,
        "arcana": "Hermit",
        "item": true
    },
    {
        "name": "Kumbhanda",
        "level": 56,
        "arcana": "Hermit"
    },
    {
        "name": "Arahabaki",
        "level": 60,
        "arcana": "Hermit",
        "max": true,
        "special": true
    },
    {
        "name": "Fortuna",
        "level": 17,
        "arcana": "Fortune"
    },
    {
        "name": "Empusa",
        "level": 23,
        "arcana": "Fortune",
        "item": true
    },
    {
        "name": "Kusi Mitama",
        "level": 29,
        "arcana": "Fortune"
    },
    {
        "name": "Clotho",
        "level": 38,
        "arcana": "Fortune"
    },
    {
        "name": "Lachesis",
        "level": 45,
        "arcana": "Fortune"
    },
    {
        "name": "Atropos",
        "level": 54,
        "arcana": "Fortune"
    },
    {
        "name": "Norn",
        "level": 62,
        "arcana": "Fortune",
        "max": true,
        "special": true
    },
    {
        "name": "Valkyrie",
        "level": 11,
        "arcana": "Strength"
    },
    {
        "name": "Rakshasa",
        "level": 16,
        "arcana": "Strength"
    },
    {
        "name": "Titan",
        "level": 23,
        "arcana": "Strength"
    },
    {
        "name": "Jikokuten",
        "level": 29,
        "arcana": "Strength"
    },
    {
        "name": "Hanuman",
        "level": 37,
        "arcana": "Strength"
    },
    {
        "name": "Narasimha",
        "level": 46,
        "arcana": "Strength"
    },
    {
        "name": "Kali",
        "level": 55,
        "arcana": "Strength"
    },
    {
        "name": "Siegfried",
        "level": 59,
        "arcana": "Strength",
        "max": true
    },
    {
        "name": "Inugami",
        "level": 10,
        "arcana": "Hanged Man"
    },
    {
        "name": "Take-minakata",
        "level": 21,
        "arcana": "Hanged Man"
    },
    {
        "name": "Orthrus",
        "level": 28,
        "arcana": "Hanged Man"
    },
    {
        "name": "Vasuki",
        "level": 38,
        "arcana": "Hanged Man"
    },
    {
        "name": "Ubelluris",
        "level": 48,
        "arcana": "Hanged Man"
    },
    {
        "name": "Hecatoncheires",
        "level": 54,
        "arcana": "Hanged Man"
    },
    {
        "name": "Hell Biker",
        "level": 60,
        "arcana": "Hanged Man",
        "item": true
    },
    {
        "name": "Attis",
        "level": 67,
        "arcana": "Hanged Man",
        "max": true,
        "special": true
    },
    {
        "name": "Ghoul",
        "level": 18,
        "arcana": "Death"
    },
    {
        "name": "Pale Rider",
        "level": 24,
        "arcana": "Death",
        "item": true
    },
    {
        "name": "Loa",
        "level": 31,
        "arcana": "Death"
    },
    {
        "name": "Samael",
        "level": 37,
        "arcana": "Death"
    },
    {
        "name": "Mot",
        "level": 45,
        "arcana": "Death"
    },
    {
        "name": "Alice",
        "level": 56,
        "arcana": "Death",
        "special": true
    },
    {
        "name": "Thanatos",
        "level": 64,
        "arcana": "Death",
        "max": true,
        "special": true
    },
    {
        "name": "Nigi Mitama",
        "level": 12,
        "arcana": "Temperance"
    },
    {
        "name": "Mithra",
        "level": 22,
        "arcana": "Temperance"
    },
    {
        "name": "Genbu",
        "level": 29,
        "arcana": "Temperance"
    },
    {
        "name": "Seiryuu",
        "level": 36,
        "arcana": "Temperance"
    },
    {
        "name": "Okuninushi",
        "level": 44,
        "arcana": "Temperance"
    },
    {
        "name": "Suzaku",
        "level": 51,
        "arcana": "Temperance"
    },
    {
        "name": "Byakko",
        "level": 57,
        "arcana": "Temperance"
    },
    {
        "name": "Yurlungur",
        "level": 64,
        "arcana": "Temperance",
        "max": true
    },
    {
        "name": "Lilim",
        "level": 8,
        "arcana": "Devil"
    },
    {
        "name": "Mokoi",
        "level": 18,
        "arcana": "Devil"
    },
    {
        "name": "Vetala",
        "level": 24,
        "arcana": "Devil"
    },
    {
        "name": "Incubus",
        "level": 34,
        "arcana": "Devil"
    },
    {
        "name": "Succubus",
        "level": 43,
        "arcana": "Devil"
    },
    {
        "name": "Pazuzu",
        "level": 52,
        "arcana": "Devil"
    },
    {
        "name": "Lilith",
        "level": 61,
        "arcana": "Devil",
        "item": true,
        "special": true
    },
    {
        "name": "Abaddon",
        "level": 68,
        "arcana": "Devil"
    },
    {
        "name": "Beelzebub",
        "level": 81,
        "arcana": "Devil",
        "max": true,
        "special": true
    },
    {
        "name": "Eligor",
        "level": 31,
        "arcana": "Tower"
    },
    {
        "name": "Cu Chulainn",
        "level": 40,
        "arcana": "Tower"
    },
    {
        "name": "Bishamonten",
        "level": 60,
        "arcana": "Tower"
    },
    {
        "name": "Seiten Taisei",
        "level": 67,
        "arcana": "Tower"
    },
    {
        "name": "Masakado",
        "level": 73,
        "arcana": "Tower",
        "item": true,
        "special": true
    },
    {
        "name": "Mara",
        "level": 77,
        "arcana": "Tower",
        "special": true
    },
    {
        "name": "Shiva",
        "level": 82,
        "arcana": "Tower",
        "special": true
    },
    {
        "name": "Chi You",
        "level": 86,
        "arcana": "Tower",
        "max": true
    },
    {
        "name": "Neko Shogun",
        "level": 19,
        "arcana": "Star"
    },
    {
        "name": "Setanta",
        "level": 28,
        "arcana": "Star"
    },
    {
        "name": "Nandi",
        "level": 39,
        "arcana": "Star"
    },
    {
        "name": "Kaiwan",
        "level": 49,
        "arcana": "Star"
    },
    {
        "name": "Ganesha",
        "level": 58,
        "arcana": "Star"
    },
    {
        "name": "Garuda",
        "level": 65,
        "arcana": "Star"
    },
    {
        "name": "Kartikeya",
        "level": 70,
        "arcana": "Star",
        "item": true
    },
    {
        "name": "Saturnus",
        "level": 78,
        "arcana": "Star"
    },
    {
        "name": "Helel",
        "level": 88,
        "arcana": "Star",
        "max": true
    },
    {
        "name": "Gurr",
        "level": 15,
        "arcana": "Moon"
    },
    {
        "name": "Yamatano-orochi",
        "level": 26,
        "arcana": "Moon"
    },
    {
        "name": "Girimehkala",
        "level": 42,
        "arcana": "Moon",
        "special": true
    },
    {
        "name": "Dionysus",
        "level": 48,
        "arcana": "Moon"
    },
    {
        "name": "Chernobog",
        "level": 58,
        "arcana": "Moon"
    },
    {
        "name": "Seth",
        "level": 66,
        "arcana": "Moon"
    },
    {
        "name": "Baal Zebul",
        "level": 71,
        "arcana": "Moon"
    },
    {
        "name": "Sandalphon",
        "level": 74,
        "arcana": "Moon",
        "max": true,
        "special": true
    },
    {
        "name": "Yatagarasu",
        "level": 30,
        "arcana": "Sun"
    },
    {
        "name": "Quetzalcoatl",
        "level": 43,
        "arcana": "Sun"
    },
    {
        "name": "Jatayu",
        "level": 55,
        "arcana": "Sun"
    },
    {
        "name": "Horus",
        "level": 63,
        "arcana": "Sun"
    },
    {
        "name": "Suparna",
        "level": 70,
        "arcana": "Sun"
    },
    {
        "name": "Vishnu",
        "level": 78,
        "arcana": "Sun"
    },
    {
        "name": "Asura",
        "level": 85,
        "arcana": "Sun",
        "max": true,
        "special": true
    },
    {
        "name": "Anubis",
        "level": 59,
        "arcana": "Judgement"
    },
    {
        "name": "Trumpeter",
        "level": 65,
        "arcana": "Judgement"
    },
    {
        "name": "Michael",
        "level": 72,
        "arcana": "Judgement"
    },
    {
        "name": "Satan",
        "level": 79,
        "arcana": "Judgement"
    },
    {
        "name": "Lucifer",
        "level": 89,
        "arcana": "Judgement",
        "special": true
    },
    {
        "name": "Messiah",
        "level": 90,
        "arcana": "Judgement",
        "max": true,
        "special": true
    },
    {
        "name": "Uriel",
        "level": 63,
        "arcana": "Aeon"
    },
    {
        "name": "Nidhoggr",
        "level": 69,
        "arcana": "Aeon"
    },
    {
        "name": "Ananta",
        "level": 75,
        "arcana": "Aeon"
    },
    {
        "name": "Atavaka",
        "level": 80,
        "arcana": "Aeon"
    },
    {
        "name": "Metatron",
        "level": 87,
        "arcana": "Aeon",
        "max": true,
        "special": true
    }
];

export default persona;
export { personae };