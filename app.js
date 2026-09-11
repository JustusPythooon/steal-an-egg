# EggDex pet data and local collection helpers
# JM Code Studio
# Data status: 11 September 2026
# Inofficial fan project. Unknown values are intentionally stored as None/"Unknown".

from __future__ import annotations

import json
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Optional

DATA_FILE = Path("eggdex_collection.json")


@dataclass(frozen=True)
class Pet:
    id: str
    name: str
    emoji: str
    egg: Optional[str]
    rarity: str
    biome: str
    category: str
    income: Optional[int] = None


PETS = [
    Pet(id='chicken', name='Chicken', emoji='🐔', egg='Chicken Egg', rarity='Common', biome='Forest', category='Regular', income=None),
    Pet(id='dog', name='Dog', emoji='🐶', egg='Dog Egg', rarity='Common', biome='Forest', category='Regular', income=None),
    Pet(id='bird', name='Bird', emoji='🐦', egg='Bird Egg', rarity='Uncommon', biome='Forest', category='Regular', income=None),
    Pet(id='burrowing-owl', name='Burrowing Owl', emoji='🦉', egg='Burrowing Owl Egg', rarity='Rare', biome='Forest', category='Regular', income=None),
    Pet(id='raccoon', name='Raccoon', emoji='🦝', egg='Raccoon Egg', rarity='Rare', biome='Forest', category='Regular', income=None),
    Pet(id='fox', name='Fox', emoji='🦊', egg='Fox Egg', rarity='Epic', biome='Forest', category='Regular', income=None),
    Pet(id='bear', name='Bear', emoji='🐻', egg='Bear Egg', rarity='Epic', biome='Forest', category='Regular', income=None),
    Pet(id='brr-brr-patapim', name='Brr Brr Patapim', emoji='🌳', egg='Brr Brr Patapim Egg', rarity='Legendary', biome='Forest', category='Regular', income=None),
    Pet(id='frog', name='Frog', emoji='🐸', egg='Frog Egg', rarity='Common', biome='Lake', category='Regular', income=None),
    Pet(id='duckling', name='Duckling', emoji='🐤', egg='Duckling Egg', rarity='Common', biome='Lake', category='Regular', income=None),
    Pet(id='catfish', name='Catfish', emoji='🐟', egg='Catfish Egg', rarity='Uncommon', biome='Lake', category='Regular', income=None),
    Pet(id='turtle', name='Turtle', emoji='🐢', egg='Turtle Egg', rarity='Rare', biome='Lake', category='Regular', income=None),
    Pet(id='trulimero-trulicina', name='Trulimero Trulicina', emoji='🐬', egg='Trulimero Trulicina Egg', rarity='Epic', biome='Lake', category='Regular', income=None),
    Pet(id='swan', name='Swan', emoji='🦢', egg='Swan Egg', rarity='Epic', biome='Lake', category='Regular', income=None),
    Pet(id='axolotl', name='Axolotl', emoji='🦎', egg='Axolotl Egg', rarity='Legendary', biome='Lake', category='Regular', income=None),
    Pet(id='leviathan', name='Leviathan', emoji='🐉', egg='Leviathan Egg', rarity='Cosmic', biome='Lake', category='Regular', income=None),
    Pet(id='jerboa', name='Jerboa', emoji='🐭', egg='Jerboa Egg', rarity='Common', biome='Desert', category='Regular', income=None),
    Pet(id='fennec', name='Fennec', emoji='🦊', egg='Fennec Egg', rarity='Uncommon', biome='Desert', category='Regular', income=None),
    Pet(id='camel', name='Camel', emoji='🐫', egg='Camel Egg', rarity='Rare', biome='Desert', category='Regular', income=None),
    Pet(id='tob-tobi-tob-tob', name='Tob Tobi Tob Tob', emoji='🪨', egg='Tob Tobi Tob Tob Egg', rarity='Epic', biome='Desert', category='Regular', income=None),
    Pet(id='snake', name='Snake', emoji='🐍', egg='Snake Egg', rarity='Legendary', biome='Desert', category='Regular', income=None),
    Pet(id='sand-spider', name='Sand Spider', emoji='🕷️', egg='Sand Spider Egg', rarity='Mythic', biome='Desert', category='Regular', income=None),
    Pet(id='scorpion', name='Scorpion', emoji='🦂', egg='Scorpion Egg', rarity='Mythic', biome='Desert', category='Regular', income=None),
    Pet(id='royal-sphinx', name='Royal Sphinx', emoji='🐈', egg='Royal Sphinx Egg', rarity='Cosmic', biome='Desert', category='Regular', income=None),
    Pet(id='chimpanzee', name='Chimpanzee', emoji='🐵', egg='Chimpanzee Egg', rarity='Rare', biome='Jungle', category='Regular', income=None),
    Pet(id='toucan', name='Toucan', emoji='🦜', egg='Toucan Egg', rarity='Rare', biome='Jungle', category='Regular', income=None),
    Pet(id='crocodile', name='Crocodile', emoji='🐊', egg='Crocodile Egg', rarity='Epic', biome='Jungle', category='Regular', income=None),
    Pet(id='gorilla', name='Gorilla', emoji='🦍', egg='Gorilla Egg', rarity='Legendary', biome='Jungle', category='Regular', income=None),
    Pet(id='orangutini-ananassini', name='Orangutini Ananassini', emoji='🦧', egg='Orangutini Ananassini Egg', rarity='Legendary', biome='Jungle', category='Regular', income=None),
    Pet(id='spider', name='Spider', emoji='🕷️', egg='Spider Egg', rarity='Mythic', biome='Jungle', category='Regular', income=None),
    Pet(id='tiger', name='Tiger', emoji='🐅', egg='Tiger Egg', rarity='Mythic', biome='Jungle', category='Regular', income=None),
    Pet(id='king-snake', name='King Snake', emoji='👑🐍', egg='King Snake Egg', rarity='Secret', biome='Jungle', category='Regular', income=None),
    Pet(id='penguin', name='Penguin', emoji='🐧', egg='Penguin Egg', rarity='Rare', biome='Snow', category='Regular', income=None),
    Pet(id='walrus', name='Walrus', emoji='🦭', egg='Walrus Egg', rarity='Epic', biome='Snow', category='Regular', income=None),
    Pet(id='polar-bear', name='Polar Bear', emoji='🐻\u200d❄️', egg='Polar Bear Egg', rarity='Legendary', biome='Snow', category='Regular', income=None),
    Pet(id='sabertooth-tiger', name='Sabertooth Tiger', emoji='🐯', egg='Sabertooth Tiger Egg', rarity='Mythic', biome='Snow', category='Regular', income=None),
    Pet(id='mammoth', name='Mammoth', emoji='🦣', egg='Mammoth Egg', rarity='Mythic', biome='Snow', category='Regular', income=None),
    Pet(id='king-mammoth', name='King Mammoth', emoji='👑🦣', egg='King Mammoth Egg', rarity='Cosmic', biome='Snow', category='Regular', income=None),
    Pet(id='yeti', name='Yeti', emoji='👹', egg='Yeti Egg', rarity='Secret', biome='Snow', category='Regular', income=None),
    Pet(id='ice-dragon', name='Ice Dragon', emoji='❄️🐉', egg='Ice Dragon Egg', rarity='Eternal', biome='Snow', category='Regular', income=None),
    Pet(id='lava-gecko', name='Lava Gecko', emoji='🦎', egg='Lava Gecko Egg', rarity='Rare', biome='Volcano', category='Regular', income=None),
    Pet(id='lava-frog', name='Lava Frog', emoji='🔥🐸', egg='Lava Frog Egg', rarity='Epic', biome='Volcano', category='Regular', income=None),
    Pet(id='flaming-bull', name='Flaming Bull', emoji='🔥🐂', egg='Flaming Bull Egg', rarity='Legendary', biome='Volcano', category='Regular', income=None),
    Pet(id='lava-iguana', name='Lava Iguana', emoji='🔥🦎', egg='Lava Iguana Egg', rarity='Legendary', biome='Volcano', category='Regular', income=None),
    Pet(id='chillin-chilli', name='Chillin Chilli', emoji='🌶️', egg='Chillin Chilli Egg', rarity='Mythic', biome='Volcano', category='Regular', income=None),
    Pet(id='cerberus', name='Cerberus', emoji='🐺', egg='Cerberus Egg', rarity='Secret', biome='Volcano', category='Regular', income=None),
    Pet(id='phoenix', name='Phoenix', emoji='🔥🦅', egg='Phoenix Egg', rarity='Eternal', biome='Volcano', category='Regular', income=None),
    Pet(id='lava-dragon', name='Lava Dragon', emoji='🌋🐉', egg='Lava Dragon Egg', rarity='Eternal', biome='Volcano', category='Regular', income=None),
    Pet(id='parrotfish', name='Parrotfish', emoji='🐠', egg='Parrotfish Egg', rarity='Rare', biome='Abyss Ocean', category='Regular', income=None),
    Pet(id='swordfish', name='Swordfish', emoji='🐟', egg='Swordfish Egg', rarity='Epic', biome='Abyss Ocean', category='Regular', income=None),
    Pet(id='shark', name='Shark', emoji='🦈', egg='Shark Egg', rarity='Legendary', biome='Abyss Ocean', category='Regular', income=None),
    Pet(id='orca', name='Orca', emoji='🐋', egg='Orca Egg', rarity='Mythic', biome='Abyss Ocean', category='Regular', income=None),
    Pet(id='whale-shark', name='Whale Shark', emoji='🦈', egg='Whale Shark Egg', rarity='Cosmic', biome='Abyss Ocean', category='Regular', income=None),
    Pet(id='beluga-whale', name='Beluga Whale', emoji='🐳', egg='Beluga Whale Egg', rarity='Cosmic', biome='Abyss Ocean', category='Regular', income=None),
    Pet(id='kraken', name='Kraken', emoji='🐙', egg='Kraken Egg', rarity='Secret', biome='Abyss Ocean', category='Regular', income=None),
    Pet(id='el-maja', name='El Maja', emoji='🌊🐉', egg='El Maja Egg', rarity='Eternal', biome='Abyss Ocean', category='Regular', income=None),
    Pet(id='dodo', name='Dodo', emoji='🦤', egg='Dodo Egg', rarity='Rare', biome='Prehistoric', category='Regular', income=None),
    Pet(id='pterodactyl', name='Pterodactyl', emoji='🦖', egg='Pterodactyl Egg', rarity='Legendary', biome='Prehistoric', category='Regular', income=None),
    Pet(id='ankylosaurus', name='Ankylosaurus', emoji='🦕', egg='Ankylosaurus Egg', rarity='Mythic', biome='Prehistoric', category='Regular', income=None),
    Pet(id='triceratops', name='Triceratops', emoji='🦖', egg='Triceratops Egg', rarity='Cosmic', biome='Prehistoric', category='Regular', income=None),
    Pet(id='bronto', name='Bronto', emoji='🦕', egg='Bronto Egg', rarity='Cosmic', biome='Prehistoric', category='Regular', income=None),
    Pet(id='t-rex', name='T-Rex', emoji='🦖', egg='T-Rex Egg', rarity='Secret', biome='Prehistoric', category='Regular', income=None),
    Pet(id='tralaledon', name='Tralaledon', emoji='🦈', egg='Tralaledon Egg', rarity='Secret', biome='Prehistoric', category='Regular', income=None),
    Pet(id='mosasaurus', name='Mosasaurus', emoji='🌊🦖', egg='Mosasaurus Egg', rarity='Eternal', biome='Prehistoric', category='Regular', income=None),
    Pet(id='centapede', name='Centapede', emoji='🐛', egg='Centapede Egg', rarity='Epic', biome='Cosmic', category='Regular', income=None),
    Pet(id='cosmic-gecko', name='Cosmic Gecko', emoji='🌌🦎', egg='Cosmic Gecko Egg', rarity='Legendary', biome='Cosmic', category='Regular', income=None),
    Pet(id='cosmic-gorilla', name='Cosmic Gorilla', emoji='🌌🦍', egg='Cosmic Gorilla Egg', rarity='Mythic', biome='Cosmic', category='Regular', income=None),
    Pet(id='la-vacca-saturno-saturnita', name='La Vacca Saturno Saturnita', emoji='🪐🐄', egg='La Vacca Saturno Saturnita Egg', rarity='Cosmic', biome='Cosmic', category='Regular', income=None),
    Pet(id='cosmic-skeleton-boss', name='Cosmic Skeleton Boss', emoji='💀', egg='Cosmic Skeleton Boss Egg', rarity='Secret', biome='Cosmic', category='Regular', income=None),
    Pet(id='cosmic-dragon', name='Cosmic Dragon', emoji='🌌🐉', egg='Cosmic Dragon Egg', rarity='Secret', biome='Cosmic', category='Regular', income=None),
    Pet(id='eternal-lunar-dragon', name='Eternal Lunar Dragon', emoji='🌙🐉', egg='Eternal Lunar Dragon Egg', rarity='Eternal', biome='Cosmic', category='Regular', income=None),
    Pet(id='unicorn', name='Unicorn', emoji='🦄', egg='Unicorn Egg', rarity='Divine', biome='Cosmic', category='Regular', income=None),
    Pet(id='crane', name='Crane', emoji='🦢', egg='Crane Egg', rarity='Epic', biome='Cherry Blossom', category='Regular', income=None),
    Pet(id='salamander', name='Salamander', emoji='🦎', egg='Salamander Egg', rarity='Legendary', biome='Cherry Blossom', category='Regular', income=None),
    Pet(id='red-panda', name='Red Panda', emoji='🐼', egg='Red Panda Egg', rarity='Mythic', biome='Cherry Blossom', category='Regular', income=None),
    Pet(id='snowy-owl', name='Snowy Owl', emoji='🦉', egg='Snowy Owl Egg', rarity='Cosmic', biome='Cherry Blossom', category='Regular', income=None),
    Pet(id='koi', name='Koi', emoji='🎏', egg='Koi Egg', rarity='Cosmic', biome='Cherry Blossom', category='Regular', income=None),
    Pet(id='stag', name='Stag', emoji='🦌', egg='Stag Egg', rarity='Secret', biome='Cherry Blossom', category='Regular', income=None),
    Pet(id='oni-tiger', name='Oni Tiger', emoji='👹🐅', egg='Oni Tiger Egg', rarity='Eternal', biome='Cherry Blossom', category='Regular', income=None),
    Pet(id='kitsune', name='Kitsune', emoji='🦊', egg='Kitsune Egg', rarity='Divine', biome='Cherry Blossom', category='Regular', income=None),
    Pet(id='spideron', name='Spideron', emoji='🕷️', egg='Spideron Egg', rarity='Legendary', biome='Titan Temple', category='Regular', income=None),
    Pet(id='crustacia', name='Crustacia', emoji='🦀', egg='Crustacia Egg', rarity='Legendary', biome='Titan Temple', category='Regular', income=None),
    Pet(id='bladehide', name='Bladehide', emoji='🦏', egg='Bladehide Egg', rarity='Mythic', biome='Titan Temple', category='Regular', income=None),
    Pet(id='mantaris', name='Mantaris', emoji='🦗', egg='Mantaris Egg', rarity='Cosmic', biome='Titan Temple', category='Regular', income=None),
    Pet(id='rhinotaur', name='Rhinotaur', emoji='🦏', egg='Rhinotaur Egg', rarity='Cosmic', biome='Titan Temple', category='Regular', income=None),
    Pet(id='mutant-shark', name='Mutant Shark', emoji='☣️🦈', egg='Mutant Shark Egg', rarity='Secret', biome='Titan Temple', category='Regular', income=None),
    Pet(id='gorilla-king', name='Gorilla King', emoji='👑🦍', egg='Gorilla King Egg', rarity='Eternal', biome='Titan Temple', category='Regular', income=None),
    Pet(id='nightflame', name='Nightflame', emoji='🌑🔥', egg='Nightflame Egg', rarity='Divine', biome='Titan Temple', category='Regular', income=None),
    Pet(id='rift-eye', name='Rift Eye', emoji='👁️', egg='Rift Eye Egg', rarity='Legendary', biome='Rift', category='Rift', income=None),
    Pet(id='void-angler', name='Void Angler', emoji='🎣🐟', egg='Void Angler Egg', rarity='Legendary', biome='Rift', category='Rift', income=None),
    Pet(id='voidmaw', name='Voidmaw', emoji='🕳️', egg='Voidmaw Egg', rarity='Mythic', biome='Rift', category='Rift', income=None),
    Pet(id='riftwing', name='Riftwing', emoji='⚡🪽', egg='Riftwing Egg', rarity='Mythic', biome='Rift', category='Rift', income=None),
    Pet(id='shardling', name='Shardling', emoji='💎', egg='Shardling Egg', rarity='Mythic', biome='Rift', category='Rift', income=None),
    Pet(id='ventinal', name='Ventinal', emoji='🌪️', egg='Ventinal Egg', rarity='Cosmic', biome='Rift', category='Rift', income=None),
    Pet(id='dreadclaw', name='Dreadclaw', emoji='🦞', egg='Dreadclaw Egg', rarity='Cosmic', biome='Rift', category='Rift', income=None),
    Pet(id='shattered-ram', name='Shattered Ram', emoji='💥🐏', egg='Shattered Ram Egg', rarity='Cosmic', biome='Rift', category='Rift', income=None),
    Pet(id='abyss-overlord', name='Abyss Overlord', emoji='👑👹', egg='Abyss Overlord Egg', rarity='Secret', biome='Rift', category='Rift', income=None),
    Pet(id='wendigo', name='Wendigo', emoji='🦌', egg='Wendigo Egg', rarity='Secret', biome='Rift', category='Rift', income=None),
    Pet(id='mawbreaker', name='Mawbreaker', emoji='🦷', egg='Mawbreaker Egg', rarity='Secret', biome='Rift', category='Rift', income=None),
    Pet(id='shardwing', name='Shardwing', emoji='💎🪽', egg='Shardwing Egg', rarity='Secret', biome='Rift', category='Rift', income=None),
    Pet(id='void-dragon', name='Void Dragon', emoji='🕳️🐉', egg='Void Dragon Egg', rarity='Eternal', biome='Rift', category='Rift', income=None),
    Pet(id='world-eater', name='World Eater', emoji='🌍🐉', egg='World Eater Egg', rarity='Eternal', biome='Rift', category='Rift', income=None),
    Pet(id='shattered-drake', name='Shattered Drake', emoji='💥🐉', egg='Shattered Drake Egg', rarity='Eternal', biome='Rift', category='Rift', income=None),
    Pet(id='void-serpent', name='Void Serpent', emoji='🕳️🐍', egg='Void Serpent Egg', rarity='Eternal', biome='Rift', category='Rift', income=None),
    Pet(id='shattered-colossus', name='Shattered Colossus', emoji='💥🗿', egg='Shattered Colossus Egg', rarity='Divine', biome='Rift', category='Rift', income=None),
    Pet(id='tung-tung-sahur', name='Tung Tung Sahur', emoji='🥁', egg=None, rarity='Unknown', biome='Special', category='Special', income=None),
    Pet(id='bananita-dolphinita', name='Bananita Dolphinita', emoji='🍌🐬', egg=None, rarity='Unknown', biome='Special', category='Special', income=None),
    Pet(id='belula-beluga', name='Belula Beluga', emoji='🐳', egg=None, rarity='Unknown', biome='Special', category='Special', income=None),
    Pet(id='strawberry-elephant', name='Strawberry Elephant', emoji='🍓🐘', egg=None, rarity='Unknown', biome='Special', category='Special', income=None),
    Pet(id='mangolini-parrochini', name='Mangolini Parrochini', emoji='🥭🦜', egg=None, rarity='Unknown', biome='Special', category='Special', income=None),
    Pet(id='bomboclat-crocolat', name='Bomboclat Crocolat', emoji='💣🐊', egg=None, rarity='Unknown', biome='Special', category='Special', income=None),
    Pet(id='scorpio', name='Scorpio', emoji='🦂', egg='Monster Egg', rarity='Unknown', biome='Titan Temple', category='Monster', income=None),
    Pet(id='froggo', name='Froggo', emoji='🐸', egg='Monster Egg', rarity='Unknown', biome='Titan Temple', category='Monster', income=None),
    Pet(id='crawler', name='Crawler', emoji='🐛', egg='Monster Egg', rarity='Unknown', biome='Titan Temple', category='Monster', income=None),
    Pet(id='crocodon', name='Crocodon', emoji='🐊', egg='Monster Egg', rarity='Unknown', biome='Titan Temple', category='Monster', income=None),
    Pet(id='drilla', name='Drilla', emoji='🦔', egg='Monster Egg', rarity='Unknown', biome='Titan Temple', category='Monster', income=None),
    Pet(id='krakenoid', name='Krakenoid', emoji='🐙', egg='Monster Egg', rarity='Unknown', biome='Titan Temple', category='Monster', income=None),
    Pet(id='dreadscale', name='Dreadscale', emoji='🐲', egg='Monster Egg', rarity='Unknown', biome='Titan Temple', category='Monster', income=None),
    Pet(id='mecha-scorpio', name='Mecha Scorpio', emoji='🤖🦂', egg=None, rarity='Unknown', biome='Titan Temple', category='Mecha', income=None),
    Pet(id='mecha-froggo', name='Mecha Froggo', emoji='🤖🐸', egg=None, rarity='Unknown', biome='Titan Temple', category='Mecha', income=None),
    Pet(id='mecha-crawler', name='Mecha Crawler', emoji='🤖🐛', egg=None, rarity='Unknown', biome='Titan Temple', category='Mecha', income=None),
    Pet(id='mecha-crocodon', name='Mecha Crocodon', emoji='🤖🐊', egg=None, rarity='Unknown', biome='Titan Temple', category='Mecha', income=None),
    Pet(id='mecha-krakenoid', name='Mecha Krakenoid', emoji='🤖🐙', egg=None, rarity='Unknown', biome='Titan Temple', category='Mecha', income=None),
    Pet(id='mecha-dreadscale', name='Mecha Dreadscale', emoji='🤖🐲', egg=None, rarity='Unknown', biome='Titan Temple', category='Mecha', income=None),
]

