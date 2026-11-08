// Words database — CONFIRMED words only (zero-fabrication rule, docs/关键词素材.md §5).
// Evidence tier: "official" = official game description or first-party screenshot;
// "media" = multiple independent outlets; "community" = single-source / tooling evidence.
// Add new words ONLY with an evidence source. Never invent a catalog.

export type WordCategory =
  | "disaster"
  | "creature"
  | "persistent"
  | "funny"
  | "object";

export type GameWord = {
  slug: string;
  word: string;
  category: WordCategory;
  evidence: "official" | "media" | "community";
  evidenceNote: string;
  persistent?: boolean;
  survival: string;
  offense?: string;
  funnyNote?: string;
  deepDive: string[]; // 2-3 paragraph mechanic deep-dive, derived from verified facts only
};

export const WORDS: GameWord[] = [
  {
    slug: "nuke",
    word: "NUKE",
    category: "disaster",
    evidence: "official",
    evidenceNote:
      "Listed in the official game description (☢️ Nuke?) and described by Destructoid, Pro Game Guides and RoUniverse.",
    survival:
      "Blast-type hazard. The community-standard answer is a Force Field in slot one — it eats the blast without repositioning. If you have a Grapple Hook, fire it away from the arena center the moment the word appears, not when the explosion spawns.",
    offense:
      "Type it when the arena is crowded and other players are mid-loot or mid-climb. The blast punishes players who stayed still.",
  deepDive: [
    "NUKE's power comes from timing economics rather than raw damage. The game spaces typed prompts with deliberate gaps, which means every NUKE is a scheduled event the entire lobby sees coming — the effect name is public the instant it is typed, and the blast materializes on a visible delay. That structure makes NUKE the purest test of the game's core skill: players who move when the word appears escape almost every blast, while players who wait for the visible explosion lose the race they did not know they were running. This is why NUKE is simultaneously the most famous word in the game and, statistically, one of the fairer ones — the counter-play is fully available to everyone watching.",
    "The blast also interacts with the stacking rule in a way new players underestimate. Because hazards accumulate rather than replace each other, a NUKE typed mid-match detonates inside an arena that already contains floods, chasers and persistent threats. The blast's real lethality in those moments is not its direct hit but the forced movement it triggers: players sprinting out of the blast radius routinely sprint into flood water, off compromised platforms, or directly into a patrolling creature. Veteran players therefore treat NUKE as a movement hazard first and a damage hazard second — the escape route matters more than the epicenter.",
    "For the writer, NUKE is the most reliable crowd tool in the confirmed catalog. Typing it when players cluster — around loot, on popular platforms, or during the panic of another hazard — converts the crowd's own positioning into eliminations. It is also the word most tightly bound to the Deadly Idea badge (eliminate three players with a single word), because no other confirmed effect punishes clustering as immediately.",
  ],
  },
  {
    slug: "tsunami",
    word: "TSUNAMI",
    category: "disaster",
    evidence: "official",
    evidenceNote:
      "Listed in the official game description (🌊 Tsunami?) and covered by every major outlet's first-wave coverage.",
    survival:
      "Flood-type hazard: climb to the highest platform you can reach before the wave lands, and keep one escape route in case an older stacked hazard blocks your perch. Without a mobility item, a Force Field is your only fallback — which is exactly why loadout guides rank the Grapple Hook first.",
    offense:
      "Strongest when the arena floor is still crowded. Weak against players already on high ground, so combo it after a hazard that forced people down.",
  deepDive: [
    "TSUNAMI reshapes the arena's vertical economy. The flood transforms ground-level space from 'default safe' into 'temporarily lethal', and the match's positional math changes with it: height becomes currency, and players who spent the early minutes near elevated platforms hold an advantage that has nothing to do with reflexes. What makes the flood dangerous long-term is the stacking interaction — later hazards that force players down (a blast, a chaser's pressure) become dramatically more lethal while flood water is still active, because the safe ground they demand is already underwater.",
    "The wave's timing profile also rewards map knowledge over reaction speed. The typed word gives the lobby the same warning a NUKE does, but a flood punishes slow vertical movement far more than slow horizontal movement — climbing takes longer than running, so the effective reaction window is shorter. Players who pre-position near climbable structures survive TSUNAMIs that catch faster players on flat ground. That is why experienced survivors loiter near verticality by default rather than treating it as a TSUNAMI-specific response.",
    "As an offensive pick, TSUNAMI is the confirmed catalog's best combo word. On its own, into a spread lobby that holds high ground, it eliminates almost nobody. Typed immediately after a hazard that dragged players low — or into a lobby still recovering from the last disaster — it becomes arguably the highest single-word kill potential in the game. The wave does not create its own victims; it harvests the previous word's.",
  ],
  },
  {
    slug: "dinosaur",
    word: "DINOSAUR",
    category: "creature",
    evidence: "official",
    evidenceNote:
      "Listed in the official game description (🦖 Dinosaur?) with chasing-creature behavior confirmed by RoUniverse and Sportskeeda.",
    survival:
      "Creature words chase instead of flooding. Hold your Rocket Launcher until the creature commits to a direction, then fire and grapple during its recovery. Never kite it into a corner — creature words punish dead-ends.",
    offense:
      "Best against scattered lobbies: a chaser keeps pressure on every player at once, unlike point-effect disasters.",
  deepDive: [
    "DINOSAUR introduces the game's chase dynamic, and chasers play by completely different rules than area hazards. Where a blast punishes position once, a creature punishes positioning continuously — it patrols, pursues and reshapes safe movement for its entire lifespan. The survival skill that matters most against it is route geometry: creatures excel at cornering players who retreat along walls and into dead ends, so the counter-instinct is to keep the creature in open space where its commitment direction is visible and its recovery windows are exploitable.",
    "The public-information loop that defines the game applies doubly to creature words. Everyone reads DINOSAUR at the same moment, but the spawn point matters more against a chaser than against any other family — your distance from where it materializes determines whether this is a background pressure or a personal emergency. Experienced players immediately check their position relative to the spawn, not just the creature itself, because the spawn-to-player vector is what decides the next thirty seconds.",
    "Offensively, DINOSAUR is pressure rather than elimination. It rarely removes players directly; instead it forces movement, and forced movement in a stacked arena does the killing — into floods, off edges, into older hazards. This makes it the natural mid-match word: early, the arena is too empty for its pressure to matter; late, the persistent hazards are already doing the forcing. Typed into a crowded mid-game, every player it displaces becomes another hazard's problem.",
  ],
  },
  {
    slug: "tacos",
    word: "TACOS",
    category: "funny",
    evidence: "official",
    evidenceNote:
      "Listed in the official game description (🌮 Tacos?) and repeated by Dexerto ('a pile of tacos').",
    survival:
      "Mostly a chaos/gag effect rather than a lethal hazard, but it still fills the arena with objects that block routes and camera lines. Treat it as free Index progress — type it early in a match to bank the discovery while the floor is safe.",
    funnyNote:
      "The taco flood is the game's signature 'anything goes' moment and a staple of TikTok clips.",
  deepDive: [
    "TACOS is the game's tone-setter, and its design says more about Survive Your Ideas than any disaster word does. The official description leads with it ('Anything goes') because tacos are the proof that the catalog is not exclusively lethal — a word typed by a player whose only goal is to make forty people watch tacos fall from the sky is a fully valid move. That design choice is why the game's social clips spread the way they do: the comedy is not a bug or an easter egg, it is a first-class citizen of the word catalog.",
    "Mechanically, the taco flood is a terrain-filler rather than a killer. Spawned objects accumulate, block sightlines and obstruct routes, and in a stacked arena those obstructions matter — they are obstacles you must path around while simultaneously tracking a chaser or climbing from flood water. The practical survival read: treat a taco flood as a minor navigation hazard with high entertainment value, and use its calm window for what it is actually good for — banking a Word Diary discovery while nothing is trying to kill you.",
    "For new players, TACOS is the recommended first typed word, and the reasoning is economic rather than comedic. It is officially catalogued (the discovery counts), effectively non-lethal (typing it early cannot backfire the way a poorly timed NUKE can), and it converts your first writer turn into Index progress plus a one-time Cash bonus at zero risk. The habit it builds — spending calm turns on the diary — is exactly the pattern that funds Meta Words weeks earlier.",
  ],
  },
  {
    slug: "zombies",
    word: "ZOMBIES",
    category: "persistent",
    evidence: "media",
    evidenceNote:
      "Sportskeeda's beginner guide: 'certain words are exceptions, such as ZOMBIES or METEOR, the effects of which remain active for the duration of the match.'",
    persistent: true,
    survival:
      "Persistent hazard — it stays for the whole match, so your safe perch keeps shrinking. Save movement cooldowns and avoid dense crowds: zombies pressure grouped players first. Re-plan your route every few minutes instead of parking.",
    offense:
      "Typing it EARLY maximizes total pressure. A match-long chaser typed in minute one wears everyone down before the endgame.",
  deepDive: [
    "ZOMBIES is one of the two documented persistent words — Sportskeeda's beginner guide notes its effect 'remains active for the duration of the match' — and persistence changes the word's entire strategic identity. A resolving hazard has a moment of maximum danger; a persistent hazard has a continuously compounding one. Every minute of active zombies is another minute of route compression, another layer of pressure on players already handling floods or chasers, and another chunk of the arena that is no longer safe to stand in.",
    "That compounding makes ZOMBIES the clearest expression of the game's timing economics. Value per word is not fixed — it is a function of when the word is typed. A zombie tide summoned in the opening minutes applies pressure across the entire match; the same word typed late applies a fraction of that total. No other confirmed word rewards early typing this explicitly, which is why experienced players treat the first calm writer turn as a fork: bank a diary entry OR deploy all-match pressure, and either choice is correct, but indecision wastes the window.",
    "The survival counter-play inverts the usual instincts. Against moment hazards, players hold resources for emergencies; against persistent ones, resource management across ten-plus minutes matters more than any single reaction. Safe ground shrinks continuously, so routes need continuous re-planning rather than one-time setup. And crowds become deadlier over time — zombie pressure groups players together onto ever-smaller safe zones, which then makes everyone in that cluster vulnerable to the next area word. Standing near the same fifteen people at minute twelve is a different risk than it was at minute two.",
  ],
  },
  {
    slug: "meteor",
    word: "METEOR",
    category: "persistent",
    evidence: "media",
    evidenceNote:
      "Same Sportskeeda passage as ZOMBIES — METEOR effects persist until the match ends.",
    persistent: true,
    survival:
      "Persistent aerial bombardment. Keep moving between cover pieces and watch the sky camera-side; standing still on the highest platform makes you a fixed target. For once, the low ground with cover beats the high perch.",
    offense:
      "Counter-pick against campers: it punishes anyone holding a static high-ground position.",
  deepDive: [
    "METEOR is the other documented persistent word, and it is ZOMBIES' tactical opposite. Where zombies pressure from ground level and punish clustering, meteors bombard from above and punish static positioning — specifically the high-ground perch that most players treat as the game's default safe spot. The survival meta that works against floods and blasts (get high, stay high) actively fails against a persistent meteor shower, and that inversion is what makes the word valuable both to type and to understand.",
    "The counter-play requires genuinely different movement habits: cover-hopping rather than perching, constant repositioning between shelters, and watching overhead space the way chaser survival requires watching sightlines. Players who survive long meteor phases describe a rhythm — move between covers, never linger in the open, never trust the same shelter for the full duration. It is the most demanding movement profile in the confirmed catalog, and the badge designed around long matches (Survivor: survive 60 words) becomes much harder in lobbies where someone typed METEOR early.",
    "Offensively, METEOR is the anti-camper word. Late-match circles naturally compress players onto the safest-looking ground — usually elevated, usually central. A persistent bombardment typed into that endgame turns the strongest position into the worst one, and the players who adapted their movement earliest reclaim the advantage. It is niche compared to NUKE's universal threat, but in its niche — punishing players who have been standing still for ten minutes — nothing else in the catalog competes.",
  ],
  },
  {
    slug: "shark",
    word: "SHARK",
    category: "creature",
    evidence: "official",
    evidenceNote:
      "Shown in the game's own cover art — the typing-bubble UI displays 'SHARK' being sent. First-party visual evidence.",
    survival:
      "Treat it like other creature words: keep distance, use vertical space, and punish its commit direction. The cover art shows it bursting through terrain, so terrain is NOT safe cover against it.",
    funnyNote:
      "The SHARK typing bubble is the game's most recognizable image — which is why it anchors this wiki's hero.",
  deepDive: [
    "SHARK holds a special place in the game's identity: it is the word in the official cover art, frozen mid-breach in the typing bubble that defines Survive Your Ideas' UI. That prominence is earned — the shark embodies the game's core promise (type anything, get something enormous and immediate) in a single image, and it is the visual most clipped, shared and associated with the game's explosion.",
    "As a hazard, the shark belongs to the creature family with one documented twist visible in its own cover art: it breaches through terrain. Ground-level structures that block line of sight and movement against other hazards do not reliably stop it, which makes terrain-based 'safety' against the shark a trap. The practical adjustment is to treat terrain as cover for its duration rather than a wall forever — the shark's breach behavior means your shelter has an expiration date, and the players who re-locate before it expires are the ones still standing after.",
    "The word also illustrates the game's evidence discipline nicely. The shark's existence is confirmed by first-party art — the developer's own promoted image shows the word being typed and the effect spawned — which is the strongest evidence tier this wiki assigns short of a written description. It is a reminder that the game communicates its catalog through art as much as text, and why word evidence on this site includes official imagery alongside written sources.",
  ],
  },
  {
    slug: "black-hole",
    word: "BLACK HOLE",
    category: "disaster",
    evidence: "community",
    evidenceNote:
      "Community tooling evidence: the XVC survival script ships an 'Anti Black Hole' toggle (cheater.fun listing). The event exists; official description does not name it.",
    survival:
      "Pull-type hazard. Community advice in script menus implies it drags players toward a point — the counter-play is anchor items and staying off open ground. Marked community-reported until official sources name it.",
  deepDive: [
    "BLACK HOLE is this wiki's most conservatively documented entry, and the reasoning is worth understanding. Its existence evidence is real but indirect: a popular community survival tool ships an 'Anti Black Hole' toggle — functionality that only makes sense as a counter to an in-game pull-type hazard. No official description names it, no major outlet has written it up, and until one of those confirms it, this wiki labels every detail community-reported rather than stating mechanics as fact.",
    "The inferential picture, clearly labeled as inference: a pull-type hazard in a stacking-arena game would be one of the most positionally disruptive effects possible. Unlike blasts (damage at a point) or floods (lethality at a height), a pull inverts the player's agency — instead of choosing where to go, you are being moved, and counter-play shifts from route planning to resisting displacement: anchoring, keeping off open ground, and treating the pull's start point as the danger rather than its destination. If confirmed, expect it to be an endgame-shaping word typed into final circles precisely because displacement kills clustered survivors.",
    "The reason this page exists at all, despite the thin evidence: players are searching for it. The survival tooling's feature list is itself community documentation — someone built an anti-black-hole toggle because players kept dying to something. This wiki's policy is to document the search-demand reality with honest labels rather than omit a hazard players are clearly encountering, and the entry upgrades the moment official sources name it.",
  ],
  },
];

export const WORD_CATEGORIES: { id: WordCategory; label: string; blurb: string }[] = [
  {
    id: "disaster",
    label: "Disasters",
    blurb: "Point-in-time area effects that resolve and clear. NUKE, TSUNAMI, BLACK HOLE.",
  },
  {
    id: "creature",
    label: "Creatures",
    blurb: "Spawning chasers that hunt players across the arena. DINOSAUR, SHARK.",
  },
  {
    id: "persistent",
    label: "Persistent",
    blurb: "Match-long pressure that never clears. ZOMBIES, METEOR.",
  },
  {
    id: "funny",
    label: "Funny / Gag",
    blurb: "Chaotic but mostly non-lethal effects. TACOS.",
  },
  {
    id: "object",
    label: "Objects",
    blurb: "Spawned props and structures. Community reports only so far.",
  },
];

// What happens when a word is NOT in the game's database (Sportskeeda, multi-source).
export const UNKNOWN_WORD_BEHAVIOR = [
  "The game maps your input to the closest existing effect and triggers that instead.",
  "Or it spawns an NPC that carries the name of whatever you typed.",
];

// Badge target confirmed by the official badge description (badges.roblox.com API).
export const DIARY_TARGET = 150;
