const db = require('./connection');
const { User, Section, Item } = require('../models');

db.once('open', async () => {

    await Section.deleteMany();

    const sections = await Section.insertMany([
        { name: '1A' },
        { name: '2A' },
        { name: '3A' },
        { name: '4A' },
        { name: '1B' },
        { name: '2B' },
        { name: '3B' },
        { name: '4B' },
        { name: '1C' },
        { name: '2C' },
        { name: '3C' },
        { name: '4C' },
        { name: '1D' },
        { name: '2D' },
        { name: '3D' },
        { name: '1X' },
        { name: '2X' },
        { name: 'Z' }
    ]);

    console.log('sections seeded');

    await Item.deleteMany();

    const items = await Item.insertMany([
        {
            name: 'UGG Fluff Yeah Slide Baby Slippers Size S 02/03 6-12 Months Lamb Fur New in Box',
            size: '8x7x7',
            weight: 0.7,
            section: '1A'
        },
        {
            name: 'Hallmark Christmas Ornaments Disney MICKEY & MINNIE Sparkle Ball Ears 2021 New',
            size: '6x6x4',
            weight: 0.8,
            section: '1A'
        },
        {
            name: 'Yeti Abominable Snowman Animated Monster Dances and Sings WHITE CHRISTMAS New',
            size: '9x6x6',
            weight: 1.0,
            section: '1A'
        },
        {
            name: 'Hallmark Christmas Ornaments HARRY POTTER HOGWARTS EXPRESS BOOKS & WAND 2021 New',
            size: '9x6x5',
            weight: 0.9,
            section: '1A'
        },
        {
            name: 'Nightmare Before Christmas OOGIE BOOGIE Silhouetted Glass Votive Holder Candle',
            size: '8x7x7',
            weight: 1.2,
            section: '2B'
        },
        {
            name: 'Nightmare Before Christmas ZERO Ceramic 3D Mug Walgreens Exclusive 2021 NWT',
            size: '8x7x7',
            weight: 1.2,
            section: '1A'
        },
        {
            name: 'The Wiggles VHS Lot 4 HOOP DEE DOO MAGICAL ADVENTURE WAKE UP JEFF TOOT TOOT EUC',
            size: '10x7x6',
            weight: 2.4,
            section: '1A'
        },
        {
            name: 'Nightmare Before Christmas Animated JACK SKELLINGTON in CHIMNEY Plush Walgreens',
            size: '10x8x9',
            weight: 1.3,
            section: '1A'
        },
        {
            name: 'BEETLEJUICE LED ROTATING SHADOW PROJECTION LIGHT HALLOWEEN TABLETOP GEMMY NEW',
            size: '10x9x9',
            weight: 1.5,
            section: '1A'
        },
        {
            name: 'Commonwealth HUG-A-PLUSH 8" CHRISTMAS PENGUIN with Tags and Case Vintage',
            size: '8x7x6',
            weight: 0.6,
            section: '1A'
        },
        {
            name: 'Squishmallows Kellytoy Disney WINNIE THE POOH and PIGLET 5" Stuffed Plush NWT',
            size: '7x6x4',
            weight: 0.5,
            section: '1A'
        },
        {
            name: 'Loungefly Nightmare Before Christmas Jack Skellington PUMPKIN KING Mini Backpack',
            size: '14x9x6',
            weight: 1.3,
            section: '1A'
        },
        {
            name: 'Margaret Le Van Priss Alley Cats LITTLE PRIS MUFFET Retired',
            size: '8x7x5',
            weight: 0.7,
            section: '1A'
        },
        {
            name: 'Hallmark The MANDALORIAN w/ THE CHILD Walgreens Star Wars Christmas Ornament',
            size: '6x6x4',
            weight: 0.5,
            section: '1A'
        },
        {
            name: 'Funko POP! Marvel Avengers Endgame IRON MAN #580 PX Exclusive GITD',
            size: '7x5x4',
            weight: 0.5,
            section: '1A'
        },
        {
            name: 'Wacom Intuos CTL-4100 Small Drawing Tablet - Black For Mac PC Chromebook Android',
            size: '11x8x5',
            weight: 1.6,
            section: '1A'
        },
        {
            name: 'Nightmare Before Christmas Hallmark Ornaments JACK SALLY OOGIE LOCK SHOCK BARREL',
            size: '10x8x6',
            weight: 1.5,
            section: '1A'
        },
        {
            name: 'Nightmare Before Christmas JACK SKELLINGTON Snow Water Globe Musical Walgreens',
            size: '9x7x7',
            weight: 2.7,
            section: '1A'
        },
        {
            name: 'Funko POP! #1237 PEACEMAKER W/ Shield 2022 Wondrous Convention Limited Edition',
            size: '8x5x5',
            weight: 0.5,
            section: '4C'
        },
        {
            name: 'Funko POP! Disney Pixar WALL-E 2022 Wondrous Convention Limited Edition',
            size: '7x6x4',
            weight: 0.6,
            section: '4A'
        },
        {
            name: 'Dept 56 Nightmare Before Christmas Jack, Sally and Zero by Possible Dreams NIB',
            size: '17x14x12',
            weight: 5.4,
            section: '1B'
        },
        {
            name: 'Nickelodeon Paw Patrol The Movie LIBERTY JOINS THE TEAM Target Exclusive New',
            size: '16x13x3',
            weight: 1.5,
            section: '1B'
        },
        {
            name: 'Nightmare Before Christmas 9" Plush Doll JACK SALLY MAYOR ZERO OOGIE DR. FINKLE',
            size: '11x9x9',
            weight: 1.6,
            section: '1B'
        },
        {
            name: 'Walgreens Exclusive NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll OOGIE BOOGIE',
            size: '11x8x6',
            weight: 1.1,
            section: '1B'
        },
        {
            name: 'Disney NIGHTMARE BEFORE CHRISTMAS Characters String Lights Walgreens Exclusive',
            size: '14x10x6',
            weight: 1.3,
            section: '1B'
        },
        {
            name: 'Walgreens Exclusive NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll BARREL NWT',
            size: '15x10x6',
            weight: 1.6,
            section: '1B'
        },
        {
            name: 'Roblox SERIES 4 Celebrity Collection 24 Pieces Target Exclusive NIB',
            size: '16x14x6',
            weight: 2.0,
            section: '1B'
        },
        {
            name: 'Walgreens Exclusive NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll SALLY NWT',
            size: '14x11x7',
            weight: 1.6,
            section: '1B'
        },
        {
            name: 'Funko Shop Exclusive Kellogs Frosted Flakes TONY THE TIGER 10" #70 Factory Box',
            size: '16x11x12',
            weight: 3.6,
            section: '1B'
        },
        {
            name: 'Walgreens Exclusive Nightmare Before Christmas ZERO CANDELABRA Candle Holder New',
            size: '12x11x7',
            weight: 2.7,
            section: '1B'
        },
        {
            name: 'Vintage Bombay Company Chinoiserie Asian Pagoda Style Lidded',
            size: '15x11x12',
            weight: 8.5,
            section: '1X'
        },
        {
            name: 'Loungefly Disney MICKEY MOUSE Sketch Lunch Bag Lunchbox Tote Hot Topic NWT',
            size: '13x9x6',
            weight: 1.3,
            section: '1B'
        },
        {
            name: 'THE YALE & TOWNE MFG CO Padlock Lock Antique With Key USA',
            size: '4x4x4',
            weight: 0.8,
            section: '1A'
        },
        {
            name: 'Funko Shop Exclusive Cereal CAPTAIN CAVEMAN Pocket Pop New in Sealed Box',
            size: '11x8x3',
            weight: 1.0,
            section: '1B'
        },
        {
            name: 'SQUISHMALLOW Nightmare Before Christmas Large 12-14" Set of 8 New with Tags',
            size: '25x18x14',
            weight: 7.3,
            section: 'Z'
        },
        {
            name: 'Nightmare Before Christmas Walmart Lot JACK STOCKING DECORATED TREE JACK MUG',
            size: '14x11x5',
            weight: 3.1,
            section: '1C'
        },
        {
            name: 'Dr. Seuss THE GRINCH CAR BUDDY Airblown Inflatable 3.5ft Gemmy Walmart Exclusive',
            size: '11x7x5',
            weight: 2.2,
            section: '1C'
        },
        {
            name: 'Nightmare Before Christmas Squishmallows 14" JACK SKELLINGTON SALLY ZERO OOGIE',
            size: '19x14x9',
            weight: 4.9,
            section: '1C'
        },
        {
            name: 'Gemmy Airblown Inflatable 101 Dalmatians 5ft MALEFICENT Lights Up LED New',
            size: '15x13x8',
            weight: 4.3,
            section: '1C'
        },
        {
            name: 'Dr. Seuss THE GRINCH Lot DECORATED TREE JACK IN THE BOX 6pc COLLECTIBLE FIGURES',
            size: '19x14x7',
            weight: 3.8,
            section: '1C'
        },
        {
            name: 'MICHAEL MYERS PENNYWISE CHUCKY GRADY TWINS Speaking Waddler Halloween Plush NWT',
            size: '15x13x8',
            weight: 3.8,
            section: '1C'
        },
        {
            name: 'The Shining THE GRADY TWINS Animated Plush Spooky Creepy Phrases New with Tags',
            size: '15x11x6',
            weight: 1.9,
            section: '1C'
        },
        {
            name: 'Squishmallows Flip A Mallows Devil DANTE / TALLY Cat 12" Stuffed Plush NWT',
            size: '15x12x10',
            weight: 3.3,
            section: '1X'
        },
        {
            name: 'Disney Traditions Jim Shore OLD ST. MICK 17" Christmas Mickey Mouse Costco NIB',
            size: '20x14x12',
            weight: 9.8,
            section: '1X'
        },
        {
            name: 'Disney Hocus Pocus WINIFRED SANDERSON w/ Book Door Greeter Plush Walmart NWT',
            size: '24x17x9',
            weight: 3.8,
            section: 'Z'
        },
        {
            name: "Star Wars GALACTIC SNAKIN' GROGU The Child 9.25-Inch-Tall Animatronic Toy New",
            size: '14x13x6',
            weight: 2.7,
            section: '1D'
        },
        {
            name: 'Funko Pocket POP! BEWARE 13 DAY SPOOKY COUNTDOWN New SEALED Calendar',
            size: '15x11x5',
            weight: 1.8,
            section: '1D'
        },
        {
            name: 'Loungefly WINNIE THE POOH Bee Bundle w/ Funko Box Lunch #1034 and Enamel Pin NEW',
            size: '16x11x9',
            weight: 3.1,
            section: '2A'
        },
        {
            name: 'ROBLOX Classics Series 6 Action Figures 23pcs 12 Virtual Codes Target Exclusive',
            size: '15x13x6',
            weight: 0.4,
            section: '2A'
        },
        {
            name: 'Walgreens Nightmare Before Christmas Posable Doll Plush SALLY OOGIE PUMPKIN KING',
            size: '14x11x7',
            weight: 2.0,
            section: '2A'
        },
        {
            name: 'Vintage Thanksgiving Duck Set of 3 Carved Wood TII Collection Figurines',
            size: '13x10x4',
            weight: 2.2,
            section: '2A'
        },
        {
            name: 'Funko Pop! Enamel Pin Set of 5 HARRY POTTER HERMIONE RON DUMBLEDORE HEDWIG',
            size: '11x8x7',
            weight: 1.6,
            section: '2A'
        },
        {
            name: 'FRIDAY 13TH JASON VOORHEES LED ROTATING SHADOW PROJECTION LIGHT TABLETOP GEMMY',
            size: '12x9x9',
            weight: 1.5,
            section: '2A'
        },
        {
            name: 'Airblown Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON and SALLY',
            size: '12x10x9',
            weight: 7.0,
            section: '2A'
        },
        {
            name: 'Gemmy Airblown Inflatable Nightmare Before Christmas 3.5ft Sally W/ Pumpkin LED',
            size: '10x9x9',
            weight: 3.8,
            section: '2A'
        },
        {
            name: 'Disney Nightmare Before Christmas THE MASTER OF FRIGHT Jack Picture 3D 10x8"',
            size: '13x10x6',
            weight: 1.5,
            section: '2A'
        },
        {
            name: 'Airblown Gemmy Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON NIB',
            size: '11x10x7',
            weight: 3.7,
            description: 'scaring sign',
            section: '2A'
        },
        {
            name: 'Nickelodeon PAW Patrol CHASE 4.5 Ft. Gemmy Airblown Lighted Inflatable Walmart',
            size: '11x7x9',
            weight: 3.8,
            section: '2A'
        },
        {
            name: 'Funko Nightmare Before Christmas JACK SKELLINGTON 18" Backpack New with Tags',
            section: '2A'
        },
        {
            name: 'Nightmare Before Christmas JACK SKELLINGTON One-Piece Hood PJs Pajamas XL 16/18',
            section: '2A'
        },
        {
            name: 'DKNY Rainbow Pride Drawstring Backpack Bag Embossed New With Tags',
            section: '2A'
        },
        {
            name: 'RARE! Disneyana Nightmare Before Christmas Cookie Jar 12" Limited Edition of 350',
            size: '16x14x14',
            weight: 10.6,
            section: '2B'
        },
        {
            name: 'Nightmare Before Christmas JACK SKELLINGTON AND ZERO Ghost Pillow Pets Plush NWT',
            size: '17x12x13',
            weight: 3.4,
            section: '2B'
        },
        {
            name: 'Funko POP! Alice in Wonderland CHESHIRE CAT 10" #1066 Walmart Exclusive',
            size: '16x11x9',
            weight: 2.6,
            section: '2B'
        },
        {
            name: 'Funko POP! Game of Thrones THE CREATORS New York Comic Con Official Sticker 2018',
            size: '11x8x6',
            weight: 1.0,
            section: '2B'
        },
        {
            name: 'Ravensburger Disney JUNGLE CRUISE ADVENTURE Game Amazon Exclusive New SEALED',
            size: '13x11x4',
            weight: 3.0,
            section: '2B'
        },
        {
            name: 'Funko Pop! Loungefly Disney MICKEY MOUSE Pin Trader Cosplay Mini Backpack NWT',
            size: '13x9x9',
            weight: 2.3,
            section: '2B'
        },
        {
            name: 'Nightmare Before Christmas SALLY WITH PRESENT 5 Ft. Airblown Lighted Inflatable',
            size: '11x9x7',
            weight: 3.8,
            section: '2B'
        },
        {
            name: 'Airblown Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON LED New',
            size: '10x9x7',
            weight: 3.6,
            description: 'sitting on pumpkin',
            section: '2B'
        },
        {
            name: 'Nightmare Before Christmas SANTA JACK SKELLINGTON 5 Ft. Lighted Inflatable',
            size: '11x10x7',
            weight: 3.7,
            section: '2B'
        },
        {
            name: 'Vintage Camel Cigarette Wooden Jewelry Type Box Thomas Museum Series With COA',
            size: '14x9x7',
            weight: 5.8,
            section: '2B'
        },
        {
            name: 'Funko Pop! Disney Archives MINNIE MOUSE 5 Pack Amazon Exclusive New Sealed Box',
            size: '18x7x4',
            weight: 1.8,
            section: '2B'
        },
        {
            name: 'Walgreens Exclusive NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll Set of 4 NWT',
            size: '24x17x9',
            weight: 5.8,
            section: '2C'
        },
        {
            name: 'Dr. Seuss THE GRINCH 5.5 Ft. Gemmy Airblown LED Lighted Inflatable Walmart',
            size: '10x8x9',
            weight: 4.1,
            description: 'wreath',
            section: '2C'
        },
        {
            name: 'HOCUS POCUS LED ROTATING SHADOW PROJECTION LIGHT HALLOWEEN TABLETOP GEMMY NEW',
            size: '10x9x9',
            weight: 1.5,
            section: '2C'
        },
        {
            name: 'Spectra S2 Plus Double Electric Breast Pump - Pink Ultra Quiet New in Open Box',
            size: '13x9x11',
            weight: 5.0,
            section: '2C'
        },
        {
            name: 'SCOOBY-DOO Christmas Stocking 4.5 Ft. Gemmy Airblown Lighted Inflatable Walmart',
            size: '11x10x7',
            weight: 4.2,
            section: '2C'
        },
        {
            name: 'Funko Pop! Marvel Art Series Captain America Set #32, 33, 34, 35, 36 Sz L Target',
            size: '12x12x9',
            weight: 4.8,
            section: '2C'
        },
        {
            name: 'LOUNGEFLY DUMBO 80TH ANNIVERSARY COSPLAY MINI BACKPACK NWT FREE SHIPPING',
            size: '11x10x9',
            weight: 2.6,
            section: '2C'
        },
        {
            name: 'CHI-Volumizer 4-in-1 Blowout Brush Nozzle Paddle Brush Diffuser and Round Brush',
            size: '15x10x5',
            weight: 2.5,
            section: '2C'
        },
        {
            name: 'Funko Pop! Disney 10" MICKEY MOUSE #457 Black and White Target Exclusive 90 Year',
            size: '15x11x12',
            weight: 3.0,
            section: '2C'
        },
        {
            name: 'SLIMER Ghost Busters Airblown Gemmy Self Inflatable 5ft LED Lighted NIB',
            size: '14x10x6',
            weight: 4.1,
            section: '2C'
        },
        {
            name: 'Disney Airblown Gemmy Inflatable Nightmare Before Christmas 5.5ft SHOCK LED NIB',
            size: '14x10x6',
            weight: 4.2,
            section: '2C'
        },
        {
            name: 'Nightmare Before Christmas Jack Skellington & Sally NOW & FOREVER Backpack NWT',
            section: '2C'
        },
        {
            name: 'Squishmallows Kellytoys Disney STAR WARS 5" R2-D2 The Child and BB-8 Set NWT',
            size: '9x7x6',
            weight: 0.6,
            section: '2D'
        },
        {
            name: 'Squishmallows Kellytoy Disney 5" MIKE & SULLEY Plush Stuffed Monsters Inc. NWT',
            size: '7x5x6',
            weight: 0.4 ,
            section: '2D'
        },
        {
            name: 'Squishmallows Kellytoy Disney 10" MIKE & SULLEY Plush Stuffed Monsters Inc. NWT',
            size: '14x11x7',
            weight: 1.8,
            section: '2D'
        },
        {
            name: 'N S GUSTIN Mouse Eating Cookie Jar VINTAGE 1970\'s 11" Tall EUC',
            size: '9x9x14',
            weight: 5.3,
            section: '2D'
        },
        {
            name: 'Squishmallows Kellytoy Disney GOOFY AND PLUTO 10" Plush Stuffed Animal NWT',
            size: '13x9x7',
            weight: 1.8,
            section: '2D'
        },
        {
            name: 'Franklin Uniform Set 5pc NCAA Collegiate Football Mississippi State Bulldogs YM',
            size: '12x10x12',
            weight: 3.2,
            section: '2D'
        },
        {
            name: 'Hotel Style FULL 1200 Thread Count Limited Ed 6 Piece Sheet Set Gray Pumice New',
            size: '11x7x9',
            weight: 5.1,
            section: '2D'
        },
        {
            name: 'Vintage Handpainted Delft Blue Duck Figurine 9" x 11"',
            size: '11x9x6',
            weight: 2.3,
            section: '2D'
        },
        {
            name: 'Black Ceramic Cat Fish Bowl Holder Vandor Pelzman Made In Japan With Sticker',
            size: '9x9x5',
            weight: 1.3,
            section: '2D'
        },
        {
            name: 'Disney Frozen OLAF Squishmallow 10" KellyToy New With Tags',
            size: '11x10x7',
            weight: 1.2,
            section: '2D'
        },
        {
            name: 'Nightmare Before Christmas Animated Plush OOGIE BOOGIE W/ LIGHTS 12" Walgreens',
            size: '12x10x11',
            weight: 1.9,
            section: '2D'
        },
        {
            name: 'Funko Disneyland 65th Minnie Mouse #06 Mickey Mouse #03 Casey Jr. Circus Train',
            size: '10x8x7',
            weight: 1.3,
            section: '2D'
        },
        {
            name: 'Disney MICKEY MOUSE 90TH ANNIVERSARY Set of 4 Plush Mickeys 9” Figures NWT',
            size: '11x7x6',
            weight: 0.8,
            section: '2D'
        },
        {
            name: 'MICKEY MOUSE 90th Anniversary Target Exclusive Poseable Figures Full Set NWT',
            size: '8x8x7',
            weight: 1.2,
            section: '2D'
        },
        {
            name: 'Vintage 3D Tin Metal High Relief Set of 2 Framed Asian Themed Wall Art',
            size: '14x9x7',
            weight: 3.1,
            section: '3C'
        },
        {
            name: 'The Nightmare Before Christmas Pet Toys Gift Set JACK SKELLINGTON OOGIE BOOGIE',
            size: '11x9x6',
            weight: 1.7,
            section: '3C'
        },
        {
            name: 'Penco Black Metal Candle Holder and Votive Cat Playing the Violin',
            size: '9x7x6',
            weight: 1.0,
            section: '3C'
        },
        {
            name: 'Funko POP! Deluxe: Dug Days #1098 DUG WITH PUPPIES Target Exclusive New',
            size: '10x9x7',
            weight: 1.4,
            section: '3C'
        },
        {
            name: 'Vintage N S Gustin Mouse Mice SHAKER Ceramic - Two 5 1/2" Tall & One 4 1/4" Tall',
            size: '12x7x7',
            weight: 2.4,
            section: '3C'
        },
        {
            name: 'Mickey Mouse 90th Anniversary 10-Piece Collectible Figure Set BRAND NEW',
            size: '16x14x6',
            weight: 2.1,
            section: '3D'
        },
        {
            name: 'Blue Mountain Pottery Green Black Glazed Sitting Thinking Frog 7" EUC',
            size: '12x9x7',
            weight: 2.7,
            section: '3D'
        },
        {
            name: 'Nightmare Before Christmas Squishmallows 14" JACK SKELLINGTON SALLY ZERO OOGIE',
            size: '18x12x13',
            weight: 5.2,
            section: '3D'
        },
        {
            name: 'Gemmy Airblown Inflatable Dr. Seuss THE GRINCH Christmas 11 Ft LED Heart New',
            size: '18x14x12',
            weight: 9.2,
            section: '1X'
        },
        {
            name: 'Disney Nightmare Before Christmas Hanging JACK SALLY LOCK SHOCK BARREL Light Up',
            size: '23x16x11',
            weight: 7.4,
            section: '1X'
        },
        {
            name: 'Walgreens NIGHTMARE BEFORE CHRISTMAS Animated Plush Doll JACK SKELLINGTON New',
            size: '12x7x9',
            weight: 1.4,
            description: 'regular jack',
            section: '2B'
        },
        {
            name: 'Disney Nightmare Before Christmas Slow Cooker Crock Pot Jack Skellington NBC-73',
            size: '15x10x15',
            weight: 15.6,
            stock: 2,
            section: '2X'
        },
        {
            name: 'Funko Pop! Movies: THE LOST BOYS - FROG BROTHERS 2-pack FUNKO SHOP EXCLUSIVE NIB',
            size: '10x8x6',
            weight: 0.9,
            section: '4A'
        },
        {
            name: 'Funko POP! ASIA Water Margin WU SONG #127 2021 Summer Convention Exclusive',
            size: '7x5x4',
            weight: 0.5,
            section: '4A'
        },
        {
            name: 'Funko A Day With Pikachu SPLASHING AWAY SUMMER Pokemon Center Exclusive NIB',
            size: '9x7x6',
            weight: 0.7,
            section: '4A'
        },
        {
            name: 'Funko Pokemon Holiday PIKACHU Pokemon Exclusive NIB',
            size: '9x7x6',
            weight: 0.6,
            section: '4A'
        },
        {
            name: 'Funko A Day With Pikachu SPARKING UP A CELEBRATION Pokemon Center Exclusive NIB',
            size: '9x7x6',
            weight: 0.6,
            section: '4A'
        },
        {
            name: 'Funko DORBZ Nickelodeon Rugrats TOMMY 478 CHUCKIE 479 ANGELICA 480 4000 Pieces',
            size: '11x7x6',
            weight: 1.2,
            section: '4A'
        },
        {
            name: 'SDCC 2020 PX Previews Exclusive Funko #336 Comic Moments RED HOOD vs DEATHSTROKE',
            size: '10x8x7',
            weight: 1.7,
            section: '4A'
        },
        {
            name: 'Funko Pop! Monsters THE WOLF MAN & BRIDE OF FRANKENSTEIN Walgreens Exclusive',
            size: '7x5x4',
            weight: 0.4,
            section: '4A'
        },
        {
            name: 'Hallmark Christmas Ornament Disney Villains CRUELLA DE VIL 101 Dalmatians New',
            size: '7x5x4',
            weight: 0.4,
            section: '4A'
        },
        {
            name: 'Hallmark Christmas Ornaments Nightmare Before Christmas JACK SKELLINGTON 2021',
            size: '5x4x3',
            weight: 0.2,
            section: '4A'
        },
        {
            name: '2021 Hallmark Funko Pop! Friends MONICA PHOEBE RACHEL 3 Ornament Lot Walmart New',
            size: '10x7x6',
            weight: 1.3,
            section: '4B'
        },
        {
            name: 'Funko Star Wars REY (JAKKU) 451 & IMPERIAL SUPER COMMANDO 452 2021 Shared Exc',
            size: '10x8x5',
            weight: 1.2,
            section: '4B'
        },
        {
            name: 'Funko POP! JIMI HENDRIX Black Light #239 Funko Shop ECCC NYCC',
            size: '8x7x5',
            weight: 0.5,
            section: '4B'
        },
        {
            name: 'Funko Pop Retro Toys Mystifying Oracle OUIJA PLANCHETTE #102 - BAM! Exclusive',
            size: '7x5x4',
            weight: 0.4,
            section: '4B'
        },
        {
            name: 'Funko A Day With Pikachu SWEET DAYS ARE HERE Pokemon Center Exclusive NIB',
            size: '9x6x5',
            weight: 0.5,
            section: '4B'
        },
        {
            name: 'Funko POP! Heroes I AM WONDER WOMAN #242 2018 Fall Convention Exclusive LE NIB',
            size: '7x5x4',
            weight: 0.4,
            section: '4B'
        },
        {
            name: "Funko Spastik Plastik Sike O'Shriner Teal # 05 Funko Shop Exclusive FREE SHIP",
            size: '7x5x4',
            weight: 0.5,
            section: '4B'
        },
        {
            name: 'Funko VYNL Gremlins GIZMO + GREMLIN 2018 Fall Convention Shared Exclusive MINT',
            size: '10x7x6',
            weight: 0.8,
            section: '4B'
        },
        {
            name: 'Funko Pop! Monsters THE WOLF MAN & BRIDE OF FRANKENSTEIN Walgreens Exclusive',
            size: '9x6x8',
            weight: 0.9,
            section: '4B'
        },
        {
            name: 'Fluffballs My Little Pony FLUTTERSHY, TWILIGHT SPARKLE, PINKIE PIE, RAINBOW DASH',
            size: '8x5x7',
            weight: 0.8,
            section: '4B'
        },
        {
            name: 'Vynl Hanna Barbera HUCKLEBERRY HOUND + SNAGGLEPUSS 2018 Fall Convention 3000 PCS',
            size: '11x8x5',
            weight: 1.1,
            section: '4B'
        },
        {
            name: 'SALLY JACK OOGIE BOOGIE Nightmare Before Christmas MUG SET WALGREENS EXCLUSIVE',
            size: '10x10x7',
            weight: 2.6,
            section: '4B'
        },
        {
            name: 'Funko Pop! Asia - Kung Fu Freddy Funko & Wu Song 2021 Summer Convention Unopened',
            size: '11x9x7',
            weight: 1.6,
            section: '4C'
        },
        {
            name: 'Vynl QUISP + QUAKE Funko 2019 Summer Convention Limited Edition',
            size: '9x7x4',
            weight: 0.9,
            section: '4C'
            
        },
        {
            name: 'Jack Skellington LED Wave Motion Nightmare Before Christmas Projector Halloween',
            size: '9x6x6',
            weight: 1.5,
            section: '4C'
        },
        {
            name: 'Hallmark Christmas Ornaments Peanuts CHARLIE BROWN with Tree 2021 New',
            size: '7x5x4',
            weight: 0.4,
            section: '4C'
        },
        {
            name: 'Hallmark Christmas Ornament Dr. Seuss THE GRINCH with Present 2021 New',
            size: '7x5x4',
            weight: 0.4,
            section: '4C'
        },
        {
            name: 'Hallmark Christmas Ornaments A Christmas Story LEG LAMP 2021 New',
            size: '7x5x4',
            weight: 0.4,
            section: '4C'
        },
        {
            name: 'Hallmark Ornament Funko Pop! HARRY POTTER LORD VOLDEMORT w SNAKE Walmart New',
            size: '7x5x4',
            weight: 0.5,
            section: '4C'
        },
        {
            name: 'Hallmark Ornaments Small Stars Nightmare Before Christmas JACK & SALLY Plush NWT',
            size: '7x5x4',
            weight: 0.4,
            section: '4C'
        },
        {
            name: 'Hallmark Christmas Ornaments Pokemon PIKACHU 2021 New',
            size: '7x5x4',
            weight: 0.4,
            section: '4C'
        },
        {
            name: 'Funko A Day With Pikachu ONE LUCKY DAY Pokemon Center Exclusive NIB',
            size: '9x7x6',
            weight: 0.8,
            section: '4C'
        },
        {
            name: 'Funko A Day With Pikachu COMPLETELY THANK-FULL Pokemon Center Exclusive NIB',
            size: '8x6x7',
            weight: 0.8,
            section: '4C'
        },
        {
            name: 'Hallmark Christmas Ornaments Disney 101 DALMATIANS & CRUELLA DE VIL 2021 New',
            size: '6x4x6',
            weight: 0.6,
            section: '4C'
        },
        {
            name: 'Funko POP! Hallmark Ornaments HARRY POTTER & LORD VOLDEMORT Walmart Exc. New',
            size: '7x5x6',
            weight: 0.8,
            section: '4C'
        },
        {
            name: 'Nightmare Before Christmas DEADLY NIGHT SHADE Faux Succulent Plant Ceramic 7”',
            size: '11x8x6',
            weight: 1.1,
            section: '4C'
        },
        {
            name: 'Funko Pop GANDALF THE WHITE Sword & Staff 1203 GITD Boxlunch Earth Day Exclusive',
            size: '7x5x4',
            weight: 0.5,
            section: '4C'
        },
        {
            name: 'LOUNGEFLY Disney Star Wars BOBA FETT Mini Backpack NWT Never opened.',
            size:'12x7x10',
            weight: 2.0,
            section: '3C'
        },
        {
            name: 'Corelle SHADOW IRIS Purple Flower Green Rim Dinner/Salad Plates Lot Of 16 EUC',
            size: '13x13x7',
            weight: 10.4,
            section: '3C'
        },
        {
            name: 'Porcelain Lego Music Box Guitar Shaped Victorian Painted Trinket Jewelry Box',
            size: '9x6x3',
            weight: 1.0,
            section: '3C'
        },
        {
            name: 'VINTAGE Bronze Frog Pulling Nautilus Shell Green Patina Toothpick Planter',
            size: '7x5x4',
            weight: 0.9,
            section: '3C'
        },
        {
            name: 'Vintage Golden Brass Family of Giraffes Set 7" Tall',
            size: '8x7x3',
            weight: 1.6,
            section: '3C'
        },
        {
            name: 'Vtg Artesania Rinconada Figurines Lot of 11 Uruguay Llama Yak Buffalo Zebra....',
            size: '10x10x5',
            weight: 5.6,
            section: '3C'
        },
        {
            name: 'Fenton Burmese Floral Hand Painted Persian Tent Candy Box No Lid Signed',
            size: '6x5x7',
            weight: 1.6,
            section: '3C'
        },
        {
            name: 'Vintage Double Sided Hand Drum-Made Leather Hide-Wood Gut Primitive-Tribal Tan',
            size: '7x8x3',
            weight: 0.3,
            section: '3C'
        },
        {
            name: 'Squishmallows Disney Pride Collection 8” BING BONG Elephant Inside Out LGBTQ+',
            size: '7x6x7',
            weight: 0.7,
            section: '3C'
        },
        {
            name: 'COCO Dowley CAT Cookie Jar 1990 Blue Scarf Certified International Corp',
            size: '15x11x12',
            weight: 4.4,
            section: '3D'
        },
        {
            name: `Vintage 80'S Saxton Hall Quilted Long Puffer Coat 44" Tan Womans Size Small`,
            size: '20x14x7',
            weight: 3.6,
            section: '3D'
        },
        {
            name: 'Kellytoy Squishmallow 8” Disney Pride Collection. Mickey, Minnie, Stitch & Bing',
            size: '10x10x11',
            weight: 2.5,
            section: '3B'
        },
        {
            name: 'Funko Soda HEAT MISER The Year Without A Santa Claus CHASE & COMMON',
            size: '6x5x7',
            weight: 1.0,
            section: '3B'
        },
        {
            name: 'Kellytoy Squishmallow 8” Disney Pride Collection. MICKEY & MINNIE MOUSE NWT',
            size: '9x9x7',
            weight: 1.3,
            section: '3B'
        },
        {
            name: 'Funko 7 Eleven SLURPEE Exclusive BLUE RASBERRY 89 BANANA 90 & CHERRY 92 Set of 3',
            size: '12x8x7',
            weight: 1.3,
            section: '4C'
        },
        {
            name: 'Funko POP! Disney Pinocchio BLUE FAIRY #1027 Limited CHASE Edition',
            size: '7x5x4',
            weight: 0.5,
            section: '4C'
        },
        {
            name: 'Funko POP! Heroes BATMAN with SDCC Bag #284 2019 Summer Convention Exclusive',
            size: '7x5x4',
            weight: 0.5,
            section: '4C'
        },
        {
            name: 'Star Wars Vintage Collection CLONE WARS VC214 Barriss VC215 Luminara VC216 Droid',
            size: '12x9x5',
            weight: 0.7,
            section: '3B',
            description: 'kenner'
        },
        {
            name: 'SWINGLINE Heavy Duty Stapler, 160 Sheet High Capacity Black/Gray (39005)',
            size: '16x10x6',
            weight: 3.8,
            section: '3B'
        },
        {
            name: 'DORITOS ROULETTE Nacho Cheese and Cool Ranch MAYBE HOT MAYBE NOT! 3oz 2 Pack',
            size: '8x7x6',
            weight: 0.6,
            section: '3B'
        },
        {
            name: '1960s Couroc of Monterey DANCING FROGS Platter Tray Barware Midcentury 15"x10"',
            section: '3B'
        },
        {
            name: 'Stranger Things Coke Coca Cola 1985 Limited Edition Collectors Pack + Bonus',
            size: '10x7x9',
            weight: 5.9,
            section: '3B'
        },
        {
            name: 'Funko Pop! Hologram Rick Clone #667 GITD Funko Shop Limited Edition MINT',
            size: '7x5x4',
            weight: 0.5,
            section: '3B'
        },
        {
            name: 'Funko Pop Wacky Races LAZY LUKE #599 2019 Summer Convention Shared Exclusive',
            size: '7x5x4',
            weight: 0.4,
            section: '3B'
        },
        {
            name: 'Funko Pop #853 SIGMUND 2019 Summer Convention Shared Exclusive Sea Monsters',
            size: '7x5x4',
            weight: 0.4,
            section: '3B'
        },
        {
            name: 'Comic Con SDCC 2019 50th TOUCAN Funko POP and PEZ Dispenser Shared Exclusive',
            size: '8x6x6',
            weight: 0.8,
            section: '4A'
        },
        {
            name: 'Funko Pop! Funkon 2021 Exclusive THE ROCKETEER #1068 Mint',
            size: '7x5x4',
            weight: 0.4,
            section: '4C'
        },
        {
            name: 'Squishmallow Kellytoy Disney WOODY and BUZZ LIGHTYEAR 5" Plush Stuffed NWT',
            size: '7x5x3',
            weight: 0.4,
            section: '1A'
        },
        {
            name: '2018 Funko POP! Marvel Venom "CARNAGE" #367',
            size: '7x5x4',
            weight: 0.4,
            section: '1A'
        },
        {
            name: 'Funko Pop Saturday Night Live BUTABI BROTHERS 2 Pack NYCC 2018 Fall Exclusive',
            size: '9x7x4',
            weight: 0.7,
            section: '4A'
        },
        {
            name: 'KellyToy Squishmallows BLAKE THE BUNNY 16" Squishmallow New with Tags',
            size: '13x13x8',
            weight: 2.9,
            section: 'X3'
        },
        {
            name: `Funko POP! Star Wars Art Series Walmart Exclusive DARTH VADER #517 (Endor)`,
            section : '4B'
        },
        {
            name: `Funko POP! Star Wars Art Series DARTH VADER 515 Mustafar 516 Hoth 517 Endor Set`,
            section : '4B'
        },
        {
            name: `POP Artist Series: Disney Treasures from The Vault - GOOFY, Amazon Exclusive`,
            section : '4C'
        },
        {
            name: `Funko Pop! XANATHAR (w/D20) #785 Dungeons & Dragons 2021 Summer Convention LE`,
            section : '4C'
        },
        {
            name: 'Vintage Silver Plates Set (10) 9" Round & (4) 7" Etched Trivet Made In England',
            size: '11x10x11',
            weight: 10.8,
            section: '3A'
        },
        {
            name: 'Disney MICKEY and MINNIE MOUSE Halloween Vampire and Witch 8" Plush Set NEW',
            size: '10x6x4',
            weight: 0.7,
            section: '3A'
        },
        {
            name: 'MONSTERS Cereal 4 Pk FRUTE BRUTE FRANKEN BERRY BOO-BERRY COUNT CHOCULA Sealed',
            size: '11x11x11',
            weight: 4.4,
            section: '3A'
        },
        {
            name: 'Funko POP! Marvel SPIDER-GIRL #955 PIAB Exclusive Blue Chase and Red Common',
            size: '11x7x5',
            weight: 1.0,
            section: '3B'
        },
        {
            name: 'Funko Pop! Nightmare Before Christmas 10" OOGIE BOOGIE Blacklight #810 LE',
            section: '3D'
        },
        {
            name: 'Loungefly Nightmare Before Christmas Mini Backpack and Wallet Hot Topic NWT',
            section: '3A'
        },
        {
            name: 'Funko Alice in Wonderland BlackLight ALICE CHESHIRE CAT MAD HATTER QUEEN',
            section: '3A'
        },
        {
            name: 'Funko Star Wars Art DARTH VADER 515 Mustafar 516 Hoth 517 Endor 518 Bespin',
            section: '3A'
        },
        {
            name: 'Funko Pop! Retro Toys Transformers UNICRON SDCC 2022 Summer Convention 10" #103',
            section: '2X'
        },
        {
            name: 'Nightmare Before Christmas Blacklight Funko SODA Jack Sally Mayor Oogie Boogie',
            section: '4A'
        },
        {
            name: 'Funko Pop! DC PEACEMAKER W/ PEACE SIGN SDCC 2022 Shared Exclusive #1260',
            section: '4A'
        },
        {
            name: 'Funko POP! Star Wars Art Series Walmart Exclusive DARTH VADER #518 (Bespin)',
            section: '4A'
        },
        {
            name: 'Funko Pop! YUJI ITADORI #1163 Jujutsu Kaisen 2022 SDCC Shared Exclusive',
            section: '4C'
        },
        {
            name: 'Funko Pop! AMERICA CHAVEZ SDCC Shared Exclusive Marvel Doctor Strange #1070',
            section: '4A'
        },
        {
            name: 'Funko Pop! Marvel Guardians of the Galaxy DRAX #442 Cyber Monday Exclusive LE',
            section: '4C'
        },
        {
            name: '2022 SDCC Loungefly TUSKEN RAIDER Mini Backpack Star Wars New Sealed',
            section: '1B'
        },
        {
            name: 'Funko Pop! Star Wars #548 KRRSANTAN Funko 2022 SDCC Shared Summer Convention',
            section: '4C'
        },
        {
            name: `Funko Pop WWE The Rock And Mankind 2 Pack Walmart Exclusive`,
            size: '10x8x5',
            weight: 0.9,
            section: '4C'
        },
        {
            name: `Funko POP! Disney Beauty And The Beast WARDROBE 2021 FUNKON Exclusive #1067`,
            size: '7x5x4',
            weight: 0.4,
            section: '4A'
        },
        {
            name: `Funko Pop! Heroes DC Batman RED HOOD #372 PIAB Exclusive`,
            size: '7x5x4',
            weight: 0.9,
            section: '4A'
        },
        {
            name: `Funko Pop! Batman Returns -THE PENGUIN AND DUCK RIDE #288 Summer Convention 2022`,
            size: '10x8x7',
            weight: 1.4,
            section: '4B'
        },
        {
            name: `Loungefly Princess Stories MERIDA Backpack, Wallet, Mug & Pin PALM Exclusive`,
            size: '16x12x7',
            weight: 1.4,
            section: '3A'
        },
        {
            name: `Nightmare Before Christmas Halloween OOGIE SALLY JACK SKELLINGTON Blow Mold Set`,
            size: '15x11x13',
            weight: 3.8,
            section: 'Z'
        },
        {
            name: `Disney HAUNTED MANSION HITCHHIKING Ghosts Door Greeters Plush 18" Tall NWT`,
            size: '24x14x10',
            weight: 3.6,
            section: 'Z'
        },
        {
            name: `Nightmare Before Christmas JACK & SALLY & PUMPKIN KING Light Up Pumpkin Stack`,
            size: '20x12x8',
            weight: 1.1,
            section: '1A'
        },
        {
            name: `Nightmare Before Christmas Door Greeter JACK OOGIE MAYOR ZERO SALLY FINKELSTEIN`,
            size: '25x17x6',
            weight: 10.4,
            section: 'Z'
        },
        {
            name: `Disney Nightmare Before Christmas Jack Skellington Pumpkin King Light Up Stack`,
            size: '13x8x11',
            weight: 1.2,
            section: '2D'
        },
        {
            name: `Disney The Nightmare Before Christmas HARLEQUIN DEMON Plush 6"`,
            size: '10x7x5',
            weight: 0.4,
            section: '4C'
        },
        {
            name: `Nightmare Before Christmas JACK SKELLINGTON & ZERO Snow Globe Water Globe New`,
            size: '10x9x7',
            weight: 3.1,
            section: '1A'
        },
        {
            name: `Funko Pop Universal Studios FRANKENSTEIN 1227 Blacklight Walgreens Sticker`,
            size: '7x5x4',
            weight: 0.4,
            section: '4C'
        },
        {
            name: `Nightmare Before Christmas CLOWN 6' Lit Airblown Inflatable Halloween Yard Decor`,
            section: '3B'
        },
        {
            name: `Nightmare Before Christmas Airblown Inflatable Jack Zero Scary Teddy 5.5FT LED`,
            section: '3D'
        },
        {
            name: `The Nightmare Before Christmas OOGIE, JACK & SALLY Lighted Pumpkin Set 8"`,
            size: '16x10x12',
            weight: 1.5,
            section: '1A'
        },
        {
            name: `Nightmare Before Christmas DEADLY NIGHT SHADE Faux Succulent Plant Ceramic 7”`,
            size: '7x7x7',
            weight: 1.0,
            section: '1C'
        },
        {
            name: `Funko Pop! Movies: THE LOST BOYS - FROG BROTHERS 2-pack FUNKO SHOP EXCLUSIVE NIB`,
            size: '10x9x7',
            weight: 1.0,
            section: '4A'
        },
        {
            name: `STRANGER THINGS Upside Down Drink Kit with Sprinkle Mix Straws Retro Beverage`,
            size: '11x8x6',
            weight: 1.3,
            section: '1A'
        },
        {
            name: `Loungefly Nightmare Before Christmas Gold Moon Mini Backpack Jack Skellington`,
            size: '11x8x9',
            weight: 1.9,
            section: '2D'
        },
        {
            name: `FUNKO Pop! MOVIES ANASTASIA (DIAMOND) #1240 SDCC SUMMER EXCLUSIVE LE NEW IN BOX`,
            size: '8x6x5',
            weight: 0.5,
            section: '2D'
        },
        {
            name: `Funko SCOTT PILGRIM VS THE WORLD Vegan Police 2019 Summer Convention Exclusive`,
            size: '9x7x4',
            weight: 0.8,
            section: '2C'
        },
        {
            name: `FUNKO Pop! MOVIES ANASTASIA (DIAMOND) #1240 SDCC SUMMER EXCLUSIVE LE NEW IN BOX`,
            size: '7x5x4',
            weight: 0.5,
            section: '4B'
        },
        {
            name: `Funko Pop Universal Studios FRANKENSTEIN 1227 Blacklight Walgreens Sticker`,
            size: '7x5x4',
            weight: 0.4,
            section: '4A'
        },
        {
            name: `Gemmy Airblown Inflatable Nightmare Before Christmas 3.5ft Sally W/ Pumpkin LED`,
            size: '9x8x6',
            weight: 3.3,
            section: '3B'
        },
        {
            name: `Airblown Gemmy Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON NIB`,
            size: '9x8x6',
            weight: 2.9,
            section: '3B',
            description: 'scaring sign',
        },
        {
            name: `Disney The Nightmare Before Christmas 14” ZERO Ghost Dog Squishmallow KellyToy`,
            size: '14x10x7',
            weight: 2.1,
            section: '3D'
        },
        {
            name: `Disney Airblown Gemmy Inflatable Nightmare Before Christmas 4.5ft ZERO LED NIB`,
            size: '11x8x6',
            weight: 3.3,
            section: '3B'
        },
        {
            name: `VAMPIRE JACK SKELLINGTON WITH PURPLE CAPE AND NIGHTSADE SALLY 12" Statues 2022`,
            size: '18x7x4',
            weight: 2.4,
            section: '2C'
        },
        {
            name: `Gemmy Halloween Disney 3.5 ft MICKEY and MINNIE MOUSE Airblown Inflatable New`,
            size: '15x11x12',
            weight: 7.3,
            section: '3D'
        },
        {
            name: `Disney Nightmare Before Christmas THE MASTER OF FRIGHT Jack Picture 3D 10x8"`,
            section: '1B'
        },
        {
            name: `Loungefly CORALINE Glow In the Dark Mini BACKPACK & WALLET Set Sold Out NWT`,
            size: '12x12x9',
            weight: 3.1,
            section: 'Z'
        },
        {
            name: `Nightmare Before Christmas CLOWN 6' Lit Airblown Inflatable Halloween Yard Decor`,
            size: '8x8x10',
            weight: 4.1,
            section: 'Z'
        },
        {
            name: `Nightmare Before Christmas CLOWN 6' Lit Airblown Inflatable Halloween Yard Decor`,
            size: '8x8x10',
            weight: 4.1,
            section: 'Z'
        },
        {
            name: `Nightmare Before Christmas CLOWN 6' Lit Airblown Inflatable Halloween Yard Decor`,
            size: '8x8x10',
            weight: 4.1,
            section: 'Z'
        },
        {
            name: `STRANGER THINGS Upside Down Drink Kit with Sprinkle Mix Straws Retro Beverage`,
            size: '12x9x6',
            weight: 1.2,
            section: '3B'
        },
        {
            name: `Loungefly CORALINE Glow In the Dark Mini BACKPACK & WALLET Set Sold Out NWT`,
            size: '14x10x7',
            weight: 2.6,
            section: '3B'
        },
        {
            name: `Obi-Wan Kenobi Frosted Flakes - Star Wars Celebration 2022 Set of 2 RARE CEREAL`,
            size: '13x11x6',
            weight: 2.5,
            section: '3C'
        },
        {
            name: `Loungefly CORALINE Glow In the Dark Mini BACKPACK & WALLET Set Sold Out NWT`,
            size: '12x12x9',
            weight: 3.1,
            section: '3B'

        },
        {
            name: `STRANGER THINGS Upside Down Drink Kit with Sprinkle Mix Straws Retro Beverage`,
            size: '12x8x6',
            weight: 1.4,
            section: '2D'
        },
        {
            name: `Nightmare Before Christmas JACK & SALLY & PUMPKIN KING Light Up Pumpkin Stack`,
            size: '17x14x11',
            weight: 2.4,
            section: 'Z'
        },
        {
            name: `Loungefly CORALINE Glow In the Dark Mini BACKPACK & WALLET Set Sold Out NWT`,
            size: '11x9x11',
            weight: 2.8,
            section: 'Z'
        },
        {
            name: `Loungefly Mickey Mouse Jack o' Lantern Crossbody Pumpkin Bag NWT`,
            size: '13x9x4',
            weight: 2.8,
            section: '1D'
        },
        {
            name: `NWT Loungefly Nightmare Before Christmas Headless Jack Skellington Mini Backpack`,
            size: '12x10x8',
            weight: 2.4,
            section: '1D'
        },
        {
            name: `Loungefly Disney MICKEY PUMPKIN MICK O LANTERN Backpack & Wallet GITD`,
            size: '11x9x12',
            weight: 2.7,
            section: '1C'
        },
        {
            name: `DISNEY Halloween Mini LIGHT UP Pumpkin VILLAINS SET Maleficent Ursula Cruella`,
            size: '8x6x5',
            weight: 0.5,
            section: '4C'
        },
        {
            name: `Loungefly Disney MICKEY MOUSE FRANKENSTEIN Mini Backpack EE Exclusive GITD NWT`,
            size: '14x9x6',
            weight: 2.1,
            section: '1C'
        },
        {
            name: `LOUNGEFLY Nightmare Before Christmas OOGIE BOOGIE Wheel Backpack & Wallet NWT`,
            size: '13x8x10',
            weight: 2.9,
            section: '1D'
        },
        {
            name: `Disney Loungefly Halloween Candy Corn Mickey & Minnie Backpack & Ears Headband`,
            size: '14x11x7',
            weight: 2.4,
            section: '1C'
        },
        {
            name: `Nightmare Before Christmas Oogie Boogie Neon Green Backpack - Hot Topic NWT`,
            size: '18x14x5',
            weight: 2.2,
            section: '1B'
        },
        {
            name: `HYDE & EEK! Boutique Orange LED Black Wire Drape Garland Halloween Set Of 3 NIB`,
            size: '14x10x7',
            weight: 2.8,
            section: '1C'
        },
        {
            name: `2021 Nightmare Before Christmas Exclusive Resin Presents JACK, SALLY & ZERO New`,
            size: '13x8x11',
            weight: 5.7,
            section: '1D'
        },
        {
            name: `The Nightmare Before Christmas Succulent Lock Shock & Barrel in Bathtub`,
            size: '7x5x4',
            weight: 0.6,
            section: '4C'
        },
        {
            name: `Disney The Nightmare Before Christmas Succulents Toy Duck Walgreens Exclusive`,
            size: '7x6x5',
            weight: 0.7,
            section: '4C'
        },
        {
            name: `Funko Pop! Michelangelo #1141 Jumbo 10" - Walmart - Teenage Mutant Ninja Turtles`,
            size: '15x12x12',
            weight: 4.0,
            section: '1C'
        },
        {
            name: `Hyde And Eek! Boutique LED Rotating Tabletop Indoor Ghost Light`,
            size: '8x7x9',
            weight: 0.9,
            section: '1D'
        },
        {
            name: `Airblown Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON LED New`,
            size: '10x9x7',
            weight: 3.6,
            section: '1D',
            description: 'jack on pumpkin'
        },
        {
            name: `Philips Halloween Ghost Skeleton Apparition Motion Projector Green LED`,
            size: '11x7x6',
            weight: 1.4,
            section: '4C'
        },
        {
            name: `Gemmy Airblown Inflatable Nightmare Before Christmas 3.5ft Sally W/ Pumpkin LED`,
            size: '11x10x7',
            weight: 3.8,
            section: '1D'
        },
        {
            name: `Philips Halloween Spooky Jack O Lantern Orange Pumpkin Motion Projector LED`,
            size: '11x8x6',
            weight: 1.5,
            section: '1D'
        },
        {
            name: `Disney The Nightmare Before Christmas 2 Pack Pillowcase Set Halloween Candy Bag`,
            section: '2B'
        },
        {
            name: `HYDE and EEK Boutique LED Happy Halloween Banner Lights New`,
            size: '11x9x16',
            weight: 1.4,
            section: '1A'
        },
        {
            name: `Hyde and Eek! Boutique 20″ Lit Halloween Sisal Animated Cat RARE!`,
            size: '16x10x12',
            weight: 4.5,
            section: '1B'
        },
        {
            name: `Disney NIGHTMARE BEFORE CHRISTMAS Characters String Lights Walgreens Exclusive`,
            size: '12x9x5',
            weight: 1.2,
            section: '1A'
        },
        {
            name: `DISNEY Halloween Mini LIGHT UP Pumpkin VILLAINS SET Maleficent Ursula Cruella`,
            size: '8x6x5',
            weight: 0.5,
            section: '4C'
        },
        {
            name: `Nightmare Before Christmas Backpack Full Size Glow In The Dark Slouch Bag New`,
            size: '16x9x6',
            weight: 1.7,
            section: '1A'
        },
        {
            name: `DISNEY Halloween Mini LIGHT UP Pumpkin VILLAINS SET Maleficent Ursula Cruella`,
            size: '8x6x5',
            weight: 0.5,
            section: '4C'
        },
        {
            name: `Ghostbusters Ghost Trap Child Costume Accessory Disguise Halloween New with Tags`,
            size: '16x9x6',
            weight: 1.6,
            section: '1C'
        },
        {
            name: `HOCUS POCUS LED ROTATING SHADOW PROJECTION LIGHT HALLOWEEN TABLETOP GEMMY NEW`,
            size: '10x8x9',
            weight: 1.5,
            section: '1D'
        },
        {
            name: `Airblown Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON LED New`,
            size: '12x7x9',
            weight: 3.7,
            section: '4C',
            description: 'jack on pumpkin'
        },
        {
            name: `Airblown Gemmy Inflatable Nightmare Before Christmas 3.5ft JACK SKELLINGTON NIB`,
            size: '12x8x8',
            weight: 3.6,
            section: '1D',
            description: 'scaring sign'
        },
        {
            name: `Loungefly Disney MINNIE MOUSE GHOST Glow-in-the-Dark Mini BACKPACK & WALLET NWT`,
            size: '16x12x7',
            weight: 2.7,
            section: '1C'
        },
        {
            name: `Disney Loungefly Halloween Candy Corn Mickey & Minnie Backpack & Ears Headband`,
            size: '11x11x8',
            weight: 2.8,
            section: '1C'
        },
        {
            name: `NBC Loungefly LOCK, SHOCK & BARREL Oogie Boogie Backpack & Wallet NEW`,
            size: '12x10x10',
            weight: 2.4,
            section: '1C'
        },
        {
            name: `Funko Pop HULKBUSTER vs HULK #394 Marvel Avengers Movie Moments Figure 2018 NYCC`,
            size: '14x11x11',
            weight: 3.5,
            section: 'Z'
        },
        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },

        // {
        //     name: ``,
        //     size: '',
        //     weight: ,
        //     section: ''
        // },


    ]);

    console.log('items seeded');

    items.forEach(async item => {
        await Section.findOneAndUpdate(
            { name: item.section },
            { $addToSet: { items: item } }
        )
    })

    await User.deleteMany();

    await User.create({
        email: 'caingain@comcast.net',
        password: 'Dizzydog#1',
        sections: sections,
        items: items
    });

    console.log('users seeded');

    process.exit();
});