RARITIES = [
    "Unknown", "Common", "Uncommon", "Rare", "Epic", "Legendary",
    "Mythic", "Cosmic", "Secret", "Eternal", "Divine"
]

RARITY_ORDER = {name: index for index, name in enumerate(RARITIES)}
RARITY_COLORS = {
    "Unknown": "#64748B", "Common": "#AAB0C0", "Uncommon": "#4ADE80",
    "Rare": "#38BDF8", "Epic": "#C084FC", "Legendary": "#FB923C",
    "Mythic": "#F43F8D", "Cosmic": "#22D3EE", "Secret": "#FACC15",
    "Eternal": "#FF4FD8", "Divine": "#FFF4A3"
}


def find_pet(pet_id: str) -> Optional[Pet]:
    return next((pet for pet in PETS if pet.id == pet_id), None)


def search_pets(text: str = "", biome: str = "All", rarity: str = "All", category: str = "All") -> list[Pet]:
    query = text.strip().lower()
    result = []
    for pet in PETS:
        searchable = " ".join(filter(None, [pet.name, pet.egg, pet.rarity, pet.biome, pet.category])).lower()
        if query and query not in searchable:
            continue
        if biome != "All" and pet.biome != biome:
            continue
        if rarity != "All" and pet.rarity != rarity:
            continue
        if category != "All" and pet.category != category:
            continue
        result.append(pet)
    return sorted(result, key=lambda pet: (-RARITY_ORDER.get(pet.rarity, 0), pet.name))


def default_collection() -> dict:
    return {"owned": {}, "favorites": [], "notes": {}}


def load_collection() -> dict:
    if not DATA_FILE.exists():
        return default_collection()
    try:
        loaded = json.loads(DATA_FILE.read_text(encoding="utf-8"))
        return {**default_collection(), **loaded}
    except (OSError, json.JSONDecodeError):
        return default_collection()


def save_collection(collection: dict) -> None:
    DATA_FILE.write_text(json.dumps(collection, indent=2, ensure_ascii=False), encoding="utf-8")


def add_pet(collection: dict, pet_id: str, amount: int = 1) -> None:
    if find_pet(pet_id) is None:
        raise ValueError(f"Unknown pet ID: {pet_id}")
    collection["owned"][pet_id] = max(0, int(collection["owned"].get(pet_id, 0)) + amount)
    if collection["owned"][pet_id] == 0:
        collection["owned"].pop(pet_id, None)
    save_collection(collection)


def toggle_favorite(collection: dict, pet_id: str) -> None:
    favorites = collection["favorites"]
    if pet_id in favorites:
        favorites.remove(pet_id)
    else:
        favorites.append(pet_id)
    save_collection(collection)


def total_progress(collection: dict) -> dict:
    collected = sum(1 for pet in PETS if collection["owned"].get(pet.id, 0) > 0)
    return {"collected": collected, "total": len(PETS), "percentage": round(collected / len(PETS) * 100) if PETS else 0}


def biome_progress(collection: dict, biome: str) -> dict:
    items = [pet for pet in PETS if pet.biome == biome]
    collected = sum(1 for pet in items if collection["owned"].get(pet.id, 0) > 0)
    return {"biome": biome, "collected": collected, "total": len(items), "percentage": round(collected / len(items) * 100) if items else 0}


def collection_income(collection: dict) -> dict:
    per_second = 0
    unknown_count = 0
    for pet in PETS:
        amount = int(collection["owned"].get(pet.id, 0))
        if amount <= 0:
            continue
        if pet.income is None:
            unknown_count += amount
        else:
            per_second += pet.income * amount
    return {
        "per_second": per_second,
        "per_minute": per_second * 60,
        "per_hour": per_second * 3600,
        "per_day": per_second * 86400,
        "unknown_pet_count": unknown_count,
        "complete": unknown_count == 0,
    }


def export_pets(path: str = "eggdex_pets.json") -> None:
    Path(path).write_text(
        json.dumps([asdict(pet) for pet in PETS], indent=2, ensure_ascii=False),
        encoding="utf-8",
    )


def print_summary() -> None:
    categories = {}
    for pet in PETS:
        categories[pet.category] = categories.get(pet.category, 0) + 1
    print("EggDex by JM Code Studio")
    print(f"Pets insgesamt: {len(PETS)}")
    print("Emojis enthalten: Ja")
    for category, count in sorted(categories.items()):
        print(f"{category}: {count}")


if __name__ == "__main__":
    collection = load_collection()
    print_summary()
    print("Fortschritt:", total_progress(collection))
    print("Einkommen:", collection_income(collection))
    export_pets()
    print("Pet-Daten wurden als eggdex_pets.json exportiert.")